"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionBadge from "@/components/shared/SectionBadge";
import SectionHeading from "@/components/shared/SectionHeading";

import BackgroundGlow from "@/components/shared/BackgroundGlow";
import AnimatedGrid from "@/components/shared/AnimatedGrid";
import BlurCircle from "@/components/shared/BlurCircle";
import FloatingParticles from "@/components/shared/FloatingParticles";

import { approachSteps } from "../approach/approach.data";
import HomeStepCard from "./HomeStepCard";

export default function HomeApproach() {
  const featuredSteps = approachSteps.slice(0, 4);

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-background py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BackgroundGlow />
        <AnimatedGrid />

        <BlurCircle
          className="left-[-8rem] top-24"
          color="bg-primary/12"
        />

        <BlurCircle
          className="right-[-8rem] bottom-0"
          color="bg-accent/10"
        />

        <FloatingParticles />

        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <Container>
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionBadge>My Approach</SectionBadge>

          <SectionHeading
            title="From Manual Process to Working Automation"
            subtitle="I start with how leads and customer work move today, design the CRM around that reality, automate the repetitive steps, and verify the system with your team."
          />
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
            >
              <HomeStepCard step={step} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mx-auto mb-8 max-w-2xl leading-8 text-muted-foreground">
            The result is a HubSpot or GoHighLevel system your team can actually
            use, with clear ownership, dependable workflows, useful reporting,
            and documentation for what happens next.
          </p>

          <Link
            href="/approach"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-card
              px-7
              py-3
              font-medium
              text-foreground
              transition-all
              duration-300
              hover:border-accent
              hover:bg-secondary
            "
          >
            View Complete Process

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
