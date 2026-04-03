"use client";

import { BlurFade } from "../ui/blur-fade";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vue",
      "Tailwind CSS",
      "shadcn/ui",
      "Chakra UI",
    ],
  },
  {
    category: "Backend & Infra",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS S3"],
  },
  {
    category: "Tooling",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Figma",
      "Vite",
      "Webpack",
      "Bun",
      "Jira",
      "Confluence",
    ],
  },
  {
    category: "AI & Emerging",
    skills: [
      "OpenAI SDK",
      "Anthropic SDK",
      "OpenRouter SDK",
      "LLM Integration",
      "Prompt Engineering",
      "Streaming APIs",
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

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-3xl mx-auto">
      <BlurFade inView delay={0}>
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
            Toolkit
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            What I work with
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            5 years of picking the right tools — frontend-first, but comfortable
            across the full stack.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => (
          <BlurFade key={group.category} inView delay={i * 0.08}>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`w-2 h-2 rounded-full ${categoryDot[group.category]}`}
                />
                <span className="text-sm font-medium text-foreground">
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[group.category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Fun stats row */}
      <BlurFade inView delay={0.4}>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { value: "5+", label: "Years experience" },
            { value: "4+", label: "Companies shipped at" },
            { value: "14", label: "Apps launched" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <div className="text-2xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
