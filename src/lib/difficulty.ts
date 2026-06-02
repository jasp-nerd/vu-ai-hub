'use client';

import { useEffect, useState } from 'react';
import { fetchAllDifficulty, type DifficultyAgg } from './apiClient';

/**
 * Minimum number of student ratings before crowd-sourced difficulty replaces the
 * hand-set seed value from courses.ts. Below this, the widget shows the hand-set
 * value plus an "N/THRESHOLD ratings needed" hint. Lower it if you want student
 * ratings to take over sooner.
 */
export const RATING_THRESHOLD = 5;

export interface DifficultyDisplay {
  /** 0-5 bars to fill (rounded average, or the hand-set seed when below threshold). */
  value: number;
  /** Number of student ratings backing the value (0 when using the seed). */
  count: number;
  /** True when `value` comes from student ratings rather than the hand-set seed. */
  crowdSourced: boolean;
}

/**
 * Decide what difficulty to show: the crowd-sourced average once enough students
 * have rated, otherwise the hand-set seed value (so the site looks identical
 * before any votes arrive and degrades gracefully if the backend is down).
 */
export function resolveDifficulty(
  seed: number,
  agg: DifficultyAgg | undefined
): DifficultyDisplay {
  if (agg && agg.count >= RATING_THRESHOLD) {
    return { value: Math.round(agg.avg), count: agg.count, crowdSourced: true };
  }
  return { value: seed, count: agg?.count ?? 0, crowdSourced: false };
}

// --- Shared singleton fetch so dozens of cards trigger a single request ---
let cache: Record<string, DifficultyAgg> | null = null;
let inflight: Promise<Record<string, DifficultyAgg>> | null = null;

function loadAll(): Promise<Record<string, DifficultyAgg>> {
  if (cache) return Promise.resolve(cache);
  if (inflight) return inflight;
  inflight = fetchAllDifficulty().then((data) => {
    cache = data;
    inflight = null;
    return data;
  });
  return inflight;
}

/** Invalidate the shared cache (call after a successful vote). */
export function refreshDifficultyCache(updated?: DifficultyAgg) {
  if (updated && cache) cache[updated.courseId] = updated;
  else cache = null;
}

/** Hook returning the aggregate map for all courses (loaded once, shared). */
export function useAllDifficulty(): Record<string, DifficultyAgg> {
  const [map, setMap] = useState<Record<string, DifficultyAgg>>(cache ?? {});
  useEffect(() => {
    let active = true;
    loadAll().then((data) => {
      if (active) setMap({ ...data });
    });
    return () => {
      active = false;
    };
  }, []);
  return map;
}

/** Hook for a single course's aggregate. */
export function useCourseDifficulty(courseId: string): DifficultyAgg | undefined {
  const map = useAllDifficulty();
  return map[courseId];
}
