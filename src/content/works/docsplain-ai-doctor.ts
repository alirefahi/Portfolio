import type { Work } from "../types"

const work: Work = {
  slug: "docsplain-ai-doctor",
  title: "Docsplain AI Doctor",
  summary:
    "Docsplain AI Doctor is an AI-first EMR for Canadian clinics and hospitals, and I designed its core product, from the first release through a second phase driven by regulation.",
  tags: ["Healthtech", "EMR", "AI"],
  year: "Docsplain",
  featured: true,
  kind: "deep",
  role: "Product Designer",
  team: "The only designer for the first six months, then two more designers and a design manager joined; I worked daily with the product manager and the front-end developers",
  duration: "About one year (I have since left; the product continues)",
  platform:
    "Web app, desktop and mobile, with separate panels for clinic staff and patients",
  details: [
    ["Domain", "Healthtech, EMR"],
    ["Tools", "Figma, Fluent 2 design system"],
  ],
  hero: {
    caption:
      "The doctor's main workspace with an AI-generated visit note · 2400 × 1350 PNG",
    aspect: "16/9",
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      nav: "Overview",
      body: [
        "Docsplain AI Doctor is an AI-first EMR for Canadian clinics and hospitals, and I designed its core product, from the first release through a second phase driven by regulation.",
        "Existing EMRs had barely changed since their early versions, and doctors, patients and clinic owners were all unhappy with them for different reasons. While I was on the team, the product reached its first release, and the company took part in several successful exhibitions and secured funding.",
      ],
    },
    {
      id: "problem",
      title: "The problem",
      nav: "Problem",
      body: [
        "Existing EMRs had barely changed since their first versions, and each group that depended on them paid for it in a different way.",
        "Competing products such as OSCAR, EPIC, TELUS and Accuro were traditional, offered no AI, and did little to make daily work faster.",
        {
          type: "cards",
          items: [
            {
              label: "01",
              title: "Doctors",
              text: "Found them hard to use, with long processes that did nothing to speed up their work. They also expected the system to help their income.",
            },
            {
              label: "02",
              title: "Patients",
              text: "Got a limited panel. Seeing their appointments was hard, and so was following up after a visit: prescriptions, lab results and the like.",
            },
            {
              label: "03",
              title: "Clinic and hospital owners",
              text: "Had few management tools and very little room to customize the system.",
            },
          ],
        },
        "Two constraints shaped everything: strict regulation at both the Canadian and the Ontario level, and deadlines.",
      ],
    },
    {
      id: "research",
      title: "Understanding the problem",
      nav: "Research",
      body: [
        "I combined four sources: a competitor analysis, interviews, complaints that had been collected from doctors and from clinic and hospital owners, and observation in a real clinic.",
        "The observation changed the most. I watched a doctor's visit, which is where the system gets most of its use. The doctor's screen was crowded, and finding the one function they needed took real time and energy. Even after using the product for a long time, they had never fully learned where things were.",
        {
          type: "callout",
          text: "That became my filter for every screen I designed afterwards: if a doctor has to hunt for it, the design isn't done.",
        },
      ],
      figures: [
        {
          caption:
            "Competitor audit board or annotated notes from the visit · 2400 × 1350 PNG",
          aspect: "16/9",
        },
      ],
    },
    {
      id: "decisions",
      title: "Key decisions",
      nav: "Key decisions",
      body: [
        { type: "heading", text: "Building on Fluent 2", level: 3 },
        "I chose Microsoft's Fluent 2 design system for three reasons. Most clinic staff, our main users, worked on Windows, so it already felt familiar to them. It suits products dense with data and functions. And it covered nearly everything we needed. At the start I used it with very few visual changes. Once the other designers joined, we reshaped its look much more.",
        "TODO: name the alternatives you compared and what you gave up by choosing Fluent 2.",
        {
          type: "heading",
          text: "Keeping the doctor in control of AI",
          level: 3,
        },
        "TODO: describe how a doctor reviews, accepts or edits what the AI produces (visit notes, suggestions), and what you designed to keep the doctor in charge.",
      ],
    },
    {
      id: "solution",
      title: "The solution",
      nav: "Solution",
      body: [
        "I designed the everyday core of the product for clinic staff, plus the admin tools and connections around it:",
        {
          type: "list",
          items: [
            "Scheduling and appointments",
            "Patient record",
            "Visit notes",
            "Diseases, medications and lab tests",
            "Internal messenger and notifications",
            "Integrations with outside systems, such as other EMRs and laboratories",
            "Admin panel and settings",
          ],
        },
        "AI runs through the product. For doctors it writes and summarizes visit notes, suggests medications and treatments, supports decisions and helps with diagnosis. For patients it offers a pre-visit assistant that handles triage, and a post-visit assistant that answers questions and follows up on their condition. Clinics and hospitals can also give patients an assistant that stands in for the doctor, if they choose to.",
        {
          type: "figures",
          items: [
            {
              caption: "Scheduling view, desktop · 2400 × 1350 PNG",
              aspect: "16/9",
            },
          ],
        },
        {
          type: "figures",
          items: [
            {
              caption: "Patient record, desktop · 2400 × 1350 PNG",
              aspect: "16/9",
            },
          ],
        },
        {
          type: "figures",
          items: [
            {
              caption:
                "Visit note with AI-generated summary, desktop · 2400 × 1350 PNG",
              aspect: "16/9",
            },
          ],
        },
        {
          type: "figures",
          items: [
            {
              caption:
                "Diseases, medications and lab tests, 3 screens side by side · 2400 × 1350 PNG",
              aspect: "16/9",
            },
          ],
        },
        {
          type: "figures",
          items: [
            {
              caption: "Admin panel, desktop · 2400 × 1350 PNG",
              aspect: "16/9",
            },
          ],
        },
        {
          type: "figures",
          items: [
            {
              caption:
                "Integrations with other EMRs and labs, 2 screens side by side · 2400 × 1350 PNG",
              aspect: "16/9",
            },
          ],
        },
        {
          type: "figures",
          items: [
            {
              caption:
                "Mobile web views of the main flows, 3 screens side by side · 2400 × 1350 PNG",
              aspect: "16/9",
            },
          ],
        },
      ],
    },
    {
      id: "team",
      title: "Working with the team",
      nav: "Team",
      body: [
        "I worked in a tight daily loop with product and engineering, and the design team around me changed shape partway through.",
        {
          type: "list",
          items: [
            "Daily standups with the team, plus separate meetings with the product manager that were often daily too.",
            "Handoff sessions with the front-end developers.",
            "When two designers and a design manager joined, the manager took over coordination and direction. One designer worked mostly on the landing page and other areas with little overlap with mine. With the other, sticking to the design system kept our work consistent.",
          ],
        },
      ],
    },
    {
      id: "regulation",
      title: "Phase two: designing for regulation",
      nav: "Regulation",
      body: [
        "After the first release, most of our work became understanding the Canadian and Ontario regulatory standards and completing the product around them.",
        "That meant adding a large number of logs and reports, and changing the access levels to match.",
        "TODO: add one concrete example, a specific regulatory requirement and the screen or flow it changed.",
      ],
      figures: [
        {
          caption:
            "Access-level settings and a log or report screen, 2 screens side by side · 2400 × 1350 PNG",
          aspect: "16/9",
        },
      ],
    },
    {
      id: "outcome",
      title: "Outcome",
      nav: "Outcome",
      body: [
        "I don't have product metrics to share, so I'll stick to what I know. The phase of the product assigned to me was completed. While I was on the team, the company took part in several successful exhibitions and secured funding. As far as I know, its founders have since been talking with several companies about becoming part of them, which was one of their goals from the start.",
        "TODO: add any numbers you can stand behind, such as clinics onboarded, doctors using the product, or time saved per visit. If you have none, leave this section as it is.",
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      nav: "Reflection",
      body: [
        "The most important thing I learned is that clarifying the problem is a stage you can't rush. This project had three user groups, each unhappy for different reasons, so the problem was never one sentence.",
        "If I started again, I would spend more time on that stage first, make sure the problem was settled, and only then move on to the rest of the work.",
      ],
    },
  ],
}

export default work
