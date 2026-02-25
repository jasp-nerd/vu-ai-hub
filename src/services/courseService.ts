import { courses } from '../data/courses';
import { tips } from '../data/tips';
import { quizQuestions } from '../data/quizzes';
import { resources } from '../data/resources';
import type { Course, CourseTip, QuizQuestion, Resource } from '../types';

export function getCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByYear(year: 1 | 2 | 3): Course[] {
  return courses.filter((c) => c.year === year);
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
