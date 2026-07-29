"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import CTABackground from "./CTABackground";
import CTAButtons from "./CTAButtons";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Background */}
      <CTABackground />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          {/* Glass Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-card px-8 py-16 text-center shadow-xl shadow-primary/5 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 md:px-16">
            {/* Decorative Glow */}
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent"
            >
              <Sparkles className="h-4 w-4" />
              Let's Build Something Great
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 mx-auto max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl"
            >
              Ready to Transform Your
              <span className="text-accent"> Ideas </span>
              Into Scalable Digital Solutions?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="relative z-10 mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground"
            >
              Whether you need a modern web application, AI-powered automation,
              CRM implementation, API integration, or a complete digital
              solution, I build systems that are scalable, reliable, and focused
              on delivering measurable business results.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative z-10"
            >
              <CTAButtons />
            </motion.div>

            {/* Bottom Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="relative z-10 mt-14 flex flex-wrap justify-center gap-10 border-t border-border pt-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-accent">2+</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-accent">20+</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-accent">100%</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Client Commitment
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}