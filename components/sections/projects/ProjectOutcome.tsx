"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

import { Project } from "./types";

interface ProjectOutcomeProps {
  project: Project;
}

export default function ProjectOutcome({
  project,
}: ProjectOutcomeProps) {
  return (
    <section className="relative py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
            Results
          </span>

          <h2 className="mb-5 text-4xl font-bold text-foreground">
            Project Outcome
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            The final solution delivered measurable improvements in business
            operations, automation, and overall efficiency.
          </p>
        </motion.div>

        {/* Outcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="
            group
            mx-auto
            max-w-5xl
            rounded-3xl
            border
            border-border
            bg-gradient-to-br
            from-card
            via-background
            to-secondary
            p-10
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-accent/40
          "
        >
          <div className="flex flex-col items-center text-center">
            <div
              className="
                mb-6
                rounded-2xl
                border
                border-border
                bg-secondary
                p-5
                transition-all
                duration-300
                group-hover:border-accent/40
                group-hover:bg-accent/10
              "
            >
              <Trophy className="h-10 w-10 text-accent" />
            </div>

            <h3 className="mb-6 text-3xl font-bold text-foreground">
              Business Impact
            </h3>

            <p className="max-w-3xl text-lg leading-9 text-muted-foreground">
              {project.outcome}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}