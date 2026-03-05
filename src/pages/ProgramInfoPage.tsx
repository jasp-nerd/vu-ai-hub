import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getProgramInfo } from '../services/contentService';
import { useMountAnimation, useInView } from '../hooks/useAnimations';

export default function ProgramInfoPage() {
  const info = getProgramInfo();
  const mounted = useMountAnimation(50);

  useEffect(() => {
    document.title = 'Program Info — AI @ VU';
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className={`mb-10 ${mounted ? 'animate-blur-in' : 'pre-animate'}`}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          {info.title}
        </h1>
        <p className="mt-3 text-stone-500 dark:text-stone-400 max-w-2xl leading-relaxed">
          {info.description}
        </p>
      </div>

      <div className="max-w-3xl">
        {info.sections.map((section, i) => (
          <ProgramSection key={i} section={section} index={i} />
        ))}

        {/* Useful links */}
        <UsefulLinks links={info.usefulLinks} />
      </div>
    </div>
  );
}

function ProgramSection({ section, index }: { section: { heading: string; content: string }; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`mb-10 ${inView ? 'animate-fade-in-up' : 'pre-animate'}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
        {section.heading}
      </h2>
      <div className="prose-custom">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {section.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

function UsefulLinks({ links }: { links: { url: string; label: string; description: string }[] }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`mt-12 pt-8 border-t border-stone-200/60 dark:border-stone-700/60 ${
        inView ? 'animate-fade-in-up' : 'pre-animate'
      }`}
    >
      <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
        Useful links
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link, i) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-4 hover-lift hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-sm ${
              inView ? 'animate-scale-in' : 'pre-animate'
            }`}
            style={{ animationDelay: `${i * 60 + 100}ms` }}
          >
            <h3 className="font-medium text-sm text-stone-900 dark:text-stone-100 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors">
              {link.label}
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              {link.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
