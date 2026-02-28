import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import type { PracticeQuestion } from '../types';
import { useChat } from '../hooks/useChat';

const DIFFICULTY_COLORS = {
  easy: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40',
  medium: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40',
  hard: 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 border-red-200/60 dark:border-red-800/40',
};

function AICodeCheck({ question }: { question: PracticeQuestion }) {
  const [code, setCode] = useState('');
  const [showPanel, setShowPanel] = useState(false);

  const context = useMemo(
    () =>
      `You are reviewing a student's code for an Intro to Python course at VU Amsterdam.\n\nQUESTION:\n${question.question}\n\nEXPECTED SOLUTION:\n${question.answer}\n\nSTUDENT'S CODE:\n${code}\n\nReview the student's code. Check if it correctly solves the problem. Point out any errors, suggest improvements, and explain what they did well. Be concise and encouraging.`,
    [question, code]
  );

  const { messages, status, error, sendMessage, clearChat } = useChat({
    courseSlug: 'intro-python-ai',
    context,
  });

  const lastAssistant = messages.filter((m) => m.role === 'assistant').pop();

  const handleCheck = () => {
    clearChat();
    sendMessage('Please review my code.');
  };

  if (!showPanel) {
    return (
      <div className="mt-4">
        <button
          onClick={() => setShowPanel(true)}
          className="flex items-center gap-1.5 text-sm font-medium text-vu-blue dark:text-vu-blue-light hover:underline"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
          </svg>
          Check with AI
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl border border-vu-blue/20 dark:border-vu-blue-light/20 bg-vu-blue/[0.02] dark:bg-vu-blue-light/[0.02] p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-vu-blue dark:text-vu-blue-light">
          AI Code Review
        </span>
        <button
          onClick={() => { setShowPanel(false); setCode(''); clearChat(); }}
          className="text-xs font-medium px-2 py-1 rounded-md text-stone-400 dark:text-stone-500 hover:text-stone-400 dark:text-stone-500 hover:bg-stone-50/50 dark:bg-stone-800/30 transition-colors duration-300"
        >
          Close
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste or type your code here..."
        rows={6}
        className="w-full resize-y rounded-lg border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 px-3 py-2 text-sm font-mono text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:text-stone-500 focus:outline-none focus:ring-2 focus:ring-vu-blue/20 dark:focus:ring-vu-blue-light/20 mb-2"
      />
      <button
        onClick={handleCheck}
        disabled={code.trim().length < 10 || status === 'streaming'}
        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-vu-blue text-white hover:bg-vu-blue/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300"
      >
        {status === 'streaming' ? 'Reviewing...' : 'Check my code'}
      </button>
      {error && (
        <p className="mt-2 text-xs text-red-600 dark:text-red-400">{error}</p>
      )}
      {lastAssistant && lastAssistant.content && (
        <div className="mt-3 prose-custom text-sm border-t border-stone-200/60 dark:border-stone-700/60 pt-3">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
            {lastAssistant.content}
          </ReactMarkdown>
        </div>
      )}
      {status === 'streaming' && (!lastAssistant || !lastAssistant.content) && (
        <div className="mt-3 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      )}
    </div>
  );
}

interface PracticeProblemsProps {
  questions: PracticeQuestion[];
  showAICheck?: boolean;
}

export default function PracticeProblems({ questions, showAICheck = false }: PracticeProblemsProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = useMemo(() => {
    const seen = new Set<string>();
    return questions.reduce<string[]>((acc, q) => {
      if (!seen.has(q.topic)) {
        seen.add(q.topic);
        acc.push(q.topic);
      }
      return acc;
    }, []);
  }, [questions]);

  const filtered = useMemo(
    () => (selectedTopic ? questions.filter((q) => q.topic === selectedTopic) : questions),
    [questions, selectedTopic]
  );

  const grouped = useMemo(() => {
    const map = new Map<string, PracticeQuestion[]>();
    for (const q of filtered) {
      const arr = map.get(q.topic) || [];
      arr.push(q);
      map.set(q.topic, arr);
    }
    return map;
  }, [filtered]);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (questions.length === 0) {
    return (
      <p className="text-stone-400 dark:text-stone-500 text-sm">
        No practice problems available yet. Check back later!
      </p>
    );
  }

  return (
    <div>
      {/* Topic filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTopic(null)}
          className={`text-xs px-3 py-1.5 rounded-lg border transition-colors duration-300 ${
            selectedTopic === null
              ? 'border-vu-blue dark:border-vu-blue-light bg-vu-blue/10 dark:bg-vu-blue-light/10 text-vu-blue dark:text-vu-blue-light font-medium'
              : 'border-stone-200/60 dark:border-stone-700/60 text-stone-400 dark:text-stone-500 hover:border-stone-300 dark:hover:border-stone-600'
          }`}
        >
          All ({questions.length})
        </button>
        {topics.map((topic) => {
          const count = questions.filter((q) => q.topic === topic).length;
          return (
            <button
              key={topic}
              onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-colors duration-300 ${
                selectedTopic === topic
                  ? 'border-vu-blue dark:border-vu-blue-light bg-vu-blue/10 dark:bg-vu-blue-light/10 text-vu-blue dark:text-vu-blue-light font-medium'
                  : 'border-stone-200/60 dark:border-stone-700/60 text-stone-400 dark:text-stone-500 hover:border-stone-300 dark:hover:border-stone-600'
              }`}
            >
              {topic} ({count})
            </button>
          );
        })}
      </div>

      {/* Questions grouped by topic */}
      <div className="space-y-8">
        {Array.from(grouped.entries()).map(([topic, qs]) => (
          <div key={topic}>
            <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
              {topic}
            </h3>
            <div className="space-y-3">
              {qs.map((q, idx) => {
                const isExpanded = expanded.has(q.id);
                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden"
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <span className="text-xs font-medium text-stone-400 dark:text-stone-500">
                          Q{idx + 1}
                        </span>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border ${DIFFICULTY_COLORS[q.difficulty]}`}
                        >
                          {q.difficulty}
                        </span>
                      </div>
                      <div className="prose-custom text-sm">
                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                          {q.question}
                        </ReactMarkdown>
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <button
                          onClick={() => toggleExpand(q.id)}
                          aria-expanded={isExpanded}
                          className="flex items-center gap-1.5 text-sm font-medium text-vu-blue dark:text-vu-blue-light hover:underline"
                        >
                          {isExpanded ? 'Hide answer' : 'Show answer'}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {showAICheck && <AICodeCheck question={q} />}
                    </div>
                    {isExpanded && (
                      <div className="border-t border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-800/30 px-5 py-5">
                        <div className="prose-custom text-sm">
                          <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                            {q.answer}
                          </ReactMarkdown>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
