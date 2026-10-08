# Plan: "All Works" page

## Goal
Add an All Works page. The header's "Work" link opens it, and the selected Work section gets an "All Works" link where the "02 projects" text is now.

## Scope (all in `src/App.tsx`)
1. **Selected Work section (the element you selected):** replace `<span>0{n} projects</span>` with an `All Works →` link (`href="#/work"`), styled `text-sm font-medium text-neutral-600 hover:text-neutral-950` with an underline-on-hover treatment.
2. **Header (you asked for this outside the selection):** change the "Work" nav link from `#work` to `#/work`. Make the logo link go to `#/` so it returns home.
3. **New `AllWorks` page component:**
   - Page heading "All works", a short TODO intro, and a project count. The count moves here from the home page.
   - A responsive grid of 6 placeholder work cards (`md:grid-cols-2 lg:grid-cols-3`), in the same style as the current cards: 4:3 cover placeholder, title, summary, tags, year.
   - A "← Back home" link.
4. **Data:** expand `caseStudies` to 6 entries with a `featured` flag. The home page shows only the 2 featured items, and All Works shows all 6. To avoid duplicate card markup, pull the card into a shared `WorkCard` component.
5. **Routing:** no new dependency. A small `useHashRoute()` hook reads `window.location.hash` and listens for `hashchange`:
   - `#/work` renders `Nav + AllWorks + Contact`.
   - Anything else renders the current home page.
   - On route change, scroll to the top.
   - The in-page anchors (`#about`, `#contact`) keep working. If they're clicked from the All Works page, they go to `#/` first.
   - Later on Next.js, this maps directly to `app/work/page.tsx`.

## Verification
- In the preview: clicking header "Work" or "All Works" opens the page with 6 cards. "Back home" and the logo return home. Browser back/forward works.
- The home page still shows 2 cards.
