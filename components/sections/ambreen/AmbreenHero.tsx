"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function AmbreenHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_45%)]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="w-full">
          {/* Availability / identity label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />

            <span className="text-sm font-medium tracking-wide text-muted-foreground">
              CRM • Automation • Technical Systems
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-3 text-lg font-medium text-muted-foreground sm:text-xl">
              Hi, I&apos;m
            </p>

            <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Ambreen{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                Fatima
              </span>
            </h1>

            <h2 className="mt-5 max-w-4xl text-2xl font-semibold tracking-tight text-foreground/90 sm:text-3xl lg:text-4xl">
              CRM Technical Specialist
              <span className="text-muted-foreground"> | </span>
              Automation &amp; Systems Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            I build and configure CRM systems, business automations,
            integrations, and modern web applications — combining technical
            implementation with practical business workflows.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#experience"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              View My Experience

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-accent"
            >
              <BriefcaseBusiness size={17} />

              Let&apos;s Work Together
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-5"
          >
            <span className="text-sm text-muted-foreground">
              Find me on
            </span>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ambreen-f-50070a62"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="https://github.com/Ambreen110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.upwork.com/freelancers/ambreencrm"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
              >
                Upwork
              </a>
            </div>
          </motion.div>

          {/* Bottom expertise strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-16 grid max-w-4xl grid-cols-2 border-y border-border/60 py-6 sm:grid-cols-4"
          >
            {[
              "CRM Systems",
              "Automation",
              "Web Development",
              "EDI & Data",
            ].map((item, index) => (
              <div
                key={item}
                className={`px-4 py-2 text-center text-sm font-medium text-muted-foreground ${
                  index !== 0 ? "border-l border-border/60" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground md:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Explore
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}