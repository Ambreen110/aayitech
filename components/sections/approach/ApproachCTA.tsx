"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  FolderOpen,
  Sparkles,
} from "lucide-react";

export default function ApproachCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)]" />

      </div>

      <div className="container relative mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="
            mx-auto
            max-w-5xl
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.04]
            p-12
            text-center
            backdrop-blur-xl
          "
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">

            <Sparkles className="h-4 w-4" />

            Ready To Build?

          </div>

          <h2 className="text-5xl font-bold text-white">

            Let's Turn Your Idea Into
            <span className="text-cyan-400">
              {" "}A Real Product
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            Whether you're planning a modern web application,
            CRM implementation,
            AI-powered automation,
            or a complete business platform,
            I'll guide the project from discovery to deployment
            using a structured and transparent development process.

          </p>

          {/* Stats */}

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

              <h3 className="text-3xl font-bold text-cyan-400">
                6
              </h3>

              <p className="mt-2 text-zinc-400">
                Structured Development Phases
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

              <h3 className="text-3xl font-bold text-cyan-400">
                100%
              </h3>

              <p className="mt-2 text-zinc-400">
                Transparent Communication
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

              <h3 className="text-3xl font-bold text-cyan-400">
                End-to-End
              </h3>

              <p className="mt-2 text-zinc-400">
                Technical Delivery
              </p>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

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
                duration-300
                hover:scale-105
                hover:bg-cyan-400
              "
            >
              <MessageCircle className="h-5 w-5" />

              Start Your Project

              <ArrowRight className="h-5 w-5" />

            </Link>

            <Link
              href="/projects"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                px-8
                py-4
                text-white
                transition-all
                duration-300
                hover:border-cyan-400
                hover:text-cyan-300
              "
            >
              <FolderOpen className="h-5 w-5" />

              View Projects

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}