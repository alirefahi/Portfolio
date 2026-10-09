import { useEffect, useState } from 'react'
import type { Section } from '../../content/types'

export default function SectionNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [sections])
  return (
    <nav className="sticky top-8 hidden md:block">
      <ul className="space-y-3 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={active === s.id ? 'font-semibold text-neutral-950' : 'text-neutral-400 hover:text-neutral-700'}
            >
              {s.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
