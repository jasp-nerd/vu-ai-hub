import { useState } from 'react';
import { getFAQCategories, getFAQByCategory } from '../services/contentService';

export default function FAQPage() {
  const categories = getFAQCategories();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400 max-w-lg">
          Common questions about the AI bachelor program, exams, registration,
          and student life.
        </p>
      </div>

      <div className="max-w-3xl space-y-10">
        {categories.map((category) => {
          const entries = getFAQByCategory(category);
          return (
            <div key={category}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4">
                {category}
              </h2>
              <div className="space-y-2">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(entry.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="text-sm font-medium text-stone-900 dark:text-stone-100 pr-4">
                        {entry.question}
                      </span>
                      <svg
                        className={`w-4 h-4 text-stone-400 dark:text-stone-500 shrink-0 transition-transform ${
                          openId === entry.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openId === entry.id && (
                      <div className="px-5 pb-4">
                        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                          {entry.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
