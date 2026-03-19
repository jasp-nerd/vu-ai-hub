'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Scroll-triggered visibility hook using IntersectionObserver.
 * Returns a ref to attach and a boolean indicating if the element is in view.
 * Once triggered, stays visible (no re-hiding on scroll out).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
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
 * Simple mount animation hook — triggers animation class after mount.
 * Useful for elements that should animate on page load (not scroll).
 */
export function useMountAnimation(delay: number = 0) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return mounted;
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
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // First set explicit height, then collapse to 0
      if (contentRef.current.scrollHeight > 0) {
        setHeight(contentRef.current.scrollHeight);
        setIsAnimating(true);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setHeight(0);
            setTimeout(() => setIsAnimating(false), 500);
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
      transition: isAnimating ? 'height 500ms cubic-bezier(0.16, 1, 0.3, 1)' : undefined,
    },
    isVisible: isOpen || isAnimating,
  };
}
