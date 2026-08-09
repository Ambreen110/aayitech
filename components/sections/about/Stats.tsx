"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Layers3,
  Workflow,
  BrainCircuit,
  Globe,
} from "lucide-react";

const stats = [
  {
    icon: Layers3,
    value: "End-to-End",
    label: "Technical Solutions",
    description:
      "From websites and applications to CRM, automation, integrations and infrastructure.",
  },
  {
    icon: Workflow,
    value: "Multiple",
    label: "Automation Platforms",
    description:
      "Connected workflows across CRM, communication, marketing and business systems.",
  },
  {
    icon: BrainCircuit,
    value: "AI-Ready",
    label: "Business Solutions",
    description:
      "AI assistants, intelligent workflows and practical automation for modern businesses.",
  },
  {
    icon: Globe,
    value: "Full-Stack",
    label: "Development",
    description:
      "Modern web applications and digital experiences built with current technologies.",
  },
];

export default function Stats() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
            }}
            className="group rounded-3xl border border-border bg-card p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-secondary"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-secondary text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10">
              <Icon size={30} />
            </div>

            <h3 className="mb-2 text-4xl font-bold text-foreground">
              {stat.value}
            </h3>

            <h4 className="mb-4 text-lg font-semibold text-accent">
              {stat.label}
            </h4>

            <p className="text-sm leading-7 text-muted-foreground">
              {stat.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}