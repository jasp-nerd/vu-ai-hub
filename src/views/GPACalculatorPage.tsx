'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { courses } from '../data/courses';
import { useMountAnimation } from '../hooks/useAnimations';

const STORAGE_KEY = 'vu-ai-gpa-grades';

interface GradeEntry {
  courseId: string;
  grade: string; // stored as string for input control
}

function parseEC(credits?: string): number {
  if (!credits) return 0;
  const match = credits.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function loadGrades(): Record<string, string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveGrades(grades: Record<string, string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(grades));
}

export default function GPACalculatorPage() {
  const mounted = useMountAnimation(50);
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [targetGPA, setTargetGPA] = useState('');
  const [showWhatIf, setShowWhatIf] = useState(false);

  // Load grades from localStorage on mount (SSR-safe)
  useEffect(() => {
    setGrades(loadGrades());
  }, []);

  useEffect(() => {
    saveGrades(grades);
  }, [grades]);

  // Group courses by year, exclude 0EC courses
  const coursesByYear = useMemo(() => {
    const eligible = courses.filter((c) => parseEC(c.credits) > 0);
    const grouped: Record<number, typeof courses> = {};
    for (const course of eligible) {
      if (!grouped[course.year]) grouped[course.year] = [];
      grouped[course.year].push(course);
    }
    return grouped;
  }, []);

  const handleGradeChange = useCallback((courseId: string, value: string) => {
    // Allow empty, or valid numbers between 1 and 10
    if (value === '' || value === '.') {
      setGrades((prev) => ({ ...prev, [courseId]: value }));
      return;
    }
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 1 && num <= 10) {
      setGrades((prev) => ({ ...prev, [courseId]: value }));
    }
  }, []);

  // Calculate GPA from entered grades
  const { gpa, totalEC, completedEC, passingCount, failingCount, gradedCourses } = useMemo(() => {
    let weightedSum = 0;
    let ecSum = 0;
    let passing = 0;
    let failing = 0;
    const graded: GradeEntry[] = [];

    for (const course of courses) {
      const ec = parseEC(course.credits);
      if (ec === 0) continue;
      const gradeStr = grades[course.id];
      if (!gradeStr || gradeStr === '' || gradeStr === '.') continue;
      const grade = parseFloat(gradeStr);
      if (isNaN(grade)) continue;

      graded.push({ courseId: course.id, grade: gradeStr });
      if (grade >= 5.5) {
        weightedSum += grade * ec;
        ecSum += ec;
        passing++;
      } else {
        failing++;
      }
    }

    const totalEC = courses.reduce((sum, c) => sum + parseEC(c.credits), 0);

    return {
      gpa: ecSum > 0 ? weightedSum / ecSum : 0,
      totalEC,
      completedEC: ecSum,
      passingCount: passing,
      failingCount: failing,
      gradedCourses: graded,
    };
  }, [grades]);

  // What-if: calculate required average for remaining courses
  const whatIfResult = useMemo(() => {
    if (!showWhatIf || !targetGPA) return null;
    const target = parseFloat(targetGPA);
    if (isNaN(target) || target < 1 || target > 10) return null;

    const remainingEC = totalEC - completedEC;
    if (remainingEC <= 0) return { possible: false, message: 'All courses have grades entered.' };

    const currentWeightedSum = gradedCourses.reduce((sum, gc) => {
      const grade = parseFloat(gc.grade);
      if (grade < 5.5) return sum; // failed courses don't count
      const course = courses.find((c) => c.id === gc.courseId);
      return sum + grade * parseEC(course?.credits);
    }, 0);

    const neededWeightedSum = target * totalEC;
    const neededAvg = (neededWeightedSum - currentWeightedSum) / remainingEC;

    if (neededAvg > 10) {
      return { possible: false, message: `Not achievable — you'd need an average of ${neededAvg.toFixed(1)} on remaining courses (max is 10).` };
    }
    if (neededAvg < 1) {
      return { possible: true, message: `You've already exceeded your target! Even with minimum grades (1.0) on remaining courses, you'd beat a ${target.toFixed(1)} GPA.` };
    }
    return { possible: true, message: `You need an average of **${neededAvg.toFixed(2)}** across your remaining ${remainingEC} EC to achieve a ${target.toFixed(1)} GPA.` };
  }, [showWhatIf, targetGPA, totalEC, completedEC, gradedCourses]);

  const clearAll = () => {
    setGrades({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav
        className={`flex items-center gap-2 text-sm text-stone-400 dark:text-stone-500 mb-8 ${
          mounted ? 'animate-slide-in-left' : 'pre-animate'
        }`}
      >
        <Link href="/guide" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
          Guide
        </Link>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-stone-600 dark:text-stone-300">GPA Calculator</span>
      </nav>

      <div className={`mb-10 ${mounted ? 'animate-blur-in' : 'pre-animate'}`}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          GPA Calculator
        </h1>
        <p className="mt-3 text-stone-500 dark:text-stone-400 max-w-2xl leading-relaxed">
          Enter your grades to calculate your weighted GPA. Grades are saved in your browser so they persist across visits. The GPA is calculated as a weighted average using EC credits.
        </p>
      </div>

      {/* Stats summary */}
      <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 ${mounted ? 'animate-fade-in-up stagger-1' : 'pre-animate'}`}>
        <div className="rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-4">
          <p className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider">GPA</p>
          <p className={`font-display text-2xl font-bold mt-1 ${gpa >= 5.5 ? 'text-stone-900 dark:text-stone-100' : gpa > 0 ? 'text-red-600 dark:text-red-400' : 'text-stone-300 dark:text-stone-600'}`}>
            {completedEC > 0 ? gpa.toFixed(2) : '—'}
          </p>
        </div>
        <div className="rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-4">
          <p className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider">EC Completed</p>
          <p className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
            {completedEC} <span className="text-sm font-normal text-stone-400">/ 180</span>
          </p>
        </div>
        <div className="rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-4">
          <p className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider">Passing</p>
          <p className="font-display text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">{passingCount}</p>
        </div>
        <div className="rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-4">
          <p className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider">Failing</p>
          <p className={`font-display text-2xl font-bold mt-1 ${failingCount > 0 ? 'text-red-600 dark:text-red-400' : 'text-stone-300 dark:text-stone-600'}`}>
            {failingCount}
          </p>
        </div>
      </div>

      {/* What-if predictor */}
      <div className={`max-w-3xl mb-8 ${mounted ? 'animate-fade-in-up stagger-2' : 'pre-animate'}`}>
        <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-6">
          <button
            onClick={() => setShowWhatIf(!showWhatIf)}
            className="flex items-center gap-2 w-full text-left"
          >
            <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100">
              What-if predictor
            </h3>
            <svg
              className={`w-4 h-4 text-stone-400 transition-transform ${showWhatIf ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showWhatIf && (
            <div className="mt-4">
              <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">
                Enter your target GPA to see what average grade you need on your remaining courses.
              </p>
              <div className="flex items-center gap-3">
                <label htmlFor="target-gpa" className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  Target GPA:
                </label>
                <input
                  id="target-gpa"
                  type="text"
                  inputMode="decimal"
                  value={targetGPA}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (v === '' || v === '.' || (!isNaN(parseFloat(v)) && parseFloat(v) >= 1 && parseFloat(v) <= 10)) {
                      setTargetGPA(v);
                    }
                  }}
                  placeholder="e.g. 7.5"
                  className="w-20 text-center text-sm font-medium rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-vu-blue/30 dark:focus:ring-vu-blue-light/30"
                />
              </div>
              {whatIfResult && (
                <div className={`mt-4 text-sm leading-relaxed ${whatIfResult.possible ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                  {whatIfResult.message}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Course grades by year */}
      <div className={`max-w-3xl ${mounted ? 'animate-fade-in-up stagger-3' : 'pre-animate'}`}>
        {[1, 2, 3].map((year) => {
          const yearCourses = coursesByYear[year];
          if (!yearCourses) return null;
          return (
            <div key={year} className="mb-10">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4">
                Year {year}
              </h2>
              <div className="space-y-2">
                {yearCourses.map((course) => {
                  const ec = parseEC(course.credits);
                  const gradeStr = grades[course.id] || '';
                  const gradeNum = parseFloat(gradeStr);
                  const hasGrade = gradeStr !== '' && !isNaN(gradeNum);
                  const isPassing = hasGrade && gradeNum >= 5.5;
                  const isFailing = hasGrade && gradeNum < 5.5;

                  return (
                    <div
                      key={course.id}
                      className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${
                        isFailing
                          ? 'border-red-200/60 dark:border-red-800/40 bg-red-50/30 dark:bg-red-950/20'
                          : isPassing
                          ? 'border-emerald-200/60 dark:border-emerald-800/40 bg-emerald-50/30 dark:bg-emerald-950/20'
                          : 'border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="text-sm font-medium text-stone-900 dark:text-stone-100 hover:text-vu-blue dark:hover:text-vu-blue-light transition-colors"
                        >
                          {course.name}
                        </Link>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-stone-400 dark:text-stone-500">{course.code}</span>
                          <span className="text-xs text-stone-400 dark:text-stone-500">{ec} EC</span>
                          {course.specialisation && (
                            <span className="text-xs text-stone-400 dark:text-stone-500 capitalize">
                              {(Array.isArray(course.specialisation) ? course.specialisation : [course.specialisation])
                                .map((s) => s === 'intelligent_systems' ? 'IS' : 'SAC')
                                .join('/')}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="shrink-0 flex items-center gap-2">
                        <input
                          type="text"
                          inputMode="decimal"
                          value={gradeStr}
                          onChange={(e) => handleGradeChange(course.id, e.target.value)}
                          placeholder="—"
                          aria-label={`Grade for ${course.name}`}
                          className={`w-16 text-center text-sm font-medium rounded-lg border px-2 py-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-vu-blue/30 dark:focus:ring-vu-blue-light/30 ${
                            isFailing
                              ? 'border-red-300 dark:border-red-700 bg-white dark:bg-stone-900 text-red-600 dark:text-red-400'
                              : isPassing
                              ? 'border-emerald-300 dark:border-emerald-700 bg-white dark:bg-stone-900 text-emerald-600 dark:text-emerald-400'
                              : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className={`max-w-3xl flex gap-3 ${mounted ? 'animate-fade-in-up stagger-4' : 'pre-animate'}`}>
        <button
          onClick={clearAll}
          className="px-4 py-2 text-sm font-medium rounded-xl border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
        >
          Clear all grades
        </button>
      </div>

      {/* Info note */}
      <div className={`max-w-3xl mt-8 ${mounted ? 'animate-fade-in-up stagger-5' : 'pre-animate'}`}>
        <p className="text-xs text-stone-400 dark:text-stone-500 leading-relaxed">
          GPA is calculated as a weighted average: sum(grade x EC) / sum(EC). Only passing grades (5.5 or above) count towards your GPA. Dutch grading scale: 1-10.
          You need 180 EC to complete the programme. Grades are stored locally in your browser and are not sent anywhere. Courses with 0 EC (like the English Language Test) are excluded.
        </p>
      </div>
    </div>
  );
}
