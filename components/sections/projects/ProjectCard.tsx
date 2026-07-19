"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Project } from "./types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute left-5 top-5">
          <Badge className="border border-cyan-500/30 bg-cyan-500/20 text-cyan-300 backdrop-blur">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
            {project.title}
          </h3>

          <p className="text-sm leading-7 text-zinc-400">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-medium text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <GitBranch className="h-4 w-4" />
              Code
            </Link>
          )}
        </div>
      </div>

      {/* Hover Border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/30" />

      {/* Glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}