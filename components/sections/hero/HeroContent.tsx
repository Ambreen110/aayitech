"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl"
      >
        AI • CRM • Automation • Development
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-white md:text-6xl xl:text-7xl"
      >
        Build Smarter
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
          Technical Systems
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl"
      >
        We design and build intelligent digital systems that help businesses
        automate operations, integrate AI, optimize CRM workflows, and develop
        scalable web applications that grow with your business.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <Button
          size="lg"
          className="group rounded-full bg-cyan-500 px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-cyan-400"
        >
          Start Your Project
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="rounded-full border-zinc-700 bg-transparent px-8 py-6 text-base text-zinc-200 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-white"
        >
          View Services
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-20 w-full"
      >
        <HeroStats />
      </motion.div>
    </div>
  );
}