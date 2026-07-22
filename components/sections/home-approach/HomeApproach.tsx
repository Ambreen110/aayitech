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
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BackgroundGlow />
        <AnimatedGrid />

        <BlurCircle
          className="left-[-8rem] top-24"
          color="bg-cyan-500/10"
        />

        <BlurCircle
          className="right-[-8rem] bottom-0"
          color="bg-blue-500/10"
        />

        <FloatingParticles />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <Container>
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <SectionBadge>My Approach</SectionBadge>

          <SectionHeading
            title="A Structured Process For Every Project"
            subtitle="Every successful solution begins with understanding your goals, planning carefully, building efficiently, and continuously improving after launch."
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
          <p className="mx-auto mb-8 max-w-2xl text-zinc-400 leading-8">
            My complete delivery process includes discovery,
            architecture planning, development, AI automation,
            optimization, and long-term support.
          </p>

          <Link
            href="/approach"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-7
              py-3
              font-medium
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500/20
              hover:text-white
            "
          >
            View Complete Process

            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}