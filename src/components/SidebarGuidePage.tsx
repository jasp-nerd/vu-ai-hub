'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { track } from '../lib/analytics';
import GuideSectionSheet from './GuideSectionSheet';
import type { GuideSection } from '../types';

type NavSource = 'picker' | 'sidebar' | 'prev_next';

type Segment =
  | { type: 'markdown'; content: string }
  | { type: 'info' | 'warning' | 'danger'; content: string };

function parseContent(content: string): Segment[] {
  const segments: Segment[] = [];
  const lines = content.split('\n');
  let currentType: 'markdown' | 'info' | 'warning' | 'danger' = 'markdown';
  let buffer: string[] = [];

  for (const line of lines) {
    const match = line.match(/^:::(info|warning|danger)$/);
    if (match) {
      if (buffer.length > 0) {
        segments.push({ type: 'markdown', content: buffer.join('\n').trim() });
        buffer = [];
      }
      currentType = match[1] as 'info' | 'warning' | 'danger';
      continue;
    }
    if (line === ':::' && currentType !== 'markdown') {
      segments.push({ type: currentType, content: buffer.join('\n').trim() });
      buffer = [];
      currentType = 'markdown';
      continue;
    }
    buffer.push(line);
  }
  if (buffer.length > 0) {
    const remaining = buffer.join('\n').trim();
    if (remaining) {
      segments.push({
        type: currentType === 'markdown' ? 'markdown' : currentType,
        content: remaining,
      });
    }
  }

  return segments.filter((s) => s.content.length > 0);
}

