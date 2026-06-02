import { DIFFICULTY_LABELS } from '../constants';

const STAR_PATH =
  'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z';

/**
 * Display-only difficulty as 5 stars (filled blue up to `value`, blank outline
 * otherwise). Used on course cards. `value` is 0-5 (0 = unrated → all blank).
 */
export default function DifficultyStars({
  value,
  count = 0,
  crowdSourced = false,
  showCaption = false,
}: {
  value: number;
  count?: number;
  crowdSourced?: boolean;
  showCaption?: boolean;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = value > 0 && i < value;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={`w-3.5 h-3.5 ${
              filled ? 'text-vu-blue dark:text-vu-blue-light' : 'text-stone-300 dark:text-stone-600'
            }`}
            fill={filled ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={filled ? 0 : 1.5}
            aria-hidden="true"
          >
            <path strokeLinejoin="round" d={STAR_PATH} />
          </svg>
        );
      })}
      <span className="ml-1.5 text-xs text-stone-400 dark:text-stone-500">
        {DIFFICULTY_LABELS[value] ?? DIFFICULTY_LABELS[0]}
      </span>
      {showCaption && crowdSourced && count > 0 && (
        <span className="ml-1 text-[10px] text-stone-300 dark:text-stone-600">· {count}</span>
      )}
    </div>
  );
}
