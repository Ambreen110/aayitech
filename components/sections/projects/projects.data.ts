import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    featured: true,

    title: "AI CRM Automation Platform",

    category: "AI",

    image: "/projects/ai-crm-platform.webp",

    description:
      "Designed and developed an AI-powered CRM automation system that streamlines lead capture, qualification, email automation, customer tracking, and workflow management. Built to reduce manual work while improving conversion rates.",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "OpenAI",
      "HubSpot",
      "REST API",
    ],

    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,

    title: "HubSpot CRM + Wix Integration",

    category: "CRM",

    image: "/projects/hubspot-wix.webp",

    description:
      "Integrated HubSpot CRM with a Wix website including custom forms, automated responses, inquiry tracking, internal notifications, and lead management workflow.",

    tech: [
      "HubSpot",
      "Wix",
      "CRM",
      "Automation",
      "JavaScript",
    ],

    liveUrl: "#",
  },

  {
    id: 3,

    title: "AGIComply Website",

    category: "Web",

    image: "/projects/agicomply.webp",

    description:
      "Designed and developed a modern SaaS website focused on AI assurance and compliance. Built responsive pages, reusable components, animations, and performance optimizations.",

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],

    liveUrl: "#",
  },

  {
    id: 4,

    title: "Email Deliverability System",

    category: "Automation",

    image: "/projects/email-system.webp",

    description:
      "Configured professional email infrastructure including SPF, DKIM, DMARC, Google Workspace, domain authentication, warm-up strategy, and deliverability optimization.",

    tech: [
      "Google Workspace",
      "DNS",
      "SPF",
      "DKIM",
      "DMARC",
    ],
  },

  {
    id: 5,

    title: "Apollo & GoHighLevel Automation",

    category: "Automation",

    image: "/projects/apollo-ghl.webp",

    description:
      "Created scalable outreach workflows using Apollo and GoHighLevel including lead segmentation, campaign organization, CRM synchronization, and automated follow-up sequences.",

    tech: [
      "Apollo",
      "GoHighLevel",
      "CRM",
      "Automation",
      "Email Outreach",
    ],
  },

  {
    id: 6,

    title: "Modern Business Website",

    category: "Web",

    image: "/projects/business-site.webp",

    description:
      "Developed a high-performance business website using Next.js featuring responsive layouts, reusable UI components, SEO optimization, and engaging user experience.",

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
    ],

    liveUrl: "#",
    githubUrl: "#",
  },
];

export const projectCategories = [
  "All",
  "AI",
  "CRM",
  "Automation",
  "Web",
];