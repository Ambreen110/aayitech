"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent backdrop-blur-xl"
      >
        CRM • AI • Web Development
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl xl:text-7xl"
      >
        Build Smarter
        <br />
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Business Systems
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
      >
        We build CRM systems, AI automations, and custom web applications that
        streamline operations, improve productivity, and help businesses scale.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        {/* Discovery Call */}
        <Link href="https://calendly.com/ambreen-f/30min" target="_blank">
          <Button
            size="lg"
            className="group rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-accent/30"
          >
            Book a Discovery Call

            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>

        {/* Services */}
        <Link href="/services">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border border-accent bg-card px-8 py-6 text-base font-semibold text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-background"
          >
            Explore Services
          </Button>
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-20 w-full"
      >
        <HeroStats />
      </motion.div>
    </div>
  );
}