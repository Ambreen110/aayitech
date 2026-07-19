"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
       <Link href="/" className="flex items-center gap-3">

  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-black text-black shadow-lg shadow-cyan-500/30">
    A
  </div>

  <div>
    <h3 className="text-lg font-black tracking-wider">
  <span className="text-white">AAYI</span>
  <span className="text-cyan-400">/TECH</span>
</h3>

    <p className="-mt-1 text-[10px] uppercase tracking-[0.3em] text-white/45">
      Systems & AI
    </p>
  </div>

</Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button className="hidden md:flex">
            Get Started
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Menu size={22} />
          </Button>
        </div>
      </div>
    </header>
  );
}