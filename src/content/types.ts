export type FigureData = { caption?: string; src?: string; aspect?: string }
export type Metric = { value: string; label: string }
// `highlight` is badge text; setting it also emphasizes the card (e.g. the chosen option).
export type Card = { label?: string; title: string; text: string; highlight?: string }

// A plain string renders as a paragraph; objects render richer layouts.
export type Block =
  | string
  | { type: 'heading'; text: string; level?: 3 | 4 }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'cards'; items: Card[] }
  | { type: 'table'; head?: string[]; rows: string[][] }
  | { type: 'callout'; text: string }
  | { type: 'figures'; items: FigureData[] }

export type Section = {
  id: string
  title: string
  nav?: string // shorter label for the sticky section nav
  eyebrow?: string
  focus?: string[]
  body: Block[]
  figures?: FigureData[]
}

export type Work = {
  slug: string
  title: string
  summary: string
  tags: string[]
  year: string
  featured?: boolean
  kind: 'deep' | 'small'
  role: string
  team: string
  duration: string
  platform: string
  details?: [label: string, value: string][] // extra MetaRow items
  hero: FigureData
  metrics?: Metric[]
  sections: Section[]
}
