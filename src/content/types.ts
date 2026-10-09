export type FigureData = { caption?: string; src?: string; aspect?: string }
export type Metric = { value: string; label: string }
export type Section = { id: string; title: string; body: string[]; figures?: FigureData[] }

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
  hero: FigureData
  metrics?: Metric[]
  sections: Section[]
}
