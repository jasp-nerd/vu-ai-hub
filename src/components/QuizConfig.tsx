'use client';

import type { QuizConfig } from '../hooks/useQuiz';

interface Props {
  config: QuizConfig;
  lectures: { num: number; name: string }[];
  categories: string[];
  filteredCount: number;
  hasLectureData: boolean;
  hasCategoryData: boolean;
  onUpdate: (partial: Partial<QuizConfig>) => void;
  onStart: () => void;
}

const QUESTION_COUNTS = [10, 20, 30, 50];
const TIMER_OPTIONS = [15, 30, 60];

const CATEGORY_COLORS: Record<string, string> = {
  Recall: 'emerald',
  'Conceptual Understanding': 'violet',
  Application: 'amber',
};

function getCatClasses(cat: string, selected: boolean) {
  const color = CATEGORY_COLORS[cat] ?? 'stone';
  if (selected) {
    return `border-${color}-400 dark:border-${color}-600 bg-${color}-50 dark:bg-${color}-950/40 text-${color}-700 dark:text-${color}-300`;
  }
  return 'border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 text-stone-400 dark:text-stone-600';
}

export default function QuizConfig({
  config,
  lectures,
  categories,
  filteredCount,
  hasLectureData,
  hasCategoryData,
  onUpdate,
  onStart,
}: Props) {
  const toggleLecture = (num: number) => {
    const next = new Set(config.selectedLectures);
    if (next.has(num)) next.delete(num);
    else next.add(num);
    onUpdate({ selectedLectures: next });
  };

  const toggleCategory = (cat: string) => {
    const next = new Set(config.selectedCategories);
    if (next.has(cat)) next.delete(cat);
    else next.add(cat);
    onUpdate({ selectedCategories: next });
  };

  const selectAllLectures = () => onUpdate({ selectedLectures: new Set(lectures.map((l) => l.num)) });
  const clearAllLectures = () => onUpdate({ selectedLectures: new Set() });

  const effectiveCount = config.questionCount === 0 ? filteredCount : Math.min(config.questionCount, filteredCount);

  return (
    <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100 mb-1">
          Quiz Settings
        </h3>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
          Configure your quiz session — {filteredCount} questions available
        </p>

        {/* Lecture filter */}
        {hasLectureData && lectures.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                Lectures
              </span>
              <div className="flex gap-2">
                <button
                  onClick={selectAllLectures}
                  className="text-xs text-vu-blue dark:text-vu-blue-light hover:underline"
                >
                  All
                </button>
                <button
                  onClick={clearAllLectures}
                  className="text-xs text-stone-400 dark:text-stone-500 hover:underline"
                >
                  None
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {lectures.map((l) => {
                const selected = config.selectedLectures.has(l.num);
                return (
                  <button
                    key={l.num}
                    onClick={() => toggleLecture(l.num)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-sm transition-all text-left ${
                      selected
                        ? 'border-vu-blue/40 dark:border-vu-blue-light/40 bg-blue-50/50 dark:bg-blue-950/30 text-stone-800 dark:text-stone-200'
                        : 'border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 text-stone-400 dark:text-stone-600'
                    }`}
                  >
                    <span
                      className={`inline-flex items-center justify-center w-5 h-5 rounded-md text-[10px] font-bold shrink-0 ${
                        selected
                          ? 'bg-vu-blue text-white'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-400 dark:text-stone-600'
                      }`}
                    >
                      {l.num}
                    </span>
                    <span className="truncate">{l.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Category filter */}
        {hasCategoryData && categories.length > 0 && (
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-3">
              Category
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const selected = config.selectedCategories.has(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl border text-sm font-medium transition-all ${getCatClasses(cat, selected)}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Question count */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-3">
            Questions
          </span>
          <div className="flex flex-wrap gap-2">
            {QUESTION_COUNTS.filter((n) => n <= filteredCount).map((n) => (
              <button
                key={n}
                onClick={() => onUpdate({ questionCount: n })}
                className={`px-3.5 py-2 rounded-xl border text-sm font-medium transition-all ${
                  config.questionCount === n
                    ? 'border-vu-blue/40 dark:border-vu-blue-light/40 bg-blue-50/50 dark:bg-blue-950/30 text-vu-blue dark:text-vu-blue-light'
                    : 'border-stone-200/60 dark:border-stone-700/60 text-stone-500 dark:text-stone-400'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => onUpdate({ questionCount: 0 })}
              className={`px-3.5 py-2 rounded-xl border text-sm font-medium transition-all ${
                config.questionCount === 0
                  ? 'border-vu-blue/40 dark:border-vu-blue-light/40 bg-blue-50/50 dark:bg-blue-950/30 text-vu-blue dark:text-vu-blue-light'
                  : 'border-stone-200/60 dark:border-stone-700/60 text-stone-500 dark:text-stone-400'
              }`}
            >
              All ({filteredCount})
            </button>
          </div>
        </div>

        {/* Timer */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
              Timer
            </span>
            <button
              onClick={() => onUpdate({ timerEnabled: !config.timerEnabled })}
              className={`relative w-9 h-5 rounded-full transition-colors ${
                config.timerEnabled ? 'bg-vu-blue' : 'bg-stone-300 dark:bg-stone-700'
              }`}
            >
              <span
                className={`absolute left-0 top-0.5 w-4 h-4 rounded-full bg-white transition-transform shadow-sm ${
                  config.timerEnabled ? 'translate-x-[18px]' : 'translate-x-[3px]'
                }`}
              />
            </button>
          </div>
          {config.timerEnabled && (
            <div className="flex gap-2">
              {TIMER_OPTIONS.map((sec) => (
                <button
                  key={sec}
                  onClick={() => onUpdate({ timerSeconds: sec })}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                    config.timerSeconds === sec
                      ? 'border-vu-blue/40 dark:border-vu-blue-light/40 bg-blue-50/50 dark:bg-blue-950/30 text-vu-blue dark:text-vu-blue-light'
                      : 'border-stone-200/60 dark:border-stone-700/60 text-stone-500 dark:text-stone-400'
                  }`}
                >
                  {sec}s
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          disabled={effectiveCount === 0}
          className="w-full px-5 py-3 rounded-xl bg-vu-blue text-white text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-sm"
        >
          Start Quiz ({effectiveCount} question{effectiveCount !== 1 ? 's' : ''})
        </button>
      </div>
    </div>
  );
}
