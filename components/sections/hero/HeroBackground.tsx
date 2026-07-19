"use client";

import AuroraBackground from "./background/AuroraBackground";
import FloatingParticles from "./background/FloatingParticles";
import MouseGlow from "./background/MouseGlow";

export default function HeroBackground() {
  return (
    <>
      <AuroraBackground />

      <FloatingParticles />

      <MouseGlow />
    </>
  );
}