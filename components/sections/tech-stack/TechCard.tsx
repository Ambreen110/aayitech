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
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
      "
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
        <Icon className="h-8 w-8" />
      </div>

      {/* Technology Name */}
      <h4 className="relative z-10 text-center text-sm font-semibold text-white">
        {name}
      </h4>

      {/* Bottom Accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-cyan-400"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}