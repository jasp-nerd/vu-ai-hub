import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import type { EssayPrompt } from '../types';
import { useChat } from '../hooks/useChat';

const CATEGORY_INFO: Record<string, { label: string; description: string; color: string }> = {
  A: {
    label: 'Category A — Lectures',
    description: 'Questions based on lecture content. In the exam, you choose 1 out of 8.',
    color: 'border-blue-200/60 dark:border-blue-800/40 bg-blue-50/50 dark:bg-blue-950/20',
  },
  B: {
    label: 'Category B — Textbook',
    description: 'Questions based on Campbell-Kelly\'s "Computer" textbook. In the exam, you choose 2 out of 12.',
    color: 'border-emerald-200/60 dark:border-emerald-800/40 bg-emerald-50/50 dark:bg-emerald-950/20',
  },
  C: {
    label: 'Category C — Integration',
    description: 'Questions integrating both lectures and the textbook. In the exam, you choose 1 out of 6.',
    color: 'border-purple-200/60 dark:border-purple-800/40 bg-purple-50/50 dark:bg-purple-950/20',
  },
};

const CATEGORY_TAG_COLORS: Record<string, string> = {
  A: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
  B: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
  C: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
};

function WritingPanel({
  prompt,
  onBack,
}: {
  prompt: EssayPrompt;
  onBack: () => void;
}) {
  const [answer, setAnswer] = useState('');
  const [hasReviewed, setHasReviewed] = useState(false);

  const context = useMemo(
    () =>
      `You are reviewing a student's essay answer for the History of AI course (XB_0113) at VU Amsterdam. This is a written exam course.

ESSAY PROMPT (Category ${prompt.category}):
${prompt.prompt}

GRADING GUIDANCE — A strong answer should cover:
${prompt.guidance}

STUDENT'S ANSWER:
${answer}

Review the student's answer. Evaluate:
1. Whether they addressed the key points from the grading guidance
2. Historical accuracy of claims and examples
3. Depth of analysis and critical thinking
4. Structure and clarity of the argument
5. Specific areas for improvement

Be constructive, specific, and encouraging. Reference specific parts of their answer. If they missed important points from the guidance, mention what they should add.`,
    [prompt, answer]
  );

  const { messages, status, error, sendMessage, clearChat } = useChat({
    courseSlug: 'history-of-ai',
    context,
  });

  const lastAssistant = messages.filter((m) => m.role === 'assistant').pop();
  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;

  const handleReview = () => {
    clearChat();
    setHasReviewed(true);
    sendMessage('Please review my essay answer.');
  };

  const handleTryAgain = () => {
    setAnswer('');
    setHasReviewed(false);
    clearChat();
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-stone-400 dark:text-stone-500 hover:text-stone-400 dark:text-stone-500 transition-colors duration-300 mb-6"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to prompts
      </button>

      {/* Prompt card */}
      <div className={`rounded-2xl border p-6 mb-6 ${CATEGORY_INFO[prompt.category].color}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${CATEGORY_TAG_COLORS[prompt.category]}`}>
            Category {prompt.category}
          </span>
          <span className="text-xs text-stone-400 dark:text-stone-500">{prompt.topic}</span>
        </div>
        <div className="prose-custom text-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
            {prompt.prompt}
          </ReactMarkdown>
        </div>
        {prompt.wordCountHint && (
          <p className="text-xs text-stone-400 dark:text-stone-500 mt-3">
            Suggested length: {prompt.wordCountHint}
          </p>
        )}
      </div>

      {/* Writing area */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-stone-400 dark:text-stone-500">
            Your answer
          </label>
          <span className={`text-xs ${wordCount < 50 ? 'text-stone-400 dark:text-stone-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
            {wordCount} words
          </span>
        </div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your essay answer here..."
          rows={10}
          className="w-full resize-y rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 px-4 py-3 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:text-stone-500 focus:outline-none focus:ring-2 focus:ring-vu-blue/20 dark:focus:ring-vu-blue-light/20 focus:border-vu-blue dark:focus:border-vu-blue-light transition-colors duration-300 leading-relaxed"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={handleReview}
          disabled={wordCount < 50 || status === 'streaming'}
          className="text-sm font-medium px-4 py-2 rounded-xl bg-vu-blue text-white hover:bg-vu-blue/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300 shadow-sm"
        >
          {status === 'streaming' ? 'Reviewing...' : hasReviewed ? 'Review again' : 'Get AI Review'}
        </button>
        {hasReviewed && (
          <button
            onClick={handleTryAgain}
            className="text-sm font-medium px-4 py-2 rounded-xl border border-stone-200/60 dark:border-stone-700/60 text-stone-400 dark:text-stone-500 hover:bg-stone-50/50 dark:bg-stone-800/50 transition-colors duration-300"
          >
            Start over
          </button>
        )}
        {wordCount > 0 && wordCount < 50 && (
          <p className="text-xs text-stone-400 dark:text-stone-500">
            Write at least 50 words to enable AI review
          </p>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200/60 dark:border-red-800/40">
          <p className="text-xs text-red-700 dark:text-red-400">{error}</p>
        </div>
      )}

      {/* AI Review */}
      {status === 'streaming' && (!lastAssistant || !lastAssistant.content) && (
        <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-800/50 p-6">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      )}
      {lastAssistant && lastAssistant.content && (
        <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-800/50 p-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-vu-blue dark:text-vu-blue-light mb-3">
            AI Review
          </h4>
          <div className="prose-custom text-sm">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
              {lastAssistant.content}
            </ReactMarkdown>
          </div>
          <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-4">
            AI feedback is generated from course materials and may not perfectly match grading criteria.
          </p>
        </div>
      )}
    </div>
  );
}

interface EssayPracticeProps {
  prompts: EssayPrompt[];
  courseSlug: string;
  courseName: string;
}

export default function EssayPractice({ prompts }: EssayPracticeProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<EssayPrompt | null>(null);

  const grouped = useMemo(() => {
    const map = new Map<string, EssayPrompt[]>();
    for (const p of prompts) {
      const arr = map.get(p.category) || [];
      arr.push(p);
      map.set(p.category, arr);
    }
    return map;
  }, [prompts]);

  if (selectedPrompt) {
    return (
      <WritingPanel
        prompt={selectedPrompt}
        onBack={() => setSelectedPrompt(null)}
      />
    );
  }

  if (prompts.length === 0) {
    return (
      <p className="text-stone-400 dark:text-stone-500 text-sm">
        No essay prompts available yet. Check back later!
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {(['A', 'B', 'C'] as const).map((cat) => {
        const catPrompts = grouped.get(cat);
        if (!catPrompts || catPrompts.length === 0) return null;
        const info = CATEGORY_INFO[cat];
        return (
          <div key={cat}>
            <div className="mb-4">
              <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100">
                {info.label}
              </h3>
              <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">
                {info.description}
              </p>
            </div>
            <div className="space-y-3">
              {catPrompts.map((prompt) => (
                <button
                  key={prompt.id}
                  onClick={() => setSelectedPrompt(prompt)}
                  className="w-full text-left rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-5 transition-all hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-sm group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${CATEGORY_TAG_COLORS[prompt.category]}`}>
                          {prompt.category}
                        </span>
                        <span className="text-xs text-stone-400 dark:text-stone-500">
                          {prompt.topic}
                        </span>
                      </div>
                      <p className="text-sm text-stone-400 dark:text-stone-500 leading-relaxed line-clamp-2">
                        {prompt.prompt}
                      </p>
                      {prompt.wordCountHint && (
                        <p className="text-xs text-stone-400 dark:text-stone-500 mt-2">
                          {prompt.wordCountHint}
                        </p>
                      )}
                    </div>
                    <svg
                      className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-vu-blue dark:text-vu-blue-light dark:group-hover:text-vu-blue-light transition-colors duration-300 shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
