---
name: add-page
description: >
  Add a new routable page to the site (component, route, and navigation entry).
  Use when creating a new top-level or nested page. Not for adding content to
  existing data files — use add-content for that.
---

## Context

Pages require synchronized changes in three files. Forgetting the lazy import in
App.tsx causes a build error. Forgetting the navigation entry makes the page
unreachable from the navbar. New pages must follow the existing patterns (Layout
wrapper, Tailwind styling, dark mode support, scroll animations).

## Steps

1. **Create the page component** in `src/pages/{PageName}Page.tsx`.
   - Export a default function component (required for `React.lazy()`).
   - Use Tailwind utility classes; support dark mode via `dark:` variants.
   - Use animation hooks from `src/hooks/useAnimations.ts` for scroll reveals.
   - See existing pages for patterns: `src/pages/FAQPage.tsx` is a good simple
     example; `src/pages/CourseDetailPage.tsx` is the most complex.

2. **Register the route** in `src/App.tsx`:
   - Add a lazy import at the top: `const {PageName}Page = lazy(() => import('./pages/{PageName}Page'));`
   - Add a `<Route>` inside the `<Route element={<Layout />}>` block.
   - Choose a path that fits the existing structure:
     - Top-level: `/thing`
     - Under guide: `/guide/thing`
     - With params: `/guide/thing/:paramId`

3. **Add a navigation entry** in `src/data/navigation.ts` if the page should be
   reachable from the navbar. Add to the appropriate section:
   - Top-level item: add to the root `navigationItems` array.
   - Sub-item under Guide: add to the `children` array of the Guide entry.
   Follow the `NavItem` interface: `{ label: string; path: string }`.

4. **Verify.** Run `npm run build` — it must pass with zero errors.

## Verification

- `npm run build` passes
- Navigate to the new path in dev — page renders inside the Layout (navbar + footer)
- If added to navigation, the link appears in the navbar and navigates correctly

## Common mistakes

- Using a named export instead of `export default` — `React.lazy()` requires a default export.
- Adding the `<Route>` outside the `<Route element={<Layout />}>` wrapper, causing the page to render without navbar/footer.
- Forgetting to add the page to `navigation.ts`, making it invisible to users.
- Not supporting dark mode — all pages must use `dark:` Tailwind variants for backgrounds and text.
