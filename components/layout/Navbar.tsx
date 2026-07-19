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
        <Link href="/" className="group flex items-center gap-2">
          <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2 py-1">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-lg font-black tracking-widest text-transparent">
              AAYI
            </span>
          </div>

          <span className="text-sm font-semibold tracking-[0.3em] text-white/80 group-hover:text-white">
            /TECH
          </span>
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