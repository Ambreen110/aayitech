"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  Clock3,
} from "lucide-react";

import { ApproachStep } from "./approach.data";

interface ProcessStepProps {
  step: ApproachStep;
  reverse?: boolean;
}

export default function ProcessStep({
  step,
  reverse = false,
}: ProcessStepProps) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`
        grid
        gap-14
        items-center
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* ================= Left ================= */}

      <div>
        <div className="mb-6 flex items-center gap-6">

          <span className="text-7xl font-black text-white/10">
            {step.number}
          </span>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
            <Icon className="h-8 w-8" />
          </div>

        </div>

        <span className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          {step.subtitle}
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          {step.title}
        </h2>

        <p className="mt-6 leading-8 text-zinc-400">
          {step.description}
        </p>

        {/* Duration */}

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300">
          <Clock3 className="h-5 w-5" />

          <span className="font-medium">
            Estimated Duration: {step.duration}
          </span>
        </div>
      </div>

      {/* ================= Right ================= */}

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

        {/* Objectives */}

        <div>

          <h3 className="mb-6 text-2xl font-semibold text-white">
            What Happens
          </h3>

          <div className="space-y-4">

            {step.objectives.map((item) => (
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

        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-white/10" />

        {/* Deliverables */}

        <div>

          <h3 className="mb-6 text-2xl font-semibold text-white">
            Deliverables
          </h3>

          <div className="space-y-4">

            {step.deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <FileText className="mt-1 h-5 w-5 text-cyan-400" />

                <span className="text-zinc-300">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </motion.div>
  );
}