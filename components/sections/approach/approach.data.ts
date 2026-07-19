import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  Bot,
  Rocket,
} from "lucide-react";

export interface ApproachStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: typeof Search;
}

export const approachSteps: ApproachStep[] = [
  {
    id: 1,
    number: "01",
    title: "Discover",
    description:
      "Understand your business goals, users, workflows, and technical requirements before writing a single line of code.",
    icon: Search,
  },
  {
    id: 2,
    number: "02",
    title: "Strategy",
    description:
      "Plan the system architecture, CRM processes, automation opportunities, integrations, and project roadmap for long-term success.",
    icon: Lightbulb,
  },
  {
    id: 3,
    number: "03",
    title: "Design",
    description:
      "Create intuitive, responsive interfaces and user experiences that balance aesthetics, usability, and performance.",
    icon: PenTool,
  },
  {
    id: 4,
    number: "04",
    title: "Develop",
    description:
      "Build scalable web applications using modern technologies with clean architecture, reusable components, and secure APIs.",
    icon: Code2,
  },
  {
    id: 5,
    number: "05",
    title: "Automate",
    description:
      "Connect AI, CRM platforms, APIs, and workflow automation tools to eliminate repetitive work and improve efficiency.",
    icon: Bot,
  },
  {
    id: 6,
    number: "06",
    title: "Optimize",
    description:
      "Continuously improve performance, user experience, SEO, analytics, security, and scalability after deployment.",
    icon: Rocket,
  },
];