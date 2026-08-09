"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

interface AmbreenMobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/ambreen-f-50070a62",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Ambreen110",
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ambreenfatiima/",
    label: "Instagram",
  },
];

export default function AmbreenMobileMenu({
  open,
  onClose,
}: AmbreenMobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling while menu is open
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] lg:hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="absolute inset-0 flex h-dvh w-full flex-col overflow-y-auto bg-background px-8 py-6"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-border pb-6">
              <Link
                href="/ambreen"
                onClick={onClose}
                className="flex flex-col leading-none"
              >
                <span className="text-lg font-bold tracking-wide text-foreground">
                  AMBREEN
                </span>

                <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  CRM • AI • DEVELOPMENT
                </span>
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col justify-center gap-5 py-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.08 + index * 0.04,
                    duration: 0.3,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block text-2xl font-semibold text-foreground transition-colors duration-300 hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom */}
            <div className="shrink-0 border-t border-border pt-6">
              {/* CTA */}
              <Link
                href="#contact"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-background"
              >
                Let&apos;s Talk
              </Link>

              {/* Socials */}
              <div className="mt-6 flex justify-center gap-4 pb-2">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}