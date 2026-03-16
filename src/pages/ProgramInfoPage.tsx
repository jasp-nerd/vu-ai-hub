import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getProgramInfo } from '../services/contentService';
import { useMountAnimation, useInView } from '../hooks/useAnimations';

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function ProgramInfoPage() {
  const info = getProgramInfo();
  const mounted = useMountAnimation(50);

  useEffect(() => {
    document.title = 'Program Info — AI @ VU';
  }, []);

  // Separate the TOC section from content sections
  const tocSection = info.sections.find((s) => s.heading === 'On This Page');
  const contentSections = info.sections.filter((s) => s.heading !== 'On This Page');

  // Parse TOC links from markdown
  const tocLinks = tocSection
    ? [...tocSection.content.matchAll(/\[([^\]]+)\]\(#([^)]+)\)/g)].map((m) => ({
        label: m[1],
        id: m[2],
      }))
    : [];

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
        {/* Table of contents */}
        {tocLinks.length > 0 && (
          <nav
            className={`mb-10 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-5 ${
              mounted ? 'animate-fade-in-up' : 'pre-animate'
            }`}
          >
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
              On this page
            </h2>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {tocLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => smoothScrollTo(link.id)}
                    className="w-full text-left text-sm text-stone-600 dark:text-stone-400 hover:text-vu-blue dark:hover:text-vu-blue-light transition-colors py-0.5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {contentSections.map((section, i) => (
          <ProgramSection key={i} section={section} index={i} />
        ))}

        {/* Useful links */}
        <UsefulLinks links={info.usefulLinks} />
      </div>
    </div>
  );
}

function sectionId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function ProgramSection({ section, index }: { section: { heading: string; content: string }; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      id={sectionId(section.heading)}
      className={`mb-10 ${inView ? 'animate-fade-in-up' : 'pre-animate'}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
        {section.heading}
      </h2>
      <div className="prose-custom">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href, children, ...props }) => {
              if (href?.startsWith('#')) {
                return (
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo(href.slice(1));
                    }}
                    {...props}
                  >
                    {children}
                  </a>
                );
              }
              return (
                <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                  {children}
                </a>
              );
            },
          }}
        >
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
