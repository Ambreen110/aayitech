"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { iconMap } from "@/lib/iconMap";

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  icon: keyof typeof iconMap;
}

export default function ServiceHero({
  badge,
  title,
  highlight,
  description,
  icon,
}: ServiceHeroProps) {
  const Icon = iconMap[icon];

  return (
    <section className="relative overflow-hidden py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl"
          >
            <Icon
              size={42}
              className="text-cyan-400"
            />
          </motion.div>

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400"
          >
            {badge}
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl"
          >
            {title}
            <span className="text-cyan-400"> {highlight}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400"
          >
            {description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Book a Consultation
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/10"
            >
              View Projects

              <ArrowRight
                size={18}
                className="ml-2"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}