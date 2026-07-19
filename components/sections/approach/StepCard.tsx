"use client";

import { motion } from "framer-motion";
import { ApproachStep } from "./approach.data";

interface StepCardProps {
  step: ApproachStep;
}

export default function StepCard({ step }: StepCardProps) {
  const Icon = step.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl border border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/30" />

      {/* Step Number */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-5xl font-black text-white/10 transition-colors duration-300 group-hover:text-cyan-400/20">
          {step.number}
        </span>

        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
        >
          <Icon className="h-7 w-7" />
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
        {step.title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-zinc-400">
        {step.description}
      </p>

      {/* Bottom Accent */}
      <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-28" />
    </motion.div>
  );
}