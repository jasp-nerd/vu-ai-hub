import { useState, useEffect } from 'react';
import { getCourses } from '../services/courseService';
import CourseCard from '../components/CourseCard';

const specialisationLabels: Record<string, string> = {
  intelligent_systems: 'Intelligent Systems',
  socially_aware_computing: 'Socially Aware Computing',
};

export default function CourseListPage() {
  const allCourses = getCourses();
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [specialisationFilter, setSpecialisationFilter] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Courses — AI @ VU';
  }, []);

  const handleYearFilter = (year: number | null) => {
    setYearFilter(year);
    setSpecialisationFilter(null);
  };

  const years = [...new Set(allCourses.map((c) => c.year))].sort();
  let filtered = yearFilter
    ? allCourses.filter((c) => c.year === yearFilter)
    : allCourses;

  if (yearFilter === 2 && specialisationFilter) {
    filtered = filtered.filter(
      (c) => c.specialisation === specialisationFilter || !c.specialisation
    );
  }

  const groupedByYear = years
    .filter((y) => !yearFilter || y === yearFilter)
    .map((year) => {
      const yearCourses = filtered.filter((c) => c.year === year);
      const mandatory = yearCourses.filter((c) => !c.specialisation);
      const bySpecialisation = [
        ...new Set(yearCourses.filter((c) => c.specialisation).map((c) => c.specialisation!)),
      ].sort();
      return {
        year,
        mandatory,
        bySpecialisation: bySpecialisation.map((spec) => ({
          spec,
          courses: yearCourses.filter((c) => c.specialisation === spec),
        })),
        courses: yearCourses,
      };
    })
    .filter((g) => g.courses.length > 0);

  const filterClass = (active: boolean) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      active
        ? 'bg-vu-blue text-white shadow-sm'
        : 'bg-stone-50 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-700'
    }`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Courses
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400 max-w-lg">
          Browse all courses in the AI bachelor program. Each course has tips,
          practice quizzes, and curated resources.
        </p>
      </div>

      {/* Year filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => handleYearFilter(null)}
          className={filterClass(yearFilter === null)}
        >
          All years
        </button>
        {years.map((y) => (
          <button
            key={y}
            onClick={() => handleYearFilter(y)}
            className={filterClass(yearFilter === y)}
          >
            Year {y}
          </button>
        ))}
      </div>

      {/* Specialisation filter (Year 2) */}
      {yearFilter === 2 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSpecialisationFilter(null)}
            className={filterClass(specialisationFilter === null)}
          >
            All
          </button>
          {Object.entries(specialisationLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSpecialisationFilter(key)}
              className={filterClass(specialisationFilter === key)}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {groupedByYear.map(({ year, mandatory, bySpecialisation, courses }) => (
        <div key={year} className="mb-12 last:mb-0">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4">
            Year {year}
          </h2>
          {year === 2 && mandatory.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
                Mandatory
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mandatory.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}
          {year === 2 &&
            bySpecialisation.map(({ spec, courses: specCourses }) => (
              <div key={spec} className="mb-8 last:mb-0">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
                  {specialisationLabels[spec] || spec}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {specCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            ))}
          {year !== 2 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
