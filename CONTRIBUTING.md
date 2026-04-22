# Contributing to VU AI Student Website

Thanks for wanting to contribute! This site is built by and for VU Amsterdam AI students. Whether you want to add a study tip, share a useful resource, write quiz questions, or fix a bug — contributions are welcome.

## Quick Start

1. **Fork** this repository (click the "Fork" button at the top right of the GitHub page)
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/VU-AI-Student-Website.git
   cd VU-AI-Student-Website
   ```
3. **Install dependencies** and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b add-my-contribution
   ```
5. **Make your changes** (see the sections below for what you can add)
6. **Test locally** — make sure `npm run build` passes without errors
7. **Commit, push, and open a Pull Request**:
   ```bash
   git add .
   git commit -m "Add [description of what you added]"
   git push origin add-my-contribution
   ```
   Then go to the original repo on GitHub and click "Compare & pull request".

---

## What Can I Contribute?

All content lives in TypeScript files inside `src/data/`. You don't need to touch any UI code — just add entries to the right data file.

### Study Tips (`src/data/tips.ts`)

Add a new object to the `tips` array:

```ts
{
  id: 'tip-COURSEID-NUMBER',      // unique ID, e.g. 'tip-dsa-5'
  courseId: 'COURSE-ID',           // must match an existing course ID from courses.ts
  content: 'Your tip text here.',
  author: 'Your Name',            // or 'Anonymous' if you prefer
}
```

### Resources (`src/data/resources.ts`)

Add a new object to the `resources` array:

```ts
{
  id: 'res-COURSEID-NUMBER',      // unique ID, e.g. 'res-intro-ai-3'
  courseId: 'COURSE-ID',
  title: 'Resource Title',
  description: 'A brief description of the resource.',
  url: 'https://example.com',
  type: 'video',                  // one of: 'video' | 'article' | 'tool' | 'pdf' | 'external-quiz' | 'summary'
  tags: ['relevant', 'tags'],
}
```

**Contributing a PDF, DOCX, or other downloadable file?** The file itself goes in the separate [jasp-nerd/vu-ai-resources](https://github.com/jasp-nerd/vu-ai-resources) repo (it's served via GitHub Pages). Two ways:

1. **Open a PR on that repo** with your file under `{course-id}/{category}/{filename}` (e.g. `machine-learning/summaries/my-summary.pdf`). Once merged, the file is live at `https://jasp-nerd.github.io/vu-ai-resources/{course-id}/{category}/{filename}` — use that as the `url` in your resource entry here.
2. **Not comfortable with git?** Open an issue on either repo with the file attached and someone will upload it for you.

### Quiz Questions (`src/data/quizzes.ts`)

Add a new object to the `quizzes` array. There are detailed guidelines at the top of the file — please read them before writing questions.

```ts
{
  id: 'quiz-COURSEID-NUMBER',     // unique ID, e.g. 'quiz-logic-12'
  courseId: 'COURSE-ID',
  question: 'What is...?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctIndex: 0,                // index of the correct answer (0-based)
  explanation: 'Explain why the correct answer is correct.',
  difficulty: 'medium',           // 'easy' | 'medium' | 'hard'
}
```

### Practice Questions (`src/data/practiceQuestions.ts`)

```ts
{
  id: 'pq-COURSEID-NUMBER',
  courseId: 'COURSE-ID',
  topic: 'Topic Name',
  question: 'Your practice question here.',
  answer: 'The expected answer or explanation.',
  difficulty: 'medium',           // 'easy' | 'medium' | 'hard'
}
```

### FAQ Entries (`src/data/faq.ts`)

```ts
{
  id: 'faq-NUMBER',
  question: 'Your question?',
  answer: 'The answer, can use markdown.',
  category: 'Category Name',      // use an existing category or suggest a new one
}
```

### Blog Posts (`src/data/blog.ts`)

```ts
{
  id: 'post-slug',
  slug: 'post-slug',
  title: 'Your Post Title',
  date: '2026-03-05',
  author: 'Your Name',
  excerpt: 'A short summary shown in the blog list.',
  content: `Your full post content here. Supports **markdown**.`,
  tags: ['study-tips', 'year-1'],
}
```

---

## Finding Course IDs

Course IDs are defined in `src/data/courses.ts`. Each course has an `id` field like `'computational-thinking'`, `'data-structures-algorithms-ai'`, `'intro-ai'`, etc. Open the file to find the one you need.

---

## Guidelines

- **Keep it helpful and accurate.** This site is used by real students studying for real exams.
- **Use a unique ID** for every entry you add. Follow the existing naming pattern (e.g. `tip-dsa-5`, `quiz-logic-12`).
- **Test your changes** — run `npm run build` to make sure there are no TypeScript errors.
- **One PR per topic** is preferred (e.g. "Add 5 quiz questions for Intro AI" rather than mixing unrelated changes).
- **No copyrighted material.** Don't copy exam questions, textbook content, or other protected material. Paraphrasing and original content only.

---

## Not Comfortable With Code?

If you'd rather not deal with git and TypeScript, you can still contribute:

- **Open an Issue** on GitHub with your tip, resource, or question, and someone will add it for you.
- Use the label `content-suggestion` if available.

---

## Questions?

Open an issue or reach out. We appreciate every contribution, big or small!
