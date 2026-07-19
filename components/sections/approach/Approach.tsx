"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Timeline from "./Timeline";

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[160px]" />

      <div className="container relative mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            My Approach
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Turning Ideas Into
            <span className="text-cyan-400"> Intelligent Solutions</span>
          </h2>

          <p className="text-lg leading-8 text-zinc-400">
            Every successful project begins with understanding the problem,
            creating the right strategy, and delivering scalable solutions.
            My process ensures every product is built with performance,
            automation, and long-term growth in mind.
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-24 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl"
        >
          <h3 className="mb-4 text-3xl font-bold text-white">
            Every Project Is Built For Results
          </h3>

          <p className="mx-auto max-w-2xl text-zinc-400 leading-8">
            Whether it's a CRM implementation, AI-powered automation,
            modern web application, or complete business system,
            I focus on creating solutions that are scalable,
            maintainable, and designed for measurable business impact.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-cyan-300">
            Let's build something exceptional
            <ArrowRight className="h-4 w-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}