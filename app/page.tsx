import Hero from "@/components/sections/hero/Hero";
import { CTA } from "@/components/sections/cta";
import Contact from "@/components/sections/contact/Contact";
import HomeProjects from "@/components/sections/home-projects/HomeProjects";
import HomeServices from "@/components/sections/HomeServices/HomeServices";
import HomeTechStack from "@/components/sections/HomeTechStack/HomeTechStack";
import HomeApproach from "@/components/sections/home-approach/HomeApproach";
import HomeAbout from "@/components/sections/home-about/HomeAbout";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <HomeServices />
      <HomeAbout />
      <HomeTechStack />
      <HomeProjects />
      <HomeApproach />
      <CTA />
      <Contact />
    </main>
  );
}