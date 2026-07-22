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
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Capabilities
          </span>

          <h2 className="mb-5 text-4xl font-bold text-white">
            Key Features
          </h2>

          <p className="text-lg leading-8 text-zinc-400">
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
              whileHover={{
                y: -6,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.05]"
            >
              <div className="mb-5 inline-flex rounded-xl bg-cyan-500/10 p-3 transition-colors duration-300 group-hover:bg-cyan-500/20">
                <CheckCircle2 className="h-6 w-6 text-cyan-400" />
              </div>

              <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                {feature}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
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