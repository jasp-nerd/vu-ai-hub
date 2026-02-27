import {
  getCourseBySlug,
  getTipsForCourse,
  getQuizQuestionsForCourse,
  getResourcesForCourse,
} from './courseService';
import type { Course, CourseTip, QuizQuestion, Resource } from '../types';

function formatCourseMetadata(course: Course): string {
  const lines = [
    `# ${course.name}`,
    `Course code: ${course.code}`,
    `Year ${course.year}, Period ${course.period}`,
    course.credits ? `Credits: ${course.credits}` : '',
    `Difficulty: ${course.difficulty}/5`,
    `Tags: ${course.tags.join(', ')}`,
  ];
  if (course.workgroupInfo) {
    lines.push(
      `Workgroup: ${course.workgroupInfo.mandatory ? 'Mandatory attendance' : 'Optional attendance'} — ${course.workgroupInfo.detail}`
    );
  }
  return lines.filter(Boolean).join('\n');
}

function formatTips(tips: CourseTip[]): string {
  const tipLines = tips.map((t, i) => `${i + 1}. ${t.content}`);
  return `## Study Tips from Students\n${tipLines.join('\n')}`;
}

function formatQuizzes(quizzes: QuizQuestion[]): string {
  const quizLines = quizzes.map((q, i) => {
    const options = q.options
      .map(
        (opt, j) =>
          `  ${String.fromCharCode(65 + j)}) ${opt}${j === q.correctIndex ? ' [CORRECT]' : ''}`
      )
      .join('\n');
    return `### Q${i + 1} (${q.difficulty}): ${q.question}\n${options}\nExplanation: ${q.explanation}`;
  });
  return `## Practice Quiz Questions with Answers\n${quizLines.join('\n\n')}`;
}

function formatResources(resources: Resource[]): string {
  const resourceLines = resources.map(
    (r) => `- **${r.title}** (${r.type}): ${r.description}`
  );
  return `## Recommended Resources\n${resourceLines.join('\n')}`;
}

export function buildCourseContext(slug: string): string | null {
  const course = getCourseBySlug(slug);
  if (!course) return null;

  const tips = getTipsForCourse(course.id);
  const quizzes = getQuizQuestionsForCourse(course.id);
  const resources = getResourcesForCourse(course.id);

  const summaryResources = resources.filter(
    (r) => r.type === 'summary' && r.markdownContent
  );
  const nonSummaryResources = resources.filter(
    (r) => !(r.type === 'summary' && r.markdownContent)
  );

  const sections: string[] = [];

  sections.push(formatCourseMetadata(course));

  if (course.overview) {
    sections.push(`## Course Overview\n${course.overview}`);
  }
  if (course.objectives) {
    sections.push(`## Learning Objectives\n${course.objectives}`);
  }
  if (course.assessment || course.gradingStructure) {
    sections.push(
      `## Assessment\n${course.assessment || course.gradingStructure}`
    );
  }
  if (course.teachingMethods) {
    sections.push(`## Teaching Methods\n${course.teachingMethods}`);
  }
  if (course.literature) {
    sections.push(`## Literature\n${course.literature}`);
  }
  if (course.prerequisites) {
    sections.push(`## Prerequisites\n${course.prerequisites}`);
  }
  if (tips.length > 0) {
    sections.push(formatTips(tips));
  }
  if (quizzes.length > 0) {
    sections.push(formatQuizzes(quizzes));
  }
  if (nonSummaryResources.length > 0) {
    sections.push(formatResources(nonSummaryResources));
  }
  for (const summary of summaryResources) {
    sections.push(`## Study Summary: ${summary.title}\n${summary.markdownContent}`);
  }

  return sections.join('\n\n---\n\n');
}
