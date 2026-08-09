"use client";

import AboutContent from "./AboutContent";
import Timeline from "./Timeline";
import Stats from "./Stats";

import BackgroundGlow from "@/components/shared/BackgroundGlow";
import AnimatedGrid from "@/components/shared/AnimatedGrid";
import BlurCircle from "@/components/shared/BlurCircle";
import FloatingParticles from "@/components/shared/FloatingParticles";
import Container from "@/components/shared/Container";
import SectionBadge from "@/components/shared/SectionBadge";
import SectionHeading from "@/components/shared/SectionHeading";

export default function About() {
  return (
    <section className="relative isolate overflow-hidden py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <BackgroundGlow />
        <AnimatedGrid />

        <BlurCircle
          className="left-[-10rem] top-20"
          color="bg-primary/12"
        />

        <BlurCircle
          className="right-[-8rem] bottom-0"
          color="bg-accent/10"
          duration={10}
        />

        <FloatingParticles />

        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Container>
          {/* Section Header */}
          <div className="mx-auto mb-16 mt-12 max-w-3xl text-center">
            <SectionBadge>About AAYI TECH</SectionBadge>

            <SectionHeading
              title="Building Connected Technology for Modern Businesses"
              subtitle="AAYI TECH combines development, CRM, automation, AI, integrations, and technical infrastructure to create practical digital systems that help businesses operate smarter."
            />
          </div>

          {/* About Content */}
          <AboutContent />

          {/* Journey Timeline */}
          <div className="mt-24">
            <Timeline />
          </div>

          {/* Stats */}
          <div className="mt-24">
            <Stats />
          </div>
        </Container>
      </div>
    </section>
  );
}