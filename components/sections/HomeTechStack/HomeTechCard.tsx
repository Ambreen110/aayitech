"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

interface Props {
  name: string;
  icon: ComponentType<any>;
}

export default function HomeTechCard({
  name,
  icon: Icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.04,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        flex
        flex-col
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.05]
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-cyan-500/10
          text-cyan-400
          transition-all
          duration-300
          group-hover:bg-cyan-500/20
        "
      >
        <Icon className="h-7 w-7" />
      </div>

      <span className="text-center text-sm font-medium text-white">
        {name}
      </span>
    </motion.div>
  );
}