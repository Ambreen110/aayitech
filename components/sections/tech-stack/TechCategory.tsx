"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

import TechCard from "./TechCard";

export interface Technology {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

interface TechCategoryProps {
  category: string;
  technologies: Technology[];
}

export default function TechCategory({
  category,
  technologies,
}: TechCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Category Title */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />

        <h3 className="text-2xl font-semibold text-white">
          {category}
        </h3>

        <div className="h-px flex-1 bg-gradient-to-l from-cyan-400/40 to-transparent" />
      </div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {technologies.map((tech, index) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            delay={index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}