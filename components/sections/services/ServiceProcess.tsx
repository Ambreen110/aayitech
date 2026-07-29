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
            <h2 className="text-4xl font-bold text-foreground">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
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
                whileHover={{ y: -6 }}
                className="relative rounded-3xl border border-border bg-card p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-secondary"
              >
                {/* Step Number */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary text-xl font-bold text-accent">
                  {index + 1}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-semibold text-foreground">
                  {step}
                </h3>

                {/* Connector Arrow */}
                {index !== steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-accent xl:block"
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