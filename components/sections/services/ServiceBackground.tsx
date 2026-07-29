"use client";

import BackgroundGlow from "@/components/shared/BackgroundGlow";
import AnimatedGrid from "@/components/shared/AnimatedGrid";
import BlurCircle from "@/components/shared/BlurCircle";
import FloatingParticles from "@/components/shared/FloatingParticles";

export default function ServiceBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Base Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Global Glow */}
      <BackgroundGlow />

      {/* Animated Grid */}
      <AnimatedGrid />

      {/* Left Blur */}
      <BlurCircle
        className="left-[-10rem] top-20 h-[28rem] w-[28rem]"
      />

      {/* Right Blur */}
      <BlurCircle
        className="right-[-10rem] bottom-10 h-[24rem] w-[24rem]"
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

      {/* Radial Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,154,61,0.08),transparent_70%)]" />
    </div>
  );
}