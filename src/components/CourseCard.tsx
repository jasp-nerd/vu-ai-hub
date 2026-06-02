'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Course } from '../types';
import DifficultyBars from './DifficultyBars';
import { useCourseDifficulty, resolveDifficulty } from '../lib/difficulty';

export default function CourseCard({ course, style }: { course: Course; style?: React.CSSProperties }) {
  const agg = useCourseDifficulty(course.id);
  const difficulty = resolveDifficulty(course.difficulty, agg);
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden hover-lift hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-lg hover:shadow-stone-100/80 dark:hover:shadow-stone-950/50"
      style={style}
    >
      {course.image && (
        <div className="relative w-full aspect-[5/2] bg-stone-100 dark:bg-stone-800/50 overflow-hidden">
          <Image
            src={course.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white dark:from-stone-900 to-transparent pointer-events-none" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
            {course.code}
          </span>
          <span className="text-xs text-stone-400 dark:text-stone-500">
            {course.period ? `P${course.period}` : 'Full Year'}
            {course.credits ? ` · ${course.credits}` : ''}
          </span>
        </div>
        <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors mb-2">
          {course.name}
        </h3>
        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2 mb-4">
          {course.description}
        </p>
        <div className="flex items-center justify-between">
          <DifficultyBars
            value={difficulty.value}
            count={difficulty.count}
            crowdSourced={difficulty.crowdSourced}
          />
        </div>
      </div>
    </Link>
  );
}
