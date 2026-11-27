# Sign in with ChatGPT + AI chat configuration

## What this adds

1. **Sign in with ChatGPT (SIWC)** — OAuth 2.0 Authorization Code + PKCE against
   OpenAI's OIDC provider, for identity sign-in (`openid profile email`).
2. **Rate limiting** on `POST /api/chat` — fixed window per client IP, backed by
   Vercel KV with an in-memory fallback.
3. **Bring-your-own-key (BYOK)** — users can paste their own OpenAI API key to
   run the chat through *their* account and model.

## Important limitation (read this first)

The SIWC flow implemented here is **identity-only**. It signs a user in and gives
you a stable account identifier (`sub`), name, email, and picture — but it does
**not** return an access token you can use to call OpenAI models.

"ChatGPT plan usage" (letting a user's ChatGPT Plus/Pro subscription pay for
model calls in your app) is a *separate* OpenAI feature that is only available
to:

- **approved commercial partners** (invite-only trial), or
- the **open-source token-sharing flow**, which uses a `127.0.0.1` loopback
  `redirect_uri` and `client_id=dynamic_agent_client` — i.e. it is designed for
  locally-run desktop/CLI tools, **not** a hosted website like this one.

So, on a hosted Vercel deployment, a signed-in ChatGPT user still needs an OpenAI
API key to actually run models. That is exactly why the BYOK key input is
included: it is the mechanism that lets someone use *their own* models and
account today, without waiting for OpenAI partner approval.

## Setup

### 1. Rate limiting

| Variable | Default | Purpose |
| --- | --- | --- |
| `RATE_LIMIT_CHAT_MAX` | `10` | Max requests per IP per window |
| `RATE_LIMIT_CHAT_WINDOW_SECONDS` | `60` | Window length in seconds |
| `KV_REST_API_URL` | — | Vercel KV REST URL |
| `KV_REST_API_TOKEN` | — | Vercel KV REST token |

1. In Vercel, create a **KV (Redis)** store.
2. Connect it to the project and expose `KV_REST_API_URL` and `KV_REST_API_TOKEN`
   (Vercel does this automatically when you link the store).
3. Without KV configured, the limiter degrades to a per-instance in-memory store
   — acceptable for local dev, but not reliable across serverless instances.

### 2. Sign in with ChatGPT

1. [Request an OpenAI OAuth client](https://developers.openai.com/siwc/request-client-id)
   and wait for approval (currently a limited partner trial).
2. Set the environment variables:

| Variable | Purpose |
| --- | --- |
| `OPENAI_OAUTH_CLIENT_ID` | Your issued client ID (`oaiapp_...`) |
| `OPENAI_OAUTH_CLIENT_SECRET` | Only for a confidential client; omit for a public client |
| `OPENAI_OAUTH_REDIRECT_URI` | Exact registered callback, e.g. `https://vu-ai-hub.vercel.app/api/auth/openai/callback` |
| `SESSION_SECRET` | Random secret used to sign session/transaction cookies (`openssl rand -base64 32`) |

Until `OPENAI_OAUTH_CLIENT_ID` and `OPENAI_OAUTH_REDIRECT_URI` are set, the
sign-in button renders but the routes return `503` — the app keeps working
normally otherwise.

### 3. Your own OpenAI models (BYOK)

- Set `OPENAI_API_KEY` + `OPENAI_MODEL` to use your own account as the site-wide
  default.
- Users can also paste their own key in the chat's **AI model settings**
  (gear icon). That key is stored only in their browser's `localStorage` and sent
  only to this origin's `/api/chat` as an `x-openai-key` header.
- Request routing priority: per-user key → `OPENAI_API_KEY` → OpenRouter.

## Endpoints

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/chat` | POST | Chat completions (OpenAI / OpenRouter), rate limited |
| `/api/auth/openai/login` | GET | Start SIWC (redirects to OpenAI) |
| `/api/auth/openai/callback` | GET | OAuth callback (exchanges code, sets session) |
| `/api/auth/openai/logout` | POST | Clear the session cookie |
| `/api/auth/openai/session` | GET | Current sign-in state for the UI |

## Notes

- The session and auth-transaction cookies are stateless (HMAC-signed) so no
  session store is required. Raw ID tokens are never persisted.
- `max_tokens` is used for the OpenAI provider for broad model compatibility;
  reasoning models (`o1`/`o3`/`gpt-5`) require `max_completion_tokens` — swap it
  if you use those.
