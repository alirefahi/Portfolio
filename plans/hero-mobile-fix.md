# Fix Hero section on mobile

Scope: only the `Hero` component in `src/App.tsx` (the selected `<section>`). No other sections touched.

## Problems found
1. **Headline overflows**: the `<h1>` uses a fixed `text-[80px]` at all widths. On a ~375px phone, words like "engineering." are wider than the viewport, so the page scrolls sideways and the text gets cut off.
2. **Portrait behaves oddly when stacked**: the image wrapper is `sticky top-0` at every size. On mobile the grid is one column, so sticky positioning is pointless there and can make the image overlap content while you scroll. It also sits at `w-3/4` pushed to the right edge, which looks misaligned under left-aligned text.
3. **Top/bottom spacing** is a bit generous for small screens (`pt-16 pb-24`, `gap-12`).

## Changes (Tailwind classes only, `src/App.tsx` Hero)
- `<section>`: `gap-12 pb-24 pt-16` -> `gap-10 pb-16 pt-10 md:gap-12 md:pb-24` (keep `md:pt-28`, `md:grid-cols-[1.4fr_1fr]`, `md:items-end`).
- `<h1>`: `text-[80px]` -> `text-[44px] sm:text-6xl md:text-[80px]`, add `break-words` as a safety net. Desktop look stays identical.
- Paragraph: add `md:mt-8 mt-6` (was `mt-8`); no other change.
- Button row: `flex gap-4` -> `flex flex-wrap gap-3 sm:gap-4`, `mt-10` -> `mt-8 md:mt-10` so buttons wrap instead of squeezing on very narrow phones.
- Portrait wrapper: `sticky top-0 ... w-3/4 self-start justify-self-end` -> `w-full max-w-sm justify-self-start md:sticky md:top-0 md:w-3/4 md:max-w-none md:self-start md:justify-self-end`. Desktop unchanged; on mobile the image sits full-width (capped) and left-aligned under the text, no sticky.

## Verification
- Check preview at ~375px and ~768px widths: no horizontal scroll, headline wraps cleanly, buttons visible, portrait below text.
- Check desktop (>=768px): layout looks the same as before.
