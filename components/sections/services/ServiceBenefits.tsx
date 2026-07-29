"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServiceBenefitsProps {
  title: string;
  description: string;
  benefits: string[];
}

export default function ServiceBenefits({
  title,
  description,
  benefits,
}: ServiceBenefitsProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl lg:text-2xl">
              {description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <CheckCircle2
                  className="mt-1 text-accent"
                  size={22}
                />

                <span className="text-gray-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}