import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import About from "@/components/sections/about/About";
import TechStack from "@/components/sections/tech-stack/TechStack";
import Projects from "@/components/sections/projects/Projects";
import Approach from "@/components/sections/approach/Approach";
import { CTA } from "@/components/sections/cta";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Projects />
      <Approach />
      <CTA />
      <Contact />
    </main>
  );
}