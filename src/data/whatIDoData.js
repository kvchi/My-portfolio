import { imageSources } from "./imageSources";

export const whatIDoData = [
  {
    id: "frontend-experiences",
    number: "01",
    label: "Frontend development",
    heading: "Accessible, responsive interfaces built for real users.",
    description:
      "I build React interfaces with JavaScript, reusable components, thoughtful state management, responsive layouts, accessibility, and REST API integration.",
    highlights: ["React interfaces", "Reusable components", "Accessible interaction"],
    visual: {
      type: "image",
      src: imageSources.projects["1255"].src,
      width: 609,
      height: 407,
      alt: "Nexim Bank website interface from my portfolio",
      caption: "Selected portfolio interface",
    },
    theme: "what-i-do-card--frontend",
  },
  {
    id: "full-stack-delivery",
    number: "02",
    label: "Full-stack projects",
    heading: "Customer journeys supported by secure APIs and reliable data.",
    description:
      "My project work connects React frontends to Node.js and Express REST APIs, with authentication, Prisma, SQLite or Turso, transactional email, and Paystack test payments.",
    highlights: ["Node.js + Express", "Prisma + Turso", "Authentication + payments"],
    visual: {
      type: "flow",
      items: ["React storefront", "Express REST API", "Prisma + Turso"],
    },
    theme: "what-i-do-card--fullstack",
  },
  {
    id: "quality-delivery",
    number: "03",
    label: "Quality and deployment",
    heading: "Performance, testing, and deployment treated as part of the product.",
    description:
      "I use automated frontend and backend testing, responsive-image delivery, route splitting, and accessibility checks, then deploy frontends to Vercel and backends to Render.",
    highlights: ["Automated testing", "Performance-minded delivery", "Vercel + Render"],
    visual: {
      type: "checklist",
      items: [
        "Frontend and backend tests",
        "Responsive images and route splitting",
        "Accessible, deployment-ready releases",
      ],
    },
    theme: "what-i-do-card--quality",
  },
];
