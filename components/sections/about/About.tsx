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
    <section
      id="about"
      className="relative overflow-hidden bg-background py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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

      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <SectionBadge>About Me</SectionBadge>

          <SectionHeading
            title="Building Technology That Solves Real Business Problems"
            subtitle="..."
          />
        </div>

        {/* About Content */}
        <AboutContent />

        {/* Journey Timeline */}
        <div className="mt-24">
          <Timeline />
        </div>

        {/* Experience Stats */}
        <div className="mt-24">
          <Stats />
        </div>
      </Container>
    </section>
  );
}