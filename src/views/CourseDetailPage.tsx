'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import {
  getCourseBySlug,
  getTipsForCourse,
  getQuizQuestionsForCourse,
  getResourcesForCourse,
  getPracticeQuestionsForCourse,
  getEssayPromptsForCourse,
  getGradeStructureForCourse,
} from '../services/courseService';
import Quiz from '../components/Quiz';
import PracticeProblems from '../components/PracticeProblems';
import EssayPractice from '../components/EssayPractice';
import CourseChat from '../components/CourseChat';
import ContributionPopup from '../components/ContributionPopup';
import CourseGradeCalculator from '../components/CourseGradeCalculator';
import FeedbackPopup from '../components/FeedbackPopup';
import TipSubmitBox from '../components/TipSubmitBox';
import DifficultyVote from '../components/DifficultyVote';
import ResourceVote from '../components/ResourceVote';
import HelpfulButton from '../components/HelpfulButton';
import MaterialUploadForm from '../components/MaterialUploadForm';
import { useMountAnimation } from '../hooks/useAnimations';
import type { Resource } from '../types';
import {
  fetchTips,
  fetchBackendResources,
  fetchVoteCounts,
  type BackendTip,
} from '../lib/apiClient';

type Tab = 'Overview' | 'Tips & Advice' | 'Quizzes' | 'Practice Problems' | 'Exam Practice' | 'Resources' | 'AI Chat';

const resourceTypeIcon: Record<string, string> = {
  video: '\u25B6',
  article: '\u25C9',
  tool: '\u2699',
  pdf: '\u2193',
  'external-quiz': '?',
  summary: '\u2605',
};

