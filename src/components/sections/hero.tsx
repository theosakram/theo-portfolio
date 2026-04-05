"use client";

import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { DotPattern } from "../ui/dot-pattern";

// Sharp deceleration — feels physical, not floaty
const EASE = [0.16, 1, 0.3, 1] as const;

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/theosakram",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/theosakram",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/theosakram/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

// Animates each character of a word up from below a clip mask.
// Container hides overflow so chars aren't visible before they arrive.
function WordReveal({
  word,
  baseDelay,
  wordIndex,
}: {
  word: string;
  baseDelay: number;
  wordIndex: number;
}) {
  return (
    <span
      className="overflow-hidden inline-block"
      style={{ verticalAlign: "bottom" }}
    >
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.75,
            delay: baseDelay + wordIndex * 0.08 + i * 0.022,
            ease: EASE,
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Cursor parallax for the dot pattern — very subtle, just enough to feel alive
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 60, damping: 20 });
  const dotX = useTransform(springX, (v) => v * 0.018);
  const dotY = useTransform(springY, (v) => v * 0.018);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      rawX.set(e.clientX - rect.left - rect.width / 2);
      rawY.set(e.clientY - rect.top - rect.height / 2);
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  const words = "Theophany Sakra Muhammad".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background dot pattern — shifts subtly with cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: dotX, y: dotY }}
      >
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "mask-[radial-gradient(ellipse_at_center,white_20%,transparent_80%)]",
          )}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-6">
        {/* Status badge — slides in from the left */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-foreground/80">
            Open to new opportunities
          </span>
        </motion.div>

        {/* Name — character-by-character reveal, word by word */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-none flex flex-wrap justify-center gap-x-[0.22em]">
          {words.map((word, wi) => (
            <WordReveal key={word} word={word} baseDelay={0.18} wordIndex={wi} />
          ))}
        </h1>

        {/* Role line — clip-path wipe left to right */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, delay: 0.68, ease: EASE }}
            className="text-xl sm:text-2xl text-muted-foreground font-light"
          >
            Senior FE who builds things people actually use.
          </motion.div>
        </div>

        {/* Bio — intentional plain fade-up, not BlurFade */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.88, ease: EASE }}
          className="text-muted-foreground text-base max-w-md leading-relaxed"
        >
          5+ years across{" "}
          <span className="text-foreground font-medium">CROWDE</span>,{" "}
          <span className="text-foreground font-medium">Ruangguru</span>,{" "}
          <span className="text-foreground font-medium">Harmonix</span>, and now{" "}
          <span className="text-foreground font-medium">Gramedia</span> —
          building everything from edtech platforms to e-commerce and warehouse
          ops systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05, ease: EASE }}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View my work
          </button>
          <a
            href="mailto:wyrdhn@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {s.svg}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce"
      >
        <ArrowDown size={16} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
