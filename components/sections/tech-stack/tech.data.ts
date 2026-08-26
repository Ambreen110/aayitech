import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiHubspot,
  SiWordpress,
  SiZapier,
  SiGithub,
  SiGit,
  SiVercel,
  SiGoogle,
} from "react-icons/si";

import {
  Bot,
  BriefcaseBusiness,
  Package,
} from "lucide-react";

export const techStack = [
  {
  category: "Frontend Development",

  description:
    "Building fast, responsive and scalable web applications with modern frontend technologies.",

  expertise: [
    "Responsive Websites",
    "SaaS Dashboards",
    "Landing Pages",
    "Admin Panels",
    "Business Portals",
    "Component Libraries",
  ],
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

 {
  category: "Backend Development",

  description:
    "Developing secure APIs, business logic and scalable server-side systems.",

  expertise: [
    "REST APIs",
    "Authentication",
    "Database Design",
    "Business Logic",
    "Role-Based Access",
    "API Integrations",
  ],
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
  category: "CRM & Business Systems",

  description:
    "Implementing and optimizing CRM platforms that streamline sales, customer management, and business operations.",

  expertise: [
    "HubSpot CRM",
    "Close CRM",
    "Pipeline Setup",
    "Workflow Automation",
    "Lead Management",
    "Email Marketing",
    "Reporting",
  ],

  technologies: [
    { name: "HubSpot", icon: SiHubspot },
    { name: "Close CRM", icon: BriefcaseBusiness },
    { name: "Salesforce", icon: BriefcaseBusiness },
    { name: "WordPress", icon: SiWordpress },
  ],
},

  {
    category: "Automation & AI",
    description:
"Automating repetitive processes and integrating AI into business workflows.",

expertise:
[
"OpenAI",
"Chatbots",
"Workflow Automation",
"Content Generation",
"Lead Qualification",
"AI Assistants"
],
    technologies: [
      { name: "Zapier", icon: SiZapier },
      { name: "OpenAI", icon: Bot },
    ],
  },

  {
    category: "Infrastructure & DevOps",
    description:
"Deploying applications and configuring secure business infrastructure.",

expertise:
[
"DNS",
"SPF / DKIM",
"Google Workspace",
"Vercel Deployment",
"Hosting",
"Domain Management"
],
    technologies: [
      { name: "Google Workspace", icon: SiGoogle },
      { name: "Vercel", icon: SiVercel },
    ],
  },

  {
    category: "Tools & Platforms",
    description:
"Using professional tools to maintain high-quality development workflows.",

expertise:
[
"Git",
"GitHub",
"Version Control",
"Postman",
"Testing",
"Collaboration"
],
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: Package },
    ],
  },
];