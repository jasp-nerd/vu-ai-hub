---
name: add-course
description: >
  Add a new course to the site with its data entry, banner image, and optional summary.
  Use when a new VU AI course needs to be added. Not for editing existing courses or
  adding content (tips, quizzes, etc.) to an existing course — use add-content for that.
---

## Context

Adding a course requires coordinated changes across multiple files. A missing or mismatched
slug causes broken links and 404s. A missing image path causes a broken card on the homepage
and course list. The `Course` interface has 15+ fields with specific types and enums.

## Steps

1. **Check for slug conflicts.** Search `src/data/courses.ts` for the proposed slug.
   The `id` and `slug` fields must be identical and unique across all courses.

2. **Add the course object** to the `courses` array in `src/data/courses.ts`.
   Follow the interface in `src/types/index.ts`. Required fields:
   - `id` / `slug` — kebab-case, e.g. `'natural-language-processing'`
   - `name` — full course name
   - `code` — VU course code, e.g. `'X_400123'`
   - `year` — `1 | 2 | 3`
   - `period` — integer (1–6)
   - `credits` — string like `'6EC'`
   - `description` — one-paragraph summary
   - `overview` — detailed multi-paragraph overview (template string)
   - `difficulty` — `0 | 1 | 2 | 3 | 4 | 5`
   - `tags` — string array, e.g. `['required', 'programming']`
   - `image` — path like `'/assets/images/courses/{slug}.png'`
   Place the entry in the correct year/period section (the file is organized by
   `// ========== YEAR N ==========` comments).

3. **Add a banner image.** Place a PNG at `public/assets/images/courses/{slug}.png`.
   Existing images are ~300–400KB, landscape aspect ratio (~5:2).

4. **(Optional) Add a summary file.** If course summary content is available, create
   `src/data/summaries/{slug}-summary.ts` exporting a single template-string constant.
   See `src/data/summaries/computational-thinking-summary.ts` for the pattern.
   Then add a `summary`-type resource in `src/data/resources.ts` with `markdownContent`
   importing from the summary file.

5. **Verify.** Run `npm run build` — it must pass with zero errors.

## Verification

- `npm run build` passes
- Navigate to `/courses/{slug}` in dev — page renders with image, description, and tabs
- Course appears in the correct year section on `/courses`

## Common mistakes

- Setting `id` and `slug` to different values — they must be identical.
- Using a `difficulty` value outside the literal union `0 | 1 | 2 | 3 | 4 | 5` (e.g. using a plain `number`). Cast with `as const` if needed.
- Forgetting the `image` field or using the wrong path prefix (must start with `/assets/images/courses/`).
- Placing the course object outside its year section, breaking the visual grouping in the source file.
