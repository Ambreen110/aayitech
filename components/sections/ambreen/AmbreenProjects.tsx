"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Globe2,
  Workflow,
  Database,
  Layers3,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "Featured Build",
    title: "AAYI TECH",
    description:
      "Designed and built a modern technical services website using Next.js, React, and Tailwind CSS, with a component-based architecture and dedicated service, project, about, and contact experiences.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],
    icon: Globe2,
    featured: true,
    href: "https://aayitech.com",
    linkLabel: "Visit Website",
  },
  {
    number: "02",
    type: "CRM Systems",
    title: "CRM Implementation",
    description:
      "Configured and implemented CRM environments around business requirements, including properties, pipelines, workflows, dashboards, reporting, data structures, and technical integrations.",
    technologies: [
      "HubSpot",
      "Salesforce",
      "GoHighLevel",
      "CRM Architecture",
    ],
    icon: Layers3,
    featured: false,
    href: "#experience",
    linkLabel: "View Experience",
  },
  {
    number: "03",
    type: "Automation",
    title: "Business Automation",
    description:
      "Built workflow-driven systems for lead routing, lifecycle processes, integrations, and broader business operations using CRM automation and connected tools.",
    technologies: [
      "Workflows",
      "Make",
      "Zapier",
      "APIs",
      "Webhooks",
      "AI Automation",
    ],
    icon: Workflow,
    featured: false,
    href: "#expertise",
    linkLabel: "View Expertise",
  },
  {
    number: "04",
    type: "Technical Systems",
    title: "EDI & Data Operations",
    description:
      "Worked with EDI-related processes, structured business data, database operations, data validation, troubleshooting, and data flow across technical systems.",
    technologies: [
      "EDI",
      "Database Operations",
      "Data Validation",
      "Data Troubleshooting",
      "Data Synchronization",
    ],
    icon: Database,
    featured: false,
    href: "#experience",
    linkLabel: "View Experience",
  },
];

export default function AmbreenProjects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Systems I&apos;ve built, configured{" "}
            <span className="text-muted-foreground">
              and supported.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A selection of technical work across web development, CRM
            implementation, automation, and data systems.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/50 sm:p-8 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                {/* Decorative number */}
                <div className="absolute right-7 top-6 text-5xl font-bold tracking-tight text-foreground/[0.035]">
                  {project.number}
                </div>

                <div
                  className={`grid gap-8 ${
                    project.featured
                      ? "lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
                      : ""
                  }`}
                >
                  {/* Left */}
                  <div>
                    {/* Icon */}
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-background/50 text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {project.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  {/* Right / Content */}
                  <div>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="mt-7">
                      <a
                        href={project.href}
                        target={
                          project.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          project.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {project.linkLabel}

                        {project.href.startsWith("http") ? (
                          <ExternalLink
                            size={16}
                            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        ) : (
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex items-center gap-3 text-sm text-muted-foreground"
        >
          <span className="h-px w-8 bg-border" />

          <span>
            More technical work is represented throughout my experience.
          </span>
        </motion.div>
      </div>
    </section>
  );
}