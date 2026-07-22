"use client";

import { motion } from "framer-motion";
import HomeAboutContent from "./HomeAboutContent";
import HomeStats from "./HomeStats";

export default function HomeAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background Effects */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main Glow */}
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[160px]" />

        {/* Top Right Glow */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/5 blur-[120px]" />

        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-600/5 blur-[120px]" />

        {/* Grid Pattern */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
            bg-[size:60px_60px]
            [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
          "
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            About
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Turning Ideas Into
            <span className="text-cyan-400"> Scalable Digital Solutions</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            I help businesses build modern websites, CRM systems, AI-powered
            automation, and technical infrastructure that improves efficiency,
            streamlines operations, and supports long-term growth.
          </p>
        </motion.div>

        {/* Main Content */}

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <HomeAboutContent />

          <HomeStats />
        </div>
      </div>
    </section>
  );
}