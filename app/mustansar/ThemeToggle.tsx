"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import styles from "./mustansar.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return <button className={styles.themeToggle} type="button" onClick={toggleTheme} aria-label={label} title={label}>{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button>;
}
