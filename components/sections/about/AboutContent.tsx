"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "6+ years of continuous technical experience",
  "Full Stack Development with React, Next.js & NestJS",
  "CRM Systems (HubSpot, GoHighLevel, Salesforce)",
  "Workflow Automation & API Integrations",
  "AI-Powered Business Solutions",
  "Infrastructure, DNS & Email Deliverability",
];

export default function AboutContent() {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-2">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="mb-4 inline-block rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
          Technical Systems Consultant
        </span>

        <h3 className="mb-6 text-4xl font-bold leading-tight text-foreground">
          From Building Websites to Designing Complete Business Systems.
        </h3>

        <p className="mb-6 leading-8 text-muted-foreground">
          My journey in technology began more than six years ago with web
          development, where I built responsive websites and modern web
          applications using React, Next.js, and backend technologies.
        </p>

        <p className="mb-6 leading-8 text-muted-foreground">
          As I worked with businesses, I realized that great software alone
          wasn't enough. Companies needed connected systems that streamlined
          operations, automated repetitive work, and supported growth. That
          led me into CRM implementation, workflow automation, API
          integrations, AI solutions, and technical consulting.
        </p>

        <p className="leading-8 text-muted-foreground">
          Today, I combine development, automation, CRM strategy, and AI to
          build complete technical ecosystems that help businesses operate
          smarter and scale with confidence.
        </p>
      </motion.div>

      {/* Right Highlights */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-border bg-card p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/30"
      >
        <h4 className="mb-8 text-2xl font-semibold text-foreground">
          What I Bring
        </h4>

        <div className="space-y-5">
          {highlights.map((item) => (
            <div key={item} className="flex items-start gap-4">
              <CheckCircle2
                className="mt-1 text-accent"
                size={22}
              />

              <p className="text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}