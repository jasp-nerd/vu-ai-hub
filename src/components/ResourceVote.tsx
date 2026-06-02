'use client';

import { useEffect, useState } from 'react';
import {
  toggleResourceVote,
  reportBrokenLink,
  apiEnabled,
} from '../lib/apiClient';
import { getTurnstileToken } from '../lib/turnstile';

/**
 * Per-resource footer: a "helpful" upvote toggle and a "report broken link"
 * action. Rendered as a sibling of the resource link (not inside the anchor).
 */
export default function ResourceVote({
  resourceId,
  url,
  initialCount = 0,
}: {
  resourceId: string;
  url: string;
  initialCount?: number;
}) {
  const [count, setCount] = useState(initialCount);
  const [voted, setVoted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportNote, setReportNote] = useState('');
  const [reportState, setReportState] = useState<'idle' | 'sending' | 'done'>('idle');

  const voteKey = `resourceVoted:${resourceId}`;
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);
  useEffect(() => {
    setVoted(localStorage.getItem(voteKey) === '1');
  }, [voteKey]);

  if (!apiEnabled) return null;

  const handleVote = async () => {
    if (busy) return;
    setBusy(true);
    // optimistic
    const optimisticVoted = !voted;
    setVoted(optimisticVoted);
    setCount((c) => c + (optimisticVoted ? 1 : -1));
    try {
      const token = await getTurnstileToken();
      const res = await toggleResourceVote(resourceId, token);
      setVoted(res.voted);
      setCount(res.count);
      localStorage.setItem(voteKey, res.voted ? '1' : '0');
    } catch {
      // revert
      setVoted(!optimisticVoted);
      setCount((c) => c + (optimisticVoted ? -1 : 1));
    } finally {
      setBusy(false);
    }
  };

  const handleReport = async () => {
    if (reportState === 'sending') return;
    setReportState('sending');
    try {
      const token = await getTurnstileToken();
      await reportBrokenLink(resourceId, url, reportNote.trim() || undefined, token);
      setReportState('done');
      setReportNote('');
      setTimeout(() => setReportOpen(false), 2000);
    } catch {
      setReportState('idle');
    }
  };

  return (
    <div className="flex items-center gap-3 px-5 pb-3 -mt-1">
      <button
        type="button"
        onClick={handleVote}
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

      {!reportOpen ? (
        <button
          type="button"
          onClick={() => setReportOpen(true)}
          className="text-xs text-stone-300 dark:text-stone-600 hover:text-red-500 dark:hover:text-red-400 transition-colors"
        >
          Report broken link
        </button>
      ) : reportState === 'done' ? (
        <span className="text-xs text-emerald-600 dark:text-emerald-400">Reported — thanks!</span>
      ) : (
        <span className="inline-flex items-center gap-2">
          <input
            type="text"
            value={reportNote}
            onChange={(e) => setReportNote(e.target.value.slice(0, 200))}
            placeholder="What's wrong? (optional)"
            className="text-xs rounded-md border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 px-2 py-1 text-stone-600 dark:text-stone-300 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-vu-blue/30"
          />
          <button
            type="button"
            onClick={handleReport}
            disabled={reportState === 'sending'}
            className="text-xs text-red-500 dark:text-red-400 hover:underline disabled:opacity-50"
          >
            {reportState === 'sending' ? 'Sending…' : 'Send'}
          </button>
          <button
            type="button"
            onClick={() => setReportOpen(false)}
            className="text-xs text-stone-400 hover:text-stone-600"
          >
            Cancel
          </button>
        </span>
      )}
    </div>
  );
}
