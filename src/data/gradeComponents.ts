/**
 * Grade calculation components for each course.
 * Each component has a name, weight (as fraction of 1.0), and optional minGrade requirement.
 * Components with passFail=true are not weighted — they just need to be completed.
 */

export interface GradeComponent {
  name: string;
  /** Weight as a fraction (0.0–1.0). Set to 0 for pass/fail components. */
  weight: number;
  /** Minimum grade required on this component (if any) */
  minGrade?: number;
  /** If true, this component is pass/fail only (not graded numerically) */
  passFail?: boolean;
}

export interface CourseGradeStructure {
  courseId: string;
  components: GradeComponent[];
  notes?: string;
}

export const courseGradeStructures: CourseGradeStructure[] = [
  // ==================== YEAR 1 ====================
  {
    courseId: 'computational-thinking',
    components: [
      { name: 'Practicum Assignments', weight: 0.45, minGrade: 5.5 },
      { name: 'Group Project', weight: 0.40, minGrade: 5.5 },
      { name: 'Supervised Quizzes (2)', weight: 0.15, minGrade: 5.5 },
    ],
    notes: 'All three parts must average at least 5.5 separately. Assignments and project cannot be redone if failed.',
  },
  {
    courseId: 'intro-ai',
    components: [
      { name: 'Group Project (report + poster)', weight: 0.70 },
      { name: 'Written MCQ Exam', weight: 0.30 },
    ],
  },
  {
    courseId: 'intro-psychology',
    components: [
      { name: 'Multiple-Choice Exam (56 questions)', weight: 1.0 },
    ],
    notes: 'Chance-corrected scoring (cut-off 35/56 = 5.5). One resit opportunity.',
  },
  {
    courseId: 'intelligent-systems',
    components: [
      { name: 'First Partial Exam', weight: 0.35 },
      { name: 'Second Partial Exam', weight: 0.35 },
      { name: 'Practical Assignments', weight: 0.30 },
    ],
    notes: 'All three components must be completed to pass.',
  },
  {
    courseId: 'intro-python-ai',
    components: [
      { name: 'Programming Assignments', weight: 0.10 },
      { name: 'In-Class Quizzes/Participation', weight: 0.10 },
      { name: 'Final Exam', weight: 0.80 },
    ],
    notes: 'Must score at least 5.0 on midterm to take the final exam.',
  },
  {
    courseId: 'project-intelligent-systems',
    components: [
      { name: 'Group Report', weight: 0.60, minGrade: 5.5 },
      { name: 'Individual Test', weight: 0.30, minGrade: 5.5 },
      { name: 'Individual Coding Assignment', weight: 0.10, minGrade: 5.5 },
      { name: 'Peer Review', weight: 0, passFail: true },
    ],
    notes: 'All parts must be at least 5.5. No resit available.',
  },
  {
    courseId: 'logic-sets-ai',
    components: [
      { name: 'Midterm Exam', weight: 0.40, minGrade: 5.0 },
      { name: 'Final Exam', weight: 0.60, minGrade: 5.0 },
    ],
    notes: 'Each exam must be at least 5.0. Overall must be at least 5.5 to pass.',
  },
  {
    courseId: 'modelling-human-behaviour',
    components: [
      { name: 'Assignments', weight: 0.50, minGrade: 5.5 },
      { name: 'Individual Final Exam', weight: 0.50, minGrade: 5.5 },
    ],
    notes: 'Both must be at least 5.5 to pass. One resit for the exam only.',
  },
  {
    courseId: 'academic-writing',
    components: [
      { name: 'Assignment 1 (practice paragraph)', weight: 0, passFail: true },
      { name: 'Assignment 2 (intro + body paragraph)', weight: 0.25 },
      { name: 'Assignment 3 (revised paragraph)', weight: 0, passFail: true },
      { name: 'Assignment 4 (1000-word essay)', weight: 0.75 },
    ],
    notes: 'Assignments 1 and 3 are pass/fail but required. Only assignments 2 and 4 count toward the grade.',
  },
  {
    courseId: 'history-of-ai',
    components: [
      { name: 'Written Exam', weight: 1.0 },
    ],
    notes: 'Bonus available: if average of 4 best assignments is at least 6.0, you start with 2 bonus points on the exam.',
  },
  {
    courseId: 'human-computer-interaction',
    components: [
      { name: 'Written Exam', weight: 0.50, minGrade: 5.5 },
      { name: 'Research Project Report (group)', weight: 0.50, minGrade: 5.5 },
    ],
    notes: 'Must pass both components (at least 5.5 each).',
  },
  {
    courseId: 'applied-programming-ai',
    components: [
      { name: 'Implementation (team)', weight: 0.60 },
      { name: 'Participation (Git activity, attendance)', weight: 0.20 },
      { name: 'Demo Presentation (team)', weight: 0.10 },
      { name: 'Coding Interview', weight: 0, passFail: true },
      { name: 'Project Proposal', weight: 0, passFail: true },
    ],
    notes: 'Must pass the coding interview to pass the course. Remaining 10% from quizzes.',
  },
  {
    courseId: 'information-management',
    components: [
      { name: 'Intermediate Exam', weight: 0.40 },
      { name: 'Final Group Project', weight: 0.60 },
      { name: 'Individual Assignments', weight: 0, passFail: true },
      { name: 'Final Exam', weight: 0, passFail: true },
    ],
  },

  // ==================== YEAR 2 ====================
  {
    courseId: 'knowledge-and-data',
    components: [
      { name: 'Individual Assignments (5, averaged)', weight: 0.333, minGrade: 5.5 },
      { name: 'Group Project', weight: 0.333, minGrade: 5.5 },
      { name: 'Exam', weight: 0.334, minGrade: 5.5 },
    ],
    notes: 'All three must be at least 5.5. No resit for assignments.',
  },
  {
    courseId: 'linear-algebra-calculus',
    components: [
      { name: 'Calculus Midterm (optional)', weight: 0.30 },
      { name: 'Final Exam', weight: 0.70 },
    ],
    notes: 'If you skip the midterm, the final exam counts for 100%. Resit exam: calculus 30% + linear algebra 70%.',
  },
  {
    courseId: 'multi-agent-systems',
    components: [
      { name: 'Exam', weight: 0.75, minGrade: 5.0 },
      { name: 'Practical Assignments (3, averaged)', weight: 0.25, minGrade: 5.0 },
    ],
    notes: 'Minimum 5.0 on exam and 5.0 on assignments. Overall must be at least 5.5. Bonus assignment possible (+1 point).',
  },
  {
    courseId: 'machine-learning',
    components: [
      { name: 'Exam + Online Quizzes (4)', weight: 0.50, minGrade: 5.5 },
      { name: 'Practical Assignment (group)', weight: 0.50, minGrade: 4.5 },
    ],
    notes: 'Exam at least 5.5, assignment at least 4.5, average at least 5.5. No resit for the assignment.',
  },
  {
    courseId: 'probability-statistics',
    components: [
      { name: 'Midterm Exam', weight: 0.30 },
      { name: 'Final Exam', weight: 0.70 },
    ],
    notes: 'Resit exam available.',
  },
  {
    courseId: 'text-mining-ai',
    components: [
      { name: 'Multiple-Choice Exam (individual)', weight: 0.60 },
      { name: 'Project Report / Poster (group)', weight: 0.40 },
    ],
    notes:
      'Each component needs at least a 5 on its own, and the weighted average must be 5.5 or higher. Completing the weekly lab assignments is required to pass but carries no weight in the grade.',
  },
  {
    courseId: 'data-structures-algorithms-ai',
    components: [
      { name: 'Lab Assignment 1', weight: 0.05 },
      { name: 'Lab Assignment 2', weight: 0.05 },
      { name: 'Lab Assignment 3', weight: 0.10 },
      { name: 'Lab Assignment 4', weight: 0.10 },
      { name: 'Theory + Practicum A (first half)', weight: 0.35 },
      { name: 'Theory + Practicum B (second half)', weight: 0.35 },
    ],
  },
  {
    courseId: 'conversational-agents',
    components: [
      { name: 'Basic Conversational Agent', weight: 0.30, minGrade: 5.5 },
      { name: 'Extensions (quality + originality)', weight: 0.30, minGrade: 5.5 },
      { name: 'Written Report', weight: 0.30, minGrade: 5.5 },
      { name: 'Exam (30 MCQ, 1 hour)', weight: 0.10, minGrade: 5.5 },
    ],
    notes: 'Each component must be at least 5.5. No resits.',
  },
  {
    courseId: 'databases',
    components: [
      { name: 'Final Exam', weight: 1.0 },
    ],
    notes: 'Homework must be at least 70% to qualify for the exam. Bonus: +0.5 if homework is at least 90% (only applied if exam is at least 5.5).',
  },
  {
    courseId: 'project-collective-intelligence',
    components: [
      { name: 'Aggregation Task', weight: 0.20 },
      { name: 'Collective Dynamics Simulation', weight: 0.40 },
      { name: 'Group Report', weight: 0.40 },
    ],
  },
  {
    courseId: 'law-of-ai',
    components: [
      { name: 'Multiple-Choice Exam', weight: 1.0 },
    ],
    notes: 'The exam covers mandatory readings and preparation, lectures and seminars. One resit is available.',
  },
  {
    courseId: 'robot-interaction',
    components: [
      { name: 'Multiple Choice Test (40 questions)', weight: 0.32 },
      { name: 'Essay Questions (5 open)', weight: 0.32 },
      { name: 'Workshop Assignments', weight: 0.20 },
    ],
    notes: 'MC and essay sections each need at least 55% to pass. Remaining 16% unclear — check Canvas.',
  },
  {
    courseId: 'project-socially-aware-computing',
    components: [
      { name: 'Individual Project Report', weight: 0.95 },
      { name: 'Self-Reflection', weight: 0.05 },
      { name: 'Individual Assignments', weight: 0, passFail: true },
    ],
    notes: 'Must pass assignments to start project. Only resit available for the project.',
  },
  {
    courseId: 'ai-and-law',
    components: [
      { name: 'Written Exam', weight: 0.50, minGrade: 5.5 },
      { name: 'Practical Assignment', weight: 0.50, minGrade: 5.5 },
    ],
    notes: 'Both must be at least 5.5. Assignment can be redone if below 5.5. Exam has resit.',
  },
  {
    courseId: 'ai-in-health',
    components: [
      { name: 'Exam (individual)', weight: 0.50, minGrade: 5.5 },
      { name: 'Practical Group Assignments', weight: 0.50, minGrade: 5.5 },
    ],
    notes: 'Both must be at least 5.5. No resit for assignments.',
  },

  // ==================== YEAR 3 ====================
  {
    courseId: 'ethical-ai',
    components: [
      { name: 'Multiple-Choice Exam', weight: 0.40, minGrade: 5.5 },
      { name: 'Weekly Assignments', weight: 0.10 },
      { name: 'Final Group Project', weight: 0.50, minGrade: 5.5 },
    ],
    notes: 'Exam has resit; other components do not.',
  },
  {
    courseId: 'research-design-ai',
    components: [
      { name: 'Final Project', weight: 1.0 },
      { name: 'Individual Assignments', weight: 0, passFail: true },
    ],
    notes: 'Final project grade is given by your BSc project supervisor.',
  },
  {
    courseId: 'bachelor-project-ai',
    components: [
      { name: 'Evaluation of Student Work', weight: 0.50 },
      { name: 'Final Report', weight: 0.40 },
      { name: 'Final Oral Presentation', weight: 0.10 },
    ],
  },
  {
    courseId: 'automata-and-complexity',
    components: [
      { name: 'Final Exam', weight: 1.0 },
    ],
    notes: 'Homework must be at least 70% to qualify for the exam. Bonus: +0.5 if homework is at least 90% (only applied if exam is at least 5.5).',
  },
  {
    courseId: 'computational-intelligence',
    components: [
      { name: 'Final Exam (50 pts)', weight: 0.50 },
      { name: 'Practical Assignment 1 (10 pts)', weight: 0.10 },
      { name: 'Practical Assignment 2 (10 pts)', weight: 0.10 },
      { name: 'Practical Assignment 3 (10 pts)', weight: 0.10 },
      { name: 'Practical Assignment 4 (10 pts)', weight: 0.10 },
      { name: 'Practical Assignment 5 (10 pts)', weight: 0.10 },
    ],
    notes: 'Must get at least 25 points from exam and 55 total. Exam can be retaken; assignments cannot.',
  },
  {
    courseId: 'cognitive-psychology-ai',
    components: [
      { name: 'Exam', weight: 0.70 },
      { name: 'Participation (quizzes, assignments)', weight: 0.10 },
      { name: 'Group Project (experiment)', weight: 0.20 },
    ],
    notes: 'Exam has resit; other components do not.',
  },
];
