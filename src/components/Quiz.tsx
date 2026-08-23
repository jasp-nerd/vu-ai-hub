'use client';

import type { QuizQuestion } from '../types';
import { useQuiz } from '../hooks/useQuiz';
import type { ShuffledQuestion } from '../hooks/useQuiz';
import QuizConfig from './QuizConfig';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const Md = ({ children }: { children: string }) => (
  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={{ p: ({ ...props }) => <span {...props} /> }}>
    {children}
  </ReactMarkdown>
);

const MdBlock = ({ children }: { children: string }) => (
  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
    {children}
  </ReactMarkdown>
);

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const cls =
    difficulty === 'easy'
      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
      : difficulty === 'medium'
        ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400'
        : 'bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400';
  return <span className={`text-xs font-medium px-2 py-1 rounded-md ${cls}`}>{difficulty}</span>;
}

function OptionButton({
  label,
  text,
  selected,
  revealed,
  isCorrect,
  isSelectedAnswer,
  onClick,
  disabled,
}: {
  label: string;
  text: string;
  selected: boolean;
  revealed: boolean;
  isCorrect: boolean;
  isSelectedAnswer: boolean;
  onClick: () => void;
  disabled: boolean;
}) {
  let optionStyle =
    'border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-600 hover:bg-stone-50 dark:hover:bg-stone-800';

  if (selected && !revealed) {
    optionStyle = 'border-vu-blue dark:border-vu-blue-light bg-blue-50/50 dark:bg-blue-950/30 ring-1 ring-vu-blue/20 dark:ring-vu-blue-light/20';
  }
  if (revealed) {
    if (isCorrect) {
      optionStyle = 'border-emerald-300 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-950/30 ring-1 ring-emerald-200 dark:ring-emerald-800';
    } else if (isSelectedAnswer) {
      optionStyle = 'border-red-300 dark:border-red-700 bg-red-50/50 dark:bg-red-950/30 ring-1 ring-red-200 dark:ring-red-800';
    } else {
      optionStyle = 'border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/50 opacity-50';
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all ${optionStyle}`}
    >
      <span className="inline-flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 text-xs font-medium shrink-0">
          {revealed && isCorrect ? '\u2713' : revealed && isSelectedAnswer ? '\u2717' : label}
        </span>
        <span className="text-stone-700 dark:text-stone-300">
          <Md>{text}</Md>
        </span>
      </span>
    </button>
  );
}

export default function Quiz({ questions, courseId }: { questions: QuizQuestion[]; courseId: string }) {
  const quiz = useQuiz(questions, courseId);

  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-8 text-center">
        <p className="text-stone-400 dark:text-stone-500 text-sm">
          No quiz questions available for this course yet. Check back later!
        </p>
      </div>
    );
  }

  // ─── CONFIG MODE ────────────────────────────────────
  if (quiz.mode === 'config') {
    return (
      <QuizConfig
        config={quiz.config}
        lectures={quiz.lectures}
        categories={quiz.categories}
        filteredCount={quiz.filteredCount}
        hasLectureData={quiz.hasLectureData}
        hasCategoryData={quiz.hasCategoryData}
        onUpdate={quiz.updateConfig}
        onStart={quiz.startQuiz}
      />
    );
  }

  // ─── RESULTS MODE ──────────────────────────────────
  if (quiz.mode === 'results') {
    const pct = quiz.totalQuestions > 0 ? Math.round((quiz.score / quiz.totalQuestions) * 100) : 0;
    return (
      <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden">
        <div className="p-6 md:p-8">
          {/* Score */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-950/50 mb-4">
              <span className="font-display text-2xl font-bold text-vu-blue dark:text-vu-blue-light">
                {pct}%
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100 mb-1">
              Quiz complete!
            </h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm">
              {quiz.score} / {quiz.totalQuestions} correct
              {quiz.bestStreak > 1 && <span className="ml-2 text-amber-500">Best streak: {quiz.bestStreak}</span>}
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl bg-stone-50 dark:bg-stone-800/50 p-3 text-center">
              <div className="text-lg font-bold text-stone-900 dark:text-stone-100">{quiz.score}</div>
              <div className="text-[11px] text-stone-400 dark:text-stone-500">Correct</div>
            </div>
            <div className="rounded-xl bg-stone-50 dark:bg-stone-800/50 p-3 text-center">
              <div className="text-lg font-bold text-stone-900 dark:text-stone-100">{quiz.totalQuestions - quiz.score}</div>
              <div className="text-[11px] text-stone-400 dark:text-stone-500">Incorrect</div>
            </div>
            <div className="rounded-xl bg-stone-50 dark:bg-stone-800/50 p-3 text-center">
              <div className="text-lg font-bold text-amber-500">{quiz.bestStreak}</div>
              <div className="text-[11px] text-stone-400 dark:text-stone-500">Best Streak</div>
            </div>
          </div>

          {/* Per-lecture breakdown */}
          {quiz.resultsByLecture.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
                By Lecture
              </h4>
              <div className="space-y-1.5">
                {quiz.resultsByLecture.map((r) => {
                  const lecPct = r.total > 0 ? Math.round((r.correct / r.total) * 100) : 0;
                  return (
                    <div key={r.lectureNumber} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-stone-50 dark:bg-stone-800/30">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-vu-blue/10 dark:bg-vu-blue-light/10 text-vu-blue dark:text-vu-blue-light text-[10px] font-bold shrink-0">
                        {r.lectureNumber}
                      </span>
                      <span className="text-sm text-stone-600 dark:text-stone-400 flex-1 truncate">
                        {r.lectureName}
                      </span>
                      <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                        {r.correct}/{r.total}
                      </span>
                      <div className="w-16 h-1.5 rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${lecPct >= 70 ? 'bg-emerald-500' : lecPct >= 40 ? 'bg-amber-500' : 'bg-red-500'}`}
                          style={{ width: `${lecPct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Per-category breakdown */}
          {quiz.resultsByCategory.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
                By Category
              </h4>
              <div className="flex flex-wrap gap-3">
                {quiz.resultsByCategory.map((r) => {
                  const catPct = r.total > 0 ? Math.round((r.correct / r.total) * 100) : 0;
                  return (
                    <div key={r.category} className="flex-1 min-w-[120px] rounded-xl bg-stone-50 dark:bg-stone-800/30 p-3 text-center">
                      <div className="text-lg font-bold text-stone-900 dark:text-stone-100">{catPct}%</div>
                      <div className="text-[11px] text-stone-400 dark:text-stone-500">{r.category}</div>
                      <div className="text-[10px] text-stone-400 dark:text-stone-600">{r.correct}/{r.total}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={quiz.goToReview}
              className="px-5 py-2.5 rounded-xl border border-stone-200/60 dark:border-stone-700/60 text-stone-600 dark:text-stone-400 text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-800 transition-all"
            >
              Review answers
            </button>
            <button
              onClick={quiz.restart}
              className="px-5 py-2.5 rounded-xl bg-vu-blue text-white text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              Try again
            </button>
            {quiz.hasMetadata && (
              <button
                onClick={quiz.goToConfig}
                className="px-5 py-2.5 rounded-xl border border-stone-200/60 dark:border-stone-700/60 text-stone-600 dark:text-stone-400 text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-800 transition-all"
              >
                New settings
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ─── REVIEW MODE ───────────────────────────────────
  if (quiz.mode === 'review') {
    const rq = quiz.reviewQuestion;
    const answer = quiz.answers[quiz.reviewIndex];
    if (!rq) return null;

    return (
      <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={quiz.goToResults}
              className="text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
            >
              &larr; Back to results
            </button>
            <span className="text-xs text-stone-400 dark:text-stone-500">
              Review {quiz.reviewIndex + 1} / {quiz.totalQuestions}
            </span>
          </div>

          {/* Result indicator */}
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium mb-4 ${
            answer?.correct
              ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
              : answer?.timedOut
                ? 'bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400'
                : 'bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400'
          }`}>
            {answer?.correct ? '\u2713 Correct' : answer?.timedOut ? '\u23F1 Timed out' : '\u2717 Incorrect'}
          </div>

          {/* Question */}
          <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100 mb-6">
            <MdBlock>{rq.question}</MdBlock>
          </h3>

          {/* Options (revealed state) */}
          <div className="space-y-3 mb-6">
            {rq.shuffledOptions.map((option, i) => (
              <OptionButton
                key={i}
                label={String.fromCharCode(65 + i)}
                text={option}
                selected={answer?.selected === i}
                revealed={true}
                isCorrect={i === rq.shuffledCorrectIndex}
                isSelectedAnswer={answer?.selected === i}
                onClick={() => {}}
                disabled
              />
            ))}
          </div>

          {/* Explanation */}
          <div className="rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700/60 p-4 mb-6">
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              <span className="font-medium text-stone-900 dark:text-stone-100">Explanation: </span>
              <Md>{rq.explanation}</Md>
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => quiz.setReviewIndex(quiz.reviewIndex - 1)}
              disabled={quiz.reviewIndex === 0}
              className="px-4 py-2 rounded-xl border border-stone-200/60 dark:border-stone-700/60 text-sm text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &larr; Previous
            </button>
            <button
              onClick={() => quiz.setReviewIndex(quiz.reviewIndex + 1)}
              disabled={quiz.reviewIndex >= quiz.totalQuestions - 1}
              className="px-4 py-2 rounded-xl border border-stone-200/60 dark:border-stone-700/60 text-sm text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── QUIZ MODE ─────────────────────────────────────
  const q = quiz.currentQuestion;
  if (!q) return null;

  return (
    <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-stone-100 dark:bg-stone-800">
        <div
          className="h-full bg-vu-blue transition-all duration-300"
          style={{
            width: `${((quiz.currentIndex + 1) / quiz.totalQuestions) * 100}%`,
          }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <span className="text-xs font-medium text-stone-400 dark:text-stone-500">
            Question {quiz.currentIndex + 1} of {quiz.totalQuestions}
          </span>
          <div className="flex items-center gap-2">
            {/* Streak */}
            {quiz.streak >= 2 && (
              <span className="text-xs font-semibold px-2 py-1 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                {quiz.streak} streak
              </span>
            )}
            {/* Timer */}
            {quiz.timeLeft != null && (
              <span
                className={`text-xs font-mono font-medium px-2 py-1 rounded-md ${
                  quiz.timeLeft <= 5
                    ? 'bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400'
                }`}
              >
                {quiz.timeLeft}s
              </span>
            )}
            {/* Topic badge */}
            {q.topic && (
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
                {q.lectureNumber ? `L${q.lectureNumber} ` : ''}{q.topic}
              </span>
            )}
            <DifficultyBadge difficulty={q.difficulty} />
          </div>
        </div>

        {/* Question */}
        <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100 mb-6">
          <MdBlock>{q.question}</MdBlock>
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {q.shuffledOptions.map((option, i) => (
            <OptionButton
              key={i}
              label={String.fromCharCode(65 + i)}
              text={option}
              selected={quiz.selectedAnswer === i}
              revealed={quiz.revealed}
              isCorrect={i === q.shuffledCorrectIndex}
              isSelectedAnswer={quiz.selectedAnswer === i}
              onClick={() => quiz.selectAnswer(i)}
              disabled={quiz.revealed}
            />
          ))}
        </div>

        {/* Explanation */}
        {quiz.revealed && (
          <div className="rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700/60 p-4 mb-6">
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              <span className="font-medium text-stone-900 dark:text-stone-100">Explanation: </span>
              <Md>{q.explanation}</Md>
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3">
          {!quiz.revealed ? (
            <button
              onClick={quiz.revealAnswer}
              disabled={quiz.selectedAnswer === null}
              className="px-5 py-2.5 rounded-xl bg-vu-blue text-white text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-sm disabled:cursor-not-allowed"
            >
              Check answer
            </button>
          ) : (
            <button
              onClick={quiz.nextQuestion}
              className="px-5 py-2.5 rounded-xl bg-vu-blue text-white text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              {quiz.currentIndex + 1 < quiz.totalQuestions ? 'Next question' : 'See results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
