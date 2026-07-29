"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  GitBranch,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Project } from "./types";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({
  project,
}: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/12 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-[140px]" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-5 border border-border bg-secondary text-accent">
              {project.category}
            </Badge>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
              {project.title}
            </h1>

            <p className="mb-8 text-lg leading-8 text-muted-foreground">
              {project.description}
            </p>

            {/* Project Info */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:bg-secondary">
                <Building2 className="mb-3 h-5 w-5 text-accent" />

                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Client
                </p>

                <p className="mt-2 text-sm font-semibold text-foreground">
                  {project.client}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:bg-secondary">
                <Briefcase className="mb-3 h-5 w-5 text-accent" />

                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  My Role
                </p>

                <p className="mt-2 text-sm font-semibold text-foreground">
                  {project.role}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-primary
                    px-6
                    py-3
                    font-semibold
                    text-primary-foreground
                    transition-all
                    duration-300
                    hover:bg-accent
                    hover:text-background
                  "
                >
                  Live Demo

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-border
                    bg-card
                    px-6
                    py-3
                    font-medium
                    text-foreground
                    transition-all
                    duration-300
                    hover:border-accent
                    hover:bg-secondary
                  "
                >
                  <GitBranch className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />

                  Source Code
                </Link>
              )}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                priority
                className="w-full object-cover"
              />
            </div>

            <div className="pointer-events-none absolute -bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}