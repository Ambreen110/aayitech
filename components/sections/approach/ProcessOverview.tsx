"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Workflow,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const benefits = [
  "Business-first planning before development begins",
  "Transparent communication throughout the project",
  "Scalable architecture for future growth",
  "Clean, maintainable, and secure code",
  "Automation to reduce repetitive work",
  "Continuous optimization after deployment",
];

const highlights = [
  {
    icon: Target,
    title: "Business Focused",
    description:
      "Every technical decision is aligned with your business objectives, ensuring the final solution delivers measurable value.",
  },
  {
    icon: Workflow,
    title: "Structured Workflow",
    description:
      "A proven six-step methodology keeps projects organized, predictable, and easy to manage from start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Delivery",
    description:
      "Clean architecture, testing, and best practices ensure your project is stable, secure, and easy to maintain.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description:
      "Solutions are designed to grow with your business, making future enhancements and integrations straightforward.",
  },
];

export default function ProcessOverview() {
  return (
    <section className="relative bg-background py-24">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/12 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-[160px]" />

      <div className="container relative mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
              Why My Process Works
            </span>

            <h2 className="mt-6 text-4xl font-bold text-foreground">
              Every Project Starts With Strategy,
              <span className="text-accent"> Not Code</span>
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              Great software isn't created by rushing into development.
              Every successful project begins with understanding your goals,
              planning the right solution, and executing each phase with
              clarity and precision.
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />

                  <span className="text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-accent/40
                    hover:bg-secondary
                  "
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary text-accent transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}