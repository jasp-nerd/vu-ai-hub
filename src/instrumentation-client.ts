import posthog from 'posthog-js';

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    // Requests go through our own domain (see rewrites in next.config.ts)
    // so ad blockers don't drop them; data lands in PostHog's EU cloud.
    api_host: '/ingest',
    ui_host: 'https://eu.posthog.com',
    defaults: '2026-05-30',
    // No cookies or localStorage: keeps us out of consent-banner territory.
    // Trade-off: returning visitors count as new each visit.
    persistence: 'memory',
  });
}
