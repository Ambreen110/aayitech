"use client";

import { motion } from "framer-motion";
import { approachSteps } from "./approach.data";
import ProcessStep from "./ProcessStep";

export default function DetailedTimeline() {
  return (
    <section className="relative py-28">

      {/* Background */}

      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent hidden xl:block" />

      <div className="container relative mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">

            Six-Step Methodology

          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">

            A Proven Process
            <span className="text-cyan-400">
              {" "}From Discovery To Delivery
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">

            Every project follows a structured workflow designed
            to reduce uncertainty,
            improve communication,
            and deliver reliable business outcomes.

          </p>

        </motion.div>

        {/* Steps */}

        <div className="space-y-28">

          {approachSteps.map((step, index) => (

            <ProcessStep
              key={step.id}
              step={step}
              reverse={index % 2 === 1}
            />

          ))}

        </div>

      </div>

    </section>
  );
}