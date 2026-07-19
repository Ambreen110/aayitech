"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/ambreen-f-50070a62",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Ambreen110",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ambreenfatiima/",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="text-2xl font-bold text-white"
            >
              Ambreen<span className="text-cyan-400">.</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-400">
              CRM Specialist, AI Automation Enthusiast, and Full Stack Web
              Developer helping businesses build scalable digital solutions.
            </p>
          </motion.div>

          {/* Center */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-cyan-400"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Ambreen Fatima. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-cyan-400">Next.js</span>,{" "}
            <span className="text-cyan-400">TypeScript</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}