"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "CRM implementation & architecture",
  "Workflow automation & integrations",
  "Technical systems & troubleshooting",
  "Web development with Next.js",
];

export default function AmbreenAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building systems that{" "}
            <span className="text-muted-foreground">
              work together.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Main story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg leading-8 text-foreground/90 sm:text-xl">
              I&apos;m a{" "}
              <span className="font-semibold text-foreground">
                CRM Technical Specialist and Automation &amp; Systems Developer
              </span>{" "}
              working across CRM platforms, business automation, integrations,
              web development, and technical infrastructure.
            </p>

            <p className="leading-8 text-muted-foreground">
              My technical journey started with web development and gradually
              expanded into CRM implementation, automation, integrations, and
              business systems. This combination allows me to look beyond a
              single tool and understand how different systems, data, and
              workflows need to work together.
            </p>

            <p className="leading-8 text-muted-foreground">
              I work with platforms such as HubSpot, Salesforce, GoHighLevel,
              and Apollo, while also building modern web applications with
              Next.js, React, TypeScript, and Node.js. My work also includes
              EDI and database-related processes, DNS and email authentication,
              and technical troubleshooting.
            </p>

            <p className="leading-8 text-muted-foreground">
              My focus is practical technical execution: understanding the
              requirement, designing the system, configuring the right tools,
              connecting the moving parts, and making sure the final setup
              works reliably.
            </p>

            {/* Small link */}
            <div className="pt-3">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Explore my experience

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Highlights card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border/70 bg-card/40 p-7 backdrop-blur-sm sm:p-8">
              <div className="mb-7">
                <p className="text-sm font-medium text-muted-foreground">
                  What I work on
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  Technical systems &amp; automation
                </h3>
              </div>

              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + index * 0.08,
                    }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-primary"
                    />

                    <span className="text-sm leading-6 text-muted-foreground">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Technical identity */}
              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Core approach
                </p>

                <p className="mt-3 text-sm leading-6 text-foreground/80">
                  Understand the requirement → design the system → connect the
                  tools → automate the workflow → troubleshoot and refine.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-border/60 pt-8"
        >
          <p className="max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base">
            Currently working across CRM implementation, automation,
            integrations, technical systems, EDI/data processes, and modern
            web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}