export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;

  category: string;

  tech: string[];

  liveUrl?: string;
  githubUrl?: string;

  featured?: boolean;
}