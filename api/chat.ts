import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { context, messages } = req.body;

  if (!context || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Missing context or messages' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenRouter API key not configured' });
  }

  const systemPrompt = `You are an AI study assistant for a VU Amsterdam course. Answer questions accurately based ONLY on the provided course material. If you don't know something or the information isn't in the provided material, say so honestly. Be helpful, concise, and encouraging. When referencing quiz questions, include the explanation. Format your responses with markdown.

COURSE MATERIAL:
${context}`;

  const model = process.env.CHAT_MODEL || 'stepfun/step-3.5-flash:free';

  try {
    const openRouterResponse = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://vu-ai.vercel.app',
          'X-Title': 'AI @ VU Student Hub',
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.slice(-20),
          ],
          stream: true,
          max_tokens: 1024,
          temperature: 0.3,
        }),
      }
    );

    if (!openRouterResponse.ok) {
      const errorBody = await openRouterResponse.text();
      return res
        .status(openRouterResponse.status)
        .json({ error: 'OpenRouter API error', detail: errorBody });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const reader = openRouterResponse.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      return res.status(500).json({ error: 'No response body from OpenRouter' });
    }

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(decoder.decode(value, { stream: true }));
      }
    } finally {
      res.end();
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return res.status(500).json({ error: 'Failed to call OpenRouter', detail: message });
  }
}
