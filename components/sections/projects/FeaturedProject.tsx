"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Project } from "./types";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="grid gap-10 p-8 lg:grid-cols-2 lg:p-12">
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={600}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <Badge className="absolute left-5 top-5 border border-cyan-500/30 bg-cyan-500/20 text-cyan-300 backdrop-blur">
            <Sparkles className="mr-1 h-3 w-3" />
            Featured Project
          </Badge>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <Badge
            variant="outline"
            className="mb-4 w-fit border-cyan-500/30 text-cyan-300"
          >
            {project.category}
          </Badge>

          <h2 className="mb-5 text-4xl font-bold text-white">
            {project.title}
          </h2>

          <p className="mb-8 text-lg leading-8 text-zinc-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-8 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Link
  href={project.liveUrl}
  target="_blank"
  className="
    inline-flex items-center justify-center gap-2
    rounded-lg
    bg-cyan-500
    px-5
    py-2.5
    font-medium
    text-black
    transition-all
    hover:bg-cyan-400
  "
>
  Live Demo
  <ArrowUpRight className="size-4" />
</Link>
            )}

            {project.githubUrl && (
              <Link
  href={project.githubUrl}
  target="_blank"
  className="
    inline-flex items-center justify-center gap-2
    rounded-lg
    border border-white/20
    px-5
    py-2.5
    font-medium
    text-white
    transition-all
    hover:bg-white/10
  "
>
  <GitBranch className="size-4" />
  Source Code
</Link>
            )}
          </div>
        </div>
      </div>

      {/* Hover Border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/0 transition-all duration-500 hover:border-cyan-400/30" />
    </motion.section>
  );
}