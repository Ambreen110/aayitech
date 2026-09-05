"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  ExternalLink,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function AmbreenCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/40 px-6 py-14 text-center backdrop-blur-sm sm:px-10 sm:py-16 lg:px-16"
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-primary/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full border border-primary/10" />

          {/* Label */}
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Let&apos;s Connect
          </p>

          {/* Heading */}
          <h2 className="relative mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Have a system that needs to{" "}
            <span className="text-muted-foreground">
              work better?
            </span>
          </h2>

          {/* Description */}
          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Whether you need a CRM implementation, business automation,
            integration, technical system support, or a modern web application,
            I&apos;d be happy to discuss the requirements.
          </p>

          {/* Email */}
          <motion.a
            href="mailto:ambreen@aayitech.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative mx-auto mt-9 flex w-fit items-center gap-3 rounded-full border border-border bg-background/50 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
          >
            <Mail
              size={18}
              className="text-primary"
            />

            <span className="text-sm font-medium">
              ambreen@aayitech.com
            </span>

            <ArrowRight
              size={16}
              className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
            />
          </motion.a>

          {/* Primary actions */}
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:ambreen@aayitech.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Start a Conversation

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* <a
              href="https://www.upwork.com/freelancers/ambreencrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-accent"
            >
              View My Upwork

              <ExternalLink size={16} />
            </a> */}
          </div>

          {/* Social links */}
          <div className="relative mt-10 flex items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/ambreen-f-50070a62"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
            >
              <FaLinkedinIn size={17} />
            </a>

            <a
              href="https://github.com/Ambreen110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
            >
              <FaGithub size={17} />
            </a>
          </div>

          {/* Contact information */}
          <div className="relative mt-10 border-t border-border/60 pt-7">
            <p className="text-xs text-muted-foreground">
              Available for CRM implementation, automation, integrations,
              technical consulting, and web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}