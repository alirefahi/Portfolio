import type { FigureData } from '../../content/types'

export default function Figure({ f }: { f: FigureData }) {
  return (
    <figure>
      <div style={{ aspectRatio: f.aspect ?? '16/9' }} className="flex items-center justify-center overflow-hidden rounded-3xl bg-neutral-100 text-sm text-neutral-400">
        {f.src ? <img src={f.src} alt={f.caption ?? ''} className="h-full w-full object-cover" /> : <span className="px-6 text-center">{f.caption ?? 'TODO: Image'}</span>}
      </div>
      {f.caption && f.src && <figcaption className="mt-3 text-sm text-neutral-500">{f.caption}</figcaption>}
    </figure>
  )
}
