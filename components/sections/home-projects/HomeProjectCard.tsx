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
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <Badge className="absolute left-4 top-4 border border-cyan-500/30 bg-cyan-500/20 text-cyan-300">
            {project.category}
          </Badge>
        </div>
      </Link>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400">
            {project.title}
          </h3>

          <p className="line-clamp-2 text-sm leading-7 text-zinc-400">
            {project.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          View Project
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}