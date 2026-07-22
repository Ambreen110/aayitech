"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ApproachStep } from "../approach/approach.data";

interface HomeStepCardProps {
  step: ApproachStep;
}

export default function HomeStepCard({ step }: HomeStepCardProps) {
  const Icon = step.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
      "
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-4xl font-black text-white/10">
            {step.number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400">
          {step.title}
        </h3>

        <p className="line-clamp-3 text-sm leading-7 text-zinc-400">
          {step.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400">
          Step {step.number}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}