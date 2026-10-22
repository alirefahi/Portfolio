import type { Block } from '../../content/types'
import Figure from './Figure'

const prose = 'max-w-2xl text-lg leading-relaxed text-neutral-600'

// `nested` means the block sits under an h3, so card titles step down to h4.
export default function ContentBlock({ b, nested = false }: { b: Block; nested?: boolean }) {
  if (typeof b === 'string') return <p className={`mt-5 ${prose}`}>{b}</p>

  switch (b.type) {
    case 'heading':
      return b.level === 4 ? (
        <h4 className="mt-8 text-lg font-semibold tracking-tight">{b.text}</h4>
      ) : (
        <h3 className="mt-12 text-xl font-semibold tracking-tight md:text-2xl">{b.text}</h3>
      )

    case 'list':
      return b.ordered ? (
        <ol className={`mt-6 space-y-4 ${prose}`}>
          {b.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-sm font-semibold text-neutral-500">{i + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className={`mt-5 list-disc space-y-2 pl-5 marker:text-neutral-300 ${prose}`}>
          {b.items.map((item, i) => <li key={i} className="pl-1">{item}</li>)}
        </ul>
      )

    case 'cards': {
      const Title = nested ? 'h4' : 'h3'
      return (
        <div className={`mt-8 grid gap-4 ${b.items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
          {b.items.map((c) => (
            <div key={c.title} className={`rounded-3xl border p-6 ${c.highlight ? 'border-neutral-950 bg-neutral-950 text-white' : 'border-neutral-200'}`}>
              {(c.label || c.highlight) && (
                <div className="mb-3 flex items-center justify-between gap-3 text-sm text-neutral-400">
                  <span>{c.label}</span>
                  {c.highlight && <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white">{c.highlight}</span>}
                </div>
              )}
              <Title className="text-lg font-semibold leading-snug tracking-tight">{c.title}</Title>
              <p className={`mt-2 leading-relaxed ${c.highlight ? 'text-neutral-300' : 'text-neutral-600'}`}>{c.text}</p>
            </div>
          ))}
        </div>
      )
    }

    case 'table':
      return (
        <table className="mt-8 w-full border-b border-neutral-200 text-left">
          {b.head && (
            <thead>
              <tr className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                {b.head.map((h) => <th key={h} scope="col" className="pb-3 pr-6 font-normal">{h}</th>)}
              </tr>
            </thead>
          )}
          <tbody>
            {b.rows.map(([term, ...cells]) => (
              <tr key={term} className="border-t border-neutral-200 align-top">
                <th scope="row" className="w-2/5 py-4 pr-6 font-semibold sm:w-60">{term}</th>
                {cells.map((c, i) => <td key={i} className="py-4 leading-relaxed text-neutral-600">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )

    case 'callout':
      return <p className="mt-12 max-w-3xl border-l-2 border-neutral-950 pl-6 text-2xl font-medium leading-snug tracking-tight text-neutral-950">{b.text}</p>

    case 'figures':
      return (
        <div className={`mt-10 grid gap-6 ${b.items.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {b.items.map((f, i) => <Figure key={i} f={f} />)}
        </div>
      )
  }
}
