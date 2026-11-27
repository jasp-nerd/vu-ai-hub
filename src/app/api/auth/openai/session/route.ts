import { NextRequest, NextResponse } from 'next/server';
import {
  SESSION_COOKIE,
  type Session,
  verifyCookieValue,
} from '@/lib/openai-auth';

export const runtime = 'edge';

/** Returns the current sign-in state for the UI (no secrets exposed). */
export async function GET(request: NextRequest) {
  const signed = request.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifyCookieValue<Session>(signed);

  if (!session || session.exp <= Math.floor(Date.now() / 1000)) {
    return NextResponse.json({ signedIn: false });
  }

  return NextResponse.json({
    signedIn: true,
    name: session.name,
    email: session.email,
    picture: session.picture,
  });
}
