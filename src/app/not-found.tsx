import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-32 text-center">
      <p className="text-6xl font-display font-bold text-stone-200 dark:text-stone-800 mb-4">
        404
      </p>
      <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-3">
        Page not found
      </h1>
      <p className="text-stone-500 dark:text-stone-400 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-vu-blue text-white text-sm font-medium hover:-translate-y-0.5 transition-all"
        >
          Go home
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-sm font-medium hover:border-stone-300 dark:hover:border-stone-600 hover:-translate-y-0.5 transition-all"
        >
          Browse courses
        </Link>
      </div>
    </div>
  );
}
