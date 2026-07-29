"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProjectFiltersProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

export default function ProjectFilters({
  categories,
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const active = activeFilter === category;

        return (
          <motion.div
            key={category}
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -2 }}
          >
            <Button
              variant={active ? "default" : "outline"}
              onClick={() => onFilterChange(category)}
              className={`
                relative overflow-hidden rounded-full px-5 py-2 transition-all duration-300
                ${
                  active
                    ? "bg-primary text-primary-foreground hover:bg-accent hover:text-background"
                    : "border-border bg-card text-foreground hover:border-accent hover:bg-secondary"
                }
              `}
            >
              {active && (
                <motion.span
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                  style={{ zIndex: -1 }}
                />
              )}

              <span className="relative z-10">
                {category}
              </span>
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}