"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Database,
  Workflow,
  BarChart3,
} from "lucide-react";

import SpotlightCard from "./visual/SpotlightCard";
import FloatingConnections from "./visual/FloatingConnections";

const cards = [
  {
    title: "CRM",
    description: "Centralized customer management",
    icon: Database,
    color: "text-cyan-400",
  },
  {
    title: "Automation",
    description: "Smart workflows & integrations",
    icon: Workflow,
    color: "text-purple-400",
  },
  {
    title: "AI Systems",
    description: "AI agents & intelligent assistants",
    icon: Bot,
    color: "text-emerald-400",
  },
  {
    title: "Analytics",
    description: "Real-time business insights",
    icon: BarChart3,
    color: "text-orange-400",
  },
];

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative mx-auto mt-20 w-full max-w-6xl"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl" />

      {/* Connection Lines */}
      <FloatingConnections />

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8 + index * 0.15,
              }}
            >
              <SpotlightCard>
                <Icon className={`mb-5 h-10 w-10 ${card.color}`} />

                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {card.description}
                </p>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>

      {/* Center AI Core */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="mx-auto mt-14 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-xl"
      >
        <BrainCircuit className="h-12 w-12 text-cyan-400" />
      </motion.div>

      <p className="mt-6 text-center text-sm uppercase tracking-[0.3em] text-zinc-500">
        Connected Intelligent Systems
      </p>
    </motion.div>
  );
}