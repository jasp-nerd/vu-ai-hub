export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export type ChatStatus = 'idle' | 'streaming' | 'error';
