/**
 * Sign in with ChatGPT (SIWC) — website OAuth 2.0 + OpenID Connect helper.
 *
 * Implements the Authorization Code flow with PKCE against OpenAI's OIDC
 * provider for a *hosted* web app (HTTPS redirect URI, registered client).
 *
 * Scope note: this flow is identity-only (`openid profile email`). It does NOT
 * return an access token for model inference — "ChatGPT plan usage" (Responses
 * API) is only available to approved partners or the local/loopback open-source
 * flow, not a hosted website. See docs/openai-sign-in.md.
 *
 * The provider is config-gated: nothing runs until OPENAI_OAUTH_CLIENT_ID and
 * OPENAI_OAUTH_REDIRECT_URI are set.
 */

import { jwtVerify, createRemoteJWKSet, type JWTPayload } from 'jose';

export const AUTH_COOKIE = 'vu-openai-auth';
export const SESSION_COOKIE = 'vu-openai-session';

const DEFAULT_ISSUER = 'https://auth.openai.com';
const DEFAULT_DISCOVERY_URL = `${DEFAULT_ISSUER}/.well-known/openid-configuration`;

interface OIDCConfig {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  jwks_uri: string;
}

export interface AuthTransaction {
  state: string;
  nonce: string;
  codeVerifier: string;
  redirectUri: string;
  returnTo: string;
  exp: number;
}

export interface Session {
  sub: string;
  email: string | null;
  emailVerified: boolean;
  name: string | null;
  picture: string | null;
  sid: string | null;
  iss: string;
  clientId: string;
  exp: number;
}

export function oauthConfigured(): boolean {
  return Boolean(
    process.env.OPENAI_OAUTH_CLIENT_ID && process.env.OPENAI_OAUTH_REDIRECT_URI
  );
}

function clientId(): string {
  const id = process.env.OPENAI_OAUTH_CLIENT_ID;
  if (!id) throw new Error('OPENAI_OAUTH_CLIENT_ID is not configured');
  return id;
}

function clientSecret(): string | undefined {
  return process.env.OPENAI_OAUTH_CLIENT_SECRET || undefined;
}

let cachedConfig: OIDCConfig | null = null;

export async function getOIDCConfig(): Promise<OIDCConfig> {
  if (cachedConfig) return cachedConfig;
  const url =
    process.env.OPENAI_OIDC_DISCOVERY_URL ?? DEFAULT_DISCOVERY_URL;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`OpenAI OIDC discovery failed (${res.status})`);
  }
  cachedConfig = (await res.json()) as OIDCConfig;
  if (!cachedConfig.issuer || !cachedConfig.authorization_endpoint || !cachedConfig.token_endpoint || !cachedConfig.jwks_uri) {
    throw new Error('OpenAI OIDC discovery document is missing required fields');
  }
  return cachedConfig;
}

// ---- Random + encoding helpers (Web Crypto, edge-safe) ----

export function randomToken(bytes = 32): string {
  const buf = new Uint8Array(bytes);
  crypto.getRandomValues(buf);
  return toBase64Url(buf);
}

function toBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(input: string): Uint8Array {
  let s = input.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const binary = atob(s);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function textEncoder(): TextEncoder {
  return new TextEncoder();
}

async function sha256(input: string): Promise<ArrayBuffer> {
  return crypto.subtle.digest('SHA-256', textEncoder().encode(input));
}

export async function codeChallengeFromVerifier(verifier: string): Promise<string> {
  return toBase64Url(new Uint8Array(await sha256(verifier)));
}

// ---- Signed cookie values (stateless, HMAC-SHA256) ----

function secretOrThrow(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error('SESSION_SECRET is not configured');
  return secret;
}

async function hmac(data: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    textEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, textEncoder().encode(data));
  return toBase64Url(new Uint8Array(sig));
}

export async function signCookieValue(payload: object): Promise<string> {
  const body = toBase64Url(textEncoder().encode(JSON.stringify(payload)));
  const signature = await hmac(body, secretOrThrow());
  return `${body}.${signature}`;
}

export async function verifyCookieValue<T>(value: string | undefined): Promise<T | null> {
  if (!value) return null;
  const dot = value.lastIndexOf('.');
  if (dot <= 0) return null;
  const body = value.slice(0, dot);
  const signature = value.slice(dot + 1);
  const expected = await hmac(body, secretOrThrow());
  if (signature.length !== expected.length) return null;
  // Constant-time comparison to avoid leaking the HMAC through timing.
  let diff = 0;
  for (let i = 0; i < signature.length; i++) {
    diff |= signature.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  if (diff !== 0) return null;
  try {
    return JSON.parse(new TextDecoder().decode(fromBase64Url(body))) as T;
  } catch {
    return null;
  }
}

// ---- Token exchange + ID token verification ----

function formEncode(value: string): string {
  return new URLSearchParams({ value }).toString().slice('value='.length);
}

export async function exchangeCode(
  code: string,
  codeVerifier: string,
  redirectUriValue: string
): Promise<{ id_token?: string }> {
  const config = await getOIDCConfig();
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUriValue,
    client_id: clientId(),
    code_verifier: codeVerifier,
  });

  const headers: Record<string, string> = {
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
  };

  const secret = clientSecret();
  if (secret) {
    const basic = btoa(`${formEncode(clientId())}:${formEncode(secret)}`);
    headers.authorization = `Basic ${basic}`;
  }

  const res = await fetch(config.token_endpoint, { method: 'POST', headers, body });
  if (!res.ok) {
    throw new Error(`OpenAI token exchange failed (${res.status})`);
  }
  return (await res.json()) as { id_token?: string };
}

export async function verifyIdToken(
  idToken: string,
  expectedNonce: string
): Promise<JWTPayload> {
  const config = await getOIDCConfig();
  const jwks = createRemoteJWKSet(new URL(config.jwks_uri));
  const { payload } = await jwtVerify(idToken, jwks, {
    issuer: config.issuer,
    audience: clientId(),
    clockTolerance: 5,
  });

  if (payload.nonce !== expectedNonce) {
    throw new Error('ID token nonce did not match');
  }
  if (typeof payload.sub !== 'string' || !payload.sub) {
    throw new Error('ID token did not contain a subject');
  }
  return payload;
}

export function sessionFromPayload(payload: JWTPayload, ttlSeconds = 7 * 24 * 3600): Session {
  const email = typeof payload.email === 'string' ? payload.email : null;
  const name = typeof payload.name === 'string' ? payload.name : null;
  const picture = typeof payload.picture === 'string' ? payload.picture : null;
  const sid = typeof payload.sid === 'string' ? payload.sid : null;
  return {
    sub: payload.sub as string,
    email,
    emailVerified: payload.email_verified === true,
    name,
    picture,
    sid,
    iss: typeof payload.iss === 'string' ? payload.iss : DEFAULT_ISSUER,
    clientId: clientId(),
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  };
}
