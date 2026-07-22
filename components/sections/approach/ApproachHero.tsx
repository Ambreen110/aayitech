"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  FolderKanban,
  Sparkles,
} from "lucide-react";

export default function ApproachHero() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-10rem] top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-8rem] bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)]" />

      </div>

      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-5xl text-center"
        >

          {/* Badge */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">

            <Sparkles className="h-4 w-4" />

            My Development Process

          </div>

          {/* Heading */}

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">

            Every Great Product
            <br />

            Starts With a
            <span className="text-cyan-400">
              {" "}Great Process
            </span>

          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            Successful software isn't just about writing code.
            It's about understanding your business,
            designing the right solution,
            building scalable systems,
            integrating automation,
            and continuously improving after launch.

          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-cyan-500
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                hover:scale-105
                hover:bg-cyan-400
              "
            >
              Start Your Project

              <ArrowRight className="h-5 w-5" />

            </Link>

            <Link
              href="/projects"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                px-8
                py-4
                text-white
                transition-all
                hover:border-cyan-400
                hover:text-cyan-300
              "
            >
              View My Work
            </Link>

          </div>

          {/* Stats */}

          <div className="mx-auto mt-20 grid max-w-4xl gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

              <Clock3 className="mx-auto mb-4 h-8 w-8 text-cyan-400" />

              <h3 className="text-3xl font-bold text-white">
                6
              </h3>

              <p className="mt-2 text-zinc-400">
                Structured Development Phases
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

              <FolderKanban className="mx-auto mb-4 h-8 w-8 text-cyan-400" />

              <h3 className="text-3xl font-bold text-white">
                End-to-End
              </h3>

              <p className="mt-2 text-zinc-400">
                Project Management
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

              <Sparkles className="mx-auto mb-4 h-8 w-8 text-cyan-400" />

              <h3 className="text-3xl font-bold text-white">
                Business
              </h3>

              <p className="mt-2 text-zinc-400">
                Focused Solutions
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}