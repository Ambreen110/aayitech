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
        border-border
        bg-card
        p-5
        transition-all
        duration-300
        hover:border-accent/40
        hover:bg-secondary
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
          border
          border-border
          bg-secondary
          text-accent
          transition-all
          duration-300
          group-hover:border-accent/40
          group-hover:bg-accent/10
        "
      >
        <Icon className="h-7 w-7" />
      </div>

      <span className="text-center text-sm font-medium text-foreground">
        {name}
      </span>
    </motion.div>
  );
}