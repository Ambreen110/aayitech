"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  MapPin,
  Workflow,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const credentials = [
  {
    icon: BriefcaseBusiness,
    label: "6+ years",
    detail: "Technical experience",
  },
  {
    icon: Workflow,
    label: "CRM + Automation",
    detail: "Business systems focus",
  },
  {
    icon: BadgeCheck,
    label: "End-to-end",
    detail: "Strategy to implementation",
  },
];

export default function HomeProfile() {
  return (
    <section
      id="portfolio"
      aria-labelledby="profile-heading"
      className="relative overflow-hidden border-y border-border/60 bg-card py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-accent/20" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-border bg-secondary shadow-2xl shadow-primary/10">
              <div className="relative aspect-[4/4.7] overflow-hidden">
                <Image
                  src="/ambreen/ambreen-fatima.png"
                  alt="Ambreen Fatima, CRM and automation specialist"
                  fill
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0b1714] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <p className="text-2xl font-bold">Ambreen Fatima</p>
                  <p className="mt-1 text-sm text-white/75">
                    CRM Technical Specialist · Systems Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground shadow-lg sm:right-5">
              <MapPin className="h-4 w-4 text-accent" />
              Pakistan · Working globally
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Meet the specialist behind AAYI Tech
            </p>
            <h2
              id="profile-heading"
              className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Technical work is better when you know who is behind it.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              AAYI Tech is led by Ambreen Fatima, a CRM, automation, and systems
              specialist who turns complex business requirements into practical,
              connected solutions. Clients work directly with the person shaping
              the strategy and delivering the implementation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {credentials.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-background/70 p-4"
                  >
                    <Icon className="h-5 w-5 text-accent" />
                    <p className="mt-3 font-semibold text-foreground">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ambreen"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-background"
              >
                View Ambreen&apos;s portfolio
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://linkedin.com/in/ambreen-f-50070a62"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 font-semibold text-foreground transition-all duration-300 hover:border-accent hover:bg-secondary"
              >
                <FaLinkedin className="h-5 w-5 text-accent" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
