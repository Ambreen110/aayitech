import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { projects } from "@/components/sections/projects/projects.data";

import ProjectHero from "@/components/sections/projects/ProjectHero";
import ProjectOverview from "@/components/sections/projects/ProjectOverview";
import ProjectFeatures from "@/components/sections/projects/ProjectFeatures";
import ProjectTech from "@/components/sections/projects/ProjectTech";
import ProjectOutcome from "@/components/sections/projects/ProjectOutcome";
import RelatedProjects from "@/components/sections/projects/RelatedProjects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | AAYI TECH`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <ProjectHero project={project} />

        <ProjectOverview project={project} />

        <ProjectFeatures project={project} />

        <ProjectTech project={project} />

        <ProjectOutcome project={project} />

        <RelatedProjects project={project} />
      </main>

      <Footer />
    </>
  );
}