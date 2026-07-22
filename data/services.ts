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
  overview: [
  "A well-designed Customer Relationship Management (CRM) system is more than a contact database—it's the operational backbone of your business. It centralizes customer information, streamlines sales processes, automates repetitive tasks, and provides valuable insights that help teams make informed decisions.",

  "Whether you're implementing a CRM for the first time, migrating from another platform, or optimizing an existing system, I design solutions that align with your business goals, workflows, and customer journey. Every implementation is tailored to improve efficiency, visibility, and collaboration across departments.",

  "From HubSpot and GoHighLevel to Zoho CRM, Brevo, and Kit, I build scalable CRM ecosystems that integrate seamlessly with your marketing, sales, and operational processes while reducing manual work through intelligent automation."
],

challenges: [
  "Customer information scattered across spreadsheets and multiple tools",
  "Manual lead assignment and follow-up processes",
  "Lack of visibility into sales pipelines and customer lifecycle",
  "Disconnected marketing and sales operations",
  "Duplicate records and inconsistent customer data",
  "Limited reporting and business insights",
  "Time-consuming repetitive administrative tasks",
  "Difficulty scaling existing business processes"
],

solutions: [
  "Complete CRM implementation and customization",
  "Sales pipeline design and optimization",
  "Lead capture and automated routing",
  "Workflow automation and task management",
  "Marketing and sales alignment",
  "Custom properties and lifecycle stages",
  "Dashboard creation and performance reporting",
  "Third-party integrations with business tools"
],

deliverables: [
  "CRM account setup and configuration",
  "Custom pipelines and deal stages",
  "Contact, company and deal properties",
  "Workflow automation",
  "Email and calendar integration",
  "Custom reports and dashboards",
  "Data migration from existing systems",
  "User roles and permission management",
  "Documentation and team training",
  "Post-launch optimization and support"
],

industries: [
  "Healthcare",
  "B2B SaaS",
  "Professional Services",
  "Manufacturing",
  "Recruitment",
  "Consulting",
  "Marketing Agencies",
  "Technology Startups"
],

whyChooseUs: [
  "Business-first CRM strategy tailored to your processes",
  "Hands-on experience with multiple CRM platforms",
  "Automation-focused implementations that reduce manual work",
  "Scalable architecture designed for future business growth",
  "Clean documentation and structured implementation process",
  "Technical expertise in APIs, integrations and workflow automation",
  "Training and post-implementation support",
  "Focus on long-term operational efficiency rather than short-term fixes"
],

results: [
  "Centralized customer data across your organization",
  "Faster lead response and improved sales efficiency",
  "Reduced manual administrative work",
  "Improved collaboration between sales and marketing teams",
  "Real-time dashboards and actionable business insights",
  "Higher data accuracy and consistency",
  "Scalable CRM infrastructure ready for future growth",
  "Better customer experience through streamlined processes"
],
  
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