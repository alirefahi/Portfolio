import type { Work } from '../types'

const work: Work = {
  slug: 'spay',
  title: 'SPay',
  summary:
    "A payment facilitator by SabaPardazesh for small businesses that can't or don't want to get a payment gateway directly from gateway providers.",
  tags: ['Fintech', 'PayFac', 'Desktop-first', 'Product Design'],
  year: '2024 – Present',
  featured: true,
  kind: 'deep',
  role: 'Product Designer',
  team: 'Solo product designer at SabaPardazesh, collaborating with product managers and back-end engineers',
  duration: '2024 – Present',
  platform: 'Desktop-first web application',
  details: [
    ['Domain', 'Fintech · Payment facilitator & merchant user panel'],
    ['Scope', 'Market research, competitor analysis, feature list, requirements & regulation review, user flows, UI design, Figma handoff'],
    ['Focus', 'Desktop-first user panel with pragmatic desktop-only scope for complex features'],
    ['Tools', 'Figma'],
  ],
  cover: {
    src: '/assets/spay-cover.png',
    caption: 'Insert: SPay merchant panel dashboard overview, 2000 × 1500 PNG',
  },
  hero: {
    caption: 'Insert: SPay desktop merchant panel — dashboard and main workflows, 2400 × 1200 PNG',
    aspect: '2/1',
  },
  sections: [
    {
      id: 'overview',
      title: 'Project overview',
      nav: 'Overview',
      body: [
        "SPay is a payment facilitator (PayFac) by SabaPardazesh built for small businesses, micro-merchants, and online sellers who can't or don't want to get a payment gateway directly from primary gateway providers.",
        'Direct gateway acquisition from traditional PSPs involves heavy corporate documentation, lengthy bank compliance audits, and complex technical integrations. SPay acts as an agile intermediary—aggregating merchants, streamlining regulatory compliance, and delivering fast access to payment links, settlement tracking, and transaction oversight.',
        {
          type: 'callout',
          text: 'For small businesses, obtaining a direct gateway is slow and burdensome. SPay bridges that gap with rapid onboarding, transparent fee structures, and a dedicated management panel.',
        },
      ],
    },
    {
      id: 'my-work',
      title: 'End-to-end panel ownership',
      nav: 'My work',
      body: [
        "As the team's designer, I owned the entire user panel from research through handoff, shaping the product from early strategy to final design specifications.",
        {
          type: 'cards',
          items: [
            {
              label: '01',
              title: 'Market & competitor analysis',
              text: 'Audited domestic and international payment aggregators to identify pain points in merchant onboarding, fee transparency, and daily reconciliation.',
            },
            {
              label: '02',
              title: 'Feature list & regulations',
              text: 'Reviewed regulatory and compliance standards with product and banking stakeholders, defining a structured feature roadmap aligned with Central Bank and PayFac rules.',
            },
            {
              label: '03',
              title: 'Design & developer handoff',
              text: 'Created complete wireframes, high-fidelity UI states, design tokens, and comprehensive interactive specifications for engineering handoff in Figma.',
            },
          ],
        },
      ],
    },
    {
      id: 'desktop-first',
      title: 'Desktop-first strategy and pragmatic trade-offs',
      nav: 'Desktop-first',
      body: [
        'A core strategic highlight of the project was designing desktop-first. Merchant operations—reconciliation tables, multi-column transaction logs, tax reporting, gateway credential configuration, and settlement verification—require dense data density and spreadsheet-like workflows.',
        'Field research confirmed that business owners perform bookkeeping, financial reconciliation, and deep operational setup on desktop and laptop computers.',
        'To ensure engineering bandwidth was spent on high-impact value, I deliberately kept features with poor mobile ergonomics and high build cost desktop-only. This eliminated expensive responsive compromises and allowed our team to ship a robust, dependable management workspace much faster.',
      ],
      figures: [
        {
          caption: 'Insert: Dashboard / main panel — shows the desktop-first layout, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'key-flow',
      title: 'Main user journey: onboarding to payment links',
      nav: 'Key flow',
      body: [
        'The primary user journey enables merchants to register, verify their business profile, and start accepting payments via custom payment links without technical hurdles.',
        'I structured the onboarding process into clear progressive steps, showing required documentation and regulatory verification status upfront to avoid unexpected delays.',
        'Once verified, merchants can generate static or dynamic payment links with custom descriptions, fixed or variable amounts, and instant QR codes ready to share with customers via messaging or social channels.',
      ],
      figures: [
        {
          caption: 'Insert: Key flow — the main user journey from onboarding to payment link creation, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'core-screen',
      title: 'Panel depth: settlements and transaction oversight',
      nav: 'Panel depth',
      body: [
        'Beyond basic link creation, the panel provides deep operational tooling for merchants to monitor their business health: settlement schedules, fee breakdowns, transaction histories, and accounting exports.',
        'I designed a multi-filter data table system with sticky headers, quick status tags, and detail slide-overs so merchants can audit transactions, trace dispute issues, and track bank payouts without losing their place in the table.',
      ],
      figures: [
        {
          caption: 'Insert: Another core screen — shows depth of the panel with settlement and transaction management, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'outcome',
      title: 'Outcome and handoff',
      nav: 'Outcome',
      body: [
        'The desktop-first merchant panel was delivered to the engineering team in Figma with interactive component libraries, edge-case error states, and detailed data table guidelines.',
        'By focusing on a desktop-first experience and scoping complex features pragmatically, we delivered a focused, professional financial tool for merchants while keeping engineering execution efficient.',
        'TODO: add metric (e.g. merchant onboarding completion rate, monthly transaction volume, time to first payment link) once production analytics are compiled.',
      ],
    },
  ],
}

export default work
