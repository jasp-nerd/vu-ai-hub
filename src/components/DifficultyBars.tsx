import { DIFFICULTY_LABELS } from '../constants';

/**
 * Presentational difficulty bars (5 capsules + label). Shared by the course card
 * and the course detail header. `value` is 0-5 (0 = unknown/unrated).
 */
export default function DifficultyBars({
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
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-5 rounded-full ${
            value === 0
              ? 'bg-stone-200 dark:bg-stone-700'
              : i < value
                ? 'bg-vu-blue dark:bg-vu-blue-light'
                : 'bg-stone-100 dark:bg-stone-800'
          }`}
        />
      ))}
      <span className="ml-1.5 text-xs text-stone-400 dark:text-stone-500">
        {DIFFICULTY_LABELS[value] ?? DIFFICULTY_LABELS[0]}
      </span>
      {showCaption && crowdSourced && count > 0 && (
        <span className="ml-1 text-[10px] text-stone-300 dark:text-stone-600">
          · {count} student{count === 1 ? '' : 's'}
        </span>
      )}
    </div>
  );
}
