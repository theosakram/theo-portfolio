"use client";

import { MapPin, Code2, Zap } from "lucide-react";
import { BlurFade } from "../ui/blur-fade";

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
  return (
    <section id="about" className="px-6 py-24 max-w-3xl mx-auto">
      <BlurFade inView delay={0}>
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            The human behind the code
          </h2>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 items-start">
        {/* Bio */}
        <BlurFade inView delay={0.1} className="sm:col-span-3">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
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
          </div>
        </BlurFade>

        {/* Info cards */}
        <BlurFade inView delay={0.2} className="sm:col-span-2">
          <div className="space-y-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <h.icon
                    size={14}
                    className="text-muted-foreground"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{h.label}</p>
                  <p className="text-sm font-medium text-foreground mt-0.5">
                    {h.value}
                  </p>
                </div>
              </div>
            ))}

            {/* CV download */}
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-border bg-card p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors font-medium"
            >
              Download CV
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
