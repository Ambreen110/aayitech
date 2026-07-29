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
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lg shadow-primary/5 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-secondary"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl border border-accent/0 transition-all duration-500 group-hover:border-accent/40" />

      {/* Step Number */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-5xl font-black text-border transition-colors duration-300 group-hover:text-accent/20">
          {step.number}
        </span>

        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary text-accent transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10"
        >
          <Icon className="h-7 w-7" />
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
        {step.title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-muted-foreground">
        {step.description}
      </p>

      {/* Bottom Accent */}
      <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-28" />
    </motion.div>
  );
}