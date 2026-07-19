"use client";

import Container from "@/components/shared/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[115vh] overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <HeroBackground />

      {/* Hero Content */}
      <Container className="relative z-10 flex min-h-[115vh] flex-col items-center justify-center py-24">
        {/* Heading + CTA + Stats */}
        <HeroContent />

        {/* Workflow / System Visualization */}
        <HeroVisual />
      </Container>

      {/* Scroll Down */}
      <ScrollIndicator />
    </section>
  );
}