'use client';

import { useState } from 'react';
import { submitTip, apiEnabled, type BackendTip } from '../lib/apiClient';
import { getTurnstileToken } from '../lib/turnstile';

const MAX_LENGTH = 500;

export default function TipSubmitBox({
  courseId,
  onSubmitted,
}: {
  courseId: string;
  onSubmitted?: (tip: BackendTip) => void;
}) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    const content = text.trim();
    if (content.length < 8 || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const token = await getTurnstileToken();
      const res = await submitTip(courseId, content, author.trim() || undefined, token);
      setSubmitted(true);
      setText('');
      setAuthor('');
      // Auto-published tips appear immediately; held (spam-flagged) ones don't.
      if (res.tip && onSubmitted) onSubmitted(res.tip);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to submit. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!apiEnabled) return null;

  return (
    <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-6">
      <h4 className="font-display font-semibold text-stone-900 dark:text-stone-100 mb-1">
        Share a tip
      </h4>
      <p className="text-xs text-stone-400 dark:text-stone-500 mb-3">
        Got advice for students taking this course? It&apos;s posted instantly and anonymously — feel free to send as many as you like.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, MAX_LENGTH))}
        placeholder="e.g. Start the final assignment early, it takes longer than expected..."
        maxLength={MAX_LENGTH}
        rows={3}
        className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-sm text-stone-700 dark:text-stone-300 placeholder-stone-400 dark:placeholder-stone-500 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-vu-blue/30 dark:focus:ring-vu-blue-light/30 focus:border-vu-blue dark:focus:border-vu-blue-light transition-colors"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value.slice(0, 60))}
        placeholder="Your name (optional)"
        className="mt-2 w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-sm text-stone-700 dark:text-stone-300 placeholder-stone-400 dark:placeholder-stone-500 p-2.5 focus:outline-none focus:ring-2 focus:ring-vu-blue/30 dark:focus:ring-vu-blue-light/30 focus:border-vu-blue dark:focus:border-vu-blue-light transition-colors"
      />
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-stone-400 dark:text-stone-500">
          {text.length}/{MAX_LENGTH}
        </span>
        <div className="flex items-center gap-3">
          {submitted && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 animate-fade-in">
              Tip posted — thank you!
            </span>
          )}
          {error && (
            <span className="text-xs text-red-500 dark:text-red-400 animate-fade-in">{error}</span>
          )}
          <button
            onClick={handleSubmit}
            disabled={text.trim().length < 8 || submitting}
            className="rounded-lg bg-vu-blue hover:bg-vu-blue/90 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium py-2 px-4 transition-colors press-effect"
          >
            {submitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}
