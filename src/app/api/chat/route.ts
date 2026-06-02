export const runtime = 'edge';

export async function POST(request: Request) {
  const { context, messages } = await request.json();

  if (!context || !Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: 'Missing context or messages' }, { status: 400 });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'OpenRouter API key not configured' }, { status: 500 });
  }

  const systemPrompt = `You are an AI study assistant for a VU Amsterdam course. Answer questions accurately based ONLY on the provided course material. If you don't know something or the information isn't in the provided material, say so honestly. Be helpful, concise, and encouraging. When referencing quiz questions, include the explanation. Format your responses with markdown. When writing mathematical expressions, always use LaTeX syntax wrapped in dollar signs: $...$ for inline math and $$...$$ for display/block math.

COURSE MATERIAL:
${context}`;

  const model = process.env.CHAT_MODEL || 'openai/gpt-oss-120b';

  try {
    const openRouterResponse = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://vu-ai-hub.vercel.app',
          'X-Title': 'AI @ VU Student Hub',
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.slice(-20),
          ],
          stream: true,
          max_tokens: 4096,
          temperature: 0.3,
        }),
      }
    );

    if (!openRouterResponse.ok) {
      const errorBody = await openRouterResponse.text();
      return Response.json(
        { error: 'OpenRouter API error', detail: errorBody },
        { status: openRouterResponse.status }
      );
    }

    return new Response(openRouterResponse.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json(
      { error: 'Failed to call OpenRouter', detail: message },
      { status: 500 }
    );
  }
}
