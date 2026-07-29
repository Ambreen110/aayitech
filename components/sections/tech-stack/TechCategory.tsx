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
        border-border
        bg-card
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-accent/30
        lg:p-12
      "
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Side */}
        <div>
          <span className="mb-4 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
            Technology Category
          </span>

          <h2 className="mb-5 text-3xl font-bold text-foreground">
            {category}
          </h2>

          <p className="mb-8 leading-8 text-muted-foreground">
            {description}
          </p>

          <h3 className="mb-5 text-lg font-semibold text-foreground">
            What I Build
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-accent" />

                <span className="text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-foreground">
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