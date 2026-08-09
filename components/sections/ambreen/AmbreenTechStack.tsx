"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Braces,
  CloudCog,
  Database,
  Globe,
  Network,
  Settings2,
} from "lucide-react";

const techGroups = [
  {
    title: "CRM & Platforms",
    description: "CRM platforms and systems I configure and implement.",
    icon: Blocks,
    technologies: [
      "HubSpot",
      "Salesforce",
      "GoHighLevel",
      "Apollo",
      "HubSpot CMS",
    ],
  },
  {
    title: "Development",
    description: "Technologies I use to build modern web applications.",
    icon: Braces,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "HTML/CSS",
      "REST APIs",
    ],
  },
  {
    title: "Automation",
    description: "Tools used to connect systems and automate workflows.",
    icon: Settings2,
    technologies: [
      "HubSpot Workflows",
      "Make",
      "Zapier",
      "APIs",
      "Webhooks",
      "AI Automation",
    ],
  },
  {
    title: "Data & EDI",
    description: "Technical systems involving structured data and business processes.",
    icon: Database,
    technologies: [
      "EDI",
      "Database Operations",
      "Data Validation",
      "Data Troubleshooting",
      "Data Synchronization",
    ],
  },
  {
    title: "Infrastructure",
    description: "Domain, email, and business infrastructure configuration.",
    icon: Network,
    technologies: [
      "DNS",
      "MX",
      "TXT",
      "CNAME",
      "SPF",
      "DKIM",
      "DMARC",
      "Domain Management",
    ],
  },
  {
    title: "Web & Business Tools",
    description: "Tools used for websites, collaboration, and technical operations.",
    icon: Globe,
    technologies: [
      "WordPress",
      "Elementor",
      "Google Workspace",
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
    ],
  },
];

export default function AmbreenTechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Tech Stack
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tools behind{" "}
            <span className="text-muted-foreground">
              the systems I build.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A practical stack spanning CRM platforms, automation, software
            development, data systems, and technical infrastructure.
          </p>
        </motion.div>

        {/* Tech groups */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="group rounded-2xl border border-border/70 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/50 sm:p-7"
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background/50 text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="font-semibold tracking-tight">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-border/60 bg-background/40 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 group-hover:border-border group-hover:text-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3"
        >
          <CloudCog
            size={17}
            className="text-primary"
          />

          <p className="text-sm text-muted-foreground">
            My stack is selected around the system requirement rather than a
            single platform or technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}