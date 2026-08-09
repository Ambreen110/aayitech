"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const experience = [
  {
    company: "MCMCRM",
    role: "CRM Technical Specialist",
    period: "Dec 2024 – Present",
    current: true,
    points: [
      "Built and maintain HubSpot CRM environments including custom properties, pipeline structures, automated workflows, dashboards, and reporting.",
      "Developed lead-routing and lifecycle automations.",
      "Handled DNS, email authentication, and SEO-related technical setup.",
    ],
  },
  {
    company: "AgiComply",
    role: "CRM & Automation Developer",
    period: "Dec 2025 – Present",
    current: true,
    points: [
      "Built the HubSpot CRM environment from scratch based on business requirements.",
      "Configured properties, pipelines, and automations.",
      "Set up technical integrations connecting the CRM with LinkedIn-based outreach tooling.",
    ],
  },
  {
    company: "Sigma Procurement",
    role: "CRM Implementation & Automation",
    period: "Sep 2025 – Present",
    current: true,
    points: [
      "Built the CRM system from the ground up.",
      "Developed automations for broader business processes.",
      "Delivered the technical CRM implementation remotely for an international client.",
    ],
  },
  {
    company: "RouteTrax",
    role: "CRM Technical Support",
    period: "Nov 2025 – Present",
    current: true,
    points: [
      "Customized and configured the CRM environment to match operational workflows.",
      "Provided ongoing technical systems support, troubleshooting, and maintenance.",
    ],
  },
  {
    company: "Time Doc Health",
    role: "CRM & Systems Support",
    period: "Present",
    current: true,
    points: [
      "Provided technical CRM configuration and systems support.",
    ],
  },
  {
    company: "Invenits",
    role: "Technical Systems / EDI & Database Support",
    period: "Current",
    current: true,
    points: [
      "Worked on EDI-related technical processes and database operations, including reviewing, troubleshooting, and maintaining structured business data.",
      "Supported technical troubleshooting around EDI documents, data flow, and database-related issues.",
    ],
  },
  {
    company: "Pakko Packaging",
    role: "Apollo / Outreach Technical Setup",
    period: "Jan 2025 – Mar 2025",
    current: false,
    points: [
      "Configured Apollo, including account setup and integrations.",
      "Handled technical configuration for outbound email outreach.",
    ],
  },
  {
    company: "Creaxa Agency",
    role: "WordPress Developer / Technical Support",
    period: "Jul 2024 – Jan 2025",
    current: false,
    points: [
      "Delivered WordPress development and website optimization work.",
      "Provided technical support and configured Google Workspace for business operations.",
    ],
  },
];

export default function AmbreenExperience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Technical experience across{" "}
            <span className="text-muted-foreground">
              CRM, automation &amp; systems.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A timeline of the technical systems, CRM implementations, and
            development work I have delivered across different environments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border/70 md:left-[23px]" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline marker */}
                <div
                  className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border ${
                    item.current
                      ? "border-primary/40 bg-primary/10"
                      : "border-border bg-background"
                  }`}
                >
                  {item.current ? (
                    <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,255,255,0.35)]" />
                  ) : (
                    <BriefcaseBusiness
                      size={14}
                      className="text-muted-foreground"
                    />
                  )}
                </div>

                {/* Experience card */}
                <div className="rounded-2xl border border-border/70 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/25 hover:bg-card/50 sm:p-7">
                  {/* Header */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-primary">
                        {item.company}
                      </p>
                    </div>

                    <span
                      className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${
                        item.current
                          ? "border-primary/20 bg-primary/5 text-primary"
                          : "border-border bg-background/40 text-muted-foreground"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-primary"
                        />

                        <p className="text-sm leading-7 text-muted-foreground">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-border/60 pt-10"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Education
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                BS Computer Science
              </h3>
            </div>

            <span className="text-sm text-muted-foreground">
              Technical Foundation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}