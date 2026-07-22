"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";

import { projects, projectCategories } from "./projects.data";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredProject = projects.find((project) => project.featured);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (project.featured) return false;

      if (activeFilter === "All") return true;

      return project.category === activeFilter;
    });
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[160px]" />

      <div className="container relative mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Client Success Stories
          </span>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Building Systems That
            <span className="text-cyan-400"> Drive Business Growth</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-400">
            A collection of real client engagements spanning CRM implementation,
            AI automation, technical infrastructure, lead generation, business
            websites, and operational systems across healthcare, procurement,
            logistics, and professional services.
          </p>
        </motion.div>

        {/* Featured */}
        {featuredProject && (
          <div className="mb-24">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {/* Filters */}
        <div className="mb-12">
          <ProjectFilters
            categories={projectCategories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Grid */}
       {/* Grid */}
<motion.div
  layout
  className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
>
  {filteredProjects.map((project) => (
    <motion.div
      key={project.slug}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.35,
      }}
    >
      <ProjectCard project={project} />
    </motion.div>
  ))}
</motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-semibold text-white">
              No projects found
            </h3>

            <p className="mt-3 text-zinc-400">
              Try selecting another category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}