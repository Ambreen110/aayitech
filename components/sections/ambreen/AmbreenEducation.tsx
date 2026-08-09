"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ArrowUpRight } from "lucide-react";

export default function AmbreenEducation() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Technical foundation for{" "}
            <span className="text-muted-foreground">
              practical problem solving.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A computer science foundation combined with hands-on experience
            across CRM, automation, development, data, and technical systems.
          </p>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50 sm:p-9"
        >
          {/* Decorative number */}
          <div className="pointer-events-none absolute right-8 top-4 text-[100px] font-bold leading-none tracking-tighter text-foreground/[0.025]">
            CS
          </div>

          <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/70 bg-background/50 text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
              <GraduationCap
                size={30}
                strokeWidth={1.5}
              />
            </div>

            {/* Degree */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Academic Background
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                BS Computer Science
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                A technical academic foundation supporting my work in software,
                systems, data, automation, and problem solving.
              </p>
            </div>

            {/* Focus */}
            <div className="flex items-center gap-3 border-t border-border/60 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <BookOpen
                size={18}
                className="shrink-0 text-primary"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Focus
                </p>

                <p className="mt-1 text-sm font-medium">
                  Computer Science
                </p>
              </div>
            </div>
          </div>

          {/* Bottom link */}
          <div className="relative mt-8 border-t border-border/60 pt-5">
            <a
              href="#experience"
              className="group/link inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              See how I apply my technical background

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}