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
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    category: "Backend Development",
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
    technologies: [
      { name: "HubSpot", icon: SiHubspot },
      { name: "Salesforce", icon: BriefcaseBusiness },
      { name: "WordPress", icon: SiWordpress },
    ],
  },

  {
    category: "Automation & AI",
    technologies: [
      { name: "Zapier", icon: SiZapier },
      { name: "OpenAI", icon: Bot },
    ],
  },

  {
    category: "Infrastructure & DevOps",
    technologies: [
      { name: "Google Workspace", icon: SiGoogle },
      { name: "Vercel", icon: SiVercel },
    ],
  },

  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: Package },
    ],
  },
];