'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavigation } from '../services/contentService';
import { useTheme } from '../hooks/useTheme';
import { useMountAnimation } from '../hooks/useAnimations';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const pathname = usePathname();
  const navItems = getNavigation();
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const logoMounted = useMountAnimation(100);

  const isActive = (path: string) =>
    pathname === path || (pathname?.startsWith(path + '/') ?? false);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setGuideOpen(false);
    }
    if (guideOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [guideOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setGuideOpen(false);
      }
    }
    if (guideOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [guideOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl border-b border-stone-200/60 dark:border-stone-700/60">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <Link
          href="/"
          className={`flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-stone-900 dark:text-stone-100 hover:text-vu-blue dark:hover:text-vu-blue-light transition-colors press-effect ${
            logoMounted ? 'animate-scale-in' : 'pre-animate'
          }`}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-vu-blue text-white text-sm font-bold">
            AI
          </span>
          <span>
            AI <span className="text-vu-blue dark:text-vu-blue-light">@</span> VU
          </span>
        </Link>

        {/* Desktop nav */}
        <div className={`hidden md:flex items-center gap-1 ${logoMounted ? 'animate-fade-in stagger-2' : 'pre-animate'}`}>
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.path}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setGuideOpen(true)}
                onMouseLeave={() => setGuideOpen(false)}
              >
                <Link
                  href={item.path}
                  onFocus={() => setGuideOpen(true)}
                  aria-expanded={guideOpen}
                  aria-haspopup="true"
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors press-effect ${
                    isActive(item.path)
                      ? 'text-vu-blue dark:text-vu-blue-light bg-blue-50/80 dark:bg-blue-950/50'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800'
                  }`}
                >
                  {item.label}
                  <svg
                    className={`inline-block ml-1 w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${guideOpen ? 'rotate-180' : ''}`}
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
                </Link>
                {guideOpen && (
                  <div className="absolute top-full left-0 pt-1" role="menu">
                    <div className="animate-dropdown-in bg-white dark:bg-stone-900 rounded-xl shadow-lg shadow-stone-200/50 dark:shadow-stone-950/50 border border-stone-200/60 dark:border-stone-700/60 py-1.5 min-w-[180px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          role="menuitem"
                          onBlur={(e) => {
                            if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
                              setGuideOpen(false);
                            }
                          }}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(child.path)
                              ? 'text-vu-blue dark:text-vu-blue-light bg-blue-50/60 dark:bg-blue-950/40'
                              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors press-effect ${
                  isActive(item.path)
                    ? 'text-vu-blue dark:text-vu-blue-light bg-blue-50/80 dark:bg-blue-950/50'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800'
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors press-effect"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors press-effect"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors press-effect"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu — smooth slide animation */}
      <div
        className={`md:hidden border-t border-stone-200/60 dark:border-stone-700/60 bg-white/95 dark:bg-stone-950/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-spring)' }}
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item, i) => (
            <div
              key={item.path}
              className={mobileOpen ? 'animate-fade-in-up' : 'pre-animate'}
              style={{ animationDelay: `${i * 50 + 50}ms` }}
            >
              <Link
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors press-effect ${
                  isActive(item.path)
                    ? 'text-vu-blue dark:text-vu-blue-light bg-blue-50/80 dark:bg-blue-950/50'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800'
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive(child.path)
                          ? 'text-vu-blue dark:text-vu-blue-light bg-blue-50/60 dark:bg-blue-950/40'
                          : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
