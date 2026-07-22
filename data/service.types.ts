import { iconMap } from "@/lib/iconMap";

export interface Technology {
  name: string;
  icon: keyof typeof iconMap;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
 slug: string;

  badge: string;

  title: string;

  highlight: string;

  shortTitle: string;

  description: string;

  icon: keyof typeof iconMap;

  // Existing
  benefits?: string[];
  process?: string[];
  technologies?: Technology[];
  projects?: Project[];
  faqs?: FAQ[];

  ctaTitle?: string;
  ctaDescription?: string;

  // NEW
  overview?: string[];

  challenges?: string[];

  solutions?: string[];

  deliverables?: string[];

  industries?: string[];

  whyChooseUs?: string[];

  results?: string[];
  
}