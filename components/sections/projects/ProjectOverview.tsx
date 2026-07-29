"use client";

import { motion } from "framer-motion";
import {
  FileText,
  TriangleAlert,
  Lightbulb,
} from "lucide-react";

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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
            Case Study
          </span>

          <h2 className="text-4xl font-bold text-foreground">
            Project Overview
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
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
            whileHover={{ y: -6 }}
            className="
              group
              rounded-3xl
              border
              border-border
              bg-card
              p-8
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-accent/40
              hover:bg-secondary
            "
          >
            <div
              className="
                mb-5
                inline-flex
                rounded-xl
                border
                border-border
                bg-secondary
                p-3
                text-accent
                transition-all
                duration-300
                group-hover:border-accent/40
                group-hover:bg-accent/10
              "
            >
              <FileText className="h-6 w-6" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
              Overview
            </h3>

            <p className="leading-8 text-muted-foreground">
              {project.overview}
            </p>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="
              group
              rounded-3xl
              border
              border-border
              bg-card
              p-8
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-accent/40
              hover:bg-secondary
            "
          >
            <div
              className="
                mb-5
                inline-flex
                rounded-xl
                border
                border-border
                bg-secondary
                p-3
                text-accent
                transition-all
                duration-300
                group-hover:border-accent/40
                group-hover:bg-accent/10
              "
            >
              <TriangleAlert className="h-6 w-6" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
              Challenge
            </h3>

            <p className="leading-8 text-muted-foreground">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="
              group
              rounded-3xl
              border
              border-border
              bg-card
              p-8
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-accent/40
              hover:bg-secondary
            "
          >
            <div
              className="
                mb-5
                inline-flex
                rounded-xl
                border
                border-border
                bg-secondary
                p-3
                text-accent
                transition-all
                duration-300
                group-hover:border-accent/40
                group-hover:bg-accent/10
              "
            >
              <Lightbulb className="h-6 w-6" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
              Solution
            </h3>

            <p className="leading-8 text-muted-foreground">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}