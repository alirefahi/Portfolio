import type { Work } from '../../content/types'

export default function WorkCard({ c }: { c: Work }) {
  return (
    <a href={`/works/${c.slug}`} className="group block">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-neutral-100 text-sm text-neutral-400 transition group-hover:bg-neutral-200">
        {c.cover?.src ? (
          <img src={c.cover.src} alt={c.cover.caption ?? c.title} className="h-full w-full object-contain" />
        ) : (
          <span className="px-6 text-center">{c.cover?.caption ?? 'TODO: Cover image'}</span>
        )}
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
        <span className="shrink-0 text-sm text-neutral-400">{c.year}</span>
      </div>
    </a>
  )
}
