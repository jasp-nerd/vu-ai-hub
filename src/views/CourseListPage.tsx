'use client';

import { useState } from 'react';
import { getCourses } from '../services/courseService';
import CourseCard from '../components/CourseCard';
import { useStagger } from '../hooks/useAnimations';

export default function CourseListPage() {
  const allCourses = getCourses();
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  const years = [...new Set(allCourses.map((c) => c.year))].sort();
  const filtered = yearFilter
    ? allCourses.filter((c) => c.year === yearFilter)
    : allCourses;

  const groupedByYear = years
    .filter((y) => !yearFilter || y === yearFilter)
    .map((year) => {
      const yearCourses = filtered.filter((c) => c.year === year);
      const sortByPeriod = (a: (typeof yearCourses)[0], b: (typeof yearCourses)[0]) => a.period - b.period;
      return {
        year,
        mandatory: yearCourses.filter((c) => !c.constrainedChoice && !c.discontinued).sort(sortByPeriod),
        constrained: yearCourses.filter((c) => c.constrainedChoice && !c.discontinued).sort(sortByPeriod),
        discontinued: yearCourses.filter((c) => c.discontinued).sort(sortByPeriod),
        courses: yearCourses,
      };
    })
    .filter((g) => g.courses.length > 0);

  const filterClass = (active: boolean) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors press-effect ${
      active
        ? 'bg-vu-blue text-white shadow-sm'
        : 'bg-stone-50 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-700'
    }`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="mb-10 animate-blur-in">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Courses
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400 max-w-lg">
          Browse all courses in the AI bachelor program. Each course has tips,
          practice quizzes, and curated resources.
        </p>
      </div>

      {/* Year filters */}
      <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up stagger-2">
        <button
          onClick={() => setYearFilter(null)}
          className={filterClass(yearFilter === null)}
        >
          All years
        </button>
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setYearFilter(y)}
            className={filterClass(yearFilter === y)}
          >
            Year {y}
          </button>
        ))}
      </div>

      {groupedByYear.map(({ year, mandatory, constrained, discontinued }) => (
        <CourseYearGroup
          key={`${year}-${yearFilter}`}
          year={year}
          mandatory={mandatory}
          constrained={constrained}
          discontinued={discontinued}
        />
      ))}
    </div>
  );
}

function CourseYearGroup({
  year,
  mandatory,
  constrained,
  discontinued,
}: {
  year: number;
  mandatory: ReturnType<typeof getCourses>;
  constrained: ReturnType<typeof getCourses>;
  discontinued: ReturnType<typeof getCourses>;
}) {
  const { ref, inView } = useStagger<HTMLDivElement>();

  const sectionHeading = (label: string, stagger: string) => (
    <h3
      className={`text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3 ${
        inView ? `animate-fade-in ${stagger}` : 'pre-animate'
      }`}
    >
      {label}
    </h3>
  );

  const courseGrid = (courses: ReturnType<typeof getCourses>, baseDelay: number) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, i) => (
        <div
          key={course.id}
          className={inView ? 'animate-fade-in-up' : 'pre-animate'}
          style={{ animationDelay: `${i * 70 + baseDelay}ms` }}
        >
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );

  return (
    <div ref={ref} className="mb-12 last:mb-0">
      <h2
        className={`text-sm font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4 ${
          inView ? 'animate-fade-in-up' : 'pre-animate'
        }`}
      >
        Year {year}
      </h2>
      {mandatory.length > 0 && (
        <div className="mb-8">
          {sectionHeading('Mandatory', 'stagger-1')}
          {courseGrid(mandatory, 100)}
        </div>
      )}
      {constrained.length > 0 && (
        <div className="mb-8">
          {sectionHeading('Constrained choice', 'stagger-2')}
          {courseGrid(constrained, 150)}
        </div>
      )}
      {discontinued.length > 0 && (
        <div className="mb-8 last:mb-0 opacity-70">
          {sectionHeading('Discontinued', 'stagger-3')}
          {courseGrid(discontinued, 200)}
        </div>
      )}
    </div>
  );
}
