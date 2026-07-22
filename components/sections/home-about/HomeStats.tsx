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
      "Building modern websites, CRM systems, automation, and scalable business solutions.",
  },
  {
    icon: Layers3,
    value: "10+",
    title: "Technologies",
    description:
      "React, Next.js, Node.js, HubSpot, GoHighLevel, AI, APIs, databases, and more.",
  },
  {
    icon: BriefcaseBusiness,
    value: "End-to-End",
    title: "Business Solutions",
    description:
      "From planning and development to deployment, automation, and ongoing optimization.",
  },
  {
    icon: Bot,
    value: "AI + CRM",
    title: "Automation",
    description:
      "Workflow automation, AI integrations, CRM implementation, and technical consulting.",
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

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          Quick Snapshot
        </span>

        <h3 className="mt-6 text-3xl font-bold text-white">
          Building Complete Digital Solutions
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          I combine software development, CRM implementation, AI automation,
          integrations, and technical consulting to deliver complete systems
          that solve real business challenges.
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
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/30
              "
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Icon className="h-7 w-7" />
              </div>

              <div className="text-3xl font-bold text-white">
                {stat.value}
              </div>

              <h4 className="mt-2 text-lg font-semibold text-cyan-300">
                {stat.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}