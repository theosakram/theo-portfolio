"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const applyTheme = () => {
      const next = !isDark;
      setIsDark(next);
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", next ? "dark" : "light");
    };

    // No view transition for reduced-motion users or unsupported browsers —
    // just toggle instantly so the button never feels broken
    if (prefersReduced || typeof document.startViewTransition !== "function") {
      applyTheme();
      return;
    }

    const { innerWidth: w, innerHeight: h } = window;
    const maxR = Math.hypot(w, h);

    const transition = document.startViewTransition(() => flushSync(applyTheme));
    transition.ready.then(() => {
      // Expand from the top of the viewport — feels like a curtain, not a spotlight
      document.documentElement.animate(
        {
          clipPath: [
            "circle(0px at 50% 0%)",
            `circle(${maxR}px at 50% 0%)`,
          ],
        },
        {
          duration: 400,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "relative w-8 h-8 flex items-center justify-center rounded-md",
        "text-muted-foreground hover:text-foreground transition-colors duration-150",
        className,
      )}
    >
      {/* AnimatePresence handles the icon crossfade.
          Motion's MotionConfig reducedMotion="user" will flatten these
          to instant swaps for users who've opted out of motion. */}
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute"
          >
            <Sun size={15} strokeWidth={1.5} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute"
          >
            <Moon size={15} strokeWidth={1.5} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
