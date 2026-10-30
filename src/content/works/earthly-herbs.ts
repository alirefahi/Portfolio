import type { Work } from '../types'

const work: Work = {
  slug: 'earthly-herbs',
  title: 'Earthly Herbs',
  summary:
    'An online store selling tea and herbal infusions in Canada, designed end to end with photography-led layouts and art direction.',
  tags: ['E-commerce', 'UI/UX Design', 'Art Direction', 'Web'],
  year: '2022',
  featured: false,
  kind: 'deep',
  role: 'UI/UX Designer',
  team: 'Freelance UI/UX designer, collaborating directly with the client stakeholders and technical development team',
  duration: '2022 · Completed',
  platform: 'E-commerce website (Responsive web)',
  details: [
    ['Domain', 'E-commerce · Tea & herbal infusions (Canada)'],
    [
      'Scope',
      'Information architecture, photography direction, landing page design, product page (PDP), catalog & shop experience, developer handoff',
    ],
    [
      'Highlight',
      'Co-designed site layout and photography guidelines together with stakeholders so product imagery leads the store experience',
    ],
    ['Tools', 'Figma'],
  ],
  cover: {
    src: '/assets/earthly-herbs-cover.png',
    caption: 'Insert: Earthly Herbs landing page hero and brand feel, 2000 × 1500 PNG',
  },
  hero: {
    caption: 'Insert: Landing page — first impression and brand feel, 2400 × 1200 PNG',
    aspect: '2/1',
  },
  sections: [
    {
      id: 'overview',
      title: 'Project overview',
      nav: 'Overview',
      body: [
        'Earthly Herbs is an e-commerce brand selling loose-leaf teas, botanical blends, and herbal infusions across Canada.',
        'As the freelance UI/UX designer, I designed the entire online store from scratch—including the landing page, product catalog, individual product detail pages, and shopping experience—working closely with brand stakeholders and the technical engineering team.',
        {
          type: 'callout',
          text: 'In artisanal tea and botanical goods, scent and taste cannot be experienced through a screen. Visual sensory appeal and tactile photography had to carry the entire purchasing decision.',
        },
      ],
    },
    {
      id: 'my-work',
      title: 'Full store ownership',
      nav: 'My work',
      body: [
        'I partnered directly with stakeholders to translate their botanical brand ethos into an intuitive, conversion-focused online retail experience.',
        {
          type: 'cards',
          items: [
            {
              label: '01',
              title: 'Store architecture & landing page',
              text: 'Structured the narrative from first brand impression to product discovery, highlighting natural sourcing, herbal wellness categories, and seasonal harvests.',
            },
            {
              label: '02',
              title: 'Product listing & catalog',
              text: 'Designed intuitive filters for herbal benefits, caffeine levels, aroma profiles, and ingredients to make choosing the right blend effortless.',
            },
            {
              label: '03',
              title: 'Product page & cart flow',
              text: 'Crafted rich product storytelling with tasting notes, brewing guides, ingredient transparency, and seamless purchase interactions.',
            },
          ],
        },
      ],
    },
    {
      id: 'highlight',
      title: 'Designing the site and photography together',
      nav: 'Highlight',
      body: [
        'Early in discovery, we made a pivotal strategic decision with stakeholders: product photos must come first. Rather than designing generic card grids and forcing studio photography into arbitrary boxes later, the site layout and the photography art direction were designed in tandem.',
        'We established strict guidelines for imagery: photo counts per SKU, lighting conditions (warm, natural diffused daylight), angle consistency, macro texture shots of loose herbs, and in-context brewing rituals. Every layout decision was built around letting the imagery lead the customer journey.',
      ],
      figures: [
        {
          caption: 'Insert: Photography guidelines — supporting the photo-first strategy, conditions, counts, and art direction, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'landing-page',
      title: 'Landing page and brand feel',
      nav: 'Landing page',
      body: [
        'The landing page establishes an earthy, calm, and trustworthy atmosphere. It combines editorial typography, generous whitespace, and vivid organic imagery to communicate quality and care.',
        'Clear signposts guide new visitors toward curated sampler sets, bestsellers, and educational articles on herbal health benefits without overwhelming the browsing flow.',
      ],
      figures: [
        {
          caption: 'Insert: Landing page — first impression and brand feel, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'product-page',
      title: 'Product page: photos leading the layout',
      nav: 'Product page',
      body: [
        'The product detail page (PDP) demonstrates the core highlight in action: high-resolution, tactile photography anchors the top-of-fold experience alongside clear package sizing, pricing, and add-to-cart options.',
        'Secondary sections weave together botanical ingredient provenance, brewing parameters (water temperature, steep time, and ratio), and customer reviews in clean, digestible blocks.',
      ],
      figures: [
        {
          caption: 'Insert: Product page — shows how the photos lead the layout, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'catalog-store',
      title: 'Catalog and shopping experience',
      nav: 'Shop page',
      body: [
        'The product listing and shop page were designed to make browsing intuitive and enjoyable. Products feature dual-state photo cards that show dry botanical leaves on hover alongside packaging, giving shoppers immediate visual cues about blend quality.',
        'Quick-add controls, clear price tiers, and inventory indicators make restocking or building a cart seamless across desktop and mobile devices.',
      ],
      figures: [
        {
          caption: 'Insert: Product listing / shop page — shows the store experience, 2400 × 1350 PNG',
          aspect: '16/9',
        },
      ],
    },
    {
      id: 'handoff',
      title: 'Technical collaboration & handoff',
      nav: 'Handoff',
      body: [
        'I worked closely with the front-end developers to ensure responsive fidelity across desktop, tablet, and mobile breakpoints.',
        'All components, responsive behaviors, image aspect ratios, typography scales, and interactive micro-states were documented and delivered in Figma for a clean build.',
      ],
    },
  ],
}

export default work
