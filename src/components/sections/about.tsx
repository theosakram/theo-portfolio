"use client";

import { Code2, MapPin, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const highlights = [
  {
    icon: MapPin,
    label: "Based in",
    value: "Purwokerto, Indonesia",
  },
  {
    icon: Code2,
    label: "Currently at",
    value: "Gramedia (Senior Frontend Engineer)",
  },
  {
    icon: Zap,
    label: "Specialty",
    value: "Complex UIs, Data-rich Dashboards, AI integrations",
  },
];

export function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="px-6 py-24 max-w-3xl mx-auto">
      <div ref={headingRef} className="mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3"
        >
          About
        </motion.p>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={headingInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="text-3xl font-semibold tracking-tight"
          >
            The human behind the code
          </motion.h2>
        </div>
      </div>

      <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-5 gap-8 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          className="sm:col-span-3 space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I&apos;m a Senior Frontend Engineer with{" "}
            <span className="text-foreground font-medium">5+ years</span> of
            experience building production-grade web applications — across
            fintech at{" "}
            <span className="text-foreground font-medium">CROWDE</span>,
            edtech at{" "}
            <span className="text-foreground font-medium">Ruangguru</span>, IT
            Consulting at{" "}
            <span className="text-foreground font-medium">Harmonix</span>, and
            now e-commerce &amp; ops at{" "}
            <span className="text-foreground font-medium">Gramedia</span>, one
            of Indonesia&apos;s largest retail platforms.
          </p>
          <p>
            I specialize in building{" "}
            <span className="text-foreground font-medium">
              complex, performant UIs
            </span>{" "}
            — real-time dashboards, live teaching platforms, adaptive learning
            flows — the kind of interfaces where state management, animation
            timing, and perceived performance all matter at once.
          </p>
          <p>
            Beyond the standard stack, I&apos;ve gone deep on{" "}
            <span className="text-foreground font-medium">
              AI integrations
            </span>{" "}
            — working directly with LLM SDKs, optimizing streaming responses,
            and building AI-powered features that feel native rather than
            bolted on.
          </p>
          <p>
            When I&apos;m not pushing pixels, I&apos;m thinking about design
            systems, developer experience, and how to make codebases that
            future-me won&apos;t hate.
          </p>
        </motion.div>

        {/* Info cards */}
        <div className="sm:col-span-2 space-y-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, x: 16 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: EASE }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <h.icon size={14} className="text-muted-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{h.label}</p>
                <p className="text-sm font-medium text-foreground mt-0.5">{h.value}</p>
              </div>
            </motion.div>
          ))}

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="flex items-center justify-center gap-2 w-full rounded-xl border border-border bg-card p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors font-medium"
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}
