"use client";

import Container from "@/components/shared/Container";
import SectionBadge from "@/components/shared/SectionBadge";
import SectionHeading from "@/components/shared/SectionHeading";
import BackgroundGlow from "@/components/shared/BackgroundGlow";
import AnimatedGrid from "@/components/shared/AnimatedGrid";
import BlurCircle from "@/components/shared/BlurCircle";
import FloatingParticles from "@/components/shared/FloatingParticles";
import { techStack } from "./tech.data";
import TechCategory from "./TechCategory";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BackgroundGlow />
        <AnimatedGrid />

        <BlurCircle
          className="left-[-10rem] top-24"
          color="bg-cyan-500/15"
        />

        <BlurCircle
          className="right-[-8rem] bottom-10"
          color="bg-blue-500/10"
          duration={10}
        />

        <FloatingParticles />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <SectionBadge>Tech Stack</SectionBadge>

          <SectionHeading
            title="Technologies I Work With"
            subtitle="A carefully selected technology stack that enables me to build scalable applications, implement CRM solutions, automate business workflows, and create intelligent systems for modern businesses."
          />
        </div>

        {/* Categories */}
        <div className="space-y-12">
         <div className="space-y-12">
  {techStack.map((category) => (
    <TechCategory
      key={category.category}
      category={category.category}
      technologies={category.technologies}
    />
  ))}
</div>
        </div>
      </Container>
    </section>
  );
}