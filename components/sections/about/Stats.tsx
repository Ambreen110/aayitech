"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Layers3,
  Workflow,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    icon: Clock3,
    value: "6+",
    label: "Years of Continuous Learning",
    description:
      "Growing from web development to complete technical systems.",
  },
  {
    icon: Layers3,
    value: "10+",
    label: "Technologies & Platforms",
    description:
      "Next.js, React, HubSpot, GHL, APIs, AI, WordPress and more.",
  },
  {
    icon: Workflow,
    value: "End-to-End",
    label: "Business Solutions",
    description:
      "Development, CRM, automation, integrations and infrastructure.",
  },
  {
    icon: BrainCircuit,
    value: "Always",
    label: "Learning & Innovating",
    description:
      "Continuously exploring AI, automation and emerging technologies.",
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