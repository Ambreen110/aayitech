"use client";

import { motion } from "framer-motion";
import { FileText, TriangleAlert, Lightbulb } from "lucide-react";

import { Project } from "./types";

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Case Study
          </span>

          <h2 className="text-4xl font-bold text-white">
            Project Overview
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Every successful project starts with understanding the problem,
            designing the right solution, and delivering measurable results.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <div className="mb-5 inline-flex rounded-xl bg-cyan-500/10 p-3">
              <FileText className="h-6 w-6 text-cyan-400" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">
              Overview
            </h3>

            <p className="leading-8 text-zinc-400">
              {project.overview}
            </p>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <div className="mb-5 inline-flex rounded-xl bg-orange-500/10 p-3">
              <TriangleAlert className="h-6 w-6 text-orange-400" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">
              Challenge
            </h3>

            <p className="leading-8 text-zinc-400">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <div className="mb-5 inline-flex rounded-xl bg-emerald-500/10 p-3">
              <Lightbulb className="h-6 w-6 text-emerald-400" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">
              Solution
            </h3>

            <p className="leading-8 text-zinc-400">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}