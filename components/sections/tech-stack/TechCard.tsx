"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

interface TechCardProps {
  name: string;
  icon: ComponentType<any>;
  delay?: number;
}

export default function TechCard({
  name,
  icon: Icon,
  delay = 0,
}: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay,
      }}
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/5 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-secondary text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10">
        <Icon className="h-8 w-8" />
      </div>

      {/* Technology Name */}
      <h4 className="relative z-10 text-center text-sm font-semibold text-foreground">
        {name}
      </h4>

      {/* Bottom Accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-accent"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}