export default function CourseDetailPage() {
  const { slug } = useParams() as { slug: string };
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const [expandedSummary, setExpandedSummary] = useState<string | null>(null);
  const mounted = useMountAnimation(50);
  // Key to trigger crossfade on tab change
  const [tabKey, setTabKey] = useState(0);
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  // Live overlay data from the backend (merged with the static seed below).
  const [backendTips, setBackendTips] = useState<BackendTip[]>([]);
  const [backendResources, setBackendResources] = useState<Resource[]>([]);
  const [voteCounts, setVoteCounts] = useState<Record<string, number>>({});
  const [showUpload, setShowUpload] = useState(false);

  const course = getCourseBySlug(slug || '');
  const courseId = course?.id;

  useEffect(() => {
    if (!course) return;
    if (course.difficulty === 0) return;
    const reducedUntil = localStorage.getItem('feedbackPopupReducedUntil');
    const isReduced = reducedUntil && Date.now() < Number(reducedUntil);
    const chance = isReduced ? 0.01 : 0.05;
    if (Math.random() < chance) {
      setShowFeedbackPopup(true);
    }
  }, [course]);

  // Fetch backend tips + uploaded resources for this course (safe no-op if the
  // backend is unset/unreachable — the static data still renders).
  useEffect(() => {
    if (!courseId) return;
    let active = true;
    fetchTips(courseId).then((t) => active && setBackendTips(t));
    fetchBackendResources(courseId).then((rs) => {
      if (!active) return;
      setBackendResources(
        rs.map((r) => ({
          id: r.id,
          courseId: r.courseId,
          title: r.title,
          description: r.description,
          url: r.url,
          type: r.type as Resource['type'],
          tags: r.tags,
          author: r.author ?? undefined,
        }))
      );
    });
    return () => {
      active = false;
    };
  }, [courseId]);

  // Batch-fetch "helpful" vote counts for all of this course's resources AND
  // tips at once (votes are keyed by entity id, shared across both).
  useEffect(() => {
    if (!courseId) return;
    let active = true;
    const ids = [
      ...getResourcesForCourse(courseId).map((r) => r.id),
      ...backendResources.map((r) => r.id),
      ...getTipsForCourse(courseId).map((t) => t.id),
      ...backendTips.map((t) => t.id),
    ];
    fetchVoteCounts(ids).then((c) => active && setVoteCounts(c));
    return () => {
      active = false;
    };
  }, [courseId, backendResources, backendTips]);

  if (!course) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-20 text-center animate-fade-in">
        <h1 className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
          Course not found
        </h1>
        <p className="text-stone-500 dark:text-stone-400 mb-6">
          The course you're looking for doesn't exist.
        </p>
        <Link
          href="/courses"
          className="text-sm font-medium text-vu-blue dark:text-vu-blue-light hover:underline"
        >
          Back to courses
        </Link>
      </div>
    );
  }

  // Static seed tips first, then backend tips oldest→newest, so freshly
  // submitted tips appear at the bottom of the list.
  const tips = [
    ...getTipsForCourse(course.id).map((t) => ({ id: t.id, content: t.content, author: t.author })),
    ...backendTips.map((t) => ({ id: t.id, content: t.content, author: t.author || 'Anonymous' })),
  ];
  const quizQuestions = getQuizQuestionsForCourse(course.id);
  // Static resources first (featured summaries), then approved uploads.
  const resources = [...getResourcesForCourse(course.id), ...backendResources];
  const practiceQuestions = getPracticeQuestionsForCourse(course.id);
  const essayPromptsList = getEssayPromptsForCourse(course.id);
  const gradeStructure = getGradeStructureForCourse(course.id);

  // Determine which exam-prep tab to show
  const examPrepTab: Tab = essayPromptsList.length > 0
    ? 'Exam Practice'
    : practiceQuestions.length > 0
      ? 'Practice Problems'
      : 'Quizzes';
  const examPrepCount = essayPromptsList.length || practiceQuestions.length || quizQuestions.length;
  const tabs: Tab[] = ['Overview', 'Tips & Advice', examPrepTab, 'Resources', 'AI Chat'];

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setTabKey((k) => k + 1);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav
        className={`flex items-center gap-2 text-sm text-stone-400 dark:text-stone-500 mb-8 ${
          mounted ? 'animate-slide-in-left' : 'pre-animate'
        }`}
      >
        <Link href="/courses" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
          Courses
        </Link>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-stone-600 dark:text-stone-300">{course.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div
          className={`flex flex-wrap items-center gap-3 mb-3 ${
            mounted ? 'animate-fade-in-up stagger-1' : 'pre-animate'
          }`}
        >
          <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
            {course.code}
          </span>
          <span className="text-xs text-stone-400 dark:text-stone-500">
            Year {course.year} · {course.period ? `Period ${course.period}` : 'Full Year'}
          </span>
          {course.credits && (
            <span className="text-xs text-stone-400 dark:text-stone-500">{course.credits}</span>
          )}
          {course.specialisation && (
            <span className="text-xs text-stone-400 dark:text-stone-500 capitalize">
              {(Array.isArray(course.specialisation) ? course.specialisation : [course.specialisation])
                .map((s) => s.replace(/_/g, ' '))
                .join(' · ')}
            </span>
          )}
          {course.studyGuideUrl && (
            <a
              href={course.studyGuideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-vu-blue dark:text-vu-blue-light hover:underline transition-colors"
            >
              Official study guide
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
        {/* Difficulty on its own row between the metadata bar and the title */}
        <div className={`mb-4 ${mounted ? 'animate-fade-in-up stagger-1' : 'pre-animate'}`}>
          <DifficultyVote courseId={course.id} seed={course.difficulty} />
        </div>
        <h1
          className={`font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 ${
            mounted ? 'animate-blur-in stagger-2' : 'pre-animate'
          }`}
        >
          {course.name}
        </h1>
        <p
          className={`mt-3 text-stone-500 dark:text-stone-400 max-w-2xl leading-relaxed ${
            mounted ? 'animate-fade-in-up stagger-3' : 'pre-animate'
          }`}
        >
          {course.description}
        </p>
      </div>

      {/* Workgroup attendance notice */}
      {course.workgroupInfo && (
        <div
          className={`mb-8 rounded-2xl border p-5 flex items-start gap-3 ${
            mounted ? 'animate-fade-in-up stagger-4' : 'pre-animate'
          } ${course.workgroupInfo.mandatory
            ? 'border-amber-300/60 dark:border-amber-700/40 bg-amber-50/70 dark:bg-amber-950/30'
            : 'border-sky-200/60 dark:border-sky-800/40 bg-sky-50/50 dark:bg-sky-950/20'
            }`}
        >
          <span className="text-lg mt-0.5 shrink-0" aria-hidden="true">
            {course.workgroupInfo.mandatory ? '\u26A0\uFE0F' : '\u2139\uFE0F'}
          </span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${course.workgroupInfo.mandatory
                  ? 'text-amber-700 dark:text-amber-400'
                  : 'text-sky-700 dark:text-sky-400'
                  }`}
              >
                {course.workgroupInfo.mandatory
                  ? 'Mandatory attendance'
                  : 'Attendance info'}
              </span>
              {course.workgroupInfo.mandatory &&
                course.workgroupInfo.maxAbsences !== undefined && (
                  <span className="text-xs px-2 py-0.5 rounded-md bg-amber-200/60 dark:bg-amber-800/40 text-amber-800 dark:text-amber-300 font-medium">
                    Max {course.workgroupInfo.maxAbsences} absence
                    {course.workgroupInfo.maxAbsences !== 1 ? 's' : ''} allowed
                  </span>
                )}
            </div>
            <p
              className={`text-sm leading-relaxed ${course.workgroupInfo.mandatory
                ? 'text-amber-800 dark:text-amber-300/80'
                : 'text-sky-800 dark:text-sky-300/80'
                }`}
            >
              {course.workgroupInfo.detail}
            </p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div
        className={`border-b border-stone-200/60 dark:border-stone-700/60 mb-8 ${
          mounted ? 'animate-fade-in stagger-5' : 'pre-animate'
        }`}
      >
        <div className="flex gap-1 -mb-px overflow-x-auto" role="tablist" aria-label="Course sections">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`tabpanel-${tab}`}
              id={`tab-${tab}`}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap press-effect ${activeTab === tab
                ? 'border-vu-blue text-vu-blue dark:text-vu-blue-light dark:border-vu-blue-light'
                : 'border-transparent text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300'
                }`}
            >
              {tab}
              {tab === examPrepTab && examPrepCount > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
                  {examPrepCount}
                </span>
              )}
              {tab === 'Resources' && resources.length > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
                  {resources.length}
                </span>
              )}
              {tab === 'AI Chat' && (
                <span className="ml-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs rounded-md bg-vu-blue/10 dark:bg-vu-blue-light/10 text-vu-blue dark:text-vu-blue-light">
                  beta
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content with crossfade */}
      <div key={tabKey} className="max-w-3xl animate-tab-crossfade">
        {activeTab === 'Overview' && (
          <div role="tabpanel" id="tabpanel-Overview" aria-labelledby="tab-Overview">
            {course.objectives && (
              <div className="mb-8 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-6">
                <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100 mb-3">
                  Learning objectives
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed whitespace-pre-line">
                  {course.objectives}
                </p>
              </div>
            )}
            <div className="prose-custom">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{course.overview}</ReactMarkdown>
            </div>
            {(course.assessment || course.gradingStructure) && (
              <div className="mt-8 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-6">
                <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100 mb-3">
                  Assessment
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed whitespace-pre-line">
                  {course.assessment || course.gradingStructure}
                </p>
              </div>
            )}
            {gradeStructure && (
              <div className="mt-6">
                <CourseGradeCalculator courseId={course.id} structure={gradeStructure} />
              </div>
            )}
            {course.teachingMethods && (
              <div className="mt-6 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-6">
                <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100 mb-3">
                  Teaching methods
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {course.teachingMethods}
                </p>
              </div>
            )}
            {course.literature && (
              <div className="mt-6 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-6">
                <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100 mb-3">
                  Literature
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed whitespace-pre-line">
                  {course.literature}
                </p>
              </div>
            )}
            {course.prerequisites && (
              <div className="mt-6 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-6">
                <h3 className="font-display font-semibold text-stone-900 dark:text-stone-100 mb-3">
                  Prerequisites
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {course.prerequisites}
                </p>
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700/60 px-2.5 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Tips & Advice' && (
          <div role="tabpanel" id="tabpanel-Tips & Advice" aria-labelledby="tab-Tips & Advice">
            {tips.length === 0 ? (
              <p className="text-stone-400 dark:text-stone-500 text-sm">
                No tips available yet. Check back later!
              </p>
            ) : (
              <div className="space-y-4">
                {tips.map((tip, i) => (
                  <div
                    key={tip.id}
                    className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-6 animate-fade-in-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed mb-3">
                      {tip.content}
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs text-stone-400 dark:text-stone-500">
                        — {tip.author}
                      </p>
                      <HelpfulButton id={tip.id} initialCount={voteCounts[tip.id] ?? 0} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-8">
              <TipSubmitBox
                courseId={course.id}
                onSubmitted={(t) => setBackendTips((prev) => [...prev, t])}
              />
            </div>
          </div>
        )}

        {activeTab === examPrepTab && (
          <div role="tabpanel" id={`tabpanel-${examPrepTab}`} aria-labelledby={`tab-${examPrepTab}`}>
            {essayPromptsList.length > 0 ? (
              <>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
                  Practice writing essay answers to exam-style questions. Get AI feedback on your responses.
                </p>
                <EssayPractice prompts={essayPromptsList} courseSlug={course.slug} courseName={course.name} />
              </>
            ) : practiceQuestions.length > 0 ? (
              <>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
                  Work through these practice problems to prepare for the exam. Click &quot;Show Answer&quot; to check your work.
                </p>
                <PracticeProblems questions={practiceQuestions} showAICheck={course.id === 'intro-python-ai'} />
              </>
            ) : (
              <>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
                  Test your knowledge with these practice questions. Your score is tracked within this session.
                </p>
                <Quiz questions={quizQuestions} />
              </>
            )}
          </div>
        )}

        {activeTab === 'Resources' && (
          <div role="tabpanel" id="tabpanel-Resources" aria-labelledby="tab-Resources">
            <div className="flex items-center justify-between gap-3 mb-4">
              <p className="text-sm text-stone-500 dark:text-stone-400">
                Summaries, notes, mock exams and links shared by students.
              </p>
              <button
                onClick={() => setShowUpload(true)}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-vu-blue/10 dark:bg-vu-blue/15 text-vu-blue dark:text-vu-blue-light text-sm font-medium py-2 px-3 hover:bg-vu-blue/15 dark:hover:bg-vu-blue/20 transition-colors press-effect"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                Upload material
              </button>
            </div>
            {resources.length === 0 ? (
              <p className="text-stone-400 dark:text-stone-500 text-sm">
                No resources available yet — be the first to contribute!
              </p>
            ) : (
              <div className="space-y-3">
                {/* Featured summaries (inline markdown) */}
                {resources
                  .filter((r) => r.type === 'summary' && r.markdownContent)
                  .map((resource, i) => {
                    const isExpanded = expandedSummary === resource.id;
                    return (
                      <div
                        key={resource.id}
                        className="rounded-2xl border-2 border-vu-blue/20 dark:border-vu-blue-light/20 bg-gradient-to-b from-vu-blue/[0.03] to-transparent dark:from-vu-blue-light/[0.03] overflow-hidden animate-fade-in-up"
                        style={{ animationDelay: `${i * 60}ms` }}
                      >
                        {/* Header — always visible */}
                        <button
                          onClick={() =>
                            setExpandedSummary(isExpanded ? null : resource.id)
                          }
                          aria-expanded={isExpanded}
                          aria-controls={`summary-${resource.id}`}
                          className="w-full text-left p-5 flex items-start gap-4 group press-effect"
                        >
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-vu-blue/10 dark:bg-vu-blue-light/10 text-vu-blue dark:text-vu-blue-light text-lg shrink-0" aria-hidden="true">
                            {'\u2605'}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-vu-blue dark:text-vu-blue-light">
                                Site exclusive
                              </span>
                              {resource.author && (
                                <span className="text-[10px] text-stone-400 dark:text-stone-500">
                                  by {resource.author}
                                </span>
                              )}
                            </div>
                            <h4 className="font-display font-semibold text-stone-900 dark:text-stone-100 text-base">
                              {resource.title}
                            </h4>
                            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                              {resource.description}
                            </p>
                          </div>
                          <svg
                            className={`w-5 h-5 text-stone-400 dark:text-stone-500 shrink-0 mt-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                              }`}
                            style={{ transitionTimingFunction: 'var(--ease-spring)' }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Expandable content */}
                        {isExpanded && (
                          <div id={`summary-${resource.id}`} className="border-t border-vu-blue/10 dark:border-vu-blue-light/10 px-5 py-6 animate-fade-in-up">
                            <div className="prose-custom max-w-none">
                              <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                                {resource.markdownContent!}
                              </ReactMarkdown>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                {/* Regular resources (incl. summary-type files that are links, not inline markdown) */}
                {resources
                  .filter((r) => !(r.type === 'summary' && r.markdownContent))
                  .map((resource, i) => {
                    // Extract YouTube video ID for thumbnail preview
                    const ytMatch = resource.url.match(
                      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
                    );
                    const ytThumbnail = ytMatch
                      ? `https://img.youtube.com/vi/${ytMatch[1]}/mqdefault.jpg`
                      : null;

                    return (
                      <div
                        key={resource.id}
                        className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 hover-lift hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-sm animate-fade-in-up overflow-hidden"
                        style={{ animationDelay: `${i * 50 + 80}ms` }}
                      >
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-5"
                      >
                        <div className="flex items-start gap-4">
                          {ytThumbnail ? (
                            <div className="relative shrink-0 w-32 h-[72px] rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800">
                              <img
                                src={ytThumbnail}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              {/* Play button overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-md opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                                  <svg className="w-3.5 h-3.5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-50 dark:bg-stone-800 text-stone-400 dark:text-stone-500 text-sm shrink-0" aria-hidden="true">
                              {resourceTypeIcon[resource.type] || '\u00B7'}
                            </span>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-stone-900 dark:text-stone-100 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors text-sm">
                              {resource.title}
                            </h4>
                            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                              {resource.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-800 px-2 py-0.5 rounded">
                                {resource.type}
                              </span>
                              {resource.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs text-stone-400 dark:text-stone-500"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <svg
                            className="w-4 h-4 text-stone-300 dark:text-stone-600 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors shrink-0 mt-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </a>
                      <ResourceVote
                        resourceId={resource.id}
                        url={resource.url}
                        initialCount={voteCounts[resource.id] ?? 0}
                      />
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        )}

        {activeTab === 'AI Chat' && (
          <div role="tabpanel" id="tabpanel-AI Chat" aria-labelledby="tab-AI Chat">
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
              Ask questions about {course.name} — the AI has access to the course overview, quiz questions, study tips, and summaries.
            </p>
            <CourseChat courseSlug={course.slug} courseName={course.name} />
          </div>
        )}
      </div>

      {course.difficulty === 0 && (
        <ContributionPopup courseId={course.id} courseName={course.name} />
      )}
      {showUpload && (
        <MaterialUploadForm
          courseId={course.id}
          courseName={course.name}
          onClose={() => setShowUpload(false)}
        />
      )}
      {showFeedbackPopup && (
        <FeedbackPopup
          courseName={course.name}
          onClose={() => setShowFeedbackPopup(false)}
          onShowLess={() => {
            localStorage.setItem(
              'feedbackPopupReducedUntil',
              String(Date.now() + 30 * 24 * 60 * 60 * 1000)
            );
          }}
        />
      )}
    </div>
  );
}
