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
    <section className="relative py-24">

      <div className="container mx-auto px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Why My Process Works
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Every Project Starts With Strategy,
              <span className="text-cyan-400"> Not Code</span>
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
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
                  <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />

                  <span className="text-zinc-300">
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
            transition={{ duration: .6 }}
            className="grid gap-6 sm:grid-cols-2"
          >

            {highlights.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-cyan-400/30
                  "
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                    <Icon className="h-7 w-7" />

                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-zinc-400">
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