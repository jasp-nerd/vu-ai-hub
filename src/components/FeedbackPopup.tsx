interface FeedbackPopupProps {
  courseName: string;
  onClose: () => void;
  onShowLess: () => void;
}

export default function FeedbackPopup({ courseName, onClose, onShowLess }: FeedbackPopupProps) {
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40 w-80 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 shadow-lg shadow-stone-200/50 dark:shadow-stone-950/50 animate-fade-in-up">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <div className="shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
              <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-stone-900 dark:text-stone-100">
                Got feedback?
              </h4>
              <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">
                {courseName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3">
          Has anything changed? Got a summary, tips, or resources to share? Your contributions help
          every student who visits this page.
        </p>
        <div className="rounded-lg bg-stone-50 dark:bg-stone-800/50 p-2.5 space-y-0.5 mb-3">
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
        <button
          onClick={() => {
            onShowLess();
            onClose();
          }}
          className="text-[11px] text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        >
          Show me this less often
        </button>
      </div>
    </div>
  );
}
