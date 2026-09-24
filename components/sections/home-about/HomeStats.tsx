"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Layers3,
  BriefcaseBusiness,
  Bot,
} from "lucide-react";

const stats = [
  {
    icon: Clock3,
    value: "6+",
    title: "Years Experience",
    description:
      "Building CRM workflows, integrations, and customer-facing systems.",
  },
  {
    icon: Layers3,
    value: "2",
    title: "Core CRM Platforms",
    description:
      "Deep focus on HubSpot and GoHighLevel instead of shallow coverage across every CRM.",
  },
  {
    icon: BriefcaseBusiness,
    value: "End-to-End",
    title: "CRM Delivery",
    description:
      "From process mapping and setup to workflows, integrations, training, and optimization.",
  },
  {
    icon: Bot,
    value: "Next.js",
    title: "Custom Experience",
    description:
      "Websites, portals, and dashboards built to connect cleanly with the CRM.",
  },
];

export default function HomeStats() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Main Card */}
      <div className="rounded-3xl border border-border bg-card p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/30">
        <span className="inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
          Quick Snapshot
        </span>

        <h3 className="mt-6 text-3xl font-bold text-foreground">
          Focused on the System After the Click
        </h3>

        <p className="mt-5 leading-8 text-muted-foreground">
          A website can capture attention. The CRM system behind it determines
          whether leads are followed up, work is assigned, and opportunities
          stay visible. That is where I focus first.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-accent/40
                hover:bg-secondary
              "
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary text-accent transition-all duration-300">
                <Icon className="h-7 w-7" />
              </div>

              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>

              <h4 className="mt-2 text-lg font-semibold text-accent">
                {stat.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
