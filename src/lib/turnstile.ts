'use client';

/**
 * On-demand Cloudflare Turnstile token generation for protected writes.
 *
 * We render a transient invisible widget, execute it, resolve with the token,
 * then clean up — because Turnstile tokens are single-use. If no site key is
 * configured (NEXT_PUBLIC_TURNSTILE_SITE_KEY), this returns undefined and the
 * backend handles the missing token (dev bypass / fail-open before launch).
 */

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  execute: (id: string) => void;
  remove: (id: string) => void;
}
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'));
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load Turnstile'));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

/**
 * Returns a fresh Turnstile token, or undefined if Turnstile isn't configured.
 * Never throws — on any failure it resolves undefined so the caller can still
 * attempt the request (the backend decides whether to require it).
 */
export async function getTurnstileToken(): Promise<string | undefined> {
  if (!SITE_KEY) return undefined;
  try {
    await loadScript();
    const api = window.turnstile;
    if (!api) return undefined;

    return await new Promise<string | undefined>((resolve) => {
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.left = '-9999px';
      container.style.top = '-9999px';
      document.body.appendChild(container);

      let widgetId: string | null = null;
      const cleanup = () => {
        try {
          if (widgetId) api.remove(widgetId);
        } catch {
          /* ignore */
        }
        container.remove();
      };
      const timeout = setTimeout(() => {
        cleanup();
        resolve(undefined);
      }, 15000);

      widgetId = api.render(container, {
        sitekey: SITE_KEY,
        // Defer the challenge until we call execute(); keep it invisible unless
        // an interaction is genuinely required (set the widget to "Invisible"
        // mode in the Cloudflare dashboard for a fully no-UI experience).
        execution: 'execute',
        appearance: 'interaction-only',
        retry: 'never',
        callback: (token: string) => {
          clearTimeout(timeout);
          cleanup();
          resolve(token);
        },
        'error-callback': () => {
          clearTimeout(timeout);
          cleanup();
          resolve(undefined);
        },
      });
      api.execute(widgetId);
    });
  } catch {
    return undefined;
  }
}

export const turnstileConfigured = SITE_KEY.length > 0;
