// Sections are plain components so they can move to Next.js App Router
// (app/page.tsx + components/*) without changes.

const caseStudies = [
  {
    slug: 'case-study-one',
    title: 'TODO: Case study title',
    summary: 'TODO: One-line summary of the problem and outcome.',
    tags: ['Product design', 'Research'],
    year: '2025',
  },
  {
    slug: 'case-study-two',
    title: 'TODO: Case study title',
    summary: 'TODO: One-line summary of the problem and outcome.',
    tags: ['Design systems', 'UI'],
    year: '2024',
  },
]

function Nav() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="#" className="text-lg font-semibold tracking-tight">
        Ali Refahi
      </a>
      <nav className="flex gap-8 text-sm text-neutral-600">
        <a href="#work" className="hover:text-neutral-950">Work</a>
        <a href="#about" className="hover:text-neutral-950">About</a>
        <a href="#contact" className="hover:text-neutral-950">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.4fr_1fr] md:items-end md:pt-28">
      <div>
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          TODO: Role · Location
        </p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
          Designing products people love to use.
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-neutral-600">
          TODO: Short intro — who you are, what you do, and the kind of problems you enjoy solving.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#work" className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
            View work
          </a>
          <a href="#contact" className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:border-neutral-950">
            Get in touch
          </a>
        </div>
      </div>
      <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-neutral-100 text-sm text-neutral-400">
        TODO: Portrait photo
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between border-b border-neutral-200 pb-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Selected work</h2>
        <span className="text-sm text-neutral-500">0{caseStudies.length} projects</span>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        {caseStudies.map((c) => (
          <a key={c.slug} href={`#${c.slug}`} className="group block">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-neutral-100 text-sm text-neutral-400 transition group-hover:bg-neutral-200">
              TODO: Cover image
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-1 text-neutral-600">{c.summary}</p>
                <div className="mt-3 flex gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">{t}</span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-neutral-400">{c.year}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]">
      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">About</h2>
      <p className="text-2xl leading-snug tracking-tight text-neutral-700 md:text-3xl">
        TODO: A few sentences about your background, approach, and what you're looking for next.
      </p>
    </section>
  )
}

function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 pb-12 pt-24">
      <div className="rounded-3xl bg-neutral-950 px-8 py-16 text-white md:px-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Contact</p>
        <a href="mailto:TODO@example.com" className="mt-6 block text-4xl font-semibold tracking-[-0.03em] hover:text-neutral-300 md:text-7xl">
          Let's work together →
        </a>
        <div className="mt-12 flex gap-6 text-sm text-neutral-400">
          <a href="#" className="hover:text-white">TODO: LinkedIn</a>
          <a href="#" className="hover:text-white">TODO: Dribbble</a>
          <a href="#" className="hover:text-white">TODO: Résumé</a>
        </div>
      </div>
      <p className="mt-8 text-sm text-neutral-400">© {new Date().getFullYear()} Ali Refahi</p>
    </footer>
  )
}

export default function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  )
}
