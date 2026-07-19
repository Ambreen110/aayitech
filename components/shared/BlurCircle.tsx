"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurCircleProps {
  className?: string;
  color?: string;
  duration?: number;
  delay?: number;
}

export default function BlurCircle({
  className,
  color = "bg-cyan-500/20",
  duration = 8,
  delay = 0,
}: BlurCircleProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full blur-3xl",
        "h-80 w-80",
        color,
        className
      )}
      animate={{
        x: [0, 25, -20, 0],
        y: [0, -20, 15, 0],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
}