import posthog from 'posthog-js';

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

// Maintainer opt-out: run `localStorage.setItem('ph_ignore', '1')` once in the
// browser console and your visits stay out of the data. (PostHog's own opt-out
// wouldn't survive a reload because persistence is 'memory'.)
function isMaintainer(): boolean {
  try {
    return localStorage.getItem('ph_ignore') === '1';
  } catch {
    return false;
  }
}

// Production only, so localhost dev sessions never pollute the numbers.
if (key && process.env.NODE_ENV === 'production' && !isMaintainer()) {
  posthog.init(key, {
    // Requests go through our own domain (see rewrites in next.config.ts)
    // so ad blockers don't drop them; data lands in PostHog's EU cloud.
    api_host: '/ingest',
    ui_host: 'https://eu.posthog.com',
    defaults: '2026-05-30',
    // No cookies or localStorage: keeps us out of consent-banner territory.
    // Trade-off: returning visitors count as new each visit.
    persistence: 'memory',
    // Unhandled errors and promise rejections land in PostHog error tracking.
    capture_exceptions: true,
  });
  // Lets insights tell "nobody used the widget" apart from "the widget was
  // hidden because this deploy had no backend configured".
  posthog.register({ api_enabled: Boolean(process.env.NEXT_PUBLIC_API_URL) });
}
