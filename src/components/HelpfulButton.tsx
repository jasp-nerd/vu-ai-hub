'use client';

import { useEffect, useState } from 'react';
import { toggleResourceVote, apiEnabled } from '../lib/apiClient';
import { getTurnstileToken } from '../lib/turnstile';

/**
 * Reusable "Helpful" upvote toggle, keyed by an arbitrary entity id (used for
 * both resources and tips). The server (via the counts fetch, identified by the
 * client id) is the single source of truth for `voted` and the durable memory
 * across reloads — no localStorage, so there's no stale-cache desync.
 */
export default function HelpfulButton({
  id,
  initialCount = 0,
  initialVoted = false,
}: {
  id: string;
  initialCount?: number;
  initialVoted?: boolean;
}) {
  const [count, setCount] = useState(initialCount);
  const [voted, setVoted] = useState(initialVoted);
  const [busy, setBusy] = useState(false);

  // Reflect the server values whenever the counts fetch resolves.
  useEffect(() => setCount(initialCount), [initialCount]);
  useEffect(() => setVoted(initialVoted), [initialVoted]);

  if (!apiEnabled) return null;

  const handle = async () => {
    if (busy) return;
    setBusy(true);
    const optimistic = !voted;
    setVoted(optimistic);
    setCount((c) => c + (optimistic ? 1 : -1));
    try {
      const token = await getTurnstileToken();
      const res = await toggleResourceVote(id, token);
      setVoted(res.voted);
      setCount(res.count);
    } catch {
      setVoted(!optimistic);
      setCount((c) => c + (optimistic ? -1 : 1));
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handle}
      disabled={busy}
      aria-pressed={voted}
      className={`inline-flex items-center gap-1 text-xs rounded-full px-2.5 py-1 border transition-colors press-effect ${
        voted
          ? 'border-vu-blue/40 bg-vu-blue/10 text-vu-blue dark:text-vu-blue-light'
          : 'border-stone-200/70 dark:border-stone-700/70 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300'
      }`}
    >
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 4l8 8h-5v8h-6v-8H4z" />
      </svg>
      Helpful{count > 0 ? ` · ${count}` : ''}
    </button>
  );
}
