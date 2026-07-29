"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Project } from "../projects/types";

interface Props {
  project: Project;
}

export default function HomeProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-secondary"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

          <Badge className="absolute left-4 top-4 border border-border bg-secondary text-accent">
            {project.category}
          </Badge>
        </div>
      </Link>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>

          <p className="line-clamp-2 text-sm leading-7 text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="group inline-flex items-center gap-2 font-medium text-accent transition-all duration-300 hover:gap-3 hover:text-primary"
        >
          View Project

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}