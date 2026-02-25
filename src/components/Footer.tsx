import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link
              to="/"
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
                  to="/courses"
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
                  to="/guide/blog"
                  className="block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/guide/faq"
                  className="block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  to="/guide/program"
                  className="block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  Program Info
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-stone-200/60 dark:border-stone-700/60 text-center">
          <p className="text-xs text-stone-400 dark:text-stone-500">
            Built by AI students, for AI students. Not affiliated with VU Amsterdam.
          </p>
        </div>
      </div>
    </footer>
  );
}
