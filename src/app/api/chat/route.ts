import {
  checkRateLimit,
  getClientIp,
  rateLimitHeaders,
} from '@/lib/rate-limit';

export const runtime = 'edge';

const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_CHAT_MAX ?? 10);
const RATE_LIMIT_WINDOW_SECONDS = Number(
  process.env.RATE_LIMIT_CHAT_WINDOW_SECONDS ?? 60
);

const OPENAI_DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';
const OPENROUTER_DEFAULT_MODEL =
  process.env.CHAT_MODEL || 'openai/gpt-oss-120b';

const SYSTEM_PROMPT = `You are an AI study assistant for a VU Amsterdam course. Answer questions accurately based ONLY on the provided course material. If you don't know something or the information isn't in the provided material, say so honestly. Be helpful, concise, and encouraging. When referencing quiz questions, include the explanation. Format your responses with markdown. When writing mathematical expressions, always use LaTeX syntax wrapped in dollar signs: $...$ for inline math and $$...$$ for display/block math.

COURSE MATERIAL:
`;

export async function POST(request: Request) {
  // 1. Enforce the rate limit before doing any paid upstream work.
  const ip = getClientIp(request);
  const rl = await checkRateLimit(ip, {
    limit: RATE_LIMIT_MAX,
    windowSeconds: RATE_LIMIT_WINDOW_SECONDS,
  });

  if (!rl.allowed) {
    return new Response(
      JSON.stringify({
        error: 'Rate limit exceeded. Please wait a moment and try again.',
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          ...rateLimitHeaders(rl),
        },
      }
    );
  }

  const rlHeaders = rateLimitHeaders(rl);

  // 2. Parse and validate the request.
  let body: { context?: string; messages?: { role: string; content: string }[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...rlHeaders },
    });
  }

  const { context, messages } = body;
  if (!context || !Array.isArray(messages) || messages.length === 0) {
    return new Response(
      JSON.stringify({ error: 'Missing context or messages' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...rlHeaders } }
    );
  }

  // 3. Choose the upstream provider:
  //    a) A user-supplied OpenAI key (x-openai-key header) → their account.
  //    b) A deployment-level OPENAI_API_KEY → the site owner's OpenAI account.
  //    c) OpenRouter (existing fallback).
  const userKey = request.headers.get('x-openai-key')?.trim() || null;
  const siteOpenAIKey = process.env.OPENAI_API_KEY;
  const openRouterKey = process.env.OPENROUTER_API_KEY;

  const systemPrompt = SYSTEM_PROMPT + context;
  const wireMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.slice(-20),
  ];

  if (userKey || siteOpenAIKey) {
    return streamOpenAI(
      userKey ?? siteOpenAIKey!,
      request.headers.get('x-openai-model')?.trim() || OPENAI_DEFAULT_MODEL,
      wireMessages,
      rlHeaders
    );
  }

  if (openRouterKey) {
    return streamOpenRouter(openRouterKey, wireMessages, rlHeaders);
  }

  return new Response(
    JSON.stringify({ error: 'No AI provider configured' }),
    { status: 500, headers: { 'Content-Type': 'application/json', ...rlHeaders } }
  );
}

function jsonError(status: number, message: string, rlHeaders: Record<string, string>) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json', ...rlHeaders },
  });
}

async function streamOpenAI(
  apiKey: string,
  model: string,
  messages: { role: string; content: string }[],
  rlHeaders: Record<string, string>
): Promise<Response> {
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        stream: true,
        max_tokens: 4096,
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return jsonError(
        res.status,
        `OpenAI API error${detail ? `: ${detail.slice(0, 300)}` : ''}`,
        rlHeaders
      );
    }

    return new Response(res.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        ...rlHeaders,
      },
    });
  } catch (err) {
    return jsonError(
      500,
      err instanceof Error ? err.message : 'Failed to call OpenAI',
      rlHeaders
    );
  }
}

async function streamOpenRouter(
  apiKey: string,
  messages: { role: string; content: string }[],
  rlHeaders: Record<string, string>
): Promise<Response> {
  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://vu-ai-hub.vercel.app',
        'X-Title': 'AI @ VU Student Hub',
      },
      body: JSON.stringify({
        model: OPENROUTER_DEFAULT_MODEL,
        messages,
        stream: true,
        max_tokens: 4096,
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return jsonError(
        res.status,
        `OpenRouter API error${detail ? `: ${detail.slice(0, 300)}` : ''}`,
        rlHeaders
      );
    }

    return new Response(res.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        ...rlHeaders,
      },
    });
  } catch (err) {
    return jsonError(
      500,
      err instanceof Error ? err.message : 'Failed to call OpenRouter',
      rlHeaders
    );
  }
}
