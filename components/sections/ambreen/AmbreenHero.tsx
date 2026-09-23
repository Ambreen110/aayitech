"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, MapPin, Workflow, Code2, Database } from "lucide-react";
import { ambreenProfile } from "@/data/ambreen";
import styles from "@/app/ambreen/portfolio.module.css";

export default function AmbreenHero() {
  return (
    <section className={styles.hero} aria-labelledby="ambreen-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.heroGrid}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <p className={styles.eyebrow}><span /> CRM · AUTOMATION · TECHNICAL SYSTEMS</p>
          <p className={styles.greeting}>Hi, I’m</p>
          <h1 id="ambreen-heading">Ambreen <span>Fatima.</span></h1>
          <h2>CRM Technical Specialist<br /><span>Automation &amp; Systems Developer</span></h2>
          <p className={styles.intro}>{ambreenProfile.intro}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#experience">Explore my experience <ArrowUpRight size={18} /></a>
            <a className={styles.secondary} href="/ambreen/Ambreen_Fatima_CV.pdf" download>Download resume <ArrowDownToLine size={17} /></a>
          </div>
          <div className={styles.socials}><span><MapPin size={15} /> Pakistan</span><a href={ambreenProfile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={ambreenProfile.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={ambreenProfile.links.upwork} target="_blank" rel="noopener noreferrer">Upwork ↗</a></div>
        </motion.div>
        <motion.aside className={styles.portraitPanel} aria-label="Ambreen Fatima professional profile" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .12 }}>
          <div className={styles.portraitTop}><span>THE PERSON BEHIND THE SYSTEMS</span><span>AF / 01</span></div>
          <div className={styles.portraitFrame}>
            <Image src="/ambreen/ambreen-fatima.png" alt="Ambreen Fatima" width={400} height={400} sizes="(max-width: 700px) 240px, 280px" preload className={styles.portrait} />
          </div>
          <div className={styles.portraitCaption}><h3>Thoughtful implementation.<br />Connected systems.</h3><p>CRM, automation &amp; development</p></div>
          <div className={styles.platforms}><span>HubSpot</span><span>Close CRM</span><span>Next.js</span></div>
        </motion.aside>
      </div>
      <div className={styles.focusStrip}>{[[Workflow, "CRM & Automation", "Workflows that connect your business"], [Code2, "Web Development", "Modern, purposeful digital experiences"], [Database, "Data & Infrastructure", "Reliable foundations behind the scenes"]].map(([Icon, title, detail]) => {const FocusIcon = Icon as typeof Workflow; return <div key={title as string}><FocusIcon size={23} strokeWidth={1.5} /><div><h3>{title as string}</h3><p>{detail as string}</p></div></div>;})}</div>
    </section>
  );
}
