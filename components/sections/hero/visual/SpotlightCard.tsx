"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({
  children,
  className,
}: SpotlightCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "group relative overflow-hidden rounded-3xl",
        className
      )}
    >
      {/* Glass Background */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl" />

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 transition-all duration-300 group-hover:ring-cyan-400/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[220px] flex-col justify-center p-8">
        {children}
      </div>
    </motion.div>
  );
}