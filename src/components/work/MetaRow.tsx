import type { Work } from '../../content/types'

export default function MetaRow({ w }: { w: Work }) {
  const items = [['Role', w.role], ['Team', w.team], ['Duration', w.duration], ['Platform', w.platform], ...(w.details ?? [])]
  return (
    <dl className={`grid grid-cols-2 gap-6 border-y border-neutral-200 py-8 ${items.length > 4 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
      {items.map(([k, v]) => (
        <div key={k}>
          <dt className="text-xs uppercase tracking-[0.2em] text-neutral-400">{k}</dt>
          <dd className="mt-2 font-medium">{v}</dd>
        </div>
      ))}
    </dl>
  )
}
