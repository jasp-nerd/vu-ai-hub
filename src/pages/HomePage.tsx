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
          <div className="flex items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.1]">
                Your guide to the{' '}
                <span className="text-vu-blue dark:text-vu-blue-light">AI bachelor</span> at VU
                Amsterdam
              </h1>
              <p className="mt-5 text-lg text-stone-500 dark:text-stone-400 leading-relaxed max-w-xl">
                Course guides, study tips, practice quizzes, and curated resources,
                built by students, for students.
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
                  to="/guide"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-sm font-medium hover:border-stone-300 dark:hover:border-stone-600 hover:text-stone-900 dark:hover:text-stone-100 hover:-translate-y-0.5 transition-all"
                >
                  Read the guide
                </Link>
              </div>
            </div>

            {/* Karel Martens-inspired geometric artwork — desktop only */}
            <div className="hidden md:block flex-shrink-0">
              <img
                src="/assets/images/hero-artwork.png"
                alt="Geometric artwork inspired by Karel Martens"
                className="w-[320px] lg:w-[400px] h-auto dark:hidden"
              />
              <img
                src="/assets/images/hero-artwork-dark.png"
                alt="Geometric artwork inspired by Karel Martens"
                className="w-[320px] lg:w-[400px] h-auto hidden dark:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you'll find here */}
      <section className="border-t border-stone-200/60 dark:border-stone-700/40 bg-stone-50/50 dark:bg-stone-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            What you'll find here
          </h2>
          <p className="mt-2 text-stone-500 dark:text-stone-400">
            Everything you need for the AI bachelor, in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              title: 'Course Guides',
              description: 'Tips, quizzes, and resources for every course',
              path: '/courses',
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              ),
            },
            {
              title: 'Blog & Advice',
              description: 'Student life tips and study insights',
              path: '/guide/blog',
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              ),
            },
            {
              title: 'FAQ',
              description: 'Common questions answered',
              path: '/guide/faq',
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              ),
            },
            {
              title: 'Program Info',
              description: 'Curriculum overview and useful links',
              path: '/guide/program',
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              ),
            },
            {
              title: 'Amsterdam Guide',
              description: 'Living, transport, housing, and more',
              path: '/guide/amsterdam',
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              ),
            },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group flex items-start gap-3 rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-4 hover-lift hover:border-stone-300 dark:hover:border-stone-600 transition-all"
            >
              <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-vu-blue/10 dark:bg-vu-blue-light/10 text-vu-blue dark:text-vu-blue-light">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold text-stone-900 dark:text-stone-100 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* About & Contribute */}
        <div className="mt-10 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200/60 dark:border-stone-700/60 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
              About this project
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              This site was created by Jasper, an AI student at VU Amsterdam since 2024. It's a community project, completely open source and built to be shared. Feel free to use everything here, but keep in mind that course content can change from year to year, so we can't guarantee everything is still 100% accurate. Always check the{' '}
              <a href="https://studiegids.vu.nl/nl" target="_blank" rel="noopener noreferrer" className="text-vu-blue dark:text-vu-blue-light hover:underline">studiegids</a>
              {' '}or your course page on{' '}
              <a href="https://canvas.vu.nl" target="_blank" rel="noopener noreferrer" className="text-vu-blue dark:text-vu-blue-light hover:underline">Canvas</a>
              {' '}for the latest info. If the content still matches, use all the quizzes and summaries as much as you'd like! And if you spot something outdated, we'd love your help updating it.
            </p>
          </div>

          <div className="shrink-0 md:w-64">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
              <div className="rounded-lg bg-white dark:bg-stone-800/50 p-2.5">
                <p className="text-[11px] font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
                  Send us your changes
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  <a href="mailto:vu.caboose383@passinbox.com" className="text-vu-blue dark:text-vu-blue-light hover:underline">
                    Email
                  </a>
                  {' · '}
                  <span>Discord @papser</span>
                </p>
              </div>
              <a
                href="https://github.com/jasp-nerd/vu-ai-hub/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg bg-white dark:bg-stone-800/50 p-2.5 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                <p className="text-[11px] font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
                  Contribute directly
                </p>
                <p className="text-xs text-vu-blue dark:text-vu-blue-light group-hover:underline">
                  Open a pull request &rarr;
                </p>
              </a>
            </div>
            <p className="mt-2 text-[10px] text-stone-400 dark:text-stone-500 leading-relaxed">
              You'll also find contribution prompts on individual course pages.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Course overview */}
      <section className="border-t border-stone-200/60 dark:border-stone-700/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
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
        </div>
      </section>
    </div>
  );
}
