import { useState, useEffect } from 'react';
import { getFAQCategories, getFAQByCategory } from '../services/contentService';
import { useMountAnimation, useInView, useCollapsible } from '../hooks/useAnimations';

export default function FAQPage() {
  const categories = getFAQCategories();
  const [openId, setOpenId] = useState<string | null>(null);
  const mounted = useMountAnimation(50);

  useEffect(() => {
    document.title = 'FAQ — AI @ VU';
  }, []);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className={`mb-10 ${mounted ? 'animate-blur-in' : 'pre-animate'}`}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400 max-w-lg">
          Common questions about the AI bachelor program, exams, registration,
          and student life.
        </p>
      </div>

      <div className="max-w-3xl space-y-10">
        {categories.map((category, catIndex) => (
          <FAQCategory
            key={category}
            category={category}
            openId={openId}
            toggle={toggle}
            catIndex={catIndex}
          />
        ))}
      </div>
    </div>
  );
}

function FAQCategory({
  category,
  openId,
  toggle,
  catIndex,
}: {
  category: string;
  openId: string | null;
  toggle: (id: string) => void;
  catIndex: number;
}) {
  const entries = getFAQByCategory(category);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <h2
        className={`text-sm font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4 ${
          inView ? 'animate-fade-in-up' : 'pre-animate'
        }`}
        style={{ animationDelay: `${catIndex * 60}ms` }}
      >
        {category}
      </h2>
      <div className="space-y-2">
        {entries.map((entry, i) => (
          <FAQItem
            key={entry.id}
            entry={entry}
            isOpen={openId === entry.id}
            toggle={toggle}
            parentInView={inView}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

function FAQItem({
  entry,
  isOpen,
  toggle,
  parentInView,
  index,
}: {
  entry: { id: string; question: string; answer: string };
  isOpen: boolean;
  toggle: (id: string) => void;
  parentInView: boolean;
  index: number;
}) {
  const { ref: collapseRef, style: collapseStyle, isVisible } = useCollapsible(isOpen);

  return (
    <div
      className={`rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden ${
        parentInView ? 'animate-fade-in-up' : 'pre-animate'
      }`}
      style={{ animationDelay: `${index * 50 + 80}ms` }}
    >
      <button
        onClick={() => toggle(entry.id)}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${entry.id}`}
        id={`faq-btn-${entry.id}`}
        className="w-full flex items-center justify-between px-5 py-4 text-left press-effect"
      >
        <span className="text-sm font-medium text-stone-900 dark:text-stone-100 pr-4">
          {entry.question}
        </span>
        <svg
          className={`w-4 h-4 text-stone-400 dark:text-stone-500 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ transitionTimingFunction: 'var(--ease-spring)' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isVisible && (
        <div ref={collapseRef} style={collapseStyle}>
          <div
            id={`faq-panel-${entry.id}`}
            role="region"
            aria-labelledby={`faq-btn-${entry.id}`}
            className="px-5 pb-4"
          >
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              {entry.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
