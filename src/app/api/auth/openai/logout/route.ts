import { NextResponse } from 'next/server';
import { SESSION_COOKIE } from '@/lib/openai-auth';

export const runtime = 'edge';

/** Clears the first-party session cookie. */
export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, '', { maxAge: 0, path: '/' });
  return res;
}
