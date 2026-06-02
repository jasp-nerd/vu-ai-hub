'use client';

import { useEffect, useState } from 'react';
import { DIFFICULTY_LABELS } from '../constants';
import {
  useCourseDifficulty,
  resolveDifficulty,
  refreshDifficultyCache,
  RATING_THRESHOLD,
} from '../lib/difficulty';
import { submitDifficulty, apiEnabled } from '../lib/apiClient';
import { getTurnstileToken } from '../lib/turnstile';

/**
 * Course-detail difficulty widget: shows the current (crowd-sourced or seed)
 * difficulty and lets the student rate it 1-5. Optimistic + persists the user's
 * own choice in localStorage so it survives reloads.
 */
export default function DifficultyVote({
  courseId,
  seed,
}: {
  courseId: string;
  seed: number;
}) {
  const agg = useCourseDifficulty(courseId);
  const display = resolveDifficulty(seed, agg);

  const [myVote, setMyVote] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');

  const storageKey = `difficultyVote:${courseId}`;
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setMyVote(Number(saved));
  }, [storageKey]);

  if (!apiEnabled) {
    // Backend not configured — show static label only (current behaviour).
    return (
      <span className="text-xs text-stone-400 dark:text-stone-500">
        {DIFFICULTY_LABELS[display.value]}
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
      refreshDifficultyCache(updated);
      localStorage.setItem(storageKey, String(rating));
      setStatus('done');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const active = hover ?? myVote ?? display.value;

  return (
    <div className="inline-flex flex-col gap-1">
      <div className="inline-flex items-center gap-2">
        <span className="text-xs text-stone-400 dark:text-stone-500">Difficulty:</span>
        <div className="flex items-center gap-1" onMouseLeave={() => setHover(null)}>
          {Array.from({ length: 5 }).map((_, i) => {
            const level = i + 1;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Rate ${DIFFICULTY_LABELS[level]}`}
                onMouseEnter={() => setHover(level)}
                onClick={() => handleVote(level)}
                disabled={status === 'saving'}
                className={`w-2 h-5 rounded-full transition-colors press-effect ${
                  i < active
                    ? 'bg-vu-blue dark:bg-vu-blue-light'
                    : 'bg-stone-150 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600'
                } ${status === 'saving' ? 'opacity-60 cursor-wait' : 'cursor-pointer'}`}
              />
            );
          })}
        </div>
        <span className="text-xs text-stone-500 dark:text-stone-400">
          {DIFFICULTY_LABELS[hover ?? display.value]}
        </span>
      </div>
      <span className="text-[10px] text-stone-400 dark:text-stone-500 h-3">
        {status === 'saving' && 'Saving…'}
        {status === 'done' && 'Thanks for rating!'}
        {status === 'error' && 'Could not save — try again.'}
        {status === 'idle' &&
          (display.crowdSourced
            ? `Average of ${display.count} student rating${display.count === 1 ? '' : 's'}${
                myVote ? ' · you rated this' : ' · tap to rate'
              }`
            : display.count > 0
              ? `${display.count}/${RATING_THRESHOLD} ratings needed for a student average · tap to rate`
              : 'No student ratings yet · tap to rate')}
      </span>
    </div>
  );
}
