'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Scroll-triggered visibility hook using IntersectionObserver.
 * Returns a ref to attach and a boolean indicating if the element is in view.
 *
 * Starts as `true` so server-rendered markup is visible and content that is
 * on screen at load animates from first paint. Elements the first observer
 * callback finds below the fold are hidden and revealed (once, by default)
 * when they scroll into view. Elements too tall to ever satisfy the threshold
 * on the current viewport are left visible.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion: leave everything visible, no observer.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rootHeight = entry.rootBounds?.height ?? window.innerHeight;
        const unreachable = entry.boundingClientRect.height * threshold > rootHeight;
        if (entry.isIntersecting || unreachable) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

/**
 * Returns a className string for animate-on-scroll elements.
 * Combines the base hidden state with the visible animation.
 */
export function useAnimateIn<T extends HTMLElement = HTMLDivElement>(
  animation: 'fade-in-up' | 'fade-in' | 'scale-in' | 'slide-in-left' | 'slide-in-right' | 'blur-in' = 'fade-in-up',
  options: { threshold?: number; rootMargin?: string; delay?: number } = {}
) {
  const { ref, inView } = useInView<T>(options);
  const delayStyle = options.delay ? { animationDelay: `${options.delay}ms` } : undefined;

  return {
    ref,
    className: inView ? `animate-${animation}` : 'pre-animate',
    style: delayStyle,
  };
}

/**
 * Hook for staggering children animations on scroll.
 * Returns a ref for the container and whether it's in view.
 * Children should use CSS custom property --stagger-index for delay.
 */
export function useStagger<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string } = {}
) {
  const { ref, inView } = useInView<T>({
    threshold: options.threshold ?? 0.05,
    rootMargin: options.rootMargin ?? '0px 0px -20px 0px',
  });

  return { ref, inView };
}

/**
 * Smooth height animation for accordions/expandable content.
 * Returns a ref and style object to apply to the collapsible container.
 */
export function useCollapsible(isOpen: boolean) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateHeight = useCallback(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
      setIsAnimating(true);
      // After animation completes, set to auto for dynamic content
      const timer = setTimeout(() => {
        setHeight(undefined);
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // First set explicit height, then collapse to 0
      if (contentRef.current.scrollHeight > 0) {
        setHeight(contentRef.current.scrollHeight);
        setIsAnimating(true);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setHeight(0);
            setTimeout(() => setIsAnimating(false), 300);
          });
        });
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  return {
    ref: contentRef,
    style: {
      height: height !== undefined ? `${height}px` : 'auto',
      overflow: 'hidden' as const,
      transition: isAnimating ? 'height 300ms var(--ease-out)' : undefined,
    },
    isVisible: isOpen || isAnimating,
  };
}
