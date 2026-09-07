import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download, Mail, MapPin, ShieldCheck } from "lucide-react";
import styles from "./mustansar.module.css";

export const metadata: Metadata = {
  title: "Syed Mustansar Hussain Shah | Network & Infrastructure Specialist",
  description: "Oman-based network and infrastructure specialist with 20 years of experience in secure enterprise networks, firewalls, SD-WAN, VPNs, wireless and multi-site operations.",
};

export default function MustansarPage() {
  return (
    <div className={styles.site} id="top">
      <a className={styles.skip} href="#profile">Skip to profile</a>
      <header className={styles.header}>
        <Link className={styles.brand} href="/mustansar" aria-label="Mustansar Shah home">
          <span className={styles.mark}>MS</span>
          <span>Mustansar Shah<small>Network & Infrastructure</small></span>
        </Link>
        <nav aria-label="Portfolio navigation">
          <a href="#profile">Profile</a>
          <a href="#capabilities">Capabilities</a>
          <Link href="/mustansar/experience">Experience</Link>
          <Link href="/mustansar/credentials">Credentials</Link>
        </nav>
        <a className={styles.headerCta} href="mailto:smustansarh@gmail.com">Contact <ArrowUpRight size={15} /></a>
      </header>

      <main id="profile">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}><span /> Network & Infrastructure Specialist · Oman</p>
            <h1>Secure networks.<br />Built to stay <em>online.</em></h1>
            <p className={styles.lead}>I design, secure and operate enterprise infrastructure across firewalls, switching, SD-WAN, VPNs and wireless networks.</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="mailto:smustansarh@gmail.com">Discuss an opportunity <ArrowUpRight size={18} /></a>
              <a className={styles.secondary} href="/mustansar/Mustansar-Shah-CV.pdf" download>Download CV <Download size={17} /></a>
            </div>
            <div className={styles.meta}><span><MapPin size={15} /> Muscat, Oman</span><span><ShieldCheck size={15} /> 20 years in network operations</span></div>
          </div>

          <aside className={styles.identityCard} aria-label="Professional profile">
            <div className={styles.signal}><span>Available for senior network roles</span><i /></div>
            <div className={styles.portraitWrap}>
              <Image src="/mustansar/mustansar-shah.jpg" alt="Syed Mustansar Hussain Shah" width={260} height={320} priority />
              <span className={styles.verticalLabel}>MUSCAT · OMAN</span>
            </div>
            <div className={styles.identityCopy}><p>Syed Mustansar<br />Hussain Shah</p><span>Enterprise networking · Cybersecurity</span></div>
          </aside>

          <a className={styles.scroll} href="#capabilities"><span>Explore expertise</span><ArrowDownRight size={20} /></a>
        </section>

        <section className={styles.proofStrip} aria-label="Career highlights">
          <div><strong>20</strong><span>years across enterprise<br />networks & infrastructure</span></div>
          <div><strong>400</strong><span>sites supported in a<br />nationwide network</span></div>
          <div><strong>4</strong><span>countries across a<br />regional career</span></div>
          <div><strong>24/7</strong><span>resilient operations<br />mindset</span></div>
        </section>

        <section className={styles.previewSection} id="capabilities">
          <p className={styles.kicker}><span /> Core capabilities</p>
          <div><h2>Infrastructure that performs<br />when it matters.</h2><p>Hands-on delivery across Fortinet, Cisco, Juniper, Aruba and Ubiquiti environments—from architecture and rollout to monitoring, hardening and incident resolution.</p></div>
        </section>
      </main>
    </div>
  );
}
