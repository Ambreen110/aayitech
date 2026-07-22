"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Technologies", href: "/technologies" },
  { name: "Projects", href: "/projects" },
  { name: "Approach", href: "/approach" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
<Link
  href="/"
  className="flex items-center gap-3 group"
>
  {/* Logo */}
  <div
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-xl
      bg-gradient-to-br
      from-cyan-400
      via-sky-500
      to-blue-700
      shadow-lg
      shadow-cyan-500/20
      transition-all
      duration-300
      group-hover:scale-105
    "
  >
    <span className="text-xl font-black text-white">
      A
    </span>
  </div>

  <div className="leading-none">
    <h2 className="text-[20px] font-extrabold tracking-tight">
      <span className="text-white">AAYI</span>
      <span className="text-cyan-400">/TECH</span>
    </h2>

    <p className="mt-1 text-[9px] uppercase tracking-[0.35em] text-white/50">
      SYSTEMS & AI
    </p>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 lg:flex"
            >
              Get Started
            </Link>

           <Button
  variant="ghost"
  size="icon"
  onClick={() => setMobileOpen(true)}
  aria-label="Open menu"
  className="
    lg:hidden
    border
    border-cyan-500/20
    bg-cyan-500/10
    text-cyan-300
    backdrop-blur-md
    transition-all
    duration-300
    hover:border-cyan-400
    hover:bg-cyan-500/20
    hover:text-white
    hover:shadow-lg
    hover:shadow-cyan-500/20
  "
>
  <Menu className="h-6 w-6" strokeWidth={2.7} />
</Button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}