import type { Section, Work } from '../../content/types'
import Figure from './Figure'
import MetaRow from './MetaRow'
import MetricStrip from './MetricStrip'
import NextPrevProject from './NextPrevProject'
import SectionNav from './SectionNav'

// Remember the last non-detail page so the back link returns there.
let origin = '#/works'
window.addEventListener('hashchange', (e) => {
  const prev = new URL(e.oldURL).hash
  if (!prev.startsWith('#/works/')) origin = prev.startsWith('#/works') ? '#/works' : '#'
})

function SectionBlock({ s }: { s: Section }) {
  return (
    <section id={s.id} className="scroll-mt-8">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{s.title}</h2>
      {s.body.map((p, i) => <p key={i} className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">{p}</p>)}
      {s.figures && (
        <div className={`mt-10 grid gap-6 ${s.figures.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {s.figures.map((f, i) => <Figure key={i} f={f} />)}
        </div>
      )}
    </section>
  )
}

export default function WorkDetailLayout({ w }: { w: Work }) {
  const deep = w.kind === 'deep'
  return (
    <article className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <a href={origin} className="text-sm text-neutral-500 hover:text-neutral-950">{origin === '#' ? '← Back home' : '← All works'}</a>
      <div className="mt-6 flex flex-wrap gap-2">
        {w.tags.map((t) => <span key={t} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">{t}</span>)}
        <span className="px-1 py-1 text-xs text-neutral-400">{w.year}</span>
      </div>
      <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">{w.title}</h1>
      <p className="mt-6 max-w-2xl text-2xl leading-snug tracking-tight text-neutral-700">{w.summary}</p>
      <div className="mt-12"><Figure f={w.hero} /></div>
      <div className="mt-12"><MetaRow w={w} /></div>
      {w.metrics && <div className="mt-12"><MetricStrip metrics={w.metrics} /></div>}

      {deep ? (
        <div className="mt-20 grid gap-12 md:grid-cols-[180px_1fr]">
          <SectionNav sections={w.sections} />
          <div className="space-y-24">{w.sections.map((s) => <SectionBlock key={s.id} s={s} />)}</div>
        </div>
      ) : (
        <div className="mt-20 space-y-16">{w.sections.map((s) => <SectionBlock key={s.id} s={s} />)}</div>
      )}

      <div className="mt-24"><NextPrevProject slug={w.slug} /></div>
    </article>
  )
}
