---
name: add-content
description: >
  Add content entries (tips, quizzes, resources, practice questions, essay prompts,
  FAQ, or blog posts) to the site's data files. Use when contributing student-facing
  content to an existing course or the blog. Not for adding new courses — use add-course.
---

## Context

Each content type lives in a separate TypeScript file in `src/data/` with a specific
interface, ID naming convention, and required fields. The data files can be very large
(quizzes.ts is 362KB). Duplicate IDs or invalid courseIds cause silent bugs — the
content appears to exist but may not render or may break filtering.

## Steps

1. **Identify the content type and target file:**

   | Type              | File                          | ID pattern                  |
   |-------------------|-------------------------------|-----------------------------|
   | Study tip         | `src/data/tips.ts`            | `tip-{courseId}-{n}`        |
   | Quiz question     | `src/data/quizzes.ts`         | `quiz-{courseId}-{n}`       |
   | Resource          | `src/data/resources.ts`       | `res-{courseId}-{n}`        |
   | Practice question | `src/data/practiceQuestions.ts`| `pq-{courseId}-{n}`         |
   | Essay prompt      | `src/data/essayPrompts.ts`    | `essay-{courseId}-{n}`      |
   | FAQ entry         | `src/data/faq.ts`             | `faq-{n}`                  |
   | Blog post         | `src/data/blog.ts`            | `post-{n}` or `post-{slug}`|

2. **Validate the courseId** (for course-bound content). Search `src/data/courses.ts`
   for the `id` field to confirm it exists. Common IDs include:
   `computational-thinking`, `intro-python`, `intro-ai`, `logic-sets`,
   `data-structures-algorithms-ai`, `linear-algebra-calculus`.

3. **Determine the next ID number.** Search the target file for existing entries with
   the same courseId prefix to find the highest `{n}`, then increment.

4. **Add the entry** to the exported array in the target file. Required fields by type
   (see `src/types/index.ts` for full interfaces):

   - **CourseTip:** `id`, `courseId`, `content`, `author`
   - **QuizQuestion:** `id`, `courseId`, `question`, `options` (string[]),
     `correctIndex` (0-based index), `explanation`, `difficulty` (`'easy'|'medium'|'hard'`)
   - **Resource:** `id`, `courseId`, `title`, `description`, `url`,
     `type` (`'video'|'article'|'tool'|'pdf'|'external-quiz'|'summary'`), `tags`
   - **PracticeQuestion:** `id`, `courseId`, `topic`, `question`, `answer`,
     `difficulty` (`'easy'|'medium'|'hard'`)
   - **EssayPrompt:** `id`, `courseId`, `category` (`'A'|'B'|'C'`), `topic`,
     `prompt`, `guidance`, optional `wordCountHint`
   - **FAQEntry:** `id`, `question`, `answer` (supports markdown), `category`
   - **BlogPost:** `id`, `slug` (URL-safe), `title`, `date` (YYYY-MM-DD), `author`,
     `excerpt`, `content` (markdown template string), `tags`

5. **Verify.** Run `npm run build` — it must pass with zero errors.

## Verification

- `npm run build` passes
- For course content: navigate to `/courses/{slug}` and check the relevant tab
- For blog posts: navigate to `/guide/blog/{slug}`
- For FAQ: navigate to `/guide/faq` and find the entry under its category

## Common mistakes

- Using a `courseId` that doesn't match any course `id` in `courses.ts` — content will exist in the file but never appear on any page.
- Duplicate IDs — search the file before adding. IDs must be globally unique within each file.
- For quiz questions: setting `correctIndex` to 1-based instead of 0-based, or having it point past the end of the `options` array.
- For blog posts: forgetting to set both `id` and `slug`, or using a slug that conflicts with an existing post.
