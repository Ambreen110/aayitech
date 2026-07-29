"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";
import HomeServiceCard from "./HomeServiceCard";

export default function HomeServices() {
  // Show only first 4 services
  const featuredServices = services.slice(0, 4);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-18"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/12 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-accent">
            Services
          </span>

          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Technical Solutions for{" "}
            <span className="text-accent">Modern Businesses</span>
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            From CRM implementation and AI automation to web development and
            technical systems, I build solutions that improve efficiency and
            support business growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredServices.map((service) => (
            <HomeServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.shortTitle}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-secondary"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}