import type { Work } from '../types'

const work: Work = {
  slug: 'ghabz-24',
  title: 'Ghabz 24',
  summary:
    'A bill payment website and mobile app for the general public, designed mobile-first from the ground up.',
  tags: ['Fintech', 'Mobile app', 'Responsive web'],
  year: '2024',
  featured: true,
  kind: 'deep',
  role: 'Product Designer',
  team: 'Solo product designer, working alongside the product manager and back-end engineering team',
  duration: '2024 · Completed',
  platform: 'Mobile app (iOS & Android) and responsive web',
  details: [
    ['Domain', 'Fintech · Utility and bill payments'],
    ['Scope', 'Competitor analysis, requirement definition, user flows, wireframes, UI design, prototyping, Figma handoff'],
    ['Focus', 'Mobile-first design for general public users'],
    ['Tools', 'Figma'],
  ],
  cover: {
    src: '/assets/ghabz-24-cover.png',
    caption: 'Insert: Ghabz 24 mobile home and bill inquiry interface, 2000 × 1500 PNG',
  },
  hero: {
    caption: 'Insert: Ghabz 24 mobile app alongside responsive web bill payment interface, 2400 × 1200 PNG',
    aspect: '2/1',
  },
  sections: [
    {
      id: 'overview',
      title: 'Project overview',
      nav: 'Overview',
      body: [
        'Ghabz 24 is a dedicated bill payment website and mobile app built for the general public. It provides an effortless way for everyday users to inquire about and pay utility bills, telecom services, and municipal fees in one centralized place.',
        'I owned the design end to end, leading the project from competitor analysis and requirements definition alongside the product and back-end team, to final design system architecture, high-fidelity UI, and engineering handoff in Figma.',
        {
          type: 'callout',
          text: 'Bill payment is a high-frequency, low-patience task. The design had to eliminate confusion and deliver a confident confirmation in seconds.',
        },
      ],
    },
    {
      id: 'mobile-first',
      title: 'Mobile-first from the start',
      nav: 'Mobile-first',
      body: [
        'Designed mobile-first from the start, because the mobile app and mobile site were the overwhelming priority for our users. Most people check and pay bills the moment they receive an SMS notification or a paper invoice, making handheld devices the primary touchpoint.',
        'Prioritizing mobile forced absolute clarity in information hierarchy: key numbers, bill amounts, due dates, and payment statuses are visible at a glance without unnecessary interaction layers.',
      ],
      figures: [
        {
          caption: 'Insert: Mobile home / bill list screen — first impression of the product, 1200 × 1600 PNG',
          aspect: '4/3',
        },
      ],
    },
    {
      id: 'process',
      title: 'End-to-end design ownership',
      nav: 'Process',
      body: [
        'Taking the project from concept to developer handoff required close alignment between user expectations and backend technical realities.',
        {
          type: 'cards',
          items: [
            {
              label: '01',
              title: 'Competitor analysis',
              text: 'Audited existing Iranian payment apps and utility portals to identify pain points: cluttered navigation, hidden payment receipts, and confusing failure states.',
            },
            {
              label: '02',
              title: 'Requirements definition',
              text: 'Partnered directly with the product manager and back-end engineers to define inquiry APIs, validation rules, tokenization, and timeout handling.',
            },
            {
              label: '03',
              title: 'Prototyping & handoff',
              text: 'Constructed an exhaustive component library and state-complete screens in Figma, providing specs for every edge case, error modal, and payment gateway callback.',
            },
          ],
        },
      ],
    },
    {
      id: 'core-journey',
      title: 'Bill inquiry and payment flow',
      nav: 'Core journey',
      body: [
        'The core user journey centers on two critical moments: looking up a bill accurately and completing payment with total peace of mind.',
        'I designed multiple inquiry methods to accommodate how users hold their bill data—direct bill ID/payment ID entry, phone number lookup for mobile and fixed lines, and barcode scanning using the device camera.',
        'Before triggering the payment gateway, users see a clear summary breakdown: utility provider badge, billing period, consumer name, and due date. Once paid, the receipt is immediately shareable and stored in local history.',
      ],
      figures: [
        {
          caption: 'Insert: Bill inquiry and payment flow — shows the core user journey, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'web-adaptation',
      title: 'Adapting the design beyond mobile',
      nav: 'Web version',
      body: [
        'While mobile was the priority, the website needed to feel equally native on desktop screens for users managing multiple household or business bills.',
        'Rather than stretching the mobile cards across wide monitors, I adapted the layout into a clean multi-column desktop dashboard. Users can manage saved bills in bulk, filter by utility category, view payment history tables, and perform single or batch bill inquiries side by side.',
      ],
      figures: [
        {
          caption: 'Insert: Website version — shows how the design adapts beyond mobile, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'outcome',
      title: 'Outcome and handoff',
      nav: 'Outcome',
      body: [
        'The end-to-end design was packaged into Figma with comprehensive interactive prototypes, responsive guidelines, and tokenized design tokens for the engineering team.',
        'TODO: add metric (e.g. inquiry completion rate, payment drop-off reduction, user adoption numbers) once live production analytics are collected.',
      ],
    },
  ],
}

export default work
