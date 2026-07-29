"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center text-muted-foreground"
    >
      <span className="mb-2 text-xs uppercase tracking-[0.3em]">
        EXPLORE
      </span>

      <ChevronDown className="h-5 w-5" />
    </motion.div>
  );
}