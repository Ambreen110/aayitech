import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import About from "@/components/sections/about/About";
import TechStack from "@/components/sections/tech-stack/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <Services />
        <About />
        <TechStack />
      </main>
    </>
  );
}