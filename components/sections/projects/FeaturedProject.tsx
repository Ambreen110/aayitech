"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";

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
      className="relative overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="grid items-center gap-16 p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-border
            shadow-2xl
            shadow-primary/10
          "
        >
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={600}
            className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

          <Badge className="absolute left-5 top-5 border border-border bg-secondary text-accent backdrop-blur">
            <Sparkles className="mr-1 h-3 w-3" />
            Featured Project
          </Badge>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <Badge
            variant="outline"
            className="mb-4 w-fit border-border bg-secondary text-accent"
          >
            {project.category}
          </Badge>

          <h2 className="mb-5 text-4xl font-bold text-foreground">
            {project.title}
          </h2>

          <p className="mb-8 text-lg leading-8 text-muted-foreground">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-8 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground"
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
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-primary
                  px-5
                  py-2.5
                  font-medium
                  text-primary-foreground
                  transition-all
                  duration-300
                  hover:bg-accent
                  hover:text-background
                "
              >
                Live Demo

                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-border
                  bg-card
                  px-5
                  py-2.5
                  font-medium
                  text-foreground
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:bg-secondary
                "
              >
                <GitBranch className="size-4 transition-transform duration-300 group-hover:rotate-12" />

                Source Code
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hover Border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-accent/0 transition-all duration-500 group-hover:border-accent/30" />
    </motion.section>
  );
}