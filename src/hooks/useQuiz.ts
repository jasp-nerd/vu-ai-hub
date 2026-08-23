'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import type { QuizQuestion } from '../types';
import { track } from '../lib/analytics';

export interface ShuffledQuestion extends QuizQuestion {
  /** The shuffled option labels (display order) */
  shuffledOptions: string[];
  /** Maps shuffled index → original index (so we can check correctness) */
  shuffledCorrectIndex: number;
}

export type QuizMode = 'config' | 'quiz' | 'results' | 'review';

export interface QuizConfig {
  selectedLectures: Set<number>;
  selectedCategories: Set<string>;
  questionCount: number;
  timerEnabled: boolean;
  timerSeconds: number;
}

interface AnswerRecord {
  selected: number | null;
  correct: boolean;
  timedOut?: boolean;
}

export interface LectureResult {
  lectureNumber: number;
  lectureName: string;
  correct: number;
  total: number;
}

export interface CategoryResult {
  category: string;
  correct: number;
  total: number;
}

interface QuizState {
  mode: QuizMode;
  currentIndex: number;
  selectedAnswer: number | null;
  revealed: boolean;
  score: number;
  finished: boolean;
  answers: AnswerRecord[];
  seed: number;
  streak: number;
  bestStreak: number;
  timeLeft: number | null;
  reviewIndex: number;
  config: QuizConfig;
}

