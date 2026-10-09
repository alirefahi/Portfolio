import { getWork } from '../content/works'
import WorkDetailLayout from '../components/work/WorkDetailLayout'

export default function WorkDetail({ slug }: { slug: string }) {
  const w = getWork(slug)
  if (!w) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-32">
        <h1 className="text-5xl font-semibold tracking-[-0.04em]">Project not found</h1>
        <a href="#/works" className="mt-6 inline-block text-neutral-600 hover:text-neutral-950">← All works</a>
      </section>
    )
  }
  return <WorkDetailLayout w={w} />
}
