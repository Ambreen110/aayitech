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
        scale: 1.1,
        rotate: 6,
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
        border-cyan-400/20
        bg-cyan-500/10
        backdrop-blur-md
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-xl" />

      {/* Icon */}
      <Icon
        size={30}
        strokeWidth={2}
        className="relative z-10 text-cyan-400"
      />
    </motion.div>
  );
}