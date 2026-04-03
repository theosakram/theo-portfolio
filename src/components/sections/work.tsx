"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import { useTheme } from "next-themes";
import { BlurFade } from "../ui/blur-fade";
import { BorderBeam } from "../ui/border-beam";
import { MagicCard } from "../ui/magic-card";

const ruangguru = [
  {
    name: "Brain Academy Live",
    url: "https://app.brainacademy.id/live",
    description:
      "Real-time interactive live teaching platform for K-12 students. Built the live class player UI, real-time quiz engine, and student interaction layer.",
    tags: ["Next.js", "TypeScript", "WebSocket", "Real-time", "Chakra UI"],
    highlight: true,
  },
  {
    name: "Ruangguru Kampus",
    url: "https://app.ruangguru.com/kampus",
    description:
      "University prep platform with adaptive learning flows, tryout modules, and progress dashboards serving hundreds of thousands of UTBK aspirants.",
    tags: ["Next.js", "TypeScript", "Chakra UI"],
    highlight: false,
  },
  {
    name: "Skill Academy Profesi",
    url: "https://profesi.skillacademy.com/",
    description:
      "Career-focused e-learning platform with certification programs, video courses, and skill assessments. Led the redesign and feature build-out of the learner dashboard.",
    tags: ["React", "TypeScript", "Chakra UI"],
    highlight: false,
  },
  {
    name: "Brain Academy Kelas",
    url: "https://kelas.brainacademy.id/",
    description:
      "Marketing and enrollment landing experience for Brain Academy Online. Dynamic schedule grids, teacher showcases, and subscription flows optimized for conversion.",
    tags: ["Next.js", "TypeScript", "Chakra UI", "SEO"],
    highlight: false,
  },
];

const gramedia = [
  {
    name: "Gramedia.com",
    url: "https://www.gramedia.com",
    description:
      "One of Indonesia's most visited e-commerce platforms — books, stationery, lifestyle products. Building and maintaining the consumer-facing storefront and its core shopping experience.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    highlight: true,
  },
];

const personal = [
  {
    name: "Codecheck",
    url: "https://codecheckai.vercel.app",
    description:
      "AI-powered code review tool. Paste your code, get structured feedback on bugs, performance, and readability — streamed token by token. Multi-model via OpenRouter, BYOK.",
    tags: [
      "Next.js",
      "TypeScript",
      "OpenRouter",
      "CodeMirror",
      "Streaming",
      "Tailwind",
    ],
    highlight: true,
  },
];

function CompanyGroup({
  company,
  projects,
  isDark,
  badge = "PUBLIC",
}: {
  company: string;
  projects: typeof ruangguru;
  isDark: boolean;
  badge?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm font-medium text-foreground">{company}</span>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground border border-border rounded-full px-2 py-0.5">
          {badge}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <BlurFade key={project.name} inView delay={i * 0.08}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <MagicCard
                className="relative h-full cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
                gradientColor={isDark ? "#1a1a1a" : "#f0f0f0"}
                gradientOpacity={isDark ? 0.9 : 0.6}
              >
                {project.highlight && (
                  <BorderBeam
                    size={120}
                    duration={8}
                    colorFrom="#6366f1"
                    colorTo="#8b5cf6"
                  />
                )}
                <div className="p-5 flex flex-col gap-3 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-foreground text-sm leading-tight">
                      {project.name}
                    </h3>
                    <div className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-border transition-colors text-muted-foreground">
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
                </div>
              </MagicCard>
            </a>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export function Work() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="work" className="px-6 py-24 max-w-3xl mx-auto">
      <BlurFade inView delay={0}>
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
            Selected work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Products I&apos;ve shipped
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            Public-facing apps across edtech and e-commerce — plus a whole lot
            of internal tooling that never sees a URL.
          </p>
        </div>
      </BlurFade>

      <div className="space-y-10">
        {/* Ruangguru group */}
        <BlurFade inView delay={0.05}>
          <CompanyGroup
            company="Ruangguru"
            projects={ruangguru}
            isDark={isDark}
          />
        </BlurFade>

        {/* Gramedia group */}
        <BlurFade inView delay={0.1}>
          <CompanyGroup
            company="Gramedia"
            projects={gramedia}
            isDark={isDark}
          />
        </BlurFade>

        {/* Personal */}
        <BlurFade inView delay={0.12}>
          <CompanyGroup
            company="Personal"
            projects={personal}
            isDark={isDark}
            badge="PUBLIC"
          />
        </BlurFade>

        {/* Internal work callout */}
        <BlurFade inView delay={0.15}>
          <div className="relative rounded-xl border border-border bg-card overflow-hidden p-6">
            <BorderBeam
              size={150}
              duration={12}
              colorFrom="#f59e0b"
              colorTo="#ef4444"
            />
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-9 h-9 rounded-full bg-muted flex items-center justify-center mt-0.5">
                <Lock
                  size={14}
                  className="text-muted-foreground"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">
                    Internal & dashboard work
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
                  data, role-based access, the works. Not linkable, but very
                  real.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
