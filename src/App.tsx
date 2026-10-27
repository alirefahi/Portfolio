// Sections are plain components so they can move to Next.js App Router
// (app/page.tsx + components/*) without changes.
import { useEffect, useState } from "react"

import { works as caseStudies } from "./content/works"
import WorkCard from "./components/work/WorkCard"
import AvailabilityBadge from "./components/AvailabilityBadge"
import WorkDetail from "./pages/WorkDetail"

function useRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])
  return hash
}

function AllWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <a href="#" className="text-sm text-neutral-500 hover:text-neutral-950">
        ← Back home
      </a>
      <div className="mb-12 mt-6 flex items-end justify-between border-b border-neutral-200 pb-6">
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
          Works
        </h1>
        <span className="text-sm text-neutral-500">
          0{caseStudies.length} projects
        </span>
      </div>
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {caseStudies.map((c) => (
          <WorkCard key={c.slug} c={c} />
        ))}
      </div>
    </section>
  )
}

function Nav() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-4">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Ali Refahi
        </a>
        <div className="hidden md:block">
          <AvailabilityBadge />
        </div>
      </div>
      <nav className="flex gap-8 text-sm text-neutral-600">
        <a href="#/works" className="hover:text-neutral-950">
          Works
        </a>
        <a href="#/about" className="hover:text-neutral-950">
          About
        </a>
        <a href="#contact" className="hover:text-neutral-950">
          Contact
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-6 pt-4 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-12 md:pb-10 md:pt-11 lg:flex lg:items-start lg:justify-between lg:gap-16">
      <div className="lg:min-w-0 lg:flex-1">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Product Designer · Tehran
        </p>
        <h1 className="break-words font-sans text-[44px] font-black leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-[80px] lg:whitespace-nowrap lg:text-[clamp(3.5rem,6vw,5.5rem)]">
          <span
            className="fade-up inline-block lg:block"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            A designer who
          </span>{" "}
          <span
            className="fade-up inline-block lg:block"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            speaks fluent
          </span>{" "}
          <span
            className="fade-up inline-block lg:block"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            engineering.
          </span>
        </h1>
        <p
          style={{ "--i": 3 } as React.CSSProperties}
          className="fade-up mt-6 max-w-[54ch] text-[16px] leading-[var(--text-3xl--line-height)] text-neutral-600 md:mt-8"
        >
          Product designer with 4 years in banking and healthtech. I lead a
          three-person design team and, with a background in front-end and
          back-end, I design flows that are ready to build.
        </p>
        <div
          style={{ "--i": 4 } as React.CSSProperties}
          className="fade-up mt-8 flex flex-wrap gap-3 sm:gap-4 md:mt-10"
        >
          <a
            href="#work"
            className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            View work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:border-neutral-950"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className="aspect-[4/5] w-4/5 max-w-[19.2rem] justify-self-start overflow-hidden rounded-3xl bg-neutral-100 md:sticky md:top-0 md:w-3/5 md:max-w-none md:self-start md:justify-self-end lg:w-[calc((min(100vw,72rem)-6rem)/4)] lg:shrink-0">
        <img
          src="/portrait.jpg"
          alt="Portrait of Ali Refahi"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-12 flex items-end justify-between border-b border-neutral-200 pb-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Selected work
        </h2>
        <a
          href="#/works"
          className="text-sm font-medium text-neutral-600 hover:text-neutral-950"
        >
          All works →
        </a>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        {caseStudies
          .filter((c) => c.featured)
          .map((c) => (
            <WorkCard key={c.slug} c={c} />
          ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]"
    >
      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
        About
      </h2>
      <p className="text-2xl leading-snug tracking-tight text-neutral-700 md:text-3xl">
        Product designer with 4 years in banking and healthtech. I lead a
        three-person design team and, with a background in front-end and
        back-end, I design flows that are ready to build.
      </p>
    </section>
  )
}

// Set to a PDF path (e.g. '/ali-refahi-resume.pdf') to show the download link.
const resumeUrl: string | null = "/ali-refahi-resume.pdf"

// Add a company URL to make its link icon clickable.
const experience: {
  role: string
  company: string
  years: string
  duration: string
  url?: string
}[] = [
  {
    role: "Product Designer",
    company: "SabaPardazesh PJS Co.",
    years: "Sep 2023 — Present",
    duration: "2 yrs 11 mos",
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    years: "Feb 2022 — Jun 2023",
    duration: "1 yr 4 mos",
  },
  {
    role: "UI/UX Designer",
    company: "Doctop",
    years: "Jul 2021 — Jan 2022",
    duration: "7 mos",
  },
  {
    role: "UI/UX Designer",
    company: "The Dexign Studio · Internship",
    years: "Jan 2021 — Apr 2021",
    duration: "4 mos",
  },
]

