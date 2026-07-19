"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Briefcase,
  Code2,
  Database,
  Network,
  Workflow,
} from "lucide-react";

import ServiceBackground from "./ServiceBackground";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Full Stack Development",
    description:
      "Modern, scalable web applications using Next.js, React, Node.js, NestJS, and the MERN stack.",
    icon: Code2,
  },
  {
    title: "CRM Implementation",
    description:
      "Setup, customize, and optimize HubSpot, GoHighLevel, Zoho CRM, Brevo, and Kit for business growth.",
    icon: Briefcase,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive processes using AI, APIs, Zapier, Make, and custom workflow solutions.",
    icon: Workflow,
  },
  {
    title: "API Development",
    description:
      "Develop secure REST APIs and integrate third-party services with authentication and automation.",
    icon: Network,
  },
  {
    title: "AI Business Solutions",
    description:
      "Build AI assistants, chatbots, intelligent workflows, and productivity tools tailored to your business.",
    icon: Bot,
  },
  {
    title: "Database & Backend",
    description:
      "Design reliable backend systems with PostgreSQL, MongoDB, MySQL, and scalable server architectures.",
    icon: Database,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-28"
    >
      <ServiceBackground />

      <div className="container relative z-10 mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex justify-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Services
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Solutions That Drive
            <span className="text-cyan-400"> Growth</span>
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            I help businesses build scalable digital products, automate
            workflows, integrate CRMs, and develop intelligent systems that
            improve efficiency and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}