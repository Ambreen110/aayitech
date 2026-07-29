"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
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
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/85 border-border/60 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
<Link
  href="/"
  className="group flex items-center gap-2"
>
  {/* Logo Icon */}
  <div className="shrink-0">
    <Image
      src="/logo.png"
      alt="AAYI TECH"
      width={46}
      height={46}
      priority
      className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Brand Text */}
  <div className="leading-none">
    <h2 className="text-[18px] font-extrabold tracking-tight">
    <span className="text-foreground">AAYI</span>
<span className="text-accent">/TECH</span>
    </h2>

    <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
CRM • AI • DEVELOPMENT    </p>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-accent"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-xl bg-primary text-primary-foreground hover:bg-accent hover:text-background px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg lg:flex"
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
    border-border
bg-secondary
text-foreground
hover:bg-accent
hover:text-background
    backdrop-blur-md
    transition-all
    duration-300
    hover:shadow-lg
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