function shuffle<T>(array: T[]): T[] {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleQuestion(q: QuizQuestion): ShuffledQuestion {
  const indices = q.options.map((_, i) => i);
  const shuffledIndices = shuffle(indices);
  return {
    ...q,
    shuffledOptions: shuffledIndices.map((i) => q.options[i]),
    shuffledCorrectIndex: shuffledIndices.indexOf(q.correctIndex),
  };
}

/** Extract unique lectures from questions */
export function getLectures(questions: QuizQuestion[]): { num: number; name: string }[] {
  const map = new Map<number, string>();
  for (const q of questions) {
    if (q.lectureNumber != null && !map.has(q.lectureNumber)) {
      map.set(q.lectureNumber, q.lectureName ?? `Lecture ${q.lectureNumber}`);
    }
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a - b)
    .map(([num, name]) => ({ num, name }));
}

/** Extract unique categories from questions */
export function getCategories(questions: QuizQuestion[]): string[] {
  const set = new Set<string>();
  for (const q of questions) {
    if (q.category) set.add(q.category);
  }
  return Array.from(set);
}

export function useQuiz(questions: QuizQuestion[], courseId: string) {
  const hasLectureData = useMemo(() => questions.some((q) => q.lectureNumber != null), [questions]);
  const hasCategoryData = useMemo(() => questions.some((q) => q.category != null), [questions]);
  const hasMetadata = hasLectureData || hasCategoryData;

  const lectures = useMemo(() => getLectures(questions), [questions]);
  const categories = useMemo(() => getCategories(questions), [questions]);

  const [state, setState] = useState<QuizState>(() => ({
    mode: hasMetadata ? 'config' : 'quiz',
    currentIndex: 0,
    selectedAnswer: null,
    revealed: false,
    score: 0,
    finished: false,
    answers: [],
    seed: 0,
    streak: 0,
    bestStreak: 0,
    timeLeft: null,
    reviewIndex: 0,
    config: {
      selectedLectures: new Set(lectures.map((l) => l.num)),
      selectedCategories: new Set(categories),
      questionCount: 20,
      timerEnabled: false,
      timerSeconds: 30,
    },
  }));

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Filter and shuffle questions based on config
  const filteredQuestions = useMemo(() => {
    let pool = [...questions];

    if (hasLectureData && state.config.selectedLectures.size > 0) {
      pool = pool.filter((q) => q.lectureNumber != null && state.config.selectedLectures.has(q.lectureNumber));
    }
    if (hasCategoryData && state.config.selectedCategories.size > 0) {
      pool = pool.filter((q) => q.category != null && state.config.selectedCategories.has(q.category));
    }

    return pool;
  }, [questions, state.config.selectedLectures, state.config.selectedCategories, hasLectureData, hasCategoryData]);

  const shuffledQuestions = useMemo(() => {
    let pool = shuffle(filteredQuestions);
    if (state.config.questionCount > 0 && state.config.questionCount < pool.length) {
      pool = pool.slice(0, state.config.questionCount);
    }
    return pool.map(shuffleQuestion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredQuestions, state.seed]);

  const currentQuestion = shuffledQuestions[state.currentIndex] as ShuffledQuestion | undefined;
  const reviewQuestion = shuffledQuestions[state.reviewIndex] as ShuffledQuestion | undefined;

  // Timer effect
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (state.mode === 'quiz' && state.config.timerEnabled && !state.revealed && state.timeLeft != null && state.timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setState((s) => {
          if (s.timeLeft != null && s.timeLeft <= 1) {
            // Time's up — auto-reveal
            return {
              ...s,
              timeLeft: 0,
              revealed: true,
              streak: 0,
              answers: [...s.answers, { selected: null, correct: false, timedOut: true }],
            };
          }
          return { ...s, timeLeft: s.timeLeft != null ? s.timeLeft - 1 : null };
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [state.mode, state.config.timerEnabled, state.revealed, state.currentIndex]);

  // Compute results by lecture
  const resultsByLecture = useMemo((): LectureResult[] => {
    if (!hasLectureData || state.mode !== 'results') return [];
    const map = new Map<number, LectureResult>();
    shuffledQuestions.forEach((q, i) => {
      if (q.lectureNumber == null || i >= state.answers.length) return;
      const key = q.lectureNumber;
      if (!map.has(key)) {
        map.set(key, { lectureNumber: key, lectureName: q.lectureName ?? `Lecture ${key}`, correct: 0, total: 0 });
      }
      const r = map.get(key)!;
      r.total++;
      if (state.answers[i]?.correct) r.correct++;
    });
    return Array.from(map.values()).sort((a, b) => a.lectureNumber - b.lectureNumber);
  }, [shuffledQuestions, state.answers, state.mode, hasLectureData]);

  // Compute results by category
  const resultsByCategory = useMemo((): CategoryResult[] => {
    if (!hasCategoryData || state.mode !== 'results') return [];
    const map = new Map<string, CategoryResult>();
    shuffledQuestions.forEach((q, i) => {
      if (!q.category || i >= state.answers.length) return;
      if (!map.has(q.category)) {
        map.set(q.category, { category: q.category, correct: 0, total: 0 });
      }
      const r = map.get(q.category)!;
      r.total++;
      if (state.answers[i]?.correct) r.correct++;
    });
    return Array.from(map.values());
  }, [shuffledQuestions, state.answers, state.mode, hasCategoryData]);

  const selectAnswer = useCallback((index: number) => {
    setState((s) => (s.revealed ? s : { ...s, selectedAnswer: index }));
  }, []);

  const revealAnswer = useCallback(() => {
    setState((s) => {
      if (s.revealed || s.selectedAnswer === null) return s;
      const q = shuffledQuestions[s.currentIndex];
      const isCorrect = s.selectedAnswer === q.shuffledCorrectIndex;
      const newStreak = isCorrect ? s.streak + 1 : 0;
      return {
        ...s,
        revealed: true,
        score: isCorrect ? s.score + 1 : s.score,
        streak: newStreak,
        bestStreak: Math.max(s.bestStreak, newStreak),
        answers: [...s.answers, { selected: s.selectedAnswer, correct: isCorrect }],
      };
    });
    if (timerRef.current) clearInterval(timerRef.current);
  }, [shuffledQuestions]);

  const nextQuestion = useCallback(() => {
    // The final "See results" click is the only completion signal — results
    // are gone on reload, so this event is the only record of the run.
    if (state.currentIndex + 1 >= shuffledQuestions.length) {
      track('quiz_completed', {
        course_id: courseId,
        score: state.score,
        total: shuffledQuestions.length,
        best_streak: state.bestStreak,
      });
    }
    setState((s) => {
      const nextIndex = s.currentIndex + 1;
      if (nextIndex >= shuffledQuestions.length) {
        return { ...s, finished: true, mode: 'results' as QuizMode };
      }
      return {
        ...s,
        currentIndex: nextIndex,
        selectedAnswer: null,
        revealed: false,
        timeLeft: s.config.timerEnabled ? s.config.timerSeconds : null,
      };
    });
  }, [shuffledQuestions.length, state.currentIndex, state.score, state.bestStreak, courseId]);

  const restart = useCallback(() => {
    // "Try again" is a fresh run with the same setup.
    track('quiz_started', {
      course_id: courseId,
      question_count: shuffledQuestions.length,
      timer_enabled: state.config.timerEnabled,
    });
    setState((s) => ({
      ...s,
      mode: 'quiz',
      currentIndex: 0,
      selectedAnswer: null,
      revealed: false,
      score: 0,
      finished: false,
      answers: [],
      seed: Date.now(),
      streak: 0,
      bestStreak: 0,
      timeLeft: s.config.timerEnabled ? s.config.timerSeconds : null,
      reviewIndex: 0,
    }));
  }, [courseId, shuffledQuestions.length, state.config.timerEnabled]);

  const goToConfig = useCallback(() => {
    setState((s) => ({
      ...s,
      mode: 'config',
      currentIndex: 0,
      selectedAnswer: null,
      revealed: false,
      score: 0,
      finished: false,
      answers: [],
      streak: 0,
      bestStreak: 0,
      timeLeft: null,
      reviewIndex: 0,
    }));
  }, []);

  const startQuiz = useCallback(() => {
    track('quiz_started', {
      course_id: courseId,
      question_count: shuffledQuestions.length,
      timer_enabled: state.config.timerEnabled,
    });
    setState((s) => ({
      ...s,
      mode: 'quiz',
      currentIndex: 0,
      selectedAnswer: null,
      revealed: false,
      score: 0,
      finished: false,
      answers: [],
      seed: Date.now(),
      streak: 0,
      bestStreak: 0,
      timeLeft: s.config.timerEnabled ? s.config.timerSeconds : null,
      reviewIndex: 0,
    }));
  }, [courseId, shuffledQuestions.length, state.config.timerEnabled]);

  const updateConfig = useCallback((partial: Partial<QuizConfig>) => {
    setState((s) => ({ ...s, config: { ...s.config, ...partial } }));
  }, []);

  const goToReview = useCallback(() => {
    setState((s) => ({ ...s, mode: 'review', reviewIndex: 0 }));
  }, []);

  const setReviewIndex = useCallback((index: number) => {
    setState((s) => ({ ...s, reviewIndex: Math.max(0, Math.min(index, shuffledQuestions.length - 1)) }));
  }, [shuffledQuestions.length]);

  const goToResults = useCallback(() => {
    setState((s) => ({ ...s, mode: 'results' }));
  }, []);

  return {
    mode: state.mode,
    currentIndex: state.currentIndex,
    selectedAnswer: state.selectedAnswer,
    revealed: state.revealed,
    score: state.score,
    finished: state.finished,
    answers: state.answers,
    streak: state.streak,
    bestStreak: state.bestStreak,
    timeLeft: state.timeLeft,
    reviewIndex: state.reviewIndex,
    config: state.config,
    currentQuestion,
    reviewQuestion,
    totalQuestions: shuffledQuestions.length,
    filteredCount: filteredQuestions.length,
    hasMetadata,
    hasLectureData,
    hasCategoryData,
    lectures,
    categories,
    resultsByLecture,
    resultsByCategory,
    shuffledQuestions,
    selectAnswer,
    revealAnswer,
    nextQuestion,
    restart,
    goToConfig,
    startQuiz,
    updateConfig,
    goToReview,
    setReviewIndex,
    goToResults,
  };
}
