/**
 * Fixed-window rate limiter for edge routes.
 *
 * Primary backend is Vercel KV (shared across all serverless instances).
 * When KV isn't configured (`KV_REST_API_URL` + `KV_REST_API_TOKEN`), it
 * falls back to an in-memory store that is *per-instance* — fine for local
 * development, but not a reliable production limit across instances.
 */

import { kv } from '@vercel/kv';

export interface RateLimitOptions {
  /** Max allowed requests within `windowSeconds`. */
  limit: number;
  /** Length of the fixed window in seconds. */
  windowSeconds: number;
}

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  /** Unix seconds at which the window resets. */
  resetAt: number;
  /** Seconds the client should wait before retrying. */
  retryAfter: number;
}

function kvConfigured(): boolean {
  return Boolean(
    process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
  );
}

// In-memory fallback (survives for the lifetime of a warm isolate).
const memory = new Map<string, { count: number; windowStart: number }>();
const MEMORY_MAX_ENTRIES = 10_000;

function memoryResult(
  identifier: string,
  limit: number,
  windowSeconds: number,
  now: number
): RateLimitResult {
  const windowStart = Math.floor(now / windowSeconds) * windowSeconds;
  const resetAt = windowStart + windowSeconds;
  const entry = memory.get(identifier);

  if (!entry || entry.windowStart !== windowStart) {
    if (memory.size >= MEMORY_MAX_ENTRIES) memory.clear();
    memory.set(identifier, { count: 1, windowStart });
    return { allowed: true, limit, remaining: limit - 1, resetAt, retryAfter: 0 };
  }

  entry.count += 1;
  const remaining = Math.max(0, limit - entry.count);
  return {
    allowed: entry.count <= limit,
    limit,
    remaining,
    resetAt,
    retryAfter: Math.max(0, resetAt - now),
  };
}

export async function checkRateLimit(
  identifier: string,
  { limit, windowSeconds }: RateLimitOptions
): Promise<RateLimitResult> {
  const now = Math.floor(Date.now() / 1000);

  if (kvConfigured()) {
    const windowId = Math.floor(now / windowSeconds);
    const resetAt = (windowId + 1) * windowSeconds;
    const key = `rl:chat:${identifier}:${windowId}`;
    try {
      const count = await kv.incr(key);
      // Keep the key alive only until the end of this window so the window
      // rolls forward cleanly.
      await kv.expire(key, Math.max(1, resetAt - now));
      const remaining = Math.max(0, limit - count);
      return {
        allowed: count <= limit,
        limit,
        remaining,
        resetAt,
        retryAfter: Math.max(0, resetAt - now),
      };
    } catch {
      // KV unreachable — degrade to the in-memory store rather than failing.
    }
  }

  return memoryResult(identifier, limit, windowSeconds, now);
}

/** Best-effort client IP for edge requests behind Vercel's proxy. */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  // `NextRequest` exposes `.ip` in recent Next versions; Request does not
  // type it, so cast defensively.
  const ip = (request as Request & { ip?: string }).ip;
  return ip || 'unknown';
}

/** Standard `X-RateLimit-*` + `Retry-After` headers for a limiter result. */
export function rateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': String(result.limit),
    'X-RateLimit-Remaining': String(result.remaining),
    'X-RateLimit-Reset': String(result.resetAt),
    'Retry-After': String(result.retryAfter),
  };
}
