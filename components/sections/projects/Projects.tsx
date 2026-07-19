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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Featured Work
          </span>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Projects That Deliver
            <span className="text-cyan-400"> Real Business Value</span>
          </h2>

          <p className="text-lg leading-8 text-zinc-400">
            From AI automation and CRM implementations to scalable web
            applications, these projects showcase solutions built to solve
            real-world business challenges.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20">
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

        {/* Project Grid */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold text-white">
              No projects found
            </h3>

            <p className="mt-2 text-zinc-400">
              Try selecting another category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}