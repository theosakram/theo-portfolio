"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const EASE = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Career", href: "#career" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto max-w-3xl px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors"
        >
          tsm<span className="text-muted-foreground">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden sm:flex items-center gap-1 mr-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-all duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <AnimatedThemeToggler />
        </div>
      </nav>
    </motion.header>
  );
}
