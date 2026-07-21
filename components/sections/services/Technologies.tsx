"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/lib/iconMap";

interface Technology {
  name: string;
  icon: keyof typeof iconMap;
}

interface TechnologiesProps {
  title: string;
  description: string;
  technologies: Technology[];
}

export default function Technologies({
  title,
  description,
  technologies,
}: TechnologiesProps) {
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

          {/* Technology Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech, index) => {
              const Icon = iconMap[tech.icon];

              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all hover:border-cyan-400/30"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon
                      size={32}
                      className="text-cyan-400"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {tech.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}