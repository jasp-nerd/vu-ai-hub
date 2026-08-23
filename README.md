<p align="center">
  <img src="public/vu-ai-hub-banner.png" alt="VU AI Student Hub banner" width="720" />
</p>

# VU AI Student Hub

A community-driven website for BSc Artificial Intelligence students at VU Amsterdam. Built with Next.js, React, TypeScript, and Tailwind CSS.

Browse courses, read study tips from fellow students, test yourself with quizzes and practice questions, and find curated resources, all in one place.

**Live site:** [vu-ai-hub.vercel.app](https://vu-ai-hub.vercel.app)

This project is free and open source. If it helped you, consider giving it a ⭐ so the next student can find it.

## What's in this repo

```
src/app/          Next.js App Router routes (thin wrappers)
src/views/        The actual page bodies (home, courses, guides, blog, FAQ)
src/components/   Shared UI components
src/data/         Course content: tips, quizzes, resources, practice questions, FAQ, blog
```

All student-facing content lives in TypeScript data files inside `src/data/`. The site reads from these files at build time. There's no database or CMS.

## Study resources

Downloadable study materials (summaries, formula sheets, crash course notes, exam prep, etc.) live in their own repo: **[jasp-nerd/vu-ai-resources](https://github.com/jasp-nerd/vu-ai-resources)**. They're served via GitHub Pages and linked from the site; splitting them out keeps this repo light so contributors can clone quickly. To add new study materials, push them to that repo and add a matching entry in [`src/data/resources.ts`](src/data/resources.ts).

## Contributing

This site is open to contributions from any VU AI student. You can add study tips, useful resources, quiz questions, practice questions, FAQ entries, and blog posts.

**No coding experience needed**, you can also just [open an Issue](../../issues/new) with your content and someone will add it for you.

If you want to contribute directly, see **[CONTRIBUTING.md](CONTRIBUTING.md)** for a step-by-step guide with copy-paste templates for every content type.

## Development

```bash
npm install
npm run dev
```

To check for errors before submitting a PR:

```bash
npm run build
```

## Disclaimer

This is an unofficial student project and is not affiliated with VU Amsterdam. Course materials remain the property of their respective authors. If you'd like something removed, please [open an issue](../../issues/new).
