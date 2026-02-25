import { useState, useCallback, useMemo } from 'react';
import type { QuizQuestion } from '../types';

interface ShuffledQuestion extends QuizQuestion {
  /** The shuffled option labels (display order) */
  shuffledOptions: string[];
  /** Maps shuffled index → original index (so we can check correctness) */
  shuffledCorrectIndex: number;
}

interface QuizState {
  currentIndex: number;
  selectedAnswer: number | null;
  revealed: boolean;
  score: number;
  finished: boolean;
  answers: (number | null)[];
  /** Seed that changes on restart to trigger a fresh shuffle */
  seed: number;
}

/**
 * Fisher-Yates shuffle (returns a new array)
 */
function shuffle<T>(array: T[]): T[] {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Takes a question with a fixed correctIndex, shuffles its options, and
 * returns a new object with `shuffledOptions` and `shuffledCorrectIndex`.
 */
function shuffleQuestion(q: QuizQuestion): ShuffledQuestion {
  // Create index array [0, 1, 2, 3, ...] and shuffle it
  const indices = q.options.map((_, i) => i);
  const shuffledIndices = shuffle(indices);

  return {
    ...q,
    shuffledOptions: shuffledIndices.map((i) => q.options[i]),
    shuffledCorrectIndex: shuffledIndices.indexOf(q.correctIndex),
  };
}

export function useQuiz(questions: QuizQuestion[]) {
  const [state, setState] = useState<QuizState>({
    currentIndex: 0,
    selectedAnswer: null,
    revealed: false,
    score: 0,
    finished: false,
    answers: [],
    seed: 0,
  });

  // Shuffle question order AND each question's options.
  // Re-shuffles whenever `seed` changes (i.e. on restart).
  const shuffledQuestions = useMemo(() => {
    return shuffle(questions).map(shuffleQuestion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, state.seed]);

  const currentQuestion = shuffledQuestions[state.currentIndex] as
    | ShuffledQuestion
    | undefined;

  const selectAnswer = useCallback((index: number) => {
    setState((s) => (s.revealed ? s : { ...s, selectedAnswer: index }));
  }, []);

  const revealAnswer = useCallback(() => {
    setState((s) => {
      if (s.revealed || s.selectedAnswer === null) return s;
      const q = shuffledQuestions[s.currentIndex];
      const isCorrect = s.selectedAnswer === q.shuffledCorrectIndex;
      return {
        ...s,
        revealed: true,
        score: isCorrect ? s.score + 1 : s.score,
        answers: [...s.answers, s.selectedAnswer],
      };
    });
  }, [shuffledQuestions]);

  const nextQuestion = useCallback(() => {
    setState((s) => {
      const nextIndex = s.currentIndex + 1;
      if (nextIndex >= shuffledQuestions.length) {
        return { ...s, finished: true };
      }
      return {
        ...s,
        currentIndex: nextIndex,
        selectedAnswer: null,
        revealed: false,
      };
    });
  }, [shuffledQuestions.length]);

  const restart = useCallback(() => {
    setState({
      currentIndex: 0,
      selectedAnswer: null,
      revealed: false,
      score: 0,
      finished: false,
      answers: [],
      seed: Date.now(), // new seed → triggers a fresh shuffle
    });
  }, []);

  return {
    ...state,
    currentQuestion,
    totalQuestions: shuffledQuestions.length,
    selectAnswer,
    revealAnswer,
    nextQuestion,
    restart,
  };
}
