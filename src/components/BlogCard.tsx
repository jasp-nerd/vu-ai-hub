'use client';

import Link from 'next/link';
import { useInView } from '../hooks/useAnimations';
import type { BlogPost } from '../types';

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={inView ? 'animate-fade-in-up' : 'pre-animate'}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <Link
        href={`/guide/blog/${post.slug}`}
        className="group block rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-6 md:p-8 hover-lift hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-lg hover:shadow-stone-100/80 dark:hover:shadow-stone-950/50"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-stone-400 dark:text-stone-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="text-xs text-stone-300 dark:text-stone-600">&middot;</span>
          <span className="text-xs text-stone-400 dark:text-stone-500">{post.author}</span>
        </div>
        <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors mb-2">
          {post.title}
        </h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-800 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
