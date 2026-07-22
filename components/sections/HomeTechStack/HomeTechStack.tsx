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
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Technologies
          </span>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Tools That Power
            <span className="text-cyan-400"> Every Solution</span>
          </h2>

          <p className="text-lg leading-8 text-zinc-400">
            Modern technologies used to build scalable applications, CRM systems,
            automation workflows, and business platforms.
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
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-6
              py-3
              font-medium
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500/20
              hover:text-white
            "
          >
            View Full Technology Stack
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}