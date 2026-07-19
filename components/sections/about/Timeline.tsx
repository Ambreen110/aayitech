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
    title: "Software Development",
    description:
      "Started my journey by learning programming fundamentals and building applications with JavaScript and modern web technologies.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Built responsive websites and full-stack applications using React, Next.js, Node.js, NestJS, and WordPress.",
  },
  {
    icon: Database,
    title: "CRM & Business Systems",
    description:
      "Expanded into CRM implementation, business process optimization, customer journeys, and operational systems.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Designed automated workflows, API integrations, email infrastructure, and connected business platforms.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Integrated AI assistants, intelligent automations, and business productivity solutions into real-world workflows.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Technical Systems Consultant",
    description:
      "Today I help businesses design complete technical ecosystems that combine development, CRM, automation, infrastructure, and AI.",
  },
];

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Center Line */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-cyan-400/40 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

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
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-black bg-cyan-400 lg:left-1/2">
                <div className="h-2 w-2 rounded-full bg-black" />
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