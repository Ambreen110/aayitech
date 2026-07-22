"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const expertise = [
  "Full Stack Web Development",
  "CRM Implementation & Automation",
  "AI Solutions & Workflow Automation",
  "Technical Systems Consulting",
];

export default function HomeAboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
        <User className="h-4 w-4" />
        About Me
      </div>

      {/* Heading */}

      <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
        Building Technology That Solves
        <span className="block text-cyan-400">
          Real Business Problems
        </span>
      </h2>

      {/* Intro */}

      <p className="mt-8 text-lg leading-8 text-zinc-400">
        I'm a <span className="text-white font-medium">Full Stack Developer</span>
        &{" "}
        <span className="text-white font-medium">
          CRM & AI Automation Specialist
        </span>{" "}
        with 6+ years of technical experience building scalable websites,
        business systems, and automation solutions that improve efficiency and
        support business growth.
      </p>

      <p className="mt-5 leading-8 text-zinc-400">
        From modern web applications to CRM implementations, API integrations,
        AI-powered workflows, and technical infrastructure, I focus on creating
        practical solutions that help businesses streamline operations and scale
        with confidence.
      </p>

      {/* Expertise */}

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
        <div className="mb-5 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />

          <h3 className="text-xl font-semibold text-white">
            Core Expertise
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {expertise.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

              <span className="text-zinc-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/about"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-cyan-500
            px-7
            py-3.5
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:bg-cyan-400
          "
        >
          Learn More

          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/10
            px-7
            py-3.5
            font-semibold
            text-white
            transition-all
            duration-300
            hover:border-cyan-400
            hover:text-cyan-300
          "
        >
          Let's Talk
        </Link>
      </div>
    </motion.div>
  );
}