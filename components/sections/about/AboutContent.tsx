"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Modern Web Development with Next.js, React & Node.js",
  "CRM Implementation & Business Process Optimization",
  "Workflow Automation & API Integrations",
  "AI-Powered Business Solutions",
  "Email Infrastructure, DNS & Technical Systems",
  "Connected Digital Ecosystems for Growing Businesses",
];

export default function AboutContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
          AAYI TECH
        </p>

        <h3 className="mb-6 text-4xl font-bold leading-tight text-foreground">
          Technology That Connects Your Business.
        </h3>

        <p className="mb-6 leading-8 text-muted-foreground">
          AAYI TECH helps businesses build, connect, and improve their
          technology systems. We combine modern web development, CRM
          implementation, automation, AI, integrations, and technical
          infrastructure to create solutions that work together.
        </p>

        <p className="mb-6 leading-8 text-muted-foreground">
          Instead of treating websites, CRMs, automations, and business tools
          as separate systems, we focus on creating connected digital
          ecosystems that simplify operations and improve efficiency.
        </p>

        <p className="leading-8 text-muted-foreground">
          From developing modern web applications to implementing CRM systems,
          automating workflows, integrating APIs, and introducing AI-powered
          solutions, AAYI TECH provides practical technology built around real
          business needs.
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
          What We Do
        </h4>

        <div className="space-y-5">
          {highlights.map((item) => (
            <div key={item} className="flex items-start gap-4">
              <CheckCircle2
                className="mt-1 shrink-0 text-accent"
                size={22}
              />

              <p className="text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}