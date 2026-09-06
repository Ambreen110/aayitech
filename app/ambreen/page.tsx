import type { Metadata } from "next";
import Link from "next/link";
import AmbreenNavbar from "@/components/sections/ambreen/AmbreenNavbar";
import AmbreenHero from "@/components/sections/ambreen/AmbreenHero";
import AmbreenAbout from "@/components/sections/ambreen/AmbreenAbout";
import AmbreenExpertise from "@/components/sections/ambreen/AmbreenExpertise";
import AmbreenExperience from "@/components/sections/ambreen/AmbreenExperience";
import AmbreenProjects from "@/components/sections/ambreen/AmbreenProjects";
import AmbreenTechStack from "@/components/sections/ambreen/AmbreenTechStack";
import AmbreenEducation from "@/components/sections/ambreen/AmbreenEducation";
import AmbreenCTA from "@/components/sections/ambreen/AmbreenCTA";
import PortfolioMotion from "@/components/sections/ambreen/PortfolioMotion";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Ambreen Fatima | CRM, Automation & Systems Developer",
  description: "CRM implementation, workflow automation, web development and technical systems support by Ambreen Fatima. Explore experience, selected work and technical expertise.",
};

export default function AmbreenPage() {
  return (
    <PortfolioMotion>
      <div className={styles.portfolio}>
        <a className={styles.skip} href="#profile-content">Skip to content</a>
        <AmbreenNavbar />
        <main id="profile-content">
          <AmbreenHero />
          <AmbreenAbout />
          <AmbreenExpertise />
          <AmbreenExperience />
          <AmbreenProjects />
          <AmbreenTechStack />
          <AmbreenEducation />
          <AmbreenCTA />
        </main>
        <footer className={styles.footer}><span>© {new Date().getFullYear()} Ambreen Fatima</span><Link href="/">AAYI Tech ↗</Link><a href="#profile-content">Back to top ↑</a></footer>
      </div>
    </PortfolioMotion>
  );
}
