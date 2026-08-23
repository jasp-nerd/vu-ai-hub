'use client';

import { useState } from 'react';
import { reportBrokenLink, apiEnabled } from '../lib/apiClient';
import { getTurnstileToken } from '../lib/turnstile';
import HelpfulButton from './HelpfulButton';

/**
 * Per-resource footer: a "helpful" upvote toggle and a "report broken link"
 * action. Rendered as a sibling of the resource link (not inside the anchor).
 */
export default function ResourceVote({
  resourceId,
  url,
  initialCount = 0,
  initialVoted = false,
}: {
  resourceId: string;
  url: string;
  initialCount?: number;
  initialVoted?: boolean;
}) {
  const [reportOpen, setReportOpen] = useState(false);
  const [reportNote, setReportNote] = useState('');
  const [reportState, setReportState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  if (!apiEnabled) return null;

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
      setReportState('error');
    }
  };

  return (
    <div className="flex items-center gap-3 px-5 pb-3 -mt-1">
      <HelpfulButton id={resourceId} initialCount={initialCount} initialVoted={initialVoted} />

      {!reportOpen ? (
        <button
          type="button"
          onClick={() => {
            setReportState('idle');
            setReportOpen(true);
          }}
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
          {reportState === 'error' && (
            <span role="status" className="text-xs text-red-500 dark:text-red-400">
              Couldn't send — try again
            </span>
          )}
        </span>
      )}
    </div>
  );
}
