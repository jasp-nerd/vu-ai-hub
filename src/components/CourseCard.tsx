import { Link } from 'react-router-dom';
import type { Course } from '../types';

const difficultyLabel = ['', 'Easy', 'Moderate', 'Challenging', 'Hard', 'Very Hard'];

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group block rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-6 transition-all hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-lg hover:shadow-stone-100/80 dark:hover:shadow-stone-950/50 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
          {course.code}
        </span>
        <span className="text-xs text-stone-400 dark:text-stone-500">
          P{course.period}
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
        <div className="flex gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-5 rounded-full ${
                i < course.difficulty ? 'bg-vu-blue dark:bg-vu-blue-light' : 'bg-stone-100 dark:bg-stone-800'
              }`}
            />
          ))}
          <span className="ml-1.5 text-xs text-stone-400 dark:text-stone-500">
            {difficultyLabel[course.difficulty]}
          </span>
        </div>
        <div className="flex gap-1.5">
          {course.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-800 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
