import type { Metric } from '../../content/types'

export default function MetricStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-6 rounded-3xl bg-neutral-950 p-8 text-white sm:grid-cols-3 md:p-12">
      {metrics.map((m, i) => (
        <div key={i}>
          <div className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">{m.value}</div>
          <div className="mt-2 text-sm text-neutral-400">{m.label}</div>
        </div>
      ))}
    </div>
  )
}
