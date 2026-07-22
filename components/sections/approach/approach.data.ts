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
  subtitle: string;
  description: string;

  objectives: string[];

  deliverables: string[];

  duration: string;

  icon: typeof Search;
}

export const approachSteps: ApproachStep[] = [
  {
    id: 1,
    number: "01",
    title: "Discover",
    subtitle: "Understanding Your Business",

    description:
      "Every successful project starts with understanding your business, users, current workflow, and long-term goals. This phase ensures we solve the right problem before building the solution.",

    objectives: [
      "Business Goal Analysis",
      "Requirement Gathering",
      "Current Workflow Review",
      "User & Stakeholder Discussions",
      "Technical Feasibility",
      "Project Scope Definition",
    ],

    deliverables: [
      "Requirement Document",
      "Technical Recommendations",
      "Project Roadmap",
    ],

    duration: "1 – 3 Days",

    icon: Search,
  },

  {
    id: 2,
    number: "02",
    title: "Strategy",
    subtitle: "Planning the Right Solution",

    description:
      "A clear strategy minimizes development risks. I design the system architecture, define integrations, CRM workflows, automation opportunities, and establish the technical roadmap.",

    objectives: [
      "System Architecture",
      "Database Planning",
      "CRM Workflow Design",
      "Automation Planning",
      "API Strategy",
      "Technology Selection",
    ],

    deliverables: [
      "Architecture Plan",
      "Development Roadmap",
      "Workflow Diagrams",
    ],

    duration: "2 – 4 Days",

    icon: Lightbulb,
  },

  {
    id: 3,
    number: "03",
    title: "Design",
    subtitle: "Creating Better User Experiences",

    description:
      "Design is more than aesthetics. I create interfaces that improve usability, accessibility, responsiveness, and conversion while maintaining a modern professional appearance.",

    objectives: [
      "UI Layout",
      "User Experience",
      "Responsive Design",
      "Component Planning",
      "Accessibility",
      "Design Consistency",
    ],

    deliverables: [
      "UI Screens",
      "Design System",
      "Component Structure",
    ],

    duration: "2 – 5 Days",

    icon: PenTool,
  },

  {
    id: 4,
    number: "04",
    title: "Develop",
    subtitle: "Building Reliable Software",

    description:
      "Using modern technologies, I build scalable applications with clean architecture, reusable components, secure APIs, and optimized performance.",

    objectives: [
      "Frontend Development",
      "Backend APIs",
      "Authentication",
      "Database Integration",
      "Performance Optimization",
      "Testing",
    ],

    deliverables: [
      "Working Application",
      "Source Code",
      "Technical Documentation",
    ],

    duration: "Project Dependent",

    icon: Code2,
  },

  {
    id: 5,
    number: "05",
    title: "Automate",
    subtitle: "Connecting Everything Together",

    description:
      "Automation removes repetitive work by integrating CRM systems, AI services, APIs, email platforms, and business workflows into one connected ecosystem.",

    objectives: [
      "CRM Automation",
      "AI Integration",
      "Workflow Automation",
      "API Connections",
      "Notifications",
      "Business Process Automation",
    ],

    deliverables: [
      "Automated Workflows",
      "Integrated Systems",
      "AI Solutions",
    ],

    duration: "1 – 5 Days",

    icon: Bot,
  },

  {
    id: 6,
    number: "06",
    title: "Optimize",
    subtitle: "Continuous Improvement",

    description:
      "The project doesn't end after deployment. I monitor, optimize, and improve performance, scalability, SEO, analytics, and overall user experience for long-term success.",

    objectives: [
      "Performance Optimization",
      "SEO Improvements",
      "Analytics",
      "Bug Fixes",
      "Security Enhancements",
      "Future Scaling",
    ],

    deliverables: [
      "Optimized Platform",
      "Performance Report",
      "Post-launch Support",
    ],

    duration: "Ongoing",

    icon: Rocket,
  },
];  