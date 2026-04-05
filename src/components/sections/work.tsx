"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const ruangguru = [
  {
    name: "Brain Academy Live",
    url: "https://app.brainacademy.id/live",
    description:
      "Real-time interactive live teaching platform for K-12 students. Built the live class player UI, real-time quiz engine, and student interaction layer.",
    tags: ["Next.js", "TypeScript", "WebSocket", "Real-time", "Chakra UI"],
  },
  {
    name: "Ruangguru Kampus",
    url: "https://app.ruangguru.com/kampus",
    description:
      "University prep platform with adaptive learning flows, tryout modules, and progress dashboards serving hundreds of thousands of UTBK aspirants.",
    tags: ["Next.js", "TypeScript", "Chakra UI"],
  },
  {
    name: "Skill Academy Profesi",
    url: "https://profesi.skillacademy.com/",
    description:
      "Career-focused e-learning platform with certification programs, video courses, and skill assessments. Led the redesign and feature build-out of the learner dashboard.",
    tags: ["React", "TypeScript", "Chakra UI"],
  },
  {
    name: "Brain Academy Kelas",
    url: "https://kelas.brainacademy.id/",
    description:
      "Marketing and enrollment landing experience for Brain Academy Online. Dynamic schedule grids, teacher showcases, and subscription flows optimized for conversion.",
    tags: ["Next.js", "TypeScript", "Chakra UI", "SEO"],
  },
];

const gramedia = [
  {
    name: "Gramedia.com",
    url: "https://www.gramedia.com",
    description:
      "One of Indonesia's most visited e-commerce platforms — books, stationery, lifestyle products. Building and maintaining the consumer-facing storefront and its core shopping experience.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

const personal = [
  {
    name: "Codecheck",
    url: "https://codecheckai.vercel.app",
    description:
      "AI-powered code review tool. Paste your code, get structured feedback on bugs, performance, and readability — streamed token by token. Multi-model via OpenRouter, BYOK.",
    tags: ["Next.js", "TypeScript", "OpenRouter", "CodeMirror", "Streaming", "Tailwind"],
  },
];

type Project = { name: string; url: string; description: string; tags: string[] };

function WorkCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col gap-3 rounded-xl border border-border bg-card p-5 h-full overflow-hidden transition-colors duration-200 hover:bg-muted/40"
      >
        {/* Bottom reveal line on hover */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-foreground/20 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />

        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-foreground text-sm leading-tight">
            {project.name}
          </h3>
          <div className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-border text-muted-foreground transition-all duration-200 group-hover:border-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={13} />
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
}

function CompanyGroup({
  company,
  projects,
  badge = "PUBLIC",
}: {
  company: string;
  projects: Project[];
  badge?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <div className="flex items-center gap-3 mb-4 overflow-hidden">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
          className="text-sm font-medium text-foreground"
        >
          {company}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
          className="font-mono text-[10px] tracking-widest text-muted-foreground border border-border rounded-full px-2 py-0.5"
        >
          {badge}
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          className="flex-1 h-px bg-border origin-left"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <WorkCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

export function Work() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="work" className="px-6 py-24 max-w-3xl mx-auto">
      <div ref={headingRef} className="mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3"
        >
          Selected work
        </motion.p>

        {/* Section title — clip-path wipe */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={headingInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="text-3xl font-semibold tracking-tight"
          >
            Products I&apos;ve shipped
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="text-muted-foreground mt-3 max-w-md"
        >
          Public-facing apps across edtech and e-commerce — plus a whole lot of
          internal tooling that never sees a URL.
        </motion.p>
      </div>

      <div className="space-y-10">
        <CompanyGroup company="Ruangguru" projects={ruangguru} />
        <CompanyGroup company="Gramedia" projects={gramedia} />
        <CompanyGroup company="Personal" projects={personal} />

        {/* Internal work callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-9 h-9 rounded-full bg-muted flex items-center justify-center mt-0.5">
              <Lock size={14} className="text-muted-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-foreground">
                  Internal &amp; dashboard work
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground border border-border rounded-full px-2 py-0.5">
                  NOT LINKABLE
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Beyond public apps, I&apos;ve built{" "}
                <span className="text-foreground font-medium">
                  10+ internal tools
                </span>{" "}
                — admin panels, CMS systems, data-rich live dashboards, and a
                full{" "}
                <span className="text-foreground font-medium">
                  warehouse fulfillment system
                </span>{" "}
                covering picking, packing, and shipping ops. Complex real-time
                data, role-based access, the works. Not linkable, but very real.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
