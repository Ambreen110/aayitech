export interface Project {
  slug: string;
  featured?: boolean;

  title: string;
  category: string;

  shortDescription: string;
  description: string;

  image: string;
  gallery: string[];

  tech: string[];

  liveUrl: string;
  githubUrl: string;

  client: string;
  // duration: string;
  role: string;

  overview: string;
  challenge: string;
  solution: string;
  outcome: string;

features: string[];
}