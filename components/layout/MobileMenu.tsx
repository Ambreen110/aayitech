"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
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

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl md:hidden"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="absolute right-0 top-0 flex h-full w-full flex-col bg-zinc-950 p-8"
          >
            {/* Header */}
            <div className="mb-12 flex items-center justify-between">
              <Link
                href="/"
                onClick={onClose}
                className="text-2xl font-bold text-white"
              >
                Ambreen<span className="text-cyan-400">.</span>
              </Link>

              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 p-2 text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="text-2xl font-semibold text-white transition hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="#contact"
              onClick={onClose}
              className="mt-8 flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Let's Talk
            </Link>

            {/* Social */}
            <div className="mt-10 flex justify-center gap-5">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}