const principles = [
  {
    title: "Start with people",
    body: "TODO: How research and empathy shape your work.",
  },
  {
    title: "Prototype early",
    body: "TODO: How you test ideas quickly and learn.",
  },
  {
    title: "Sweat the details",
    body: "TODO: How craft and polish fit your process.",
  },
]

const tools = [
  "Figma",
  "FigJam",
  "Framer",
  "Protopie",
  "Notion",
  "Maze",
  "HTML/CSS",
  "React",
]

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <a href="#" className="text-sm text-neutral-500 hover:text-neutral-950">
        ← Back home
      </a>
      <div className="mt-6 grid gap-12 border-b border-neutral-200 pb-16 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
            About me
          </h1>
          <p className="mt-8 max-w-xl text-2xl leading-snug tracking-tight text-neutral-700">
            TODO: Who Ali is — background, focus, and what drives the work.
          </p>
          {resumeUrl && (
            <a
              href={resumeUrl}
              download
              className="mt-10 inline-block rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Download resume ↓
            </a>
          )}
        </div>
        <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-neutral-100 text-sm text-neutral-400">
          TODO: Portrait photo
        </div>
      </div>

      <div className="grid gap-10 border-b border-neutral-200 py-16 md:grid-cols-[1fr_2fr]">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          How I work
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {principles.map((p, i) => (
            <div key={p.title}>
              <span className="text-sm text-neutral-400">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-neutral-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-10 border-b border-neutral-200 py-16 md:grid-cols-[1fr_2fr]">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Experience
        </h2>
        <ul className="divide-y divide-neutral-200">
          {experience.map((e, i) => (
            <li
              key={i}
              className="flex flex-wrap items-baseline justify-between gap-2 py-5 first:pt-0"
            >
              <span className="flex items-center gap-1 text-lg font-semibold tracking-tight">
                {e.role}{" "}
                <span className="font-normal text-neutral-500">
                  @ {e.company}
                </span>
                {e.url ? (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${e.company} website`}
                    className="opacity-70 transition hover:opacity-100"
                  >
                    <img
                      src="/assets/dcf7d.svg"
                      alt=""
                      width={16}
                      height={12}
                    />
                  </a>
                ) : (
                  <img
                    src="/assets/dcf7d.svg"
                    alt=""
                    width={16}
                    height={12}
                    className="opacity-40"
                  />
                )}
              </span>
              <span className="text-sm italic text-neutral-500">
                {e.years} · {e.duration}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-10 py-16 md:grid-cols-[1fr_2fr]">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 pb-12 pt-24">
      <div className="rounded-3xl bg-neutral-950 px-8 py-16 text-white md:px-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
          Contact
        </p>
        <a
          href="mailto:arefahi26@gmail.com"
          className="mt-6 block text-4xl font-semibold tracking-[-0.03em] hover:text-neutral-300 md:text-7xl"
        >
          Let's work together →
        </a>
        <div className="mt-12 flex flex-wrap gap-6 text-sm text-neutral-400">
          <a href="mailto:arefahi26@gmail.com" className="hover:text-white">
            arefahi26@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/alirefahi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn ↗
          </a>
          <a
            href="/ali-refahi-resume.pdf"
            download
            className="hover:text-white"
          >
            resume ↓
          </a>
        </div>
      </div>
      <p className="mt-8 text-sm text-neutral-400">
        © {new Date().getFullYear()} Ali Refahi
      </p>
    </footer>
  )
}

export default function App() {
  const hash = useRoute()
  const detailSlug = hash.startsWith("#/works/")
    ? hash.slice("#/works/".length)
    : null
  const isAllWorks = !detailSlug && hash.startsWith("#/works")
  const isAbout = hash.startsWith("#/about")
  const isPage = !!detailSlug || isAllWorks || isAbout

  // Remember scroll per route so Back returns to the same spot.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual"
    const key = `scroll:${hash || "#"}`
    const saved = sessionStorage.getItem(key)
    if (isPage || !hash || hash === "#") {
      window.scrollTo(0, saved ? Number(saved) : 0)
    } else {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
    const save = () => sessionStorage.setItem(key, String(window.scrollY))
    window.addEventListener("scroll", save, { passive: true })
    return () => window.removeEventListener("scroll", save)
  }, [hash, isPage])

  return (
    <main>
      <Nav />
      {detailSlug ? (
        <WorkDetail slug={detailSlug} />
      ) : isAllWorks ? (
        <AllWorks />
      ) : isAbout ? (
        <AboutPage />
      ) : (
        <>
          <Hero />
          <Work />
          <About />
        </>
      )}
      <Contact />
    </main>
  )
}
