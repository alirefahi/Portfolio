import type { Work } from '../types'

// Section figures remain placeholders until project screenshots are added.
const work: Work = {
  slug: 'orm-tejarat-bank',
  title: 'ORM: Rebuilding a Bank’s Internal Operations Tool From the Ground Up',
  summary: 'I redesigned Tejarat Bank’s legacy desktop tool for branch operations into a secure, web-based product with a proper design system, a clear information architecture, and an admin layer the bank never had.',
  tags: ['Banking', 'Internal tool', 'Design system'],
  year: 'Tejarat Bank',
  featured: true,
  kind: 'deep',
  role: 'Product Designer, design lead as the team grew',
  team: '3 designers, 2 front-end devs, 4 back-end devs, 1 Product Manager, 1 Product Owner',
  duration: 'Ongoing, 1 year 2 months so far (~70% of the product designed)',
  platform: 'Web · Internal banking tool',
  details: [
    ['Domain', 'Banking, internal tool'],
    ['Users', 'Branch employees (~1,300 branches, ~10,000 employees), internal product support, anti-money-laundering (AML) unit'],
    ['Tools', 'Figma, FigJam, Confluence'],
    ['Scope', 'Discovery, research, wireframes, UI, prototype, design QA, release'],
  ],
  metrics: [
    { value: '~30', label: 'Flows' },
    { value: '~450', label: 'Figma pages' },
    { value: '~150', label: 'Design system components' },
  ],
  hero: { src: '/assets/orm-hero.png', caption: 'The redesigned ORM blacklist management screens', aspect: '2/1' },
  sections: [
    {
      id: 'problem',
      title: 'The problem',
      nav: 'Problem',
      body: [
        'ORM is the tool Tejarat Bank’s branch employees use every day to register customers, check customer and account information, and handle sensitive operations. The old version was a desktop application that hadn’t been meaningfully updated for years.',
        'That created four problems at once:',
        {
          type: 'cards',
          items: [
            { label: '01', title: 'Employees struggled to use it', text: 'Years of services bolted on without a plan had destroyed its structure. Finding a function meant remembering where someone had once put it.' },
            { label: '02', title: 'It couldn’t grow', text: 'Maintenance was slow and expensive, and technical limits meant some of the bank’s requests simply couldn’t be built.' },
            { label: '03', title: 'It had no admin or support layer', text: 'Managing and supporting the product was slow, and it couldn’t be done from inside the bank.' },
            { label: '04', title: 'It had to leave the desktop', text: 'For security reasons, the product needed to move to the web.' },
          ],
        },
        'The bank wanted ORM to catch up with its new generation of products. For me, the real job was bigger than a new look. The product needed a structure that could survive the next five years of additions.',
      ],
    },
    {
      id: 'users',
      title: 'Who I designed for',
      nav: 'Users',
      body: [
        'Three groups of bank employees used the product, each with different needs:',
        {
          type: 'cards',
          items: [
            { label: '01', title: 'Branch employees', text: 'The main users, handling customers face to face.' },
            { label: '02', title: 'Internal product support', text: 'Staff who needed to manage and troubleshoot the product.' },
            { label: '03', title: 'Anti-money-laundering unit', text: 'A team that needed its own controls and visibility.' },
          ],
        },
      ],
    },
    {
      id: 'research',
      title: 'Research with limited access',
      nav: 'Research',
      eyebrow: 'The journey',
      body: [
        'Competitor analysis wasn’t possible. Products like this aren’t publicly accessible, so there was nothing to evaluate. I worked with the sources I could reach instead:',
        {
          type: 'list',
          items: [
            'Interviews with branch employees about how they actually worked.',
            'Years of accumulated complaints, which I collected through support staff and the old product’s project manager.',
            'Interviews with bank stakeholders, to understand what they expected from the new version.',
          ],
        },
        'Together these gave me three views of the same product: what users suffered, what support saw break, and what the business wanted.',
      ],
    },
    {
      id: 'menu',
      title: 'Decision 1: Throw out the old menu structure',
      nav: 'Menu',
      body: [
        'The first big choice was the navigation. I considered keeping the existing structure and improving it, or building a new one.',
        'I chose a new structure: a single-level menu organized by the type of customer at the counter (individual, corporate, or joint). I rejected the old structure for three reasons:',
        {
          type: 'list',
          ordered: true,
          items: [
            'Years of unplanned additions had already destroyed it.',
            'Bank stakeholders didn’t want to carry it forward.',
            'Branch employees didn’t want the same painful experience again.',
          ],
        },
        'The trade-off was relearning. Existing users would have to adapt to something new. But a structure that mirrors how employees think about their work, starting with who is standing in front of them, was worth that cost.',
      ],
    },
    {
      id: 'security',
      title: 'Decision 2: Security over speed',
      nav: 'Security',
      body: [
        'For every operation, the employee must view and confirm the customer’s signature images before proceeding. This adds a step, and in a branch with a queue, every step counts.',
        'I chose to keep it. For a bank, certainty in the operation matters more than shaving seconds. I designed the confirmation to be as clear and low-friction as possible, so that safety became a smooth part of the flow and didn’t feel like an obstacle.',
      ],
    },
    {
      id: 'one-input',
      title: 'Decision 3: One input instead of two',
      nav: 'One input',
      body: [
        'The customer registration form asked for two things: nationality type and an identification code. While researching, I found that a single input could replace both.',
        'An Iranian national code and a foreign national’s unified ID are generated with different algorithms and have different lengths, so the system can tell them apart from the value itself. I proposed collecting only the identification code and detecting the type automatically. The proposal was accepted, and it removed a field and a potential error from one of the most frequent flows.',
      ],
    },
    {
      id: 'design-system',
      title: 'Design system: a deliberate two-stage choice',
      nav: 'Design system',
      body: [
        'At the start, the timeline was extremely tight. I used Flowbite because it had Persian support and let us move fast.',
        'About a year in, roughly 70% of the product was designed and we understood nearly all requirements. The project had grown bigger than expected, and the time pressure had eased. This was the moment to repay the technical debt we had taken on early.',
        'I replaced Flowbite with a customized, Persian-localized version of Simple Design System: new colors and fonts, a restyled look, and new components that the base system lacked. The reasons:',
        {
          type: 'list',
          items: [
            'Future maintenance and updates would be easier.',
            'Design speed would increase and become more controllable as the team grew from one designer to two.',
            'Front-end and design would share a more consistent set of components.',
          ],
        },
        'Starting fast and standardizing once we had enough knowledge was a trade-off I’d make again.',
      ],
    },
    {
      id: 'solution',
      title: 'The solution',
      nav: 'Solution',
      body: [
        'Three flows show the shape of the product best.',
        { type: 'heading', text: 'Individual customer registration', level: 3 },
        'The streamlined form, with the single identification input, signature confirmation, and clear validation.',
        {
          type: 'figures',
          items: [{ caption: 'Final registration flow, 3 to 4 screens side by side · 2400 × 1350 PNG', aspect: '16/9' }],
        },
        { type: 'heading', text: 'Blacklist', level: 3 },
        'A tool for managing restricted customers, built for the AML unit’s needs.',
        {
          type: 'figures',
          items: [{ caption: 'Blacklist list view plus add/review state, 2 screens · 2400 × 1350 PNG', aspect: '16/9' }],
        },
        { type: 'heading', text: 'Customer and account inquiry', level: 3 },
        'Fast lookup of a person’s information and accounts, organized so employees get what they need at the counter.',
        {
          type: 'figures',
          items: [{ caption: 'Inquiry result screen, annotated with key information groups · 2400 × 1350 PNG', aspect: '16/9' }],
        },
        'Across the product, I introduced a unified UI, standardized components, and a menu structure aligned with standard market patterns, so the experience feels familiar rather than invented.',
      ],
      figures: [
        { caption: 'Old menu structure vs. new menu structure, side by side · 2400 × 1350 PNG', aspect: '16/9' },
        { caption: 'Design system overview, key components · 2400 × 1350 PNG', aspect: '16/9' },
      ],
    },
    {
      id: 'outcome',
      title: 'The outcome',
      nav: 'Outcome',
      body: [
        'The bank has no formal quantitative data to share, so I’ll describe the results honestly:',
        {
          type: 'list',
          items: [
            'Bank stakeholders were broadly satisfied with the changes.',
            'Branch employees who tested the product were broadly satisfied. They also gave feedback on making their work easier, and I applied the changes that were correct and useful for all users.',
          ],
        },
        { type: 'heading', text: 'What changed in the product itself', level: 3 },
        {
          type: 'list',
          items: [
            'Redesigned flows with reduced complexity',
            'A new information architecture and menu structure',
            'A unified UI and standardized component library',
            'New features the old version couldn’t support',
            'Faster development and better front-end collaboration',
            'A foundation that can absorb future services without losing its structure',
          ],
        },
        'The scale of the work so far, with the project still in progress:',
        {
          type: 'list',
          items: [
            '~30 flows',
            '~450 Figma pages',
            '~150 components in the design system: ~110 adapted from Simple Design System (localized to Persian and resized to fit our needs) and ~40 designed from scratch for ORM',
          ],
        },
      ],
    },
    {
      id: 'differently',
      title: 'What I’d do differently',
      nav: 'Reflections',
      body: [
        {
          type: 'cards',
          items: [
            { title: 'Understand the whole product before designing the menu', text: 'I designed the sitemap with only a vague description of upcoming features. If I started again, I’d ask the product manager for the complete feature list at the start and not a general overview. A navigation structure is only as good as your knowledge of what will live in it.' },
            { title: 'Never skip the basics, even under pressure', text: 'When there’s more than one designer, or many front-end developers, a good design system, clear principles, and documented decisions are what keep the team consistent and error-free. Time pressure is real, but these fundamentals are what let a team move fast safely.' },
          ],
        },
      ],
    },
  ],
}

export default work
