"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

import { Project } from "./types";

interface ProjectTechProps {
  project: Project;
}

export default function ProjectTech({ project }: ProjectTechProps) {
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
            Technology
          </span>

          <h2 className="mb-5 text-4xl font-bold text-white">
            Technology Stack
          </h2>

          <p className="text-lg leading-8 text-zinc-400">
            Modern technologies and platforms used to build, automate and
            optimize the solution.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {project.tech.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.05]"
            >
              <div className="mb-5 rounded-2xl bg-cyan-500/10 p-4 transition-colors duration-300 group-hover:bg-cyan-500/20">
                <Cpu className="h-8 w-8 text-cyan-400" />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {tech}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}