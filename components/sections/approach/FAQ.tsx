"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope. Smaller websites may take one to two weeks, while larger CRM implementations or automation systems can take several weeks. A realistic timeline is always provided during the planning phase.",
  },
  {
    question: "Can you work with an existing project?",
    answer:
      "Yes. I can improve, extend, optimize, or maintain existing websites, CRM systems, and automation workflows without rebuilding everything from scratch.",
  },
  {
    question: "Do you provide deployment and hosting support?",
    answer:
      "Yes. I can assist with deployment, domain configuration, DNS, Google Workspace, Vercel, hosting environments, and production setup.",
  },
  {
    question: "Will I receive the source code?",
    answer:
      "Absolutely. Once the project is completed, you receive the complete source code and project assets according to our agreement.",
  },
  {
    question: "Can AI and automation be added later?",
    answer:
      "Yes. Every solution is designed to be scalable, making it easier to integrate AI features, CRM automation, and third-party services in the future.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. I offer post-launch assistance, optimization, bug fixes, and guidance to ensure your solution continues to perform effectively.",
  },
];

export default function FAQ() {
  return (
    <section className="relative bg-background py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/12 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-[160px]" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-border bg-secondary px-5 py-2 text-sm font-medium text-accent">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-bold text-foreground">
            Common Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A few questions clients often ask before starting a project.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-6 shadow-lg shadow-primary/5 backdrop-blur-xl transition-all duration-300 hover:border-accent/40">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                className="border-border last:border-b-0"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground transition-colors hover:text-accent">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}