"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Animated Overlay */}
      <motion.div
        className="
          absolute inset-0
          bg-[linear-gradient(120deg,transparent_30%,rgba(34,211,238,0.08)_50%,transparent_70%)]
        "
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Radial Fade */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.45)_75%,black)]
        "
      />
    </div>
  );
}