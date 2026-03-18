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
          You can submit materials anonymously — no account needed.
        </p>

        {/* Upload + Contact */}
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

        {/* Canvas scraper tip */}
        <div className="rounded-lg bg-amber-50/60 dark:bg-amber-900/10 border border-amber-200/40 dark:border-amber-800/20 p-2.5 mb-2.5">
          <p className="text-[10px] text-stone-500 dark:text-stone-400 leading-relaxed">
            <span className="font-medium text-stone-600 dark:text-stone-300">Tip:</span> Use the{' '}
            <a
              href="https://chromewebstore.google.com/detail/canvas-course-downloader/mmnmcnffbkcnhcjiidmdnaclpfeekiol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vu-blue dark:text-vu-blue-light hover:underline"
            >
              Canvas Course Downloader
            </a>
            {' '}extension to export your course materials from Canvas, then upload the files through the form above.
          </p>
        </div>

        {/* GitHub explainer */}
        <p className="text-[10px] text-stone-400 dark:text-stone-500 leading-relaxed">
          You can also contribute via a{' '}
          <a href="https://github.com/jasp-nerd/vu-ai-hub/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-vu-blue dark:text-vu-blue-light hover:underline">
            GitHub pull request
          </a>
          . Contributors are credited if desired.
        </p>
      </div>
    </div>
  );
}
