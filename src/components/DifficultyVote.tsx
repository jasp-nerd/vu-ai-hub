'use client';

import { useState } from 'react';
import { DIFFICULTY_LABELS } from '../constants';
import {
  useCourseDifficulty,
  resolveDifficulty,
  refreshDifficultyCache,
} from '../lib/difficulty';
import { submitDifficulty, apiEnabled, type DifficultyAgg } from '../lib/apiClient';
import { getTurnstileToken } from '../lib/turnstile';
import { track } from '../lib/analytics';

const STAR_PATH =
  'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z';

/**
 * Course-detail difficulty widget: a familiar 5-star rating. Stars are blank
 * (outline) by default and fill blue up to the current value / hovered star, so
 * it's obviously something you can rate. Optimistic + persists the user's own
 * choice; updates its count immediately from the save response.
 */
export default function DifficultyVote({
  courseId,
  seed,
}: {
  courseId: string;
  seed: number;
}) {
  const hookAgg = useCourseDifficulty(courseId);
  const [liveAgg, setLiveAgg] = useState<DifficultyAgg | undefined>(undefined);
  const agg = liveAgg ?? hookAgg;
  const display = resolveDifficulty(seed, agg);

  // The server reports this client's own rating (myRating) — the source of
  // truth, not localStorage. Sync from the loaded aggregate via the
  // "adjust state during render" pattern (no effect → no cascading-render lint
  // issue). Clicks set myVote optimistically below.
  const serverRating = hookAgg?.myRating ?? null;
  const [myVote, setMyVote] = useState<number | null>(serverRating);
  const [syncedRating, setSyncedRating] = useState<number | null>(serverRating);
  const [hover, setHover] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');

  if (serverRating !== syncedRating) {
    setSyncedRating(serverRating);
    setMyVote(serverRating);
  }

  if (!apiEnabled) {
    return (
      <span className="text-xs text-stone-400 dark:text-stone-500">
        Difficulty: {DIFFICULTY_LABELS[display.value]}
      </span>
    );
  }

  const handleVote = async (rating: number) => {
    if (status === 'saving') return;
    setStatus('saving');
    setMyVote(rating);
    try {
      const token = await getTurnstileToken();
      const updated = await submitDifficulty(courseId, rating, token);
      setLiveAgg(updated);
      refreshDifficultyCache(updated);
      track('difficulty_rated', { course_id: courseId, rating });
      setStatus('done');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  // What the stars currently show: hovered > your vote > resolved difficulty.
  const active = hover ?? myVote ?? display.value;
  const labelValue = hover ?? display.value;

  const caption =
    status === 'saving'
      ? 'Saving…'
      : status === 'done'
        ? 'Thanks for rating!'
        : status === 'error'
          ? 'Could not save — try again.'
          : display.crowdSourced
            ? `Average of ${display.count} student rating${display.count === 1 ? '' : 's'}${myVote ? ' · you rated this' : ''}`
            : myVote
              ? 'Thanks — your rating is in'
              : 'Tap a star to rate this course';

  return (
    <div className="inline-flex flex-col gap-1">
      <div className="inline-flex items-center gap-2.5">
        <span className="text-xs font-medium text-stone-400 dark:text-stone-500">Difficulty</span>
        <div className="flex items-center gap-0.5" onMouseLeave={() => setHover(null)}>
          {Array.from({ length: 5 }).map((_, i) => {
            const level = i + 1;
            const filled = i < active;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Rate ${DIFFICULTY_LABELS[level]}`}
                onMouseEnter={() => setHover(level)}
                onClick={() => handleVote(level)}
                disabled={status === 'saving'}
                className={`p-0.5 rounded-md transition-transform ${
                  status === 'saving' ? 'opacity-60 cursor-wait' : 'cursor-pointer hover:scale-110'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`w-5 h-5 transition-colors ${
                    filled
                      ? 'text-vu-blue dark:text-vu-blue-light'
                      : 'text-stone-300 dark:text-stone-600'
                  }`}
                  fill={filled ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth={filled ? 0 : 1.5}
                  aria-hidden="true"
                >
                  <path strokeLinejoin="round" d={STAR_PATH} />
                </svg>
              </button>
            );
          })}
        </div>
        <span className="text-sm text-stone-500 dark:text-stone-400 min-w-[5.5rem]">
          {labelValue > 0 ? DIFFICULTY_LABELS[labelValue] : 'Not rated yet'}
        </span>
      </div>
      <span className="text-[11px] text-stone-400 dark:text-stone-500 h-3.5">{caption}</span>
    </div>
  );
}
