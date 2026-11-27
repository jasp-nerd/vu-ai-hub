'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  getOpenAIKey,
  getOpenAIModel,
  setOpenAIKey,
  setOpenAIModel,
} from '../lib/openaiSettings';

interface SessionState {
  signedIn: boolean;
  name?: string | null;
  email?: string | null;
  picture?: string | null;
}

export default function OpenAISignIn() {
  const [session, setSession] = useState<SessionState | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('');
  const [saved, setSaved] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setApiKey(getOpenAIKey());
    setModel(getOpenAIModel());

    fetch('/api/auth/openai/session')
      .then((res) => (res.ok ? res.json() : { signedIn: false }))
      .then((data) => setSession(data as SessionState))
      .catch(() => setSession({ signedIn: false }));
  }, []);

  // Close the popover on outside click / Escape.
  useEffect(() => {
    if (!settingsOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSettingsOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [settingsOpen]);

  const signOut = useCallback(async () => {
    try {
      await fetch('/api/auth/openai/logout', { method: 'POST' });
    } catch {
      /* ignore */
    }
    setSession({ signedIn: false });
  }, []);

  const saveSettings = useCallback(() => {
    setOpenAIKey(apiKey.trim());
    setOpenAIModel(model.trim());
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1500);
  }, [apiKey, model]);

  const loginHref =
    '/api/auth/openai/login?returnTo=' +
    encodeURIComponent(
      typeof window === 'undefined'
        ? '/'
        : window.location.pathname + window.location.search
    );

  return (
    <div className="relative flex items-center gap-2" ref={popoverRef}>
      {session?.signedIn ? (
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 text-xs text-stone-700 dark:text-stone-300">
            {session.picture ? (
              <img
                src={session.picture}
                alt=""
                className="w-4 h-4 rounded-full object-cover"
              />
            ) : (
              <span className="w-4 h-4 rounded-full bg-vu-blue/20 flex items-center justify-center text-[9px] font-semibold text-vu-blue">
                {(session.name ?? session.email ?? '?').charAt(0).toUpperCase()}
              </span>
            )}
            {session.name ?? session.email ?? 'ChatGPT user'}
          </span>
          <button
            onClick={signOut}
            className="text-xs text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
          >
            Sign out
          </button>
        </div>
      ) : (
        <a
          href={loginHref}
          data-oai-siwc-button
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-xs font-medium hover:opacity-90 transition-opacity"
        >
          {/* ChatGPT mark (simplified) */}
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
            <path d="M12 2c1.1 0 2 .9 2 2v2.1c1.7.4 3.2 1.2 4.4 2.4l1.6-1.6a2 2 0 1 1 2.8 2.8l-1.6 1.6c1.2 1.2 2 2.7 2.4 4.4H23a2 2 0 1 1 0 4h-.4a8 8 0 0 1-2.4 4.4l1.6 1.6a2 2 0 1 1-2.8 2.8l-1.6-1.6A8 8 0 0 1 14 23.4V23a2 2 0 1 1-4 0v-.4a8 8 0 0 1-4.4-2.4L4 21.8a2 2 0 1 1-2.8-2.8l1.6-1.6A8 8 0 0 1 .4 13H0a2 2 0 1 1 0-4h.4A8 8 0 0 1 2.8 4.6L1.2 3A2 2 0 1 1 4 .2l1.6 1.6A8 8 0 0 1 10 .4V0a2 2 0 0 1 2-2h0Zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
          </svg>
          Continue with ChatGPT
        </a>
      )}

      {/* Settings (BYOK) */}
      <button
        onClick={() => setSettingsOpen((v) => !v)}
        title="AI settings"
        className="shrink-0 p-2 rounded-full text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </button>

      {settingsOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 shadow-lg p-4 z-50 space-y-3">
          <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
            AI model settings
          </h4>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
            Optionally use your own OpenAI account. Paste an API key to route
            requests through your account instead of the site&apos;s default.
          </p>
          <label className="block text-xs text-stone-600 dark:text-stone-400">
            OpenAI API key
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              autoComplete="off"
              className="mt-1 w-full rounded-lg border border-stone-200/60 dark:border-stone-700/60 bg-stone-50 dark:bg-stone-800 px-3 py-2 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-vu-blue/20"
            />
          </label>
          <label className="block text-xs text-stone-600 dark:text-stone-400">
            Model
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="gpt-4o-mini"
              autoComplete="off"
              className="mt-1 w-full rounded-lg border border-stone-200/60 dark:border-stone-700/60 bg-stone-50 dark:bg-stone-800 px-3 py-2 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-vu-blue/20"
            />
          </label>
          <div className="flex items-center justify-between">
            <button
              onClick={saveSettings}
              className="px-3 py-1.5 rounded-lg bg-vu-blue text-white text-xs font-medium hover:opacity-90"
            >
              {saved ? 'Saved' : 'Save'}
            </button>
            {apiKey && (
              <button
                onClick={() => {
                  setApiKey('');
                  setModel('');
                  setOpenAIKey('');
                  setOpenAIModel('');
                }}
                className="text-xs text-red-500 hover:underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
