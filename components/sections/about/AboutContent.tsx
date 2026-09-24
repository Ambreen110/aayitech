"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "HubSpot CRM Setup, Cleanup & Automation",
  "GoHighLevel Funnels, Pipelines & Workflows",
  "Lead Routing, Follow-Up & Lifecycle Automation",
  "CRM Integrations, APIs & Reporting",
  "Next.js Websites, Portals & Dashboards",
  "Documentation, Training & Ongoing Optimization",
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
          Your CRM Should Run the Process—Not Create More Admin.
        </h3>

        <p className="mb-6 leading-8 text-muted-foreground">
          AAYI TECH helps businesses turn HubSpot and GoHighLevel into working
          operational systems. The goal is simple: fewer manual updates, faster
          follow-up, cleaner handoffs, and better visibility across the customer
          journey.
        </p>

        <p className="mb-6 leading-8 text-muted-foreground">
          I start with the process your team follows today, then design the CRM,
          workflows, data, and integrations around that reality. This keeps the
          system practical instead of adding automation for its own sake.
        </p>

        <p className="leading-8 text-muted-foreground">
          When the CRM needs a custom customer-facing layer, I use Next.js to
          build the website, portal, dashboard, or lead experience that connects
          directly to the workflow behind it.
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
