"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { techStack } from "../tech-stack/tech.data";
import HomeTechCategory from "./HomeTechCategory";

export default function HomeTechStack() {
  const featuredCategories = techStack.slice(0, 4);

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-background py-20"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/12 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
            Technologies
          </span>

          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Tools That Power
            <span className="text-accent"> Every Solution</span>
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            Modern technologies used to build scalable applications, CRM
            systems, automation workflows, and business platforms.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-14">
          {featuredCategories.map((category) => (
            <HomeTechCategory
              key={category.category}
              category={category.category}
              technologies={category.technologies}
            />
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/technologies"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-border
              bg-card
              px-6
              py-3
              font-medium
              text-foreground
              transition-all
              duration-300
              hover:border-accent
              hover:bg-secondary
            "
          >
            View Full Technology Stack

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}