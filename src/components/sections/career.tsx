"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const timeline = [
  {
    company: "Gramedia",
    role: "Senior Frontend Engineer",
    period: "Dec 2025 - Present",
    current: true,
    description:
      "Building gramedia.com — one of Indonesia's most visited e-commerce sites — alongside two internal dashboards and a fulfillment system covering warehouse ops: picking, packing, and shipping.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    company: "Harmonix",
    role: "Senior Frontend Engineer",
    period: "Jul 2024 - Dec 2025",
    current: false,
    description:
      "Led frontend architecture and owned the full project lifecycle. Designed and built an internal UI component library, drove technical discussions, and collaborated directly with backend engineers.",
    tags: ["Next.js", "TypeScript", "Chakra UI"],
  },
  {
    company: "Ruangguru",
    role: "Frontend Engineer",
    period: "Aug 2021 - Jul 2024",
    current: false,
    description:
      "Launched 6 high-performance apps across 3 international markets. Migrated 13 legacy ReasonML features to Next.js TypeScript, contributed to the internal UI library, and mentored 4 junior developers.",
    tags: ["Next.js", "TypeScript", "ReasonML", "Chakra UI"],
  },
  {
    company: "CROWDE",
    role: "Junior Frontend Engineer",
    period: "Nov 2020 - Aug 2021",
    current: false,
    description:
      "Migrated a legacy class-based JavaScript React codebase to modern functional TypeScript. Built and launched a comprehensive internal Admin Panel CMS from scratch.",
    tags: ["React", "TypeScript", "CMS"],
  },
];

export function Career() {
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });

  return (
    <section id="career" className="px-6 py-24 max-w-3xl mx-auto">
      {/* Heading */}
      <div ref={headingRef} className="mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3"
        >
          Experience
        </motion.p>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={headingInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="text-3xl font-semibold tracking-tight"
          >
            Where I&apos;ve worked
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="text-muted-foreground mt-3 max-w-md"
        >
          5+ years across startups, edtech, and one of Indonesia&apos;s biggest
          retail platforms.
        </motion.p>
      </div>

      <div className="relative" ref={timelineRef}>
        {/* Vertical line — draws itself downward when timeline enters view */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={timelineInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
          className="absolute left-1.75 top-2 bottom-2 w-px bg-border origin-top"
        />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -18 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.2 + i * 0.12,
                ease: EASE,
              }}
              className="relative pl-8"
            >
              {/* Dot */}
              <div
                className={cn(
                  "absolute left-0 top-1.5 w-3.75 h-3.75 rounded-full border-2 transition-colors",
                  item.current
                    ? "bg-foreground border-foreground"
                    : "bg-background border-border",
                )}
              />

              {/* Ping on current role */}
              {item.current && (
                <span className="absolute left-0 top-1.5 w-3.75 h-3.75 rounded-full bg-foreground opacity-30 animate-ping" />
              )}

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-medium text-foreground leading-tight">
                    {item.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {item.current && (
                    <span className="inline-flex items-center rounded-full bg-foreground/10 border border-border px-2.5 py-0.5 text-xs font-medium text-foreground">
                      Current
                    </span>
                  )}
                  <span className="text-xs font-mono text-muted-foreground">
                    {item.period}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
