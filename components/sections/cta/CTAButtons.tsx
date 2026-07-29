"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FolderOpen } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      {/* Primary Button */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          href="#contact"
          className="
            group inline-flex items-center justify-center gap-2
            rounded-xl
            bg-primary
            px-7
            py-3.5
            font-semibold
            text-primary-foreground
            shadow-lg
            shadow-primary/15
            transition-all
            duration-300
            hover:bg-accent
            hover:text-background
            hover:shadow-accent/30
          "
        >
          Let's Work Together

          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Secondary Button */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          href="#projects"
          className="
            group inline-flex items-center justify-center gap-2
            rounded-xl
            border
            border-border
            bg-card
            px-7
            py-3.5
            font-semibold
            text-foreground
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-accent
            hover:bg-secondary
            hover:text-accent
          "
        >
          View My Projects

          <FolderOpen className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
        </Link>
      </motion.div>
    </div>
  );
}