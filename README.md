# VU AI Student Hub

A community-driven website for BSc Artificial Intelligence students at VU Amsterdam. Built with React, TypeScript, and Vite.

Browse courses, read study tips from fellow students, test yourself with quizzes and practice questions, and find curated resources — all in one place.

**Live site:** Hosted on Vercel (see the link at the top of this repo).

## What's in this repo

```
src/data/         Course content: tips, quizzes, resources, practice questions, FAQ, blog
vu-ai-resources/  Downloadable study materials (summaries, formula sheets, exam prep)
src/              React frontend (pages, components, styles)
api/              Serverless API functions (Vercel)
```

All student-facing content lives in TypeScript data files inside `src/data/`. The site reads from these files at build time — there's no database or CMS.

## Study Resources

The `vu-ai-resources/` folder contains free study materials (summaries, formula sheets, crash course notes, exam prep, etc.) for courses in the BSc AI programme. See the [resource README](vu-ai-resources/README.md) for the full list.

## Contributing

This site is open to contributions from any VU AI student. You can add study tips, useful resources, quiz questions, practice questions, FAQ entries, and blog posts.

**No coding experience needed** — you can also just [open an Issue](../../issues/new) with your content and someone will add it for you.

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
