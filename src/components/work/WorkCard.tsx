import type { Work } from '../../content/types'

export default function WorkCard({ c }: { c: Work }) {
  return (
    <a href={`#/works/${c.slug}`} className="group block">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-neutral-100 text-sm text-neutral-400 transition group-hover:bg-neutral-200">
        TODO: Cover image
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{c.title}</h3>
          <p className="mt-1 text-neutral-600">{c.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span key={t} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">{t}</span>
            ))}
          </div>
        </div>
        <span className="text-sm text-neutral-400">{c.year}</span>
      </div>
    </a>
  )
}
