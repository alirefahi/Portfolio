import type { Work } from '../types'

const work: Work = {
  slug: 'case-study-one',
  title: 'TODO: Case study title',
  summary: 'TODO: One-line summary of the problem and outcome.',
  tags: ['Product design', 'Research'],
  year: '2025',
  featured: true,
  kind: 'deep',
  role: 'TODO: Role',
  team: 'TODO: Team',
  duration: 'TODO: Duration',
  platform: 'TODO: Platform',
  hero: { caption: 'TODO: Hero image' },
  metrics: [
    { value: 'TODO', label: 'Key outcome' },
    { value: 'TODO', label: 'Key outcome' },
    { value: 'TODO', label: 'Key outcome' },
  ],
  sections: [
    { id: 'context', title: 'Context', body: ['TODO: What was the situation and who was it for?'] },
    { id: 'problem', title: 'Problem', body: ['TODO: What problem needed solving and why it mattered.'] },
    { id: 'research', title: 'Research', body: ['TODO: What you learned and how.'], figures: [{ caption: 'TODO: Research artifact' }] },
    { id: 'process', title: 'Process', body: ['TODO: Explorations, iterations, and key decisions.'], figures: [{ caption: 'TODO: Early concepts', aspect: '4/3' }, { caption: 'TODO: Iteration', aspect: '4/3' }] },
    { id: 'solution', title: 'Solution', body: ['TODO: The final design and how it addresses the problem.'], figures: [{ caption: 'TODO: Final design' }] },
    { id: 'outcome', title: 'Outcome', body: ['TODO: Results, impact, and what you learned.'] },
  ],
}

export default work
