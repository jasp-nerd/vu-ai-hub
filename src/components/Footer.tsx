'use client';

import Link from 'next/link';
import { useInView } from '../hooks/useAnimations';
import GitHubLink from './GitHubLink';

export default function Footer() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className={`border-t border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 mt-auto ${
        inView ? 'animate-fade-in-up' : 'pre-animate'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link
              href="/"
              className="font-display font-bold text-lg tracking-tight text-stone-900 dark:text-stone-100"
            >
              AI <span className="text-vu-blue dark:text-vu-blue-light">@</span> VU
            </Link>
            <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 max-w-xs">
              A community resource for AI bachelor students at Vrije Universiteit
              Amsterdam.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
                Courses
              </h4>
              <div className="space-y-2">
                <Link
                  href="/courses"
                  className="block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  All Courses
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
                Guide
              </h4>
              <div className="space-y-2">
                <Link
                  href="/guide/academic"
                  className="block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  Academic & Career
                </Link>
                <Link
                  href="/guide/student-life"
                  className="block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  Student Life
                </Link>
                <Link
                  href="/guide/blog"
                  className="block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/guide/faq"
                  className="block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-stone-200/60 dark:border-stone-700/60 text-center">
          <p className="text-xs text-stone-400 dark:text-stone-500">
            Built by AI students, for AI students. Not affiliated with VU Amsterdam.
          </p>
          <GitHubLink
            location="footer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            Free &amp; open source &middot; Star it on GitHub
          </GitHubLink>
        </div>
      </div>
    </footer>
  );
}
