"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  faqs: FAQ[];
}

export default function ServiceFAQ({
  title,
  faqs,
}: ServiceFAQProps) {

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <motion.div
  key={faq.question}
  className={`rounded-3xl border bg-card backdrop-blur-xl transition-all duration-300 ${
    open === index
      ? "border-accent/40"
      : "border-border hover:border-accent/30"
  }`}
>
  <button
    onClick={() => setOpen(open === index ? null : index)}
    className="flex w-full items-center justify-between p-7 text-left"
  >
    <span className="text-lg font-semibold text-foreground">
      {faq.question}
    </span>

    <ChevronDown
      className={`text-accent transition-transform duration-300 ${
        open === index ? "rotate-180" : ""
      }`}
    />
  </button>

  <AnimatePresence>
    {open === index && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: "auto",
          opacity: 1,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-7 pb-7 leading-7 text-muted-foreground">
          {faq.answer}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}