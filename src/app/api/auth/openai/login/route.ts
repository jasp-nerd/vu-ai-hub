import { NextRequest, NextResponse } from 'next/server';
import {
  AUTH_COOKIE,
  codeChallengeFromVerifier,
  getOIDCConfig,
  oauthConfigured,
  randomToken,
  signCookieValue,
} from '@/lib/openai-auth';

export const runtime = 'edge';

/**
 * Starts a Sign in with ChatGPT transaction (state + nonce + PKCE verifier in
 * a short-lived signed cookie) and redirects the browser to OpenAI.
 */
export async function GET(request: NextRequest) {
  if (!oauthConfigured()) {
    return NextResponse.json(
      { error: 'OpenAI OAuth is not configured on this deployment.' },
      { status: 503 }
    );
  }

  const config = await getOIDCConfig();
  const redirectUri = process.env.OPENAI_OAUTH_REDIRECT_URI!;
  const clientId = process.env.OPENAI_OAUTH_CLIENT_ID!;

  const state = randomToken();
  const nonce = randomToken();
  const codeVerifier = randomToken(64);
  const codeChallenge = await codeChallengeFromVerifier(codeVerifier);

  // Only allow same-origin relative destinations.
  const requested = request.nextUrl.searchParams.get('returnTo') ?? '/';
  const returnTo =
    requested.startsWith('/') && !requested.startsWith('//') ? requested : '/';

  const transaction = {
    state,
    nonce,
    codeVerifier,
    redirectUri,
    returnTo,
    exp: Math.floor(Date.now() / 1000) + 10 * 60,
  };
  const signed = await signCookieValue(transaction);

  const authUrl = new URL(config.authorization_endpoint);
  authUrl.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid profile email',
    state,
    nonce,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  }).toString();

  const res = NextResponse.redirect(authUrl.toString());
  res.cookies.set(AUTH_COOKIE, signed, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/api/auth/openai',
    maxAge: 10 * 60,
  });
  return res;
}
