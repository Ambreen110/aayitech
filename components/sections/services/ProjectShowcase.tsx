"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  href: string;
}

interface ProjectShowcaseProps {
  title: string;
  description: string;
  projects: Project[];
}

export default function ProjectShowcase({
  title,
  description,
  projects,
}: ProjectShowcaseProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
              {description}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">

                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <Link
                    href={project.href}
                    className="mt-8 inline-flex items-center text-cyan-400 transition hover:text-cyan-300"
                  >
                    View Project

                    <ArrowUpRight
                      size={18}
                      className="ml-2"
                    />
                  </Link>

                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}