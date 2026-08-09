"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Code2,
  Database,
  ServerCog,
  ArrowUpRight,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    title: "CRM & Automation",
    description:
      "Designing and configuring CRM environments around real business processes, including pipelines, properties, workflows, dashboards, reporting, integrations, and automation.",
    technologies: [
      "HubSpot",
      "Salesforce",
      "GoHighLevel",
      "Apollo",
      "HubSpot Workflows",
      "Make",
      "Zapier",
      "APIs",
      "Webhooks",
      "AI Automation",
    ],
    icon: Workflow,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Building modern websites and web applications with component-based development, responsive interfaces, APIs, and modern JavaScript technologies.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "HTML/CSS",
      "REST APIs",
    ],
    icon: Code2,
  },
  {
    number: "03",
    title: "EDI & Data",
    description:
      "Working with structured business data, EDI document processes, database operations, data validation, troubleshooting, and synchronization.",
    technologies: [
      "EDI Document Workflows",
      "Database Operations",
      "Data Validation",
      "Data Troubleshooting",
      "Data Synchronization",
    ],
    icon: Database,
  },
  {
    number: "04",
    title: "Infrastructure",
    description:
      "Handling the technical infrastructure behind business systems, including domains, DNS, email authentication, and Google Workspace configuration.",
    technologies: [
      "Google Workspace",
      "DNS",
      "MX",
      "TXT",
      "CNAME",
      "SPF",
      "DKIM",
      "DMARC",
      "Domain Management",
    ],
    icon: ServerCog,
  },
];

export default function AmbreenExpertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Technical skills across{" "}
            <span className="text-muted-foreground">
              systems and development.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            My work sits at the intersection of CRM, automation, software
            development, data, and technical infrastructure.
          </p>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/50 sm:p-8"
              >
                {/* Number */}
                <div className="absolute right-7 top-6 text-xs font-semibold tracking-[0.2em] text-muted-foreground/40">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-background/50 text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-[96px] text-sm leading-7 text-muted-foreground sm:text-[15px]">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:border-border group-hover:text-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Bottom link indicator */}
                <div className="mt-7 flex items-center justify-between border-t border-border/60 pt-5">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    Technical focus
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}