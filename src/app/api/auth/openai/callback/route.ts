import { NextRequest, NextResponse } from 'next/server';
import {
  AUTH_COOKIE,
  SESSION_COOKIE,
  type AuthTransaction,
  exchangeCode,
  oauthConfigured,
  sessionFromPayload,
  signCookieValue,
  verifyCookieValue,
  verifyIdToken,
} from '@/lib/openai-auth';

export const runtime = 'edge';

const SESSION_TTL_SECONDS = 7 * 24 * 3600;

function redirectHome(request: NextRequest): NextResponse {
  return NextResponse.redirect(new URL('/', request.nextUrl.origin));
}

/**
 * OAuth callback. Validates state, exchanges the code, verifies the ID token,
 * and issues our own signed session cookie.
 */
export async function GET(request: NextRequest) {
  if (!oauthConfigured()) {
    return redirectHome(request);
  }

  const signedAuth = request.cookies.get(AUTH_COOKIE)?.value;
  const transaction = await verifyCookieValue<AuthTransaction>(signedAuth);
  const now = Math.floor(Date.now() / 1000);

  const fail = (): NextResponse => {
    const res = redirectHome(request);
    // Always clear the one-time transaction cookie on any outcome.
    res.cookies.set(AUTH_COOKIE, '', { maxAge: 0, path: '/api/auth/openai' });
    return res;
  };

  if (
    !transaction ||
    transaction.exp <= now ||
    request.nextUrl.searchParams.get('state') !== transaction.state
  ) {
    return fail();
  }

  if (request.nextUrl.searchParams.has('error')) {
    return fail();
  }

  const code = request.nextUrl.searchParams.get('code');
  if (!code) {
    return fail();
  }

  try {
    const tokens = await exchangeCode(code, transaction.codeVerifier, transaction.redirectUri);
    if (typeof tokens.id_token !== 'string' || !tokens.id_token) {
      return fail();
    }
    const payload = await verifyIdToken(tokens.id_token, transaction.nonce);
    const session = sessionFromPayload(payload, SESSION_TTL_SECONDS);
    const signedSession = await signCookieValue(session);

    const returnTo = transaction.returnTo.startsWith('/')
      ? transaction.returnTo
      : '/';
    const res = NextResponse.redirect(new URL(returnTo, request.nextUrl.origin));
    res.cookies.set(SESSION_COOKIE, signedSession, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_TTL_SECONDS,
    });
    res.cookies.set(AUTH_COOKIE, '', { maxAge: 0, path: '/api/auth/openai' });
    return res;
  } catch {
    return fail();
  }
}