const calloutConfig = {
  info: {
    bg: 'bg-sky-50/70 dark:bg-sky-950/20',
    border: 'border-sky-400 dark:border-sky-500',
    iconColor: 'text-sky-500 dark:text-sky-400',
    path: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  warning: {
    bg: 'bg-amber-50/70 dark:bg-amber-950/20',
    border: 'border-amber-400 dark:border-amber-500',
    iconColor: 'text-amber-500 dark:text-amber-400',
    path: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  },
  danger: {
    bg: 'bg-red-50/70 dark:bg-red-950/20',
    border: 'border-red-400 dark:border-red-500',
    iconColor: 'text-red-500 dark:text-red-400',
    path: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
};

function Callout({
  type,
  children,
}: {
  type: 'info' | 'warning' | 'danger';
  children: React.ReactNode;
}) {
  const c = calloutConfig[type];
  return (
    <div className={`flex gap-3 border-l-4 ${c.border} ${c.bg} px-4 py-3 rounded-r-lg my-5`}>
      <svg
        className={`w-4 h-4 ${c.iconColor} mt-0.5 shrink-0`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={c.path} />
      </svg>
      <div className="prose-custom min-w-0 [&>p:last-child]:mb-0">{children}</div>
    </div>
  );
}

const markdownComponents = {
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ),
};

interface SidebarGuidePageProps {
  guideTitle: string;
  guideSubtitle: string;
  breadcrumbLabel: string;
  baseRoute: string;
  sections: GuideSection[];
  attribution?: React.ReactNode;
}

export default function SidebarGuidePage({
  guideTitle,
  guideSubtitle,
  breadcrumbLabel,
  baseRoute,
  sections,
  attribution,
}: SidebarGuidePageProps) {
  const params = useParams();
  const sectionId = params?.sectionId as string | undefined;
  const router = useRouter();
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerTriggerRef = useRef<HTMLButtonElement>(null);
  const guideId = baseRoute.split('/').pop() ?? baseRoute;

  const currentSection =
    sections.find((s) => s.id === sectionId) || sections[0];

  const trackNav = useCallback(
    (section: GuideSection, source: NavSource) => {
      track('guide_nav_used', { guide: guideId, section_id: section.id, source });
    },
    [guideId]
  );

  const closePicker = useCallback(() => {
    setPickerOpen(false);
    pickerTriggerRef.current?.focus({ preventScroll: true });
  }, []);

  const pickSection = useCallback(
    (section: GuideSection) => {
      trackNav(section, 'picker');
      setPickerOpen(false);
    },
    [trackNav]
  );

  useEffect(() => {
    if (!sectionId) {
      router.replace(`${baseRoute}/${sections[0].id}`);
    }
  }, [sectionId, router, baseRoute, sections]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionId]);

  const segments = parseContent(currentSection.content);

  const currentIndex = sections.findIndex((s) => s.id === currentSection.id);
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < sections.length - 1
      ? sections[currentIndex + 1]
      : null;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8 animate-blur-in">
        <nav className="flex items-center gap-2 text-sm text-stone-400 dark:text-stone-500 mb-4">
          <Link
            href="/guide"
            className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
          >
            Guide
          </Link>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-stone-600 dark:text-stone-300">{breadcrumbLabel}</span>
        </nav>
        <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          {guideTitle}
        </h1>
        <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400 max-w-xl">
          {guideSubtitle}
        </p>
      </div>

      <div className="flex gap-8 relative">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block sticky top-24 w-56 xl:w-64 shrink-0 h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain">
          <nav className="space-y-0.5" aria-label="Guide sections">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`${baseRoute}/${section.id}`}
                onClick={() => trackNav(section, 'sidebar')}
                aria-current={currentSection.id === section.id ? 'page' : undefined}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  currentSection.id === section.id
                    ? 'bg-vu-blue/10 dark:bg-vu-blue/15 text-vu-blue dark:text-vu-blue-light font-medium'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800/50 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <span className="text-base leading-none w-5 text-center">{section.emoji}</span>
                <span className="truncate">{section.title}</span>
              </Link>
            ))}
          </nav>

          {attribution && (
            <div className="mt-6 pt-4 border-t border-stone-200/60 dark:border-stone-700/60">
              {attribution}
            </div>
          )}
        </aside>

        {/* Mobile and tablet: bottom sheet with all sections */}
        <GuideSectionSheet
          open={pickerOpen}
          onClose={closePicker}
          onPick={pickSection}
          guideTitle={guideTitle}
          baseRoute={baseRoute}
          sections={sections}
          currentId={currentSection.id}
          footer={attribution}
        />

        {/* Main content */}
        <main className="flex-1 min-w-0 animate-fade-in-up stagger-2">
          {/* Mobile and tablet: sticky bar naming the current section, opens the sheet */}
          <div className="lg:hidden sticky top-16 z-30 -mx-4 sm:-mx-6 mb-6 border-b border-stone-200/60 dark:border-stone-700/60 bg-white/85 dark:bg-stone-950/85 backdrop-blur-xl">
            <button
              ref={pickerTriggerRef}
              type="button"
              data-testid="section-picker"
              onClick={() => setPickerOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={pickerOpen}
              className="flex w-full items-center gap-2.5 px-4 sm:px-6 py-3 text-left transition-colors active:bg-stone-100/70 dark:active:bg-stone-800/70"
            >
              <span className="text-base leading-none" aria-hidden="true">
                {currentSection.emoji}
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-1.5">
                <span className="truncate text-sm font-medium text-stone-900 dark:text-stone-100">
                  {currentSection.title}
                </span>
                <svg
                  className={`h-4 w-4 shrink-0 text-stone-400 transition-transform duration-200 ${pickerOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <span className="shrink-0 text-xs tabular-nums text-stone-400 dark:text-stone-500">
                {currentIndex + 1} of {sections.length}
              </span>
            </button>
          </div>

          <article className="max-w-3xl">
            <div className="mb-6 pb-4 border-b border-stone-200/60 dark:border-stone-700/60">
              <h2 className="font-display text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2.5">
                <span className="text-2xl">{currentSection.emoji}</span>
                {currentSection.title}
              </h2>
              {currentSection.description && (
                <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">
                  {currentSection.description}
                </p>
              )}
            </div>

            <div className="prose-custom">
              {segments.map((segment, i) => {
                if (segment.type === 'markdown') {
                  return (
                    <ReactMarkdown key={i} remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {segment.content}
                    </ReactMarkdown>
                  );
                }
                return (
                  <Callout key={i} type={segment.type}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{segment.content}</ReactMarkdown>
                  </Callout>
                );
              })}
            </div>

            {/* Prev / Next navigation */}
            <nav
              aria-label="Previous and next section"
              className="mt-12 pt-6 border-t border-stone-200/60 dark:border-stone-700/60 grid gap-3 sm:grid-cols-2"
            >
              {prevSection ? (
                <Link
                  href={`${baseRoute}/${prevSection.id}`}
                  onClick={() => trackNav(prevSection, 'prev_next')}
                  className="group flex flex-col gap-1 rounded-xl border border-stone-200/70 dark:border-stone-700/60 px-4 py-3.5 transition-colors hover:border-vu-blue/40 dark:hover:border-vu-blue-light/40 hover:bg-stone-50 dark:hover:bg-stone-900/60"
                >
                  <span className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-stone-400 dark:text-stone-500">
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </span>
                  <span className="text-sm font-medium text-stone-800 dark:text-stone-200 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors">
                    {prevSection.emoji} {prevSection.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
              {nextSection ? (
                <Link
                  href={`${baseRoute}/${nextSection.id}`}
                  onClick={() => trackNav(nextSection, 'prev_next')}
                  className="group flex flex-col items-end gap-1 rounded-xl border border-stone-200/70 dark:border-stone-700/60 px-4 py-3.5 text-right transition-colors hover:border-vu-blue/40 dark:hover:border-vu-blue-light/40 hover:bg-stone-50 dark:hover:bg-stone-900/60"
                >
                  <span className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-stone-400 dark:text-stone-500">
                    Next
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-stone-800 dark:text-stone-200 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors">
                    {nextSection.emoji} {nextSection.title}
                  </span>
                </Link>
              ) : (
                <Link
                  href="/guide"
                  className="group flex flex-col items-end gap-1 rounded-xl border border-stone-200/70 dark:border-stone-700/60 px-4 py-3.5 text-right transition-colors hover:border-vu-blue/40 dark:hover:border-vu-blue-light/40 hover:bg-stone-50 dark:hover:bg-stone-900/60"
                >
                  <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400 dark:text-stone-500">
                    End of guide
                  </span>
                  <span className="text-sm font-medium text-stone-800 dark:text-stone-200 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors">
                    Back to the guide overview
                  </span>
                </Link>
              )}
            </nav>
          </article>
        </main>
      </div>
    </div>
  );
}
