"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Project } from "./types";

interface ProjectFeaturesProps {
  project: Project;
}

export default function ProjectFeatures({
  project,
}: ProjectFeaturesProps) {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
            Capabilities
          </span>

          <h2 className="mb-5 text-4xl font-bold text-foreground">
            Key Features
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            The solution was designed around these core capabilities to improve
            efficiency, scalability, and business operations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                rounded-3xl
                border
                border-border
                bg-card
                p-7
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
                <CheckCircle2 className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                {feature}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                This functionality contributes to a more efficient, reliable,
                and scalable business workflow.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}