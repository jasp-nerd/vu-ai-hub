'use client';

import { useState } from 'react';
import { uploadMaterial } from '../lib/apiClient';
import { getTurnstileToken } from '../lib/turnstile';

const MAX_BYTES = 25 * 1024 * 1024;
const TYPES = ['pdf', 'summary', 'article', 'tool', 'external-quiz', 'video'] as const;
// Suggested categories map to folders in the vu-ai-resources repo.
const CATEGORIES = [
  'summaries',
  'mock-exams',
  'formula-sheets',
  'crash-courses',
  'notes',
  'cheat-sheets',
  'other',
];

/**
 * On-page material uploader (replaces the off-site Google Form). Posts to the
 * backend moderation queue; the owner approves via Discord, after which the file
 * is published to GitHub Pages and appears on the course page.
 */
export default function MaterialUploadForm({
  courseId,
  courseName,
  onClose,
}: {
  courseId: string;
  courseName: string;
  onClose: () => void;
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<(typeof TYPES)[number]>('pdf');
  const [category, setCategory] = useState('summaries');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (status === 'sending') return;
    if (title.trim().length < 3) return setError('Please add a title.');
    if (!file) return setError('Please choose a file.');
    if (file.size > MAX_BYTES) return setError('File is too large (max 25 MB).');

    setStatus('sending');
    setError(null);
    try {
      const token = await getTurnstileToken();
      const form = new FormData();
      form.append('title', title.trim());
      form.append('description', description.trim());
      form.append('type', type);
      form.append('category', category);
      if (author.trim()) form.append('author', author.trim());
      if (token) form.append('turnstileToken', token);
      form.append('file', file);
      await uploadMaterial(courseId, form);
      setStatus('done');
    } catch (e) {
      setStatus('error');
      setError(e instanceof Error ? e.message : 'Upload failed. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-700/60 shadow-xl p-6 max-h-[90vh] overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100">
            Upload material
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-stone-400 dark:text-stone-500 mb-4">
          for <span className="font-medium text-stone-600 dark:text-stone-300">{courseName}</span>.
          Uploads are reviewed before they appear — usually within a day. No account needed.
        </p>

        {status === 'done' ? (
          <div className="py-8 text-center">
            <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">
              Thanks! Your material was submitted for review.
            </p>
            <p className="text-xs text-stone-400 dark:text-stone-500 mb-4">
              It&apos;ll appear on this page once approved.
            </p>
            <button
              onClick={onClose}
              className="rounded-lg bg-vu-blue hover:bg-vu-blue/90 text-white text-sm font-medium py-2 px-4 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, 140))}
              placeholder="Title (e.g. Lecture 1-7 summary)"
              className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-sm p-2.5 text-stone-700 dark:text-stone-300 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-vu-blue/30"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, 500))}
              placeholder="Short description (optional)"
              rows={2}
              className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-sm p-2.5 text-stone-700 dark:text-stone-300 placeholder-stone-400 resize-none focus:outline-none focus:ring-2 focus:ring-vu-blue/30"
            />
            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs text-stone-500 dark:text-stone-400">
                Type
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as (typeof TYPES)[number])}
                  className="mt-1 w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-sm p-2.5 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-vu-blue/30"
                >
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-xs text-stone-500 dark:text-stone-400">
                Category
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-sm p-2.5 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-vu-blue/30"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value.slice(0, 60))}
              placeholder="Your name for credit (optional)"
              className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-sm p-2.5 text-stone-700 dark:text-stone-300 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-vu-blue/30"
            />
            <input
              type="file"
              accept=".pdf,.md,.txt,.docx,.png,.jpg,.jpeg,.webp"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="w-full text-sm text-stone-600 dark:text-stone-400 file:mr-3 file:rounded-lg file:border-0 file:bg-vu-blue/10 file:text-vu-blue dark:file:text-vu-blue-light file:px-3 file:py-2 file:text-sm file:font-medium hover:file:bg-vu-blue/15"
            />
            <p className="text-[10px] text-stone-400 dark:text-stone-500">
              PDF, Markdown, txt, docx, or images. Max 25 MB.
            </p>

            {error && <p className="text-xs text-red-500 dark:text-red-400">{error}</p>}

            <div className="flex justify-end gap-2 pt-1">
              <button
                onClick={onClose}
                className="rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 text-sm font-medium py-2 px-4 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="rounded-lg bg-vu-blue hover:bg-vu-blue/90 disabled:opacity-50 text-white text-sm font-medium py-2 px-4 transition-colors press-effect"
              >
                {status === 'sending' ? 'Uploading…' : 'Submit for review'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
