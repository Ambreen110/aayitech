import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  Phone,
  Sprout,
} from "lucide-react";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Shahana Batool | Project Coordinator and Supply Chain Specialist",
  description:
    "Portfolio of Shahana Batool, a project coordinator and supply chain professional experienced in procurement, logistics, administration, and financial analysis.",
};

const skills = [
  "Project coordination",
  "Procurement",
  "Inventory management",
  "Logistics support",
  "Administrative support",
  "Financial analysis",
  "Strategic management",
  "Time management",
  "Problem-solving",
  "Communication",
];

const experience = [
  {
    period: "Jun 2024 - Jun 2026",
    role: "Project Coordinator",
    company: "BeHope",
    location: "Islamabad, Pakistan",
    points: [
      "Coordinated administrative, procurement, and logistics activities for drop-shipping and in-store healthcare operations serving Canada and North America.",
      "Worked across internal teams, vendors, and customers to support timely project delivery and resolve operational issues.",
      "Helped streamline supply chain and administrative workflows through organized communication and follow-up.",
    ],
  },
  {
    period: "Internship",
    role: "Supply Chain Intern",
    company: "Starco Logistics",
    location: "Islamabad, Pakistan",
    points: [
      "Supported operations within an end-to-end logistics company and gained practical exposure to supply chain coordination.",
    ],
  },
];

export default function ShahanaPage() {
  return (
    <div className={styles.portfolio} id="top">
      <a className={styles.skip} href="#about">Skip to content</a>

      <header className={styles.localHeader}>
        <a className={styles.brand} href="#top" aria-label="Shahana Batool home">
          <span>SB</span>
          <strong>SHAHANA BATOOL<small>PROJECT COORDINATION</small></strong>
        </a>
        <nav aria-label="Shahana portfolio navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a className={styles.navContact} href="#contact">Contact <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="shahana-heading">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> PROJECT COORDINATOR · SUPPLY CHAIN</p>
            <h1 id="shahana-heading">Shahana<br /><em>Batool.</em></h1>
            <p className={styles.lead}>Organized execution for projects that move people, products, and priorities forward.</p>
            <p className={styles.intro}>I bring together procurement, logistics, administration, and clear stakeholder coordination to keep work moving from plan to delivery.</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="mailto:shahanabatool149@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
              <a className={styles.secondary} href="/shahana/Shahana_Batool_CV.pdf" download>Download CV <Download size={17} /></a>
            </div>
            <p className={styles.location}><MapPin size={16} /> Rawalpindi, Pakistan</p>
          </div>

          <aside className={styles.profileCard} aria-label="Professional overview">
            <div className={styles.cardTop}><span>PROFESSIONAL PROFILE</span><span>01 / SB</span></div>
            <div className={styles.monogram} aria-hidden="true">SB</div>
            <p className={styles.cardStatement}>Good coordination turns moving parts into steady progress.</p>
            <div className={styles.cardRow}><span>Degree</span><strong>BBA · 3.96 GPA</strong></div>
            <div className={styles.cardRow}><span>Specialization</span><strong>Supply Chain</strong></div>
            <div className={styles.cardRow}><span>Focus</span><strong>Projects & Operations</strong></div>
          </aside>

          <a className={styles.explore} href="#about">Explore my work <ArrowDown size={16} /></a>
        </section>

        <section className={styles.section} id="about">
          <p className={styles.eyebrow}>01 / ABOUT</p>
          <div className={styles.aboutGrid}>
            <h2>Structured thinking.<br /><em>Practical follow-through.</em></h2>
            <div>
              <p>I am a Business Administration graduate specializing in supply chain management, with hands-on experience in project coordination, procurement, logistics, administrative support, and financial analysis.</p>
              <p>I work best where priorities need to be organized, communication needs to stay clear, and teams need dependable support to deliver on time.</p>
              <div className={styles.aboutFacts}>
                <div><BriefcaseBusiness size={20} /><span>Cross-functional coordination</span></div>
                <div><Sprout size={20} /><span>Learning agility and growth mindset</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.skillsSection}`} id="skills">
          <p className={styles.eyebrow}>02 / CAPABILITIES</p>
          <div className={styles.sectionHeading}><h2>Skills for connected operations.</h2><p>Blending analytical thinking with the human coordination needed to keep projects on track.</p></div>
          <div className={styles.skillsGrid}>{skills.map((skill, index) => <div key={skill}><span>{String(index + 1).padStart(2, "0")}</span><strong>{skill}</strong></div>)}</div>
        </section>

        <section className={styles.section} id="experience">
          <p className={styles.eyebrow}>03 / EXPERIENCE</p>
          <h2>Experience built around dependable delivery.</h2>
          <div className={styles.timeline}>{experience.map((item) => (
            <article className={styles.job} key={`${item.company}-${item.role}`}>
              <div><p className={styles.period}>{item.period}</p><p className={styles.jobLocation}>{item.location}</p></div>
              <div><h3>{item.role}</h3><p className={styles.company}>{item.company}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div>
            </article>
          ))}</div>

          <div className={styles.projectGrid}>
            <article><span>ACADEMIC PROJECT</span><h3>Pakistan Stock Exchange Company Analysis</h3><p>Analyzed listed companies using financial information and business performance indicators, with focused work on Fauji Fertilizer and Engro Foods.</p><small>NUML · Feb - Mar 2023</small></article>
            <article><span>ENTREPRENEURSHIP</span><h3>UniRide Shuttle Service</h3><p>Developed an innovative transportation concept focused on improving access to a dependable shuttle service.</p><small>NUML · Oct 2022</small></article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.educationSection}`} id="education">
          <p className={styles.eyebrow}>04 / EDUCATION & RECOGNITION</p>
          <div className={styles.educationGrid}>
            <div>
              <h2>A strong business foundation.</h2>
              <article className={styles.educationCard}><span>2021 - 2025</span><h3>Bachelor of Business Administration</h3><p>National University of Modern Languages · Islamabad</p><strong>GPA 3.96 / 4.00 · Supply Chain Management</strong></article>
              <article className={styles.educationCard}><span>2019</span><h3>FSc Pre-Medical</h3><p>FG Postgraduate College for Women · Wah Cantt</p><strong>86%</strong></article>
            </div>
            <aside className={styles.awardCard}><Award size={28} /><span>KEY ACHIEVEMENT</span><h3>3rd Prize in the SDGs Business Startup Competition</h3><p>Recognized for an oyster-mushroom cultivation concept designed around a controlled environment, supporting sustainable agriculture and food production.</p></aside>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <p className={styles.eyebrow}>05 / CONTACT</p>
          <h2>Let&apos;s move good work forward.</h2>
          <p>Open to project coordination, supply chain, procurement, logistics, and administrative opportunities.</p>
          <div className={styles.contactLinks}>
            <a href="mailto:shahanabatool149@gmail.com"><Mail size={20} /><span>Email<strong>shahanabatool149@gmail.com</strong></span><ArrowUpRight size={18} /></a>
            <a href="tel:+923185126272"><Phone size={20} /><span>Phone<strong>+92 318 512 6272</strong></span><ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}><span>© {new Date().getFullYear()} Shahana Batool</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
