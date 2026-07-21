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
            <h2 className="text-4xl font-bold text-white">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
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
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <CheckCircle2
                  className="mt-1 text-cyan-400"
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