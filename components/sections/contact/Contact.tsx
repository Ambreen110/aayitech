"use client";

import { motion } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/12 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[160px]" />

      {/* Grid Background */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          [background-image:linear-gradient(to_right,rgba(23,53,46,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,53,46,0.12)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            Let's Start Your
            <span className="text-accent"> Next Project</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have an idea, a challenge, or a project in mind? Whether it's CRM
            implementation, AI automation, API integration, or a modern web
            application, I'd be happy to discuss how we can build the right
            solution together.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 border-t border-border pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">
              Available for freelance, contract, and long-term collaborations.
            </p>

            <div className="flex items-center gap-2 text-sm text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Currently accepting new projects
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}