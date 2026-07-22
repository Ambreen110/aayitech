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
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Common Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A few questions clients often ask before starting a project.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
        <Accordion className="w-full">
  {faqs.map((faq, index) => (
    <AccordionItem key={index}>
      <AccordionTrigger>
        {faq.question}
      </AccordionTrigger>

      <AccordionContent>
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