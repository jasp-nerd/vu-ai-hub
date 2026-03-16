import { useState, useEffect, useMemo } from 'react';
import type { CourseGradeStructure } from '../data/gradeComponents';

const STORAGE_PREFIX = 'vu-ai-course-grade-';

interface Props {
  courseId: string;
  structure: CourseGradeStructure;
}

function loadCourseGrades(courseId: string): Record<string, string> {
  try {
    const stored = localStorage.getItem(STORAGE_PREFIX + courseId);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveCourseGrades(courseId: string, grades: Record<string, string>) {
  localStorage.setItem(STORAGE_PREFIX + courseId, JSON.stringify(grades));
}

export default function CourseGradeCalculator({ courseId, structure }: Props) {
  const [grades, setGrades] = useState<Record<string, string>>(() => loadCourseGrades(courseId));
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    saveCourseGrades(courseId, grades);
  }, [courseId, grades]);

  // Reset grades when course changes
  useEffect(() => {
    setGrades(loadCourseGrades(courseId));
  }, [courseId]);

  const handleChange = (name: string, value: string) => {
    if (value === '' || value === '.') {
      setGrades((prev) => ({ ...prev, [name]: value }));
      return;
    }
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0 && num <= 10) {
      setGrades((prev) => ({ ...prev, [name]: value }));
    }
  };

  const { finalGrade, filledCount, totalGraded, warnings } = useMemo(() => {
    let weightedSum = 0;
    let totalWeight = 0;
    let filled = 0;
    let totalGraded = 0;
    const warns: string[] = [];

    for (const comp of structure.components) {
      if (comp.passFail) continue;
      totalGraded++;

      const val = grades[comp.name];
      if (!val || val === '' || val === '.') continue;
      const grade = parseFloat(val);
      if (isNaN(grade)) continue;

      filled++;
      weightedSum += grade * comp.weight;
      totalWeight += comp.weight;

      if (comp.minGrade && grade < comp.minGrade) {
        warns.push(`${comp.name}: ${grade.toFixed(1)} is below the minimum ${comp.minGrade}`);
      }
    }

    // Check pass/fail components
    for (const comp of structure.components) {
      if (!comp.passFail) continue;
      const val = grades[comp.name];
      if (val === 'fail') {
        warns.push(`${comp.name}: must be passed`);
      }
    }

    const finalGrade = totalWeight > 0 ? weightedSum / totalWeight : 0;
    return { finalGrade, filledCount: filled, totalGraded, warnings: warns };
  }, [grades, structure]);

  const passFail = structure.components.filter((c) => c.passFail);
  const graded = structure.components.filter((c) => !c.passFail);

  return (
    <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 flex items-center justify-between gap-3 press-effect"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-vu-blue/10 dark:bg-vu-blue-light/10 text-vu-blue dark:text-vu-blue-light text-sm" aria-hidden="true">
            %
          </span>
          <div>
            <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100 text-sm">
              Grade Calculator
            </h3>
            {filledCount > 0 && !expanded && (
              <p className={`text-xs mt-0.5 ${finalGrade >= 5.5 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                Current: {finalGrade.toFixed(2)} ({filledCount}/{totalGraded} components)
              </p>
            )}
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-stone-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="border-t border-stone-200/60 dark:border-stone-700/60 p-5">
          {/* Result banner */}
          {filledCount > 0 && (
            <div className={`mb-4 rounded-xl p-3 text-center ${
              warnings.length > 0
                ? 'bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-700/40'
                : finalGrade >= 5.5
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-700/40'
                : 'bg-red-50 dark:bg-red-950/30 border border-red-200/60 dark:border-red-700/40'
            }`}>
              <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                Estimated Final Grade
              </p>
              <p className={`font-display text-2xl font-bold mt-1 ${
                finalGrade >= 5.5 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {finalGrade.toFixed(2)}
              </p>
              <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">
                Based on {filledCount} of {totalGraded} graded components
              </p>
            </div>
          )}

          {/* Warnings */}
          {warnings.length > 0 && (
            <div className="mb-4 space-y-1">
              {warnings.map((w, i) => (
                <p key={i} className="text-xs text-amber-700 dark:text-amber-400">
                  {w}
                </p>
              ))}
            </div>
          )}

          {/* Graded components */}
          <div className="space-y-2">
            {graded.map((comp) => {
              const val = grades[comp.name] || '';
              const num = parseFloat(val);
              const hasVal = val !== '' && !isNaN(num);
              const belowMin = hasVal && comp.minGrade && num < comp.minGrade;

              return (
                <div key={comp.name} className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-stone-700 dark:text-stone-300">{comp.name}</p>
                    <p className="text-xs text-stone-400 dark:text-stone-500">
                      {(comp.weight * 100).toFixed(0)}% of final grade
                      {comp.minGrade ? ` · min ${comp.minGrade}` : ''}
                    </p>
                  </div>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={val}
                    onChange={(e) => handleChange(comp.name, e.target.value)}
                    placeholder="—"
                    aria-label={`Grade for ${comp.name}`}
                    className={`w-16 text-center text-sm font-medium rounded-lg border px-2 py-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-vu-blue/30 dark:focus:ring-vu-blue-light/30 ${
                      belowMin
                        ? 'border-red-300 dark:border-red-700 bg-white dark:bg-stone-900 text-red-600 dark:text-red-400'
                        : hasVal
                        ? 'border-emerald-300 dark:border-emerald-700 bg-white dark:bg-stone-900 text-emerald-600 dark:text-emerald-400'
                        : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Pass/fail components */}
          {passFail.length > 0 && (
            <div className="mt-4 pt-3 border-t border-stone-200/40 dark:border-stone-700/40">
              <p className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-2">
                Pass/Fail Requirements
              </p>
              <div className="space-y-2">
                {passFail.map((comp) => {
                  const val = grades[comp.name] || '';
                  return (
                    <div key={comp.name} className="flex items-center gap-3">
                      <p className="flex-1 text-sm text-stone-700 dark:text-stone-300">{comp.name}</p>
                      <select
                        value={val}
                        onChange={(e) => setGrades((prev) => ({ ...prev, [comp.name]: e.target.value }))}
                        aria-label={`Status for ${comp.name}`}
                        className="text-xs rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-vu-blue/30"
                      >
                        <option value="">—</option>
                        <option value="pass">Pass</option>
                        <option value="fail">Fail</option>
                      </select>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Notes */}
          {structure.notes && (
            <p className="mt-4 text-xs text-stone-400 dark:text-stone-500 leading-relaxed">
              {structure.notes}
            </p>
          )}

          {/* Clear button */}
          <button
            onClick={() => {
              setGrades({});
              localStorage.removeItem(STORAGE_PREFIX + courseId);
            }}
            className="mt-4 text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
