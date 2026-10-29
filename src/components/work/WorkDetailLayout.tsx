import type { Section, Work } from '../../content/types'
import ContentBlock from './ContentBlock'
import Figure from './Figure'
import MetaRow from './MetaRow'
import MetricStrip from './MetricStrip'
import NextPrevProject from './NextPrevProject'
import SectionNav from './SectionNav'
import { getDetailOrigin } from '../../routing'

function SectionBlock({ s }: { s: Section }) {
  let nested = false
  return (
    <section id={s.id} className="scroll-mt-8">
      {s.eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">{s.eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{s.title}</h2>
      {s.focus && (
        <div className="mt-5 flex flex-wrap gap-2">
          {s.focus.map((t) => <span key={t} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">{t}</span>)}
        </div>
      )}
      {s.body.map((b, i) => {
        if (typeof b !== 'string' && b.type === 'heading') nested = true
        return <ContentBlock key={i} b={b} nested={nested} />
      })}
      {s.figures && <ContentBlock b={{ type: 'figures', items: s.figures }} />}
    </section>
  )
}

export default function WorkDetailLayout({ w }: { w: Work }) {
  const origin = getDetailOrigin()
  const deep = w.kind === 'deep'
  return (
    <article className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <a href={origin} className="text-sm text-neutral-500 hover:text-neutral-950">{origin === '/' ? '← Back home' : '← All works'}</a>
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
