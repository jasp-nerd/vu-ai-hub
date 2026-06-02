/**
 * Typed client for the VU AI backend (api.jaspnerd.dev).
 *
 * Design rule: the backend is an *overlay*. Every read falls back to a safe
 * empty value if the backend is unset or unreachable, so the site keeps working
 * from its static data when the backend is down. Writes surface errors to the UI.
 */

const BASE = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? '';

/** True when a backend URL is configured at build time. */
export const apiEnabled = BASE.length > 0;

async function getJson<T>(path: string, fallback: T): Promise<T> {
  if (!apiEnabled) return fallback;
  try {
    const res = await fetch(`${BASE}${path}`, { headers: { Accept: 'application/json' } });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

async function postJson<T>(path: string, body: unknown): Promise<T> {
  if (!apiEnabled) throw new Error('Backend not configured');
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    throw new Error((data.error as string) || `Request failed (${res.status})`);
  }
  return data as T;
}

// ---- Types ----
export interface DifficultyAgg {
  courseId: string;
  avg: number;
  count: number;
}
export interface BackendTip {
  id: string;
  content: string;
  author: string | null;
  createdAt: string;
}
export interface BackendResource {
  id: string;
  courseId: string;
  title: string;
  description: string;
  url: string;
  type: string;
  tags: string[];
  author: string | null;
  source: string;
  createdAt: string;
}
export interface VoteCount {
  resourceId: string;
  count: number;
}

// ---- Difficulty ----
export async function fetchAllDifficulty(): Promise<Record<string, DifficultyAgg>> {
  const data = await getJson<{ ratings: DifficultyAgg[] }>('/courses/difficulty', { ratings: [] });
  const map: Record<string, DifficultyAgg> = {};
  for (const r of data.ratings) map[r.courseId] = r;
  return map;
}

export async function submitDifficulty(
  courseId: string,
  rating: number,
  turnstileToken?: string
): Promise<DifficultyAgg> {
  return postJson<DifficultyAgg>(`/courses/${courseId}/difficulty`, { rating, turnstileToken });
}

// ---- Tips ----
export async function fetchTips(courseId: string): Promise<BackendTip[]> {
  const data = await getJson<{ tips: BackendTip[] }>(`/courses/${courseId}/tips`, { tips: [] });
  return data.tips;
}

export async function submitTip(
  courseId: string,
  content: string,
  author: string | undefined,
  turnstileToken?: string
): Promise<{ ok: boolean; tip: BackendTip | null; held?: boolean }> {
  return postJson(`/courses/${courseId}/tips`, { content, author, turnstileToken });
}

// ---- Resources ----
export async function fetchBackendResources(courseId: string): Promise<BackendResource[]> {
  const data = await getJson<{ resources: BackendResource[] }>(`/resources/${courseId}`, {
    resources: [],
  });
  return data.resources;
}

export async function uploadMaterial(courseId: string, form: FormData): Promise<void> {
  if (!apiEnabled) throw new Error('Backend not configured');
  const res = await fetch(`${BASE}/resources/${courseId}/upload`, { method: 'POST', body: form });
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) throw new Error((data.error as string) || `Upload failed (${res.status})`);
}

// ---- Resource votes ----
export async function fetchVoteCounts(ids: string[]): Promise<Record<string, number>> {
  if (ids.length === 0) return {};
  const data = await getJson<{ votes: VoteCount[] }>(
    `/resources/votes/counts?ids=${encodeURIComponent(ids.join(','))}`,
    { votes: [] }
  );
  const map: Record<string, number> = {};
  for (const v of data.votes) map[v.resourceId] = v.count;
  return map;
}

export async function toggleResourceVote(
  resourceId: string,
  turnstileToken?: string
): Promise<{ voted: boolean; count: number }> {
  return postJson(`/resources/${resourceId}/vote`, { turnstileToken });
}

// ---- Broken-link reports ----
export async function reportBrokenLink(
  resourceId: string,
  reportedUrl: string,
  note: string | undefined,
  turnstileToken?: string
): Promise<void> {
  await postJson(`/resources/${resourceId}/report-broken`, { reportedUrl, note, turnstileToken });
}
