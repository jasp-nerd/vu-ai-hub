import { useState, useCallback, useRef } from 'react';
import type { ChatMessage, ChatStatus } from '../types/chat';

interface UseChatOptions {
  courseSlug: string;
  context: string;
}

export function useChat({ courseSlug: _courseSlug, context }: UseChatOptions) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<ChatStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (content: string) => {
      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content,
      };
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: '',
      };

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setStatus('streaming');
      setError(null);

      abortRef.current = new AbortController();

      try {
        const wireMessages = [...messages, userMessage].map(({ role, content }) => ({
          role,
          content,
        }));

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ context, messages: wireMessages }),
          signal: abortRef.current.signal,
        });

        if (!response.ok) {
          let errorMessage = `Server error (${response.status})`;
          try {
            const err = await response.json();
            errorMessage = err.error || err.detail || errorMessage;
          } catch {
            const text = await response.text().catch(() => '');
            if (text) errorMessage = text;
          }
          throw new Error(errorMessage);
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) throw new Error('No response stream');

        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6);
            if (data === '[DONE]') break;

            try {
              const chunk = JSON.parse(data);
              const token = chunk.choices?.[0]?.delta?.content;
              if (token) {
                setMessages((prev) => {
                  const updated = [...prev];
                  const last = updated[updated.length - 1];
                  updated[updated.length - 1] = {
                    ...last,
                    content: last.content + token,
                  };
                  return updated;
                });
              }
            } catch {
              // Skip malformed JSON lines
            }
          }
        }

        setStatus('idle');
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          setStatus('idle');
          return;
        }
        setError(err instanceof Error ? err.message : 'Unknown error');
        setStatus('error');
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === 'assistant' && last.content === '') {
            return prev.slice(0, -1);
          }
          return prev;
        });
      }
    },
    [context, messages]
  );

  const clearChat = useCallback(() => {
    abortRef.current?.abort();
    setMessages([]);
    setStatus('idle');
    setError(null);
  }, []);

  return { messages, status, error, sendMessage, clearChat };
}
