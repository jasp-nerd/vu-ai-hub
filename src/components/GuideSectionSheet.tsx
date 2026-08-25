'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { GuideSection } from '../types';

interface GuideSectionSheetProps {
  open: boolean;
  onClose: () => void;
  /** Called when the reader taps a section; the parent handles closing. */
  onPick: (section: GuideSection) => void;
  guideTitle: string;
  baseRoute: string;
  sections: GuideSection[];
  currentId: string;
  footer?: React.ReactNode;
}

/**
 * Bottom sheet listing every section of a guide. Used below the `lg`
 * breakpoint, where the desktop sidebar is hidden. It stays mounted so the
 * open and close transitions both run; `inert` keeps it out of the tab order
 * while closed.
 */
export default function GuideSectionSheet({
  open,
  onClose,
  onPick,
  guideTitle,
  baseRoute,
  sections,
  currentId,
  footer,
}: GuideSectionSheetProps) {
  const listRef = useRef<HTMLElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  // Lock page scroll and close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  // The sheet is a mobile-only control: close it if the viewport grows past
  // the breakpoint where the sidebar takes over.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) onClose();
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [open, onClose]);

  // Centre the current section in the list and move focus to it on open.
  useEffect(() => {
    if (!open) return;
    const list = listRef.current;
    const item = activeRef.current;
    if (!list || !item) return;
    list.scrollTop = item.offsetTop - list.clientHeight / 2 + item.clientHeight / 2;
    item.focus({ preventScroll: true });
  }, [open]);

  return (
    <div
      className={`lg:hidden fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
      inert={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-stone-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-sheet-title"
        className={`absolute inset-x-0 bottom-0 flex max-h-[85dvh] flex-col rounded-t-2xl bg-white dark:bg-stone-900 shadow-2xl shadow-black/20 transition-transform duration-300 motion-reduce:transition-opacity motion-reduce:duration-200 ${
          open ? 'translate-y-0' : 'translate-y-full motion-reduce:translate-y-0 motion-reduce:opacity-0'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-drawer)' }}
      >
        <div className="flex justify-center pt-2.5 pb-1" aria-hidden="true">
          <span className="h-1 w-10 rounded-full bg-stone-300 dark:bg-stone-700" />
        </div>

        <div className="flex items-start justify-between gap-4 px-5 pb-3">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-medium uppercase tracking-wider text-stone-400 dark:text-stone-500">
              {guideTitle}
            </p>
            <h2
              id="guide-sheet-title"
              className="font-display text-lg font-bold text-stone-900 dark:text-stone-100"
            >
              Sections{' '}
              <span className="text-sm font-normal text-stone-400 dark:text-stone-500">
                · {sections.length}
              </span>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sections"
            className="-mr-2 -mt-1 shrink-0 rounded-lg p-2 text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-stone-800 dark:hover:text-stone-200"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav
          ref={listRef}
          aria-label="Guide sections"
          className="relative flex-1 overflow-y-auto overscroll-contain px-3 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
        >
          <ol className="space-y-0.5">
            {sections.map((section) => {
              const active = section.id === currentId;
              return (
                <li key={section.id}>
                  <Link
                    ref={active ? activeRef : undefined}
                    href={`${baseRoute}/${section.id}`}
                    data-testid={`sheet-item-${section.id}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => onPick(section)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] leading-snug transition-colors ${
                      active
                        ? 'bg-vu-blue/10 dark:bg-vu-blue/15 text-vu-blue dark:text-vu-blue-light font-medium'
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 active:bg-stone-100 dark:hover:bg-stone-800 dark:active:bg-stone-800'
                    }`}
                  >
                    <span className="w-6 shrink-0 text-center text-lg leading-none" aria-hidden="true">
                      {section.emoji}
                    </span>
                    <span className="min-w-0 flex-1">{section.title}</span>
                    {active && (
                      <svg
                        className="h-4 w-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ol>

          {footer && (
            <div className="mt-4 border-t border-stone-200/60 pt-4 dark:border-stone-700/60">
              {footer}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
