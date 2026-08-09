"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
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
  const [darkMode, setDarkMode] = useState(false);

 useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  // If user has manually selected a theme, use that
  if (savedTheme === "dark" || savedTheme === "light") {
    const isDark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);

    return;
  }

  // Otherwise, follow the device/browser theme
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applyDeviceTheme = () => {
    const isDark = mediaQuery.matches;

    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  };

  // Apply initially
  applyDeviceTheme();

  // Update if device theme changes while site is open
  mediaQuery.addEventListener("change", applyDeviceTheme);

  return () => {
    mediaQuery.removeEventListener("change", applyDeviceTheme);
  };
}, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");

    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="AAYI TECH"
              width={42}
              height={42}
              className="h-10 w-10 object-contain"
              priority
            />

            {/* Brand Text */}
            <div>
              <p className="text-lg font-bold tracking-tight text-foreground">
                AAYI<span className="text-accent">TECH</span>
              </p>

              <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                CRM • AI • DEVELOPMENT
              </p>
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

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              className="border border-border bg-secondary text-foreground transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-lg"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Get Started */}
            <Link
              href="/contact"
              className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-lg lg:flex"
            >
              Get Started
            </Link>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="border border-border bg-secondary text-foreground transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-lg lg:hidden"
            >
              <Menu className="h-5 w-5" />
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