"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React", "Next.js", "TypeScript", "JavaScript",
      "Vue", "Tailwind CSS", "shadcn/ui", "Chakra UI",
    ],
  },
  {
    category: "Backend & Infra",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS S3"],
  },
  {
    category: "Tooling",
    skills: [
      "Git", "GitHub", "GitLab", "Figma",
      "Vite", "Webpack", "Bun", "Jira", "Confluence",
    ],
  },
  {
    category: "AI & Emerging",
    skills: [
      "OpenAI SDK", "Anthropic SDK", "OpenRouter SDK",
      "LLM Integration", "Prompt Engineering", "Streaming APIs",
    ],
  },
];

const categoryColors: Record<string, string> = {
  Frontend:
    "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900/50",
  "Backend & Infra":
    "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/50",
  Tooling:
    "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/50",
  "AI & Emerging":
    "bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-900/50",
};

const categoryDot: Record<string, string> = {
  Frontend: "bg-indigo-400",
  "Backend & Infra": "bg-emerald-400",
  Tooling: "bg-amber-400",
  "AI & Emerging": "bg-violet-400",
};

const stats = [
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 4, suffix: "+", label: "Companies shipped at" },
  { value: 14, suffix: "", label: "Apps launched" },
];

function useCountUp(target: number, inView: boolean, duration = 1.4) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  inView,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
  delay: number;
}) {
  const count = useCountUp(value, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="rounded-xl border border-border bg-card p-4 text-center"
    >
      <div className="text-2xl font-semibold tracking-tight text-foreground">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
}

export function Skills() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="px-6 py-24 max-w-3xl mx-auto">
      {/* Heading */}
      <div ref={headingRef} className="mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3"
        >
          Toolkit
        </motion.p>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={headingInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="text-3xl font-semibold tracking-tight"
          >
            What I work with
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="text-muted-foreground mt-3 max-w-md"
        >
          5 years of picking the right tools — frontend-first, but comfortable
          across the full stack.
        </motion.p>
      </div>

      {/* Skill cards */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2 h-2 rounded-full ${categoryDot[group.category]}`} />
              <span className="text-sm font-medium text-foreground">
                {group.category}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={gridInView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.08 + si * 0.03,
                  }}
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[group.category]}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Count-up stats */}
      <div ref={statsRef} className="mt-8 grid grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            inView={statsInView}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
