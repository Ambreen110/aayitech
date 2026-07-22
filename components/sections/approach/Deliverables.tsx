"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileCode2,
  FolderKanban,
  Bot,
  Rocket,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

const deliverables = [
  {
    icon: FolderKanban,
    title: "Project Planning",
    description:
      "A clear roadmap, requirements, and technical strategy before development begins.",
  },
  {
    icon: FileCode2,
    title: "Clean Source Code",
    description:
      "Well-structured, scalable, and maintainable code following modern development practices.",
  },
  {
    icon: Bot,
    title: "CRM & Automation",
    description:
      "Business workflows, CRM implementation, API integrations, and AI automation where required.",
  },
  {
    icon: ShieldCheck,
    title: "Deployment & Security",
    description:
      "Production deployment with secure configuration, domain setup, and performance optimization.",
  },
  {
    icon: Rocket,
    title: "Optimization",
    description:
      "Performance tuning, SEO improvements, analytics integration, and scalability enhancements.",
  },
  {
    icon: LifeBuoy,
    title: "Post-launch Support",
    description:
      "Documentation, bug fixes, guidance, and ongoing improvements after project delivery.",
  },
];

export default function Deliverables() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            What You'll Receive
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            More Than Just
            <span className="text-cyan-400"> Code</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every project is delivered with everything needed for long-term
            success—not just a finished application.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {deliverables.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: .5,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8"
        >
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 h-6 w-6 text-cyan-400" />

            <p className="leading-8 text-zinc-300">
              Every project is tailored to your business needs, so the exact
              deliverables may vary depending on the project scope, goals, and
              technical requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}