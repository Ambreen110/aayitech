import { Service } from "./service.types";

export const services: Service[] = [
  {
    slug: "crm-implementation",

    badge: "CRM Services",

    title: "CRM",

    highlight: "Implementation",

    shortTitle: "CRM Implementation",

    description:
      "Build a CRM system that streamlines your sales, marketing, and customer operations through automation and smart workflows.",

    icon: "briefcase",

    benefits: [
      "HubSpot CRM Setup",
      "GoHighLevel Configuration",
      "Zoho CRM Customization",
      "Brevo & Kit Setup",
      "Custom Pipelines",
      "Lifecycle Stages",
      "Dashboards & Reports",
      "Workflow Automation",
      "Data Migration",
    ],

    process: [
      "Discovery",
      "Planning",
      "Implementation",
      "Testing",
      "Training",
    ],

    technologies: [
      { name: "HubSpot", icon: "briefcase" },
      { name: "GoHighLevel", icon: "workflow" },
      { name: "Zoho CRM", icon: "database" },
      { name: "Brevo", icon: "network" },
      { name: "Kit", icon: "bot" },
      { name: "Apollo", icon: "code2" },
    ],

    projects: [
      {
        title: "TimeDoc Health",
        description:
          "CRM optimization, automation and workflow improvements.",
        image: "/projects/timedoc.jpg",
        href: "/projects/timedoc-health",
      },
      {
        title: "AGIComply",
        description:
          "HubSpot implementation and CRM support.",
        image: "/projects/agicomply.jpg",
        href: "/projects/agicomply",
      },
    ],

    faqs: [
      {
        question: "Which CRM platforms do you support?",
        answer:
          "HubSpot, GoHighLevel, Zoho CRM, Brevo, Kit and custom CRM solutions.",
      },
      {
        question: "Can you migrate our existing CRM?",
        answer:
          "Yes. I can migrate contacts, companies, deals, custom properties, workflows and other CRM data.",
      },
      {
        question: "Do you provide training?",
        answer:
          "Yes. After implementation, I provide guidance and documentation so your team can confidently use the CRM.",
      },
    ],

    ctaTitle: "Ready to Build a Better CRM?",

    ctaDescription:
      "Let's create a CRM that saves time, improves productivity, and supports your business growth.",
  },

  {
    slug: "workflow-automation",

    badge: "Automation",

    title: "Workflow",

    highlight: "Automation",

    shortTitle: "Workflow Automation",

    description:
      "Automate repetitive business processes using APIs, AI, Zapier, Make and custom integrations.",

    icon: "workflow",

    benefits: [
      "Zapier Automation",
      "Make.com Workflows",
      "HubSpot Automation",
      "GoHighLevel Automation",
      "API Integration",
      "Email Automation",
      "Lead Routing",
      "Approval Workflows",
      "Business Process Automation",
    ],

    process: [
      "Discovery",
      "Workflow Design",
      "Development",
      "Testing",
      "Deployment",
    ],

    technologies: [
      { name: "Zapier", icon: "workflow" },
      { name: "Make", icon: "workflow" },
      { name: "HubSpot", icon: "briefcase" },
      { name: "GoHighLevel", icon: "briefcase" },
      { name: "REST APIs", icon: "network" },
      { name: "AI Agents", icon: "bot" },
    ],

    projects: [],

    faqs: [
      {
        question: "Can you automate existing systems?",
        answer:
          "Yes. We connect CRMs, databases, forms, APIs and third-party applications into one automated workflow.",
      },
      {
        question: "Do you use Zapier or Make?",
        answer:
          "Yes. We work with both platforms depending on your business requirements.",
      },
    ],

    ctaTitle: "Ready to Automate Your Business?",

    ctaDescription:
      "Save time, eliminate repetitive work and improve productivity with intelligent workflow automation.",
  },

  {
    slug: "ai-business-solutions",

    badge: "Artificial Intelligence",

    title: "AI Business",

    highlight: "Solutions",

    shortTitle: "AI Business Solutions",

    description:
      "Custom AI assistants, chatbots, intelligent workflows and productivity tools for modern businesses.",

    icon: "bot",
  },

  {
    slug: "full-stack-development",

    badge: "Development",

    title: "Full Stack",

    highlight: "Development",

    shortTitle: "Full Stack Development",

    description:
      "Modern web applications using Next.js, React, Node.js, NestJS and scalable architectures.",

    icon: "code2",
  },

  {
    slug: "api-development",

    badge: "Integration",

    title: "API",

    highlight: "Development",

    shortTitle: "API Development",

    description:
      "REST APIs, third-party integrations and secure backend services for scalable applications.",

    icon: "network",
  },

  {
    slug: "database-backend",

    badge: "Backend",

    title: "Database &",

    highlight: "Backend",

    shortTitle: "Database & Backend",

    description:
      "Reliable backend systems powered by PostgreSQL, MongoDB, MySQL and scalable architectures.",

    icon: "database",
  },
];