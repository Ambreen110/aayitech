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
        border-border
        bg-card
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-accent/40
        hover:bg-secondary
      "
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/5 to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-4xl font-black text-border">
            {step.number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-accent transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
          {step.title}
        </h3>

        <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
          {step.description}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 group-hover:gap-3 group-hover:text-primary">
          Step {step.number}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}