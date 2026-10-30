import type { Work } from '../types'

const work: Work = {
  slug: 'pg-payment-gateway',
  title: 'PG (Payment Gateway)',
  summary:
    "Tejarat Bank's online card services gateway, redesigned mobile-first for cardholders without internet or mobile banking.",
  tags: ['Banking', 'Fintech', 'UI/UX Design'],
  year: '2023',
  featured: true,
  kind: 'deep',
  role: 'UI/UX Designer',
  team: 'Solo UI/UX designer, collaborating with product managers and banking back-end engineers',
  duration: '2023 · Completed',
  platform: 'Responsive web (Mobile-first)',
  details: [
    ['Domain', 'Banking · Online card services & payment gateway'],
    ['Scope', 'Legacy audit, requirements analysis, user flows, mobile-first UI design, prototyping, Figma handoff'],
    ['Focus', 'Mobile-first redesign with cautious evolution for existing user familiarity'],
    ['Tools', 'Figma'],
  ],
  cover: {
    src: '/assets/tejarat-pg-cover.png',
    caption: 'Insert: PG (Payment Gateway) mobile interface redesign, 2000 × 1500 PNG',
  },
  hero: {
    caption: 'Insert: Before vs after — shows the redesign at a glance, 2400 × 1200 PNG',
    aspect: '2/1',
  },
  sections: [
    {
      id: 'overview',
      title: 'Project overview',
      nav: 'Overview',
      body: [
        "PG (Payment Gateway) is Tejarat Bank's online card services portal, dedicated to cardholders who do not have internet banking or mobile banking accounts, or who cannot or choose not to use native banking applications.",
        'It delivers self-service financial operations—such as card-to-card transfers, balance inquiries, bill payments, and top-ups—directly through a web browser using standard debit card credentials and secure one-time passwords (OTP).',
        {
          type: 'callout',
          text: 'For thousands of customers who cannot install or do not want mobile banking apps, this gateway is their primary digital doorway to Tejarat Bank services.',
        },
      ],
      figures: [
        {
          caption: 'Insert: Before vs after — shows the redesign at a glance, 2400 × 1200 PNG',
          aspect: '2/1',
        },
      ],
    },
    {
      id: 'challenge',
      title: 'Redesigning the legacy gateway',
      nav: 'Challenge',
      body: [
        'As UI/UX designer, I was tasked with redesigning the entire legacy version from the ground up, working from an established feature list and regulatory banking requirements.',
        'The legacy interface had accumulated years of technical debt: cluttered table-based layouts, dense forms with small tap targets, unclear validation error messages, and an overwhelming desktop-centric mindset that alienated users on phones.',
        {
          type: 'cards',
          items: [
            {
              label: '01',
              title: 'Rigid feature list',
              text: 'Every transaction type, validation check, and security rule from the legacy backend had to be supported without dropping existing capabilities.',
            },
            {
              label: '02',
              title: 'Diverse cardholder base',
              text: 'Users ranged from elderly cardholders to quick payees who needed simple, reassuring steps rather than complex banking terminology.',
            },
            {
              label: '03',
              title: 'High-stakes transactions',
              text: 'Any ambiguity in fees, card numbers, or error alerts leads to immediate anxiety and dropped payments in financial gateways.',
            },
          ],
        },
      ],
    },
    {
      id: 'mobile-first',
      title: 'Mobile-first with cautious evolution',
      nav: 'Mobile-first',
      body: [
        'Analytics showed that significantly more users accessed the payment gateway on mobile devices than on desktop computers. I drove a decisive mobile-first approach, prioritizing handheld ergonomics, thumb-friendly numeric keypads, and generous spacing.',
        'However, radical visual changes in banking tools can trigger suspicion and mistrust. I deliberately evolved the legacy experience with caution—retaining established service groupings and reassuring visual anchors while stripping away visual clutter, redundant inputs, and confusing steps.',
      ],
      figures: [
        {
          caption: 'Insert: Main mobile screen — the core experience, 1200 × 1600 PNG',
          aspect: '4/3',
        },
      ],
    },
    {
      id: 'core-flow',
      title: 'Streamlined key user journey',
      nav: 'Key flow',
      body: [
        'I re-architected the core payment flow into clean, structured stages: entering card credentials, verifying the destination and transaction fee, requesting and inputting the dynamic second password (OTP), and reviewing the final receipt.',
        'Immediate inline formatting for 16-digit card numbers with automated bank identification badges gives users instant confirmation that they entered their details correctly before moving to the next step.',
        'Receipts are designed with clear visual hierarchy, emphasizing the reference tracking number, transaction time, and amount, with one-tap options to copy details or save the receipt.',
      ],
      figures: [
        {
          caption: 'Insert: Key flow — the main user journey, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'desktop-adaptation',
      title: 'Adapting to desktop screens',
      nav: 'Desktop',
      body: [
        'A mobile-first system must also look intentional on large monitors. Rather than stretching input fields across full-width desktop monitors, I translated the design into a centered, card-based desktop experience.',
        'The desktop layout balances the primary action card with contextual security tips, customer support links, and bank verification badges on adjacent side panels, creating a safe and focused banking environment.',
      ],
      figures: [
        {
          caption: 'Insert: Desktop version — shows how it adapts, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'outcome',
      title: 'Outcome and handoff',
      nav: 'Outcome',
      body: [
        'The redesigned gateway transformed a dated, frustrating legacy portal into a fast, accessible, and responsive service that aligns with modern banking standards.',
        'I delivered comprehensive Figma design libraries, interaction specs for all input and error states, and responsive breakpoint documentation to the engineering team.',
        'TODO: add metric (e.g. mobile transaction completion rate, reduction in failed attempts, user satisfaction rate) once production analytics are compiled.',
      ],
    },
  ],
}

export default work
