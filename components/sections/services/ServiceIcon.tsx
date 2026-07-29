"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceIconProps {
  icon: LucideIcon;
}

export default function ServiceIcon({
  icon: Icon,
}: ServiceIconProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: 4,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-border
        bg-secondary
        backdrop-blur-md
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-xl" />

      {/* Icon */}
      <Icon
        size={30}
        strokeWidth={2}
        className="relative z-10 text-accent"
      />
    </motion.div>
  );
}