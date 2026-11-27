'use client';

/**
 * Client-side BYOK (bring-your-own-key) settings, stored in localStorage.
 *
 * The key is only ever sent to this same origin's `/api/chat` as an
 * `x-openai-key` header and is never persisted server-side. Storing a key in
 * localStorage is a tradeoff: it survives reloads but is readable by any JS
 * running on the page. An HttpOnly-cookie approach is a safer follow-up.
 */

const KEY = 'vu-openai-api-key';
const MODEL = 'vu-openai-model';

export function getOpenAIKey(): string {
  if (typeof window === 'undefined') return '';
  try {
    return localStorage.getItem(KEY) ?? '';
  } catch {
    return '';
  }
}

export function setOpenAIKey(value: string): void {
  try {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

export function getOpenAIModel(): string {
  if (typeof window === 'undefined') return '';
  try {
    return localStorage.getItem(MODEL) ?? '';
  } catch {
    return '';
  }
}

export function setOpenAIModel(value: string): void {
  try {
    if (value) localStorage.setItem(MODEL, value);
    else localStorage.removeItem(MODEL);
  } catch {
    /* ignore */
  }
}
