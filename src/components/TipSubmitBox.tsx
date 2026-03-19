'use client';

import { useState } from 'react';

const MAX_LENGTH = 500;
const WEBHOOK_URL =
  'https://discord.com/api/webhooks/1479111414948958341/R8XW7AsEVaF-L7DQTU9lzPoEufrd65uKcjJ7F4YHr-mVE2U8GjIakgi5Xfllz0HmUkRh';

export default function TipSubmitBox({ courseName }: { courseName: string }) {
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!text.trim() || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `**New tip for ${courseName}:**\n${text.trim()}`,
        }),
      });
      if (!res.ok) throw new Error('Webhook failed');
      setSubmitted(true);
      setText('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setError('Failed to submit. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-6">
      <h4 className="font-display font-semibold text-stone-900 dark:text-stone-100 mb-1">
        Share a tip
      </h4>
      <p className="text-xs text-stone-400 dark:text-stone-500 mb-3">
        Got advice for students taking this course? Submit a quick tip anonymously.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, MAX_LENGTH))}
        placeholder="e.g. Start the final assignment early, it takes longer than expected..."
        maxLength={MAX_LENGTH}
        rows={3}
        className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-sm text-stone-700 dark:text-stone-300 placeholder-stone-400 dark:placeholder-stone-500 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-vu-blue/30 dark:focus:ring-vu-blue-light/30 focus:border-vu-blue dark:focus:border-vu-blue-light transition-colors"
      />
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-stone-400 dark:text-stone-500">
          {text.length}/{MAX_LENGTH}
        </span>
        <div className="flex items-center gap-3">
          {submitted && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 animate-fade-in">
              Tip submitted — thank you!
            </span>
          )}
          {error && (
            <span className="text-xs text-red-500 dark:text-red-400 animate-fade-in">{error}</span>
          )}
          <button
            onClick={handleSubmit}
            disabled={!text.trim() || submitting}
            className="rounded-lg bg-vu-blue hover:bg-vu-blue/90 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium py-2 px-4 transition-colors press-effect"
          >
            {submitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}
