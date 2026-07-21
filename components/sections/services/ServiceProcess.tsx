"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceProcessProps {
  title: string;
  description: string;
  steps: string[];
}

export default function ServiceProcess({
  title,
  description,
  steps,
}: ServiceProcessProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
              {description}
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl font-bold text-cyan-400">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {step}
                </h3>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-cyan-500 xl:block"
                    size={24}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}