import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCoursesByYear } from '../services/courseService';
import CourseCard from '../components/CourseCard';

export default function HomePage() {
  useEffect(() => {
    document.title = 'AI @ VU — Student Resource Hub';
  }, []);

  const year1 = getCoursesByYear(1);
  const year2 = getCoursesByYear(2);
  const year3 = getCoursesByYear(3);

  const yearSections = [
    { year: 1, courses: year1 },
    { year: 2, courses: year2 },
    { year: 3, courses: year3 },
  ].filter((s) => s.courses.length > 0);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-stone-50/50 dark:from-blue-950/30 dark:via-stone-950 dark:to-stone-900/50" />
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-blue-100/30 dark:bg-blue-900/20 blur-3xl" />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full bg-stone-100/50 dark:bg-stone-800/30 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-700/60 shadow-sm mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                Community-driven resource
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.1]">
              Your guide to the{' '}
              <span className="text-vu-blue dark:text-vu-blue-light">AI bachelor</span> at VU
              Amsterdam
            </h1>
            <p className="mt-5 text-lg text-stone-500 dark:text-stone-400 leading-relaxed max-w-xl">
              Course guides, study tips, practice quizzes, and curated resources
              — built by students, for students.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-vu-blue text-white text-sm font-medium shadow-md shadow-blue-200/50 dark:shadow-blue-900/30 hover:shadow-lg hover:shadow-blue-200/60 dark:hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all"
              >
                Browse courses
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/guide/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-sm font-medium hover:border-stone-300 dark:hover:border-stone-600 hover:text-stone-900 dark:hover:text-stone-100 hover:-translate-y-0.5 transition-all"
              >
                Read the guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Course guides
            </h2>
            <p className="mt-2 text-stone-500 dark:text-stone-400">
              Tips, quizzes, and resources for every course in the program.
            </p>
          </div>
          <Link
            to="/courses"
            className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-vu-blue dark:text-vu-blue-light hover:underline"
          >
            View all
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {yearSections.map(({ year, courses }) => (
          <div key={year} className="mb-12 last:mb-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4">
              Year {year}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Guide CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200/60 dark:border-stone-700/60 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100">
              General study advice & FAQ
            </h2>
            <p className="mt-2 text-stone-500 dark:text-stone-400 max-w-md">
              Not looking for a specific course? Check out our blog posts, FAQs,
              and general program information.
            </p>
          </div>
          <Link
            to="/guide/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-sm font-medium shadow-sm hover:border-stone-300 dark:hover:border-stone-600 hover:shadow hover:-translate-y-0.5 transition-all shrink-0"
          >
            Explore the guide
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
