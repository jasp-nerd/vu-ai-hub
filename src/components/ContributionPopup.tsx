import { useState } from 'react';

export default function ContributionPopup({ courseName }: { courseName: string }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:bottom-6 md:right-6 z-40 md:w-[26rem] rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 shadow-lg shadow-stone-200/50 dark:shadow-stone-950/50 animate-fade-in-up">
      <div className="p-4 md:p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-vu-blue/10 dark:bg-vu-blue-light/10">
            <svg className="w-4 h-4 text-vu-blue dark:text-vu-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-display text-sm font-semibold text-stone-900 dark:text-stone-100">
              Help us improve this page
            </h4>
            <p className="text-xs text-stone-400 dark:text-stone-500 truncate">
              {courseName}
            </p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full text-stone-400 hover:text-stone-600 hover:bg-stone-100 dark:text-stone-500 dark:hover:text-stone-300 dark:hover:bg-stone-800 transition-colors"
            aria-label="Dismiss"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3">
          This course doesn't have detailed student info yet. Your tips, summaries, or resources would help everyone.
        </p>

        {/* Contact + GitHub side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5">
          {/* Contact */}
          <div className="rounded-lg bg-stone-50 dark:bg-stone-800/50 p-2.5">
            <p className="text-[11px] font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
              Get in touch
            </p>
            <p className="text-xs text-stone-600 dark:text-stone-300">
              <a href="mailto:j.f.l.meijerink@student.vu.nl" className="text-vu-blue dark:text-vu-blue-light hover:underline">
                Email us
              </a>
              {' · '}
              <span>Discord @papser</span>
            </p>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/jasp-nerd/vu-ai-hub/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg bg-stone-50 dark:bg-stone-800/50 p-2.5 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <p className="text-[11px] font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
              Contribute directly
            </p>
            <p className="text-xs text-vu-blue dark:text-vu-blue-light group-hover:underline">
              Open a pull request &rarr;
            </p>
          </a>
        </div>

        {/* GitHub explainer */}
        <p className="text-[10px] text-stone-400 dark:text-stone-500 leading-relaxed">
          You can also contribute by making changes yourself via a GitHub pull request — a great way to learn how GitHub works!
          Search for tutorials online or use AI tools to help you navigate the process. Contributors are credited if desired.
        </p>
      </div>
    </div>
  );
}
