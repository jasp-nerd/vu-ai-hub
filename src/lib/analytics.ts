import posthog from 'posthog-js';

/**
 * The site's tracking plan. Every custom event is declared here so names and
 * properties can't drift — add new events to this map instead of writing
 * inline posthog.capture() calls. Each event exists to answer one question;
 * never capture free text a user typed (chat messages, tips, notes).
 */
type EventMap = {
  /** Which course-page features do students actually reach? */
  course_tab_opened: { course_id: string; tab: string };
  /** Is the AI chat used, and how deep do conversations go? */
  chat_message_sent: { course_id: string; message_number: number };
  /** Does the chat break in the wild? */
  chat_error: { course_id: string; error: string };
  quiz_started: { course_id: string; question_count: number; timer_enabled: boolean };
  /** Quiz results are otherwise lost on reload — this event is the only record. */
  quiz_completed: { course_id: string; score: number; total: number; best_streak: number };
  difficulty_rated: { course_id: string; rating: number };
  /** held = the spam filter kept the tip for review instead of publishing. */
  tip_submitted: { course_id: string; held: boolean };
  material_uploaded: { course_id: string };
  feedback_popup_shown: { course_id: string };
  feedback_popup_dismissed: { course_id: string; method: 'close' | 'show_less' };
  github_star_clicked: { location: string };
  /** Any failed backend write — several widgets fail silently in the UI. */
  backend_write_failed: { operation: string; status: number | 'network' };
};

/** Capture a custom event. No-op when PostHog isn't running (dev, maintainer opt-out). */
export function track<E extends keyof EventMap>(event: E, properties: EventMap[E]): void {
  if (typeof window === 'undefined' || !posthog.__loaded) return;
  posthog.capture(event, properties);
}
