"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import HomeProjectCard from "./HomeProjectCard";
import { projects } from "../projects/projects.data";

export default function HomeProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Featured Projects
          </span>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Selected Client
            <span className="text-cyan-400"> Success Stories</span>
          </h2>

          <p className="text-lg leading-8 text-zinc-400">
            A selection of projects showcasing CRM implementation, AI
            automation, technical systems, and modern web solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <HomeProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}