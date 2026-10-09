import { works } from '../../content/works'

export default function NextPrevProject({ slug }: { slug: string }) {
  const i = works.findIndex((w) => w.slug === slug)
  const prev = works[(i - 1 + works.length) % works.length]
  const next = works[(i + 1) % works.length]
  return (
    <div className="grid gap-4 border-t border-neutral-200 pt-10 sm:grid-cols-2">
      <a href={`#/works/${prev.slug}`} className="group rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-950">
        <span className="text-sm text-neutral-400">← Previous</span>
        <div className="mt-2 text-lg font-semibold tracking-tight">{prev.title}</div>
      </a>
      <a href={`#/works/${next.slug}`} className="group rounded-3xl border border-neutral-200 p-6 text-right transition hover:border-neutral-950">
        <span className="text-sm text-neutral-400">Next →</span>
        <div className="mt-2 text-lg font-semibold tracking-tight">{next.title}</div>
      </a>
    </div>
  )
}
