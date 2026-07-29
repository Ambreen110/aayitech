"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ReactNode } from "react";

interface SectionBadgeProps {
  children: ReactNode;
}

export default function SectionBadge({
  children,
}: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="mb-6 flex justify-center"
    >
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-border
          bg-secondary
          px-5
          py-2
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-accent/40
          hover:bg-accent/10
        "
      >
        <Sparkles
          size={16}
          className="text-accent"
        />

        <span className="text-sm font-medium tracking-wide text-accent">
          {children}
        </span>
      </div>
    </motion.div>
  );
}