'use client';

import GitHubLink from './GitHubLink';
import { track } from '../lib/analytics';

interface FeedbackPopupProps {
  courseId: string;
  courseName: string;
  onClose: () => void;
  onShowLess: () => void;
}

export default function FeedbackPopup({ courseId, courseName, onClose, onShowLess }: FeedbackPopupProps) {
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40 w-[26rem] rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 shadow-lg shadow-stone-200/50 dark:shadow-stone-950/50 animate-fade-in-up">
      <div className="p-4 md:p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-display text-sm font-semibold text-stone-900 dark:text-stone-100">
              Got feedback?
            </h4>
            <p className="text-xs text-stone-400 dark:text-stone-500 truncate">
              {courseName}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5">
            <button
              onClick={() => {
                track('feedback_popup_dismissed', { course_id: courseId, method: 'show_less' });
                onShowLess();
                onClose();
              }}
              className="px-2 py-1 rounded-lg text-[11px] text-stone-400 hover:text-stone-600 hover:bg-stone-100 dark:text-stone-500 dark:hover:text-stone-300 dark:hover:bg-stone-800 transition-colors"
            >
              Show less often
            </button>
            <button
              onClick={() => {
                track('feedback_popup_dismissed', { course_id: courseId, method: 'close' });
                onClose();
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full text-stone-400 hover:text-stone-600 hover:bg-stone-100 dark:text-stone-500 dark:hover:text-stone-300 dark:hover:bg-stone-800 transition-colors"
              aria-label="Close"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3">
          Has anything changed? Got a summary, tips, or resources to share? Your contributions help
          every student who visits this page.
        </p>

        {/* Upload + Contact side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5">
          {/* Upload form */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKnx3ui5cBtDMMaRwIOqqWjb6Uo2sphlsb-x_zv5dT6VRw7A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg bg-vu-blue/10 dark:bg-vu-blue/15 p-2.5 hover:bg-vu-blue/15 dark:hover:bg-vu-blue/20 transition-colors"
          >
            <svg className="w-3.5 h-3.5 text-vu-blue dark:text-vu-blue-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
            <div>
              <p className="text-[11px] font-medium text-vu-blue dark:text-vu-blue-light uppercase tracking-wider">
                Submit materials
              </p>
              <p className="text-[10px] text-stone-500 dark:text-stone-400">
                Upload summaries, notes &amp; more
              </p>
            </div>
          </a>

          {/* Contact */}
          <div className="rounded-lg bg-stone-50 dark:bg-stone-800/50 p-2.5">
            <p className="text-[11px] font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
              Or get in touch
            </p>
            <p className="text-xs text-stone-600 dark:text-stone-300">
              <a href="mailto:vu.caboose383@passinbox.com" className="text-vu-blue dark:text-vu-blue-light hover:underline">
                Email us
              </a>
              {' '}
              <span className="text-stone-500 dark:text-stone-400">for quick changes, questions, or anything that isn't a large file.</span>
            </p>
          </div>
        </div>

        {/* GitHub explainer */}
        <p className="text-[10px] text-stone-400 dark:text-stone-500 leading-relaxed">
          You can also contribute via a{' '}
          <a href="https://github.com/jasp-nerd/vu-ai-hub/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-vu-blue dark:text-vu-blue-light hover:underline">
            GitHub pull request
          </a>
          . Contributors are credited if desired. If this page helped,{' '}
          <GitHubLink location="feedback_popup" className="text-vu-blue dark:text-vu-blue-light hover:underline">
            starring the repo
          </GitHubLink>
          {' '}helps other students find the site.
        </p>
      </div>
    </div>
  );
}
