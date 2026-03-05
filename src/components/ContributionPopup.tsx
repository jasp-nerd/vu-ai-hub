export default function ContributionPopup({ courseName }: { courseName: string }) {
  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:bottom-6 md:right-6 z-40 md:w-80 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 shadow-lg shadow-stone-200/50 dark:shadow-stone-950/50 animate-fade-in-up">
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-vu-blue/10 dark:bg-vu-blue-light/10">
            <svg className="w-4 h-4 text-vu-blue dark:text-vu-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-stone-900 dark:text-stone-100">
              Help us improve this page
            </h4>
            <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">
              {courseName}
            </p>
          </div>
        </div>
        <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3">
          This course doesn't have detailed student info yet. If you've taken or are taking this
          course, your tips, summaries, or resources would help everyone.
        </p>
        <div className="rounded-lg bg-stone-50 dark:bg-stone-800/50 p-2.5 space-y-0.5 mb-2">
          <p className="text-xs text-stone-600 dark:text-stone-300">
            <span className="font-medium">Email:</span>{' '}
            <a href="mailto:j.f.l.meijerink@student.vu.nl" className="text-vu-blue dark:text-vu-blue-light hover:underline">
              j.f.l.meijerink@student.vu.nl
            </a>
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300">
            <span className="font-medium">Discord:</span> @papser
          </p>
        </div>
        <p className="text-[11px] text-stone-400 dark:text-stone-500">
          Contributors are credited if desired.
        </p>
      </div>
    </div>
  );
}
