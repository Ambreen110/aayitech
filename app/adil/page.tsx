import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Code2, Download, Mail, Phone } from "lucide-react";
import { adilExperience, adilExpertise, adilProfile, adilSystems, adilTechnologies } from "@/data/adil";
import ThemeToggle from "./ThemeToggle";
import styles from "./adil.module.css";

export const metadata: Metadata = {
  title: "Syed Adil Ali | Lead Software Engineer",
  description: "Lead software engineer experienced in ASP.NET, C#, APIs, business systems, technical leadership, and Level 3 product support.",
};

export default function AdilPage() {
  return (
    <div className={styles.site} id="top">
      <a className={styles.skip} href="#about">Skip to content</a>

      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="AAYI Tech home">
          <span className={styles.logoMark}><Image src="/logo1.png" alt="" width={42} height={42} preload /></span>
          <span>AAYI<span className={styles.brandAccent}>TECH</span><small>CRM AUTOMATION · NEXT.JS</small></span>
        </Link>
        <nav aria-label="Adil portfolio navigation">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#systems">Systems</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="adil-heading">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}><span /> Lead Software Engineer · Since 2014</p>
            <h1 id="adil-heading">Business software.<br />Built to work <em>in practice.</em></h1>
            <p className={styles.lead}>I build and support web applications, APIs, dashboards, and operational systems that turn complex business processes into reliable software.</p>
            <div className={styles.actions}>
              <a className={styles.primary} href={`mailto:${adilProfile.email}`}>Discuss an opportunity <ArrowUpRight size={18} /></a>
              <a className={styles.secondary} href="/adil/Syed-Adil-Ali-CV.pdf" download>Download CV <Download size={17} /></a>
            </div>
            <div className={styles.heroMeta}><span><Code2 size={16} /> ASP.NET · C# · React · SQL</span><span>Current role · Invenits Technologies</span></div>
          </div>

          <aside className={styles.identityCard} aria-label="Professional profile">
            <div className={styles.cardLabel}><span>SOFTWARE · SYSTEMS · SUPPORT</span><b>01 / AA</b></div>
            <div className={styles.portraitWrap}>
              <Image src="/adil/syed-adil-ali.png" alt="Syed Adil Ali" width={1120} height={1402} sizes="(max-width: 760px) 88vw, 420px" preload />
              <span>LEAD ENGINEER</span>
            </div>
            <div className={styles.identityCopy}><p>Syed Adil Ali</p><span>Web platforms · APIs · Business systems</span></div>
          </aside>

          <a className={styles.explore} href="#about">Explore the portfolio <ArrowDownRight size={19} /></a>
        </section>

        <section className={styles.proof} aria-label="Career highlights">
          <div><strong>10+</strong><span>years building and<br />supporting software</span></div>
          <div><strong>2017</strong><span>leading delivery at<br />Invenits Technologies</span></div>
          <div><strong>6</strong><span>business system<br />categories delivered</span></div>
          <div><strong>L3</strong><span>product support and<br />technical resolution</span></div>
        </section>

        <section className={styles.section} id="about">
          <div className={styles.sectionHead}>
            <p className={styles.kicker}><span /> 01 · About</p>
            <div><h2>Engineering with a clear<br />business purpose.</h2><div className={styles.aboutCopy}><p>Adil is a software engineering professional whose experience spans full-cycle development, production support, API delivery, and the ongoing maintenance of business-critical applications.</p><p>His work is grounded in practical outcomes: dependable transaction systems, clear dashboards, connected mobile experiences, and internal tools that keep operations moving.</p></div></div>
          </div>
          <div className={styles.principles}>
            <article><span>01</span><h3>Build for real workflows</h3><p>Software should fit the people, decisions, and processes it supports.</p></article>
            <article><span>02</span><h3>Own the full lifecycle</h3><p>Design, delivery, debugging, documentation, and support belong together.</p></article>
            <article><span>03</span><h3>Share technical clarity</h3><p>Complex problems become manageable when teams have practical guidance.</p></article>
          </div>
        </section>

        <section className={styles.sectionAlt} id="expertise">
          <div className={styles.sectionHead}><p className={styles.kicker}><span /> 02 · Expertise</p><div><h2>From application logic<br />to operational support.</h2><p className={styles.sectionIntro}>Hands-on engineering across web development, integrations, databases, debugging, and product support.</p></div></div>
          <div className={styles.expertiseGrid}>{adilExpertise.map((item) => <article key={item.code} className={styles.expertiseCard}><div><span>{item.code}</span><ArrowUpRight size={18} /></div><h3>{item.title}</h3><p>{item.description}</p><ul>{item.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></article>)}</div>
        </section>

        <section className={styles.systems} id="systems">
          <div className={styles.sectionHead}><p className={styles.kicker}><span /> 03 · Selected systems</p><div><h2>Software shaped around<br />the way organizations work.</h2><p className={styles.sectionIntro}>A portfolio of operational platforms developed across commerce, logistics, healthcare, and internal administration.</p></div></div>
          <div className={styles.systemGrid}>{adilSystems.map((system) => <article key={system.number}><span>{system.number}</span><div><h3>{system.title}</h3><p>{system.summary}</p></div></article>)}</div>
        </section>

        <section className={styles.section} id="experience">
          <div className={styles.sectionHead}><p className={styles.kicker}><span /> 04 · Experience</p><div><h2>A career built across<br />delivery and support.</h2><p className={styles.sectionIntro}>Progressive responsibility across software engineering, management information systems, and technical leadership.</p></div></div>
          <div className={styles.timeline}>{adilExperience.map((job, index) => <article className={styles.job} key={`${job.company}-${job.period}`}><div className={styles.jobNumber}>{String(index + 1).padStart(2, "0")}</div><div className={styles.jobMeta}><p>{job.period}</p><span>{job.company}</span></div><div className={styles.jobBody}><h3>{job.role}</h3><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
        </section>

        <section className={styles.education} id="education">
          <p className={styles.kicker}><span /> 05 · Education</p>
          <div className={styles.educationGrid}>
            <article><p>2009 - 2014</p><h2>B.S. Computer System Engineering</h2><span>Ghulam Ishaq Khan Institute of Engineering Sciences & Technology</span></article>
            <article><p>2007 - 2009</p><h2>F.Sc. Pre-Engineering</h2><span>Al-Abbas College, Dera Ismail Khan</span></article>
          </div>
          <div className={styles.techCloud}>{adilTechnologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>

        <section className={styles.contact} id="contact">
          <div><p className={styles.kicker}><span /> 06 · Contact</p><h2>Let’s build software<br />that earns its place.</h2><p>For software engineering, technical leadership, and web application opportunities, connect directly.</p></div>
          <div className={styles.contactLinks}>
            <a href={`mailto:${adilProfile.email}`}><Mail size={19} /><span><small>Email</small>{adilProfile.email}</span><ArrowUpRight size={18} /></a>
            <a href={adilProfile.phoneHref}><Phone size={19} /><span><small>Phone</small>{adilProfile.phone}</span><ArrowUpRight size={18} /></a>
            <a href="/adil/Syed-Adil-Ali-CV.pdf" target="_blank" rel="noreferrer"><Download size={19} /><span><small>Professional profile</small>View CV</span><ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}><span>© {new Date().getFullYear()} Syed Adil Ali</span><Link href="/">AAYI Tech ↗</Link><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
