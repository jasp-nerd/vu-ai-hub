import { courses } from '../data/courses';
import { tips } from '../data/tips';
import { quizQuestions } from '../data/quizzes';
import { resources } from '../data/resources';
import { practiceQuestions } from '../data/practiceQuestions';
import { essayPrompts } from '../data/essayPrompts';
import { courseGradeStructures, type CourseGradeStructure } from '../data/gradeComponents';
import type { Course, CourseTip, QuizQuestion, Resource, PracticeQuestion, EssayPrompt } from '../types';

export function getCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByYear(year: 1 | 2 | 3): Course[] {
  return courses.filter((c) => c.year === year).sort((a, b) => a.period - b.period);
}

export function getCoursesByPeriod(period: number): Course[] {
  return courses.filter((c) => c.period === period || c.period === 0);
}

export function getTipsForCourse(courseId: string): CourseTip[] {
  return tips.filter((t) => t.courseId === courseId);
}

export function getQuizQuestionsForCourse(courseId: string): QuizQuestion[] {
  return quizQuestions.filter((q) => q.courseId === courseId);
}

export function getResourcesForCourse(courseId: string): Resource[] {
  return resources.filter((r) => r.courseId === courseId);
}

export function getPracticeQuestionsForCourse(courseId: string): PracticeQuestion[] {
  return practiceQuestions.filter((q) => q.courseId === courseId);
}

export function getEssayPromptsForCourse(courseId: string): EssayPrompt[] {
  return essayPrompts.filter((p) => p.courseId === courseId);
}

export function getGradeStructureForCourse(courseId: string): CourseGradeStructure | undefined {
  return courseGradeStructures.find((g) => g.courseId === courseId);
}
