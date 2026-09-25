import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { capabilities, credentials, experience, platforms, profile } from "@/data/mustansar";
import ThemeToggle from "./ThemeToggle";
import styles from "./mustansar.module.css";

export const metadata: Metadata = {
  title: "Syed Mustansar Hussain Shah | Network & Infrastructure Specialist",
  description: "Oman-based network and infrastructure specialist with 20 years of experience in enterprise networks, cybersecurity, SD-WAN, VPNs, wireless and multi-site operations.",
};

export default function MustansarPage() {
  return <div className={styles.site} id="top">
    <a className={styles.skip} href="#profile">Skip to content</a>
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="AAYI Tech home"><span className={styles.logoMark}><Image src="/logo1.png" alt="" width={42} height={42} /></span><span>AAYI<span className={styles.brandAccent}>TECH</span><small>CRM AUTOMATION · NEXT.JS</small></span></Link>
      <nav aria-label="Mustansar portfolio navigation"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a><a href="#contact">Contact</a></nav>
      <ThemeToggle />
    </header>

    <main id="profile">
      <section className={styles.hero}>
        <div className={styles.heroCopy}><p className={styles.kicker}><span /> Network & Infrastructure Specialist · Oman</p><h1>Secure networks.<br />Built to stay <em>online.</em></h1><p className={styles.lead}>I design, secure and operate enterprise infrastructure across firewalls, switching, SD-WAN, VPNs and wireless networks.</p><div className={styles.actions}><a className={styles.primary} href={`mailto:${profile.email}`}>Discuss an opportunity <ArrowUpRight size={18} /></a><a className={styles.secondary} href="/mustansar/Mustansar-Shah-CV.pdf" download>Download CV <Download size={17} /></a></div><div className={styles.meta}><span><MapPin size={15} /> {profile.location}</span><span><ShieldCheck size={15} /> 20 years in network operations</span></div></div>
        <aside className={styles.identityCard} aria-label="Professional profile"><div className={styles.signal}><span>Network · Security · Infrastructure</span><i /></div><div className={styles.portraitWrap}><Image src="/mustansar/mustansar-shah.jpg" alt={profile.name} width={640} height={640} priority /><span className={styles.verticalLabel}>MUSCAT · OMAN</span></div><div className={styles.identityCopy}><p>Syed Mustansar<br />Hussain Shah</p><span>Enterprise networking · Cybersecurity</span></div></aside>
        <a className={styles.scroll} href="#about"><span>Explore profile</span><ArrowDownRight size={20} /></a>
      </section>

      <section className={styles.proofStrip} aria-label="Career highlights"><div><strong>20</strong><span>years across enterprise<br />networks & infrastructure</span></div><div><strong>400</strong><span>sites supported in a<br />nationwide network</span></div><div><strong>3</strong><span>countries across a<br />regional career</span></div><div><strong>6</strong><span>successive technical<br />career chapters</span></div></section>

      <section className={styles.section} id="about"><div className={styles.sectionHead}><p className={styles.kicker}><span /> 01 · About</p><div><h2>Calm control of<br />complex infrastructure.</h2><div className={styles.aboutCopy}><p>Mustansar is an experienced network and infrastructure professional based in Muscat, with a career spanning enterprise technology, government networks and field telecommunications across Oman, the UAE and Pakistan.</p><p>His work joins practical engineering with operational discipline: resilient site connectivity, secure firewall policy, clean network segmentation, proactive monitoring and responsive support for the systems people rely on every day.</p></div></div></div><div className={styles.principles}><article><span>01</span><h3>Design for resilience</h3><p>Redundancy, failover and secure paths are considered from the start.</p></article><article><span>02</span><h3>Operate with visibility</h3><p>Monitoring and disciplined troubleshooting turn network signals into action.</p></article><article><span>03</span><h3>Secure every layer</h3><p>Policies, segmentation and access controls protect the whole operating environment.</p></article></div></section>

      <section className={styles.sectionAlt} id="expertise"><div className={styles.sectionHead}><p className={styles.kicker}><span /> 02 · Expertise</p><div><h2>Infrastructure that performs<br />when it matters.</h2><p className={styles.sectionIntro}>Hands-on delivery from architecture and rollout to monitoring, hardening and incident resolution.</p></div></div><div className={styles.capabilityGrid}>{capabilities.map(item => <article className={styles.capabilityCard} key={item.code}><div><span>{item.code}</span><ArrowUpRight size={18} /></div><h3>{item.title}</h3><p>{item.description}</p><ul>{item.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></article>)}</div></section>

      <section className={styles.darkSection}><div className={styles.sectionHead}><p className={styles.kicker}><span /> Operating range</p><div><h2>From branch edge<br />to core network.</h2><p className={styles.sectionIntro}>Experience across the platforms that keep distributed teams secure, connected and productive.</p></div></div><div className={styles.platformCloud}>{platforms.map((platform, index) => <span key={platform}><b>{String(index + 1).padStart(2, "0")}</b>{platform}</span>)}</div></section>

      <section className={styles.section} id="experience"><div className={styles.sectionHead}><p className={styles.kicker}><span /> 03 · Experience</p><div><h2>Two decades of<br />network responsibility.</h2><p className={styles.sectionIntro}>A progression from hands-on telecom and core-network delivery to senior ownership of modern, multi-vendor infrastructure.</p></div></div><div className={styles.timeline}>{experience.map((job, index) => <article className={styles.job} key={`${job.company}-${job.period}`}><div className={styles.jobIndex}><span>{String(index + 1).padStart(2, "0")}</span><i /></div><div className={styles.jobMeta}><p>{job.period}</p><span>{job.location}</span></div><div className={styles.jobContent}><h3>{job.role}</h3><h4>{job.company}</h4><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>

      <section className={styles.education}><p className={styles.kicker}><span /> 04 · Education</p><div><p>2002 — 2006</p><h2>Bachelor of Engineering<br />in Information Technology</h2><span>Computer Systems Networking & Telecommunications</span><strong>University of Engineering and Technology, Taxila · Pakistan</strong></div></section>

      <section className={styles.sectionAlt} id="credentials"><div className={styles.sectionHead}><p className={styles.kicker}><span /> 05 · Credentials</p><div><h2>Verified knowledge across<br />the network stack.</h2><p className={styles.sectionIntro}>Fortinet, Cisco, Juniper and Microsoft credentials supporting a career built in production environments.</p></div></div><div className={styles.credentialGrid}>{credentials.map((cert, index) => <article className={styles.credentialCard} key={cert.title}><a href={cert.image} target="_blank" rel="noreferrer" aria-label={`View ${cert.title} certificate`}><div className={styles.certImage}><Image src={cert.image} alt={`${cert.title} certificate`} width={800} height={581} sizes="(max-width: 700px) 100vw, 33vw" /></div><div className={styles.certCopy}><p><span>{cert.issuer}</span><b>{String(index + 1).padStart(2, "0")}</b></p><h3>{cert.title}</h3><small>{cert.date} · {cert.note}</small><span className={styles.viewCert}>View credential <ArrowUpRight size={14} /></span></div></a></article>)}</div></section>

      <section className={styles.contact} id="contact"><div><p className={styles.kicker}><span /> 06 · Contact</p><h2>Let’s keep critical<br />systems moving.</h2><p>For senior network, security and infrastructure opportunities, connect directly.</p></div><div className={styles.contactLinks}><a href={`mailto:${profile.email}`}><Mail size={19} /><span><small>Email</small>{profile.email}</span><ArrowUpRight size={18} /></a><a href={profile.phoneHref}><Phone size={19} /><span><small>Phone</small>{profile.phone}</span><ArrowUpRight size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={19} /><span><small>Professional profile</small>LinkedIn</span><ArrowUpRight size={18} /></a></div></section>
    </main>
    <footer className={styles.footer}><span>© {new Date().getFullYear()} Syed Mustansar Hussain Shah</span><Link href="/">AAYI Tech ↗</Link><a href="#top">Back to top ↑</a></footer>
  </div>;
}
