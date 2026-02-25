import type { QuizQuestion } from '../types';
import { useQuiz } from '../hooks/useQuiz';

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const quiz = useQuiz(questions);

  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-8 text-center">
        <p className="text-stone-400 dark:text-stone-500 text-sm">
          No quiz questions available for this course yet. Check back later!
        </p>
      </div>
    );
  }

  if (quiz.finished) {
    return (
      <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950/50 mb-4">
          <span className="font-display text-2xl font-bold text-vu-blue dark:text-vu-blue-light">
            {quiz.score}/{quiz.totalQuestions}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
          Quiz complete!
        </h3>
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-6">
          You got {quiz.score} out of {quiz.totalQuestions} questions correct.
          {quiz.score === quiz.totalQuestions
            ? ' Perfect score!'
            : quiz.score >= quiz.totalQuestions * 0.7
              ? ' Great job!'
              : ' Keep practicing!'}
        </p>
        <button
          onClick={quiz.restart}
          className="px-5 py-2.5 rounded-xl bg-vu-blue text-white text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          Try again
        </button>
      </div>
    );
  }

  const q = quiz.currentQuestion!;

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
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-medium text-stone-400 dark:text-stone-500">
            Question {quiz.currentIndex + 1} of {quiz.totalQuestions}
          </span>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-md ${q.difficulty === 'easy'
                ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
                : q.difficulty === 'medium'
                  ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400'
                  : 'bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400'
              }`}
          >
            {q.difficulty}
          </span>
        </div>

        {/* Question */}
        <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100 mb-6">
          {q.question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {q.shuffledOptions.map((option, i) => {
            let optionStyle =
              'border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-600 hover:bg-stone-50 dark:hover:bg-stone-800';

            if (quiz.selectedAnswer === i && !quiz.revealed) {
              optionStyle = 'border-vu-blue dark:border-vu-blue-light bg-blue-50/50 dark:bg-blue-950/30 ring-1 ring-vu-blue/20 dark:ring-vu-blue-light/20';
            }
            if (quiz.revealed) {
              if (i === q.shuffledCorrectIndex) {
                optionStyle =
                  'border-emerald-300 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-950/30 ring-1 ring-emerald-200 dark:ring-emerald-800';
              } else if (i === quiz.selectedAnswer) {
                optionStyle =
                  'border-red-300 dark:border-red-700 bg-red-50/50 dark:bg-red-950/30 ring-1 ring-red-200 dark:ring-red-800';
              } else {
                optionStyle = 'border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/50 opacity-50';
              }
            }

            return (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                disabled={quiz.revealed}
                className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all ${optionStyle}`}
              >
                <span className="inline-flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 text-xs font-medium shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-stone-700 dark:text-stone-300">{option}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {quiz.revealed && (
          <div className="rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700/60 p-4 mb-6">
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              <span className="font-medium text-stone-900 dark:text-stone-100">Explanation: </span>
              {q.explanation}
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
              {quiz.currentIndex + 1 < quiz.totalQuestions
                ? 'Next question'
                : 'See results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  function selectAnswer(index: number) {
    quiz.selectAnswer(index);
  }
}
