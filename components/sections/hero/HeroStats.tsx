"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  BadgeCheck,
  Clock3,
  BrainCircuit,
} from "lucide-react";

import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 40,
    suffix: "+",
    label: "Projects Delivered",
    icon: BriefcaseBusiness,
    color: "text-cyan-400",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    icon: BadgeCheck,
    color: "text-emerald-400",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Technical Support",
    icon: Clock3,
    color: "text-orange-400",
  },
  {
    value: 100,
    suffix: "%",
    label: "AI-Driven Solutions",
    icon: BrainCircuit,
    color: "text-purple-400",
  },
];

export default function HeroStats() {
  return (
    <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8 + index * 0.1,
              duration: 0.5,
            }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
          >
            <div className="mb-5 flex items-center justify-center">
              <div className="rounded-xl bg-white/5 p-3 transition-transform duration-300 group-hover:scale-110">
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {stat.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}