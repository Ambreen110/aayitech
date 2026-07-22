import { projects } from "@/components/sections/projects/projects.data";

export { projects };

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getRelatedProjects = (
  category: string,
  currentSlug: string,
  limit = 3
) => {
  return projects
    .filter(
      (project) =>
        project.category === category &&
        project.slug !== currentSlug
    )
    .slice(0, limit);
};