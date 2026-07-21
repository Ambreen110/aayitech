"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  title: string;
  description: string;
}

export default function ServiceCTA({
  title,
  description,
}: ServiceCTAProps) {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
          className="mx-auto max-w-5xl rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-white/5 to-blue-500/10 p-14 text-center backdrop-blur-xl"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Book a Consultation
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-cyan-400"
            >
              View Projects

              <ArrowRight
                size={18}
                className="ml-2"
              />
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}