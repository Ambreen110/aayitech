"use client";

import { motion } from "framer-motion";
import StepCard from "./StepCard";
import { approachSteps } from "./approach.data";

export default function Timeline() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* Desktop Connecting Lines */}
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      {/* Timeline Grid */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {approachSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            className="relative"
          >
            <StepCard step={step} />

            {/* Mobile Connector */}
            {index < approachSteps.length - 1 && (
              <div className="absolute left-1/2 top-full flex h-8 -translate-x-1/2 items-center justify-center md:hidden">
                <div className="h-full w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}