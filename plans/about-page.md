# About page

## Goal
Add a dedicated About page at `#/about`. It covers who Ali is, how he works, his experience at a glance, and his tools. Content is TODO placeholders that match the existing style.

## Routing (src/App.tsx)
- Extend the `App` route check: `hash.startsWith('#/about')` renders `<AboutPage />`, with Nav and Contact around it. `#/work` stays as is, and everything else shows home.
- Add `#/about` to the existing scroll-to-top-on-route-change branch.
- Nav "About" link: change `#about` to `#/about`.
- Home `About` section: keep it as a short teaser and add a "More about me →" link to `#/about`, mirroring the "All works →" link.

## AboutPage component (src/App.tsx)
Layout uses `max-w-6xl px-6` and the same type scale as AllWorks.
1. **Header**: "← Back home" link, a large `h1` "About" in hero style, then a TODO intro paragraph next to a TODO portrait placeholder (`aspect-[4/5] rounded-3xl bg-neutral-100`), in a 2-column grid on md.
2. **Who I am**: a section row in a `[1fr_2fr]` grid (same as the home About), with an `h2` and a TODO paragraph.
3. **How I work**: `h2`, plus 3–4 numbered principle cards (01, 02…), each with a TODO title and one line, in a 2-col grid with top borders.
4. **Experience at a glance**: a `const experience = [{ role, company, period }]` array (3 TODO rows) rendered as a table-like list with `border-b` rows: role · company on the left, period in `text-neutral-400` on the right.
5. **Tools**: a `const tools = ['Figma', 'FigJam', 'Framer', 'Notion', 'Maze', 'TODO']` array rendered as pill chips (same style as the WorkCard tags).
6. **Resume link**: driven by `const resumeUrl: string | null = null`. It renders a "Download résumé ↓" pill button (`href={resumeUrl}` with `download`) only when it is non-null. The Contact footer's "TODO: Résumé" link follows the same rule: it's hidden while `resumeUrl` is null and points at the file once Ali supplies it in `public/`.

## Edge cases
- Going from `#/about` to home anchors (`#work`, `#contact`) still scrolls through the existing effect.
- There is no resume button and no broken link until a file exists.

## Verification
Visually check `#/about`, the Nav link, the home teaser link and Back home in the preview. No build is needed.
