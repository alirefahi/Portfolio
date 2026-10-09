# Work Detail page + Works restructure

## Context and assumptions
- The app is Vite + React with hash routing (decided earlier). The spec is written for Next.js App Router, so each Next.js concept gets a Vite equivalent, kept shaped so the port is mechanical:
  - `/works` → `#/works`, `/works/[slug]` → `#/works/<slug>`
  - `generateStaticParams` / `notFound()` → a slug lookup in the router; unknown or draft slug renders a `NotFound` view
  - `generateMetadata` → a `useDocumentMeta` hook that sets `document.title`, the meta description and `og:image`
  - `next/image` → a plain `<img>` with `loading="lazy"` (cover uses `fetchpriority="high"`, no lazy), `sizes`, and an aspect-ratio box that holds the space
  - MDX → typed data, one `.ts` file per project (no MDX tooling added)
- Route naming: use `/works` everywhere (spec mixes `/work` and `/works`; the latest instruction says `/works`). The back link text stays "Back to work".
- Sections 4, 6, 7 and 8 of the spec aren't in this message. Defaults used: section 4 page transition = a short opacity/translate fade (200ms, turned off under `prefers-reduced-motion`); section 6 placeholder = neutral-100 box with the caption centered in muted text; section 7 = heading text comes from data per section, defaulting to Problem/Journey/Solution/Outcome/Reflection. Section 8 workflow is a process doc, not code; its self-check is used in Verification below.

## File structure
```
src/content/types.ts              Project, Metric, Figure, StorySection types
src/content/work/<slug>.ts        one per project (6 placeholder projects)
src/content/index.ts              getAllProjects(), getFeatured(), getProject(slug), getAdjacent(slug)
src/lib/router.ts                 useRoute() parsing hash → { name: 'home'|'works'|'work'|'about'|'notfound', slug? }; scroll handling
src/lib/useDocumentMeta.ts
src/components/WorkCard.tsx
src/components/Figure.tsx
src/components/MetaRow.tsx
src/components/MetricStrip.tsx
src/components/SectionNav.tsx
src/components/NextPrevProject.tsx
src/components/WorkDetailLayout.tsx
src/pages/WorkDetail.tsx, src/pages/NotFound.tsx
```
App.tsx keeps Home sections, Works page, About page; it imports the router and the data module. The inline `caseStudies` array is removed.

## Data model (`types.ts`)
`Project`: slug, title, summary, year, company, domain, role, team, timeline, platform, tools[], tags[], type `'deep'|'small'`, featured, order, cover `{ src?, caption, alt? }`, metrics `{ value, label }[]`, draft, plus body:
- deep: `sections: { id, heading, paragraphs[], callout?: { kind: 'quote'|'decision', text }, figures?: FigureData[] }[]`
- small: `body: string[]`, `figures: FigureData[]` (1-3), `whatIDid: string`, `result: string`

`FigureData`: `{ src?, caption, alt?, layout: 'full'|'two-up'|'narrow', ratio: string, pair?: FigureData }` (two-up uses two items).

Placeholder content: 3 deep (2 featured) and 3 small projects, all TODO text and no invented metrics. One deep project has sample metrics marked `TODO` so the strip can be seen; the others leave `metrics: []` to show the strip is left out. One small project has `draft: true` to confirm it is hidden.

Selectors: not draft; `getFeatured` = featured sorted by `order`; `getAllProjects` = deep first, then small, each sorted by `order`; `getAdjacent` follows that same list order and wraps around.

## Routing and scroll
- `#/works/<slug>` → detail if the slug exists and isn't a draft, otherwise NotFound (with a "Back to work" link to `#/works`).
- Scroll: save `window.scrollY` per route key in sessionStorage before the hash changes. On a `popstate`/back navigation restore the saved position, otherwise scroll to top. Set `history.scrollRestoration = 'manual'`. In-page anchors (`#contact`) still scroll into view.
- Page transition: wrap the routed view in a keyed div with the fade.

## Components
- **WorkCard**: one `<a href="#/works/<slug>">`, accessible name = title (`aria-label={title}`; the inner content stays decorative or matches). Cover in an aspect-[4/3] box; hover/focus: `group-hover:scale-[1.02]` on the image and an arrow nudge of 2px; `focus-visible:outline-2 outline-offset-4 outline-neutral-950`. Shows title, summary, 2-3 tags (domain, role, year) and an optional first metric. Used by both Home and Works.
- **Figure**: renders the img or placeholder in a ratio box, with a `<figcaption>`. Alt = `alt ?? caption`. Layouts: full (wide container), two-up (grid-cols-2 on md, stacked on mobile), narrow (max-w-sm centered).
- **MetaRow**: `<dl>` grid with 6 items, 2 columns on mobile and 3 or 6 on desktop; label in neutral-500, value in neutral-950.
- **MetricStrip**: returns null if there are no metrics; 2-4 items, large number plus label.
- **SectionNav**: `hidden lg:block sticky top-24` list of section links; the active section comes from an IntersectionObserver. Plain text, the active item is darker and medium weight. Links scroll with `scrollIntoView` (a hash change is avoided so routing isn't broken: `onClick` preventDefault).
- **NextPrevProject**: two links (previous and next) with a thumbnail plus title, then a short contact line linking to `#contact` on home/mailto.
- **WorkDetailLayout**: back link, H1, summary, cover (full width, high priority), MetaRow, then by type:
  - deep: MetricStrip, then a 2-column grid on lg (SectionNav column and content); text in `max-w-[68ch]`, figures go wider.
  - small: body paragraphs, figures, "What I did" / "Result" lines, no SectionNav.
  - Both end with NextPrevProject.

## Page edits
- Home Selected Work: `getFeatured().map(WorkCard)`; "All works →" link to `#/works`.
- Works page: deep projects first, then a "Smaller work" group, all via WorkCard.
- Headings: exactly one H1 per view; card titles are h3 under an h2 section heading; on detail pages story headings are h2.

## Verification
1. Self-check first: do cards on both Home and /works open /works/[slug]? Click one from each.
2. Every non-draft card opens a detail page; the draft project isn't in any list, and `#/works/<draft-slug>` shows NotFound; a bogus slug shows NotFound.
3. Deep page: meta row, metric strip shown or hidden correctly, sticky nav highlights while scrolling (desktop) and is hidden on mobile; small page has a lighter layout; next/previous links work and wrap around.
4. Back from a detail page restores the scroll position on Home and Works; going forward lands at the top.
5. Keyboard: Tab reaches every card with a visible outline; document title changes per project.
6. Run `pnpm build` (or tsc) once, since this is a multi-file change.
