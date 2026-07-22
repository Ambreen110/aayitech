"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import TechCard from "./TechCard";

interface Technology {
  name: string;
  icon: any;
}

interface TechCategoryProps {
  category: string;
  description: string;
  expertise: string[];
  technologies: Technology[];
}

export default function TechCategory({
  category,
  description,
  expertise,
  technologies,
}: TechCategoryProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        lg:p-12
      "
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

        {/* Left Side */}
        <div>
          <span className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Technology Category
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white">
            {category}
          </h2>

          <p className="mb-8 leading-8 text-zinc-400">
            {description}
          </p>

          <h3 className="mb-5 text-lg font-semibold text-white">
            What I Build
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                <span className="text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Technologies
          </h3>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {technologies.map((tech, index) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}