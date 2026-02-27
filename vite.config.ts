import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function devChatProxy(): Plugin {
  let env: Record<string, string> = {};
  return {
    name: 'dev-chat-proxy',
    configResolved(config) {
      env = loadEnv(config.mode, config.root, '');
    },
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk);
        const body = JSON.parse(Buffer.concat(chunks).toString());

        const { context, messages } = body;
        if (!context || !Array.isArray(messages) || messages.length === 0) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Missing context or messages' }));
          return;
        }

        const apiKey = env.OPENROUTER_API_KEY;
        if (!apiKey) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'OPENROUTER_API_KEY not set in .env.local' }));
          return;
        }

        const systemPrompt = `You are an AI study assistant for a VU Amsterdam course. Answer questions accurately based ONLY on the provided course material. If you don't know something or the information isn't in the provided material, say so honestly. Be helpful, concise, and encouraging. When referencing quiz questions, include the explanation. Format your responses with markdown.\n\nCOURSE MATERIAL:\n${context}`;
        const model = env.CHAT_MODEL || 'stepfun/step-3.5-flash:free';

        try {
          const apiRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
              'HTTP-Referer': 'http://localhost:5173',
              'X-Title': 'AI @ VU Student Hub (dev)',
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
          });

          if (!apiRes.ok) {
            const errText = await apiRes.text();
            res.statusCode = apiRes.status;
            res.end(JSON.stringify({ error: 'OpenRouter API error', detail: errText }));
            return;
          }

          res.setHeader('Content-Type', 'text/event-stream');
          res.setHeader('Cache-Control', 'no-cache');
          res.setHeader('Connection', 'keep-alive');

          const reader = apiRes.body?.getReader();
          const decoder = new TextDecoder();
          if (!reader) { res.statusCode = 500; res.end('No body'); return; }

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            res.write(decoder.decode(value, { stream: true }));
          }
          res.end();
        } catch (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: String(err) }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    devChatProxy(),
  ],
})
