import { useState, useRef, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { useChat } from '../hooks/useChat';
import { buildCourseContext } from '../services/chatContextBuilder';

const SUGGESTED_QUESTIONS = [
  'What topics does the exam cover?',
  'Summarize the key concepts of this course',
  'Quiz me on this course material',
  'What are the best study strategies for this course?',
];

interface CourseChatProps {
  courseSlug: string;
  courseName: string;
}

export default function CourseChat({ courseSlug, courseName }: CourseChatProps) {
  const context = useMemo(() => buildCourseContext(courseSlug) || '', [courseSlug]);
  const { messages, status, error, sendMessage, clearChat } = useChat({
    courseSlug,
    context,
  });
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const shouldAutoScrollRef = useRef(true);
  const isProgrammaticScrollRef = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      // Ignore scroll events we triggered ourselves
      if (isProgrammaticScrollRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = container;
      shouldAutoScrollRef.current = scrollHeight - scrollTop - clientHeight < 60;
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!shouldAutoScrollRef.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    isProgrammaticScrollRef.current = true;
    container.scrollTop = container.scrollHeight;
    requestAnimationFrame(() => {
      isProgrammaticScrollRef.current = false;
    });
  }, [messages]);

  const handleSubmit = () => {
    const trimmed = input.trim();
    if (!trimmed || status === 'streaming') return;
    sendMessage(trimmed);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  };

  if (!context) {
    return (
      <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-900/50 p-8 text-center">
        <p className="text-stone-400 dark:text-stone-500 text-sm">
          No course data available for chat.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden flex flex-col" style={{ height: '600px' }}>
      {/* Message area */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/50 mb-4">
              <svg
                className="w-6 h-6 text-vu-blue dark:text-vu-blue-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
              Ask about {courseName}
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 max-w-sm">
              I have access to the course overview, study tips, quiz questions, and summaries. Ask me anything!
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs px-3 py-2 rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:border-vu-blue/40 dark:hover:border-vu-blue-light/40 hover:text-vu-blue dark:hover:text-vu-blue-light transition-colors text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] ${
                    msg.role === 'user'
                      ? 'bg-vu-blue text-white rounded-2xl rounded-br-md px-4 py-3'
                      : 'rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50/50 dark:bg-stone-800/50 px-4 py-3'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  ) : msg.content ? (
                    <div className="prose-custom text-sm">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : status === 'streaming' ? (
                    <div className="flex items-center gap-1 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Error banner */}
      {error && (
        <div className="mx-4 mb-2 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200/60 dark:border-red-800/40 flex items-center justify-between">
          <p className="text-xs text-red-700 dark:text-red-400">{error}</p>
          <button
            onClick={() => clearChat()}
            className="text-xs text-red-500 dark:text-red-400 hover:underline ml-4 shrink-0"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Input area */}
      <div className="border-t border-stone-200/60 dark:border-stone-700/60 p-3 md:p-4">
        <div className="flex items-end gap-2">
          {messages.length > 0 && (
            <button
              onClick={clearChat}
              title="Clear chat"
              className="shrink-0 p-2.5 rounded-xl text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          )}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleTextareaInput}
            onKeyDown={handleKeyDown}
            placeholder={`Ask about ${courseName}...`}
            rows={1}
            className="flex-1 resize-none rounded-xl border border-stone-200/60 dark:border-stone-700/60 bg-stone-50 dark:bg-stone-800 px-4 py-2.5 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-vu-blue/20 dark:focus:ring-vu-blue-light/20 focus:border-vu-blue dark:focus:border-vu-blue-light transition-colors"
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || status === 'streaming'}
            className="shrink-0 p-2.5 rounded-xl bg-vu-blue text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-sm disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-2 text-center">
          AI responses are generated from course materials and may not be perfectly accurate.
        </p>
      </div>
    </div>
  );
}
