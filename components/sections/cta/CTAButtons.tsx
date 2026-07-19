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
            bg-cyan-500
            px-7
            py-3.5
            font-semibold
            text-black
            shadow-lg shadow-cyan-500/20
            transition-all
            duration-300
            hover:bg-cyan-400
            hover:shadow-cyan-500/40
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
            border-white/15
            bg-white/5
            px-7
            py-3.5
            font-semibold
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-500/10
            hover:text-cyan-300
          "
        >
          View My Projects

          <FolderOpen className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
        </Link>
      </motion.div>
    </div>
  );
}