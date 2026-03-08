import { useState, useEffect } from 'react';
import { getCourses } from '../services/courseService';
import CourseCard from '../components/CourseCard';
import { useMountAnimation, useStagger } from '../hooks/useAnimations';

const specialisationLabels: Record<string, string> = {
  intelligent_systems: 'Intelligent Systems',
  socially_aware_computing: 'Socially Aware Computing',
};

function hasSpecialisation(course: { specialisation?: string | string[] }, spec: string): boolean {
  if (!course.specialisation) return false;
  if (Array.isArray(course.specialisation)) return course.specialisation.includes(spec);
  return course.specialisation === spec;
}

function hasAnySpecialisation(course: { specialisation?: string | string[] }): boolean {
  if (!course.specialisation) return false;
  if (Array.isArray(course.specialisation)) return course.specialisation.length > 0;
  return true;
}

export default function CourseListPage() {
  const allCourses = getCourses();
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [specialisationFilter, setSpecialisationFilter] = useState<string | null>(null);
  const mounted = useMountAnimation(50);

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

  if ((yearFilter === 2 || yearFilter === 3) && specialisationFilter) {
    filtered = filtered.filter(
      (c) => hasSpecialisation(c, specialisationFilter) || !hasAnySpecialisation(c)
    );
  }

  const groupedByYear = years
    .filter((y) => !yearFilter || y === yearFilter)
    .map((year) => {
      const yearCourses = filtered.filter((c) => c.year === year);
      const mandatory = yearCourses.filter((c) => !hasAnySpecialisation(c));
      const allSpecs = new Set<string>();
      yearCourses.forEach((c) => {
        if (Array.isArray(c.specialisation)) {
          c.specialisation.forEach((s) => allSpecs.add(s));
        } else if (c.specialisation) {
          allSpecs.add(c.specialisation);
        }
      });
      const bySpecialisation = [...allSpecs].sort();
      const sortByPeriod = (a: (typeof yearCourses)[0], b: (typeof yearCourses)[0]) => a.period - b.period;
      return {
        year,
        mandatory: mandatory.sort(sortByPeriod),
        bySpecialisation: bySpecialisation.map((spec) => ({
          spec,
          courses: yearCourses.filter((c) => hasSpecialisation(c, spec)).sort(sortByPeriod),
        })),
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
      <div className={`mb-10 ${mounted ? 'animate-blur-in' : 'pre-animate'}`}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Courses
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400 max-w-lg">
          Browse all courses in the AI bachelor program. Each course has tips,
          practice quizzes, and curated resources.
        </p>
      </div>

      {/* Year filters */}
      <div className={`flex flex-wrap gap-2 mb-4 ${mounted ? 'animate-fade-in-up stagger-2' : 'pre-animate'}`}>
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

      {/* Specialisation filter (Year 2 & 3) */}
      {(yearFilter === 2 || yearFilter === 3) && (
        <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up">
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
        <CourseYearGroup
          key={`${year}-${yearFilter}-${specialisationFilter}`}
          year={year}
          mandatory={mandatory}
          bySpecialisation={bySpecialisation}
          courses={courses}
          specialisationLabels={specialisationLabels}
        />
      ))}
    </div>
  );
}

function CourseYearGroup({
  year,
  mandatory,
  bySpecialisation,
  courses,
  specialisationLabels,
}: {
  year: number;
  mandatory: ReturnType<typeof getCourses>;
  bySpecialisation: { spec: string; courses: ReturnType<typeof getCourses> }[];
  courses: ReturnType<typeof getCourses>;
  specialisationLabels: Record<string, string>;
}) {
  const { ref, inView } = useStagger<HTMLDivElement>();

  return (
    <div ref={ref} className="mb-12 last:mb-0">
      <h2
        className={`text-sm font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4 ${
          inView ? 'animate-fade-in-up' : 'pre-animate'
        }`}
      >
        Year {year}
      </h2>
      {(year === 2 || year === 3) && mandatory.length > 0 && (
        <div className="mb-8">
          <h3
            className={`text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3 ${
              inView ? 'animate-fade-in stagger-1' : 'pre-animate'
            }`}
          >
            Mandatory
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mandatory.map((course, i) => (
              <div
                key={course.id}
                className={inView ? 'animate-fade-in-up' : 'pre-animate'}
                style={{ animationDelay: `${i * 70 + 100}ms` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      )}
      {(year === 2 || year === 3) &&
        bySpecialisation.map(({ spec, courses: specCourses }) => (
          <div key={spec} className="mb-8 last:mb-0">
            <h3
              className={`text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3 ${
                inView ? 'animate-fade-in stagger-2' : 'pre-animate'
              }`}
            >
              {specialisationLabels[spec] || spec}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {specCourses.map((course, i) => (
                <div
                  key={course.id}
                  className={inView ? 'animate-fade-in-up' : 'pre-animate'}
                  style={{ animationDelay: `${i * 70 + 150}ms` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        ))}
      {year !== 2 && year !== 3 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <div
              key={course.id}
              className={inView ? 'animate-fade-in-up' : 'pre-animate'}
              style={{ animationDelay: `${i * 70 + 100}ms` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
