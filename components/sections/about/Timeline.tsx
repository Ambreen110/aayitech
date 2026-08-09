"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Workflow,
  Bot,
  BriefcaseBusiness,
} from "lucide-react";

const journey = [
  {
    icon: Code2,
    title: "Digital Development",
    description:
      "Building modern websites and web applications designed around performance, usability, and business objectives.",
  },
  {
    icon: Globe,
    title: "Modern Web Solutions",
    description:
      "Developing scalable digital experiences using modern frontend and backend technologies.",
  },
  {
    icon: Database,
    title: "CRM & Business Systems",
    description:
      "Implementing and customizing CRM platforms to organize customer data, processes, pipelines, and operations.",
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    description:
      "Connecting business platforms through automated workflows, APIs, and intelligent processes.",
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description:
      "Introducing AI assistants, intelligent automation, and AI-powered workflows into everyday business operations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Complete Technical Ecosystems",
    description:
      "Combining development, CRM, automation, integrations, infrastructure, and AI into connected business systems.",
  },
];

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Center Line */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-accent/50 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

      <div className="space-y-12">
        {journey.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className={`relative flex ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } items-center gap-8`}
            >
              {/* Content */}
              <div className="ml-16 flex-1 lg:ml-0">
                <div className="rounded-3xl border border-border bg-card p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-secondary">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary text-accent transition-all duration-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-accent lg:left-1/2">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              {/* Empty Side */}
              <div className="hidden flex-1 lg:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}