"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — don't render the icon until we know the theme
  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "relative w-8 h-8 flex items-center justify-center rounded-md",
        "text-muted-foreground hover:text-foreground transition-colors duration-150",
        className,
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {mounted && (
          isDark ? (
            <motion.span
              key="sun"
              initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.14, ease: "easeOut" }}
              className="absolute"
            >
              <Sun size={15} strokeWidth={1.5} />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ rotate: 45, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -45, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.14, ease: "easeOut" }}
              className="absolute"
            >
              <Moon size={15} strokeWidth={1.5} />
            </motion.span>
          )
        )}
      </AnimatePresence>
    </button>
  );
}
