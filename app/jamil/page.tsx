import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { jamilEducation, jamilExperience, jamilExpertise } from "@/data/jamil";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Syed Jamil Hussain Shah | Senior Accountant",
  description: "Senior accountant based in Ras Al Khaimah, UAE, with experience in bookkeeping, VAT, payroll and financial reporting across the UAE and Pakistan.",
};

const email = "jimiedolphin@gmail.com";
const linkedin = "https://www.linkedin.com/in/syed-jamil-hussain-shah";

export default function JamilPage() {
  return (
    <div className={styles.portfolio} id="top">
      <a className={styles.skip} href="#about">Skip to content</a>
      <header className={styles.header}>
        <a href="#top" className={styles.brand}><span className={styles.monogram}>JS</span><span>JAMIL SHAH<small>ACCOUNTING & FINANCE</small></span></a>
        <nav aria-label="Jamil portfolio navigation" className={styles.nav}>
          <a href="#about">About</a><a href="#expertise">Expertise</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#contact">Contact <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="jamil-heading">
        <div>
          <p className={styles.eyebrow}>SENIOR ACCOUNTANT · UAE & PAKISTAN</p>
          <h1 id="jamil-heading">Syed Jamil<br />Hussain <span>Shah.</span></h1>
          <p className={styles.lead}>Clear accounts.<br />Confident business decisions.</p>
          <p className={styles.intro}>I help growing businesses keep their finances accurate, organized and on schedule — from everyday bookkeeping to payroll, VAT and financial reporting.</p>
          <div className={styles.actions}><a className={styles.primary} href="#contact">Get in touch <ArrowUpRight size={18} /></a><a className={styles.secondary} href="/jamil/Syed_Jamil_Hussain_Shah_CV.docx" download>Download CV <Download size={17} /></a></div>
          <p className={styles.location}><MapPin size={16} /> Ras Al Khaimah, United Arab Emirates</p>
        </div>
        <aside className={styles.profileCard} aria-label="Career overview">
          <div className={styles.cardTop}><span>PROFESSIONAL PROFILE</span><span>01 / JS</span></div>
          <div className={styles.largeMonogram} aria-hidden="true">JS<span>.</span></div>
          <p className={styles.cardTitle}>A steady hand<br />in finance.</p>
          <div className={styles.cardRow}><span>Career since</span><strong>2007</strong></div>
          <div className={styles.cardRow}><span>Experience across</span><strong>UAE & Pakistan</strong></div>
          <div className={styles.cardRow}><span>Current role</span><strong>Senior Accountant</strong></div>
        </aside>
        <a className={styles.explore} href="#experience">Explore my experience <ArrowDown size={16} /></a>
      </section>

      <section className={styles.section} id="about">
        <p className={styles.eyebrow}>01 / ABOUT</p>
        <div className={styles.aboutGrid}><h2>Accuracy in the details.<br /><span>Clarity in the bigger picture.</span></h2><div><p>I am a detail-driven accounting professional with over a decade of experience supporting finance operations for growing companies across the UAE and Pakistan. My work spans full-cycle bookkeeping, VAT compliance, payroll through WPS, and financial reporting.</p><p>I focus on keeping records dependable, meeting reporting schedules, and removing day-to-day roadblocks so accounting can grow smoothly alongside the business.</p><div className={styles.tags}><span>English · Fluent</span><span>Urdu · Native</span></div></div></div>
      </section>

      <section className={styles.section} id="expertise">
        <p className={styles.eyebrow}>02 / EXPERTISE</p><h2>Practical finance expertise.</h2>
        <div className={styles.expertiseGrid}>{jamilExpertise.map((item, i) => <article key={item.title} className={styles.expertiseCard}><span className={styles.number}>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        <div className={styles.tools}><h3>Tools & skills</h3><div className={styles.tags}>{["Tally ERP 9", "Focus RT", "QuickBooks", "Microsoft Excel", "Word", "PowerPoint", "Access", "Touch typing · 70–80 WPM"].map(tool => <span key={tool}>{tool}</span>)}</div></div>
      </section>

      <section className={styles.section} id="experience">
        <p className={styles.eyebrow}>03 / EXPERIENCE</p><h2>A career built on dependable accounting.</h2>
        <div className={styles.timeline}>{jamilExperience.map((job) => <article key={job.company} className={styles.job}><div><p className={styles.period}>{job.period}</p><p className={styles.jobLocation}>{job.location}</p></div><div><h3>{job.role}</h3><p className={styles.company}>{job.company}</p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
      </section>

      <section className={styles.section} id="education">
        <p className={styles.eyebrow}>04 / EDUCATION</p><h2>A foundation in business & technology.</h2>
        <div className={styles.educationGrid}>{jamilEducation.map(item => <article key={item.degree} className={styles.educationCard}><p className={styles.period}>{item.period}</p><h3>{item.degree}</h3><p>{item.school}</p><small>{item.location}</small></article>)}</div>
        <div className={styles.aboutGrid}><div><h3>Recognition</h3><ul className={styles.recognition}><li>Recognized for organizing and maintaining accurate file records.</li><li>Praised for fast learning across varied accounting functions.</li><li>Commended for managing tight reporting schedules.</li></ul></div><div><h3>Beyond the numbers</h3><p>Outside work, I enjoy reading, travelling and sports.</p></div></div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.eyebrow}>05 / CONTACT</p><h2>Let’s talk finance.</h2><p>Get in touch to discuss accounting and finance opportunities.</p>
        <div className={styles.contactLinks}><a href={`mailto:${email}`}><Mail size={20} />{email}<ArrowUpRight size={18} /></a><a href="tel:+971586281466"><Phone size={20} />+971 58 628 1466<ArrowUpRight size={18} /></a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile<ArrowUpRight size={18} /></a></div>
      </section>
      <footer className={styles.footer}><span>© {new Date().getFullYear()} Syed Jamil Hussain Shah</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
