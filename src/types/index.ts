export interface Course {
  id: string;
  slug: string;
  name: string;
  code: string;
  year: 1 | 2 | 3;
  period: number;
  credits?: string;
  description: string;
  overview: string;
  objectives?: string;
  gradingStructure?: string;
  assessment?: string;
  teachingMethods?: string;
  literature?: string;
  prerequisites?: string;
  difficulty: 0 | 1 | 2 | 3 | 4 | 5;
  tags: string[];
  specialisation?: 'intelligent_systems' | 'socially_aware_computing' | ('intelligent_systems' | 'socially_aware_computing')[];
  workgroupInfo?: {
    mandatory: boolean;
    maxAbsences?: number;
    detail: string;
  };
  /** Optional banner image path (relative to public/) */
  image?: string;
  /** Link to the official VU study guide page for this course */
  studyGuideUrl?: string;
}

export interface CourseTip {
  id: string;
  courseId: string;
  content: string;
  author: string;
}

export interface QuizQuestion {
  id: string;
  courseId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Resource {
  id: string;
  courseId: string;
  title: string;
  description: string;
  url: string;
  type: 'video' | 'article' | 'tool' | 'pdf' | 'external-quiz' | 'summary';
  tags: string[];
  /** Inline markdown content for summary-type resources (rendered on page) */
  markdownContent?: string;
  /** Author/attribution shown on featured resources */
  author?: string;
}

export interface PracticeQuestion {
  id: string;
  courseId: string;
  topic: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface EssayPrompt {
  id: string;
  courseId: string;
  category: 'A' | 'B' | 'C';
  topic: string;
  prompt: string;
  guidance: string;
  wordCountHint?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProgramInfo {
  title: string;
  description: string;
  sections: {
    heading: string;
    content: string;
  }[];
  usefulLinks: {
    label: string;
    url: string;
    description: string;
  }[];
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}
