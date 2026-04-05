"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const GitlabIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const links = [
  {
    label: "Email",
    value: "wyrdhn@gmail.com",
    href: "mailto:wyrdhn@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/theosakram",
    href: "https://www.linkedin.com/in/theosakram/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "theosakram",
    href: "https://github.com/theosakram",
    icon: GithubIcon,
  },
  {
    label: "GitLab",
    value: "theosakram",
    href: "https://gitlab.com/theosakram",
    icon: GitlabIcon,
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="px-6 py-24 max-w-3xl mx-auto">
      <div ref={ref} className="mb-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4"
        >
          Contact
        </motion.p>

        {/* Heading — clip-path wipe */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Let&apos;s build something great
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
          className="text-muted-foreground mt-3 max-w-sm mx-auto"
        >
          Open to senior frontend roles, contract work, or just a good
          conversation about tech.
        </motion.p>

        {/* Email as the primary CTA — large, hover underline + arrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="mt-8"
        >
          <a
            href="mailto:wyrdhn@gmail.com"
            className="group inline-flex items-center gap-2 text-xl sm:text-2xl font-medium text-foreground relative"
          >
            wyrdhn@gmail.com
            <ArrowUpRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            <span className="absolute bottom-0 left-0 h-px w-full bg-foreground origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </motion.div>
      </div>

      {/* Links grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 hover:bg-muted transition-colors"
          >
            <link.icon
              size={18}
              strokeWidth={1.5}
              className="text-muted-foreground group-hover:text-foreground transition-colors"
            />
            <div className="text-center">
              <p className="text-xs font-medium text-foreground">{link.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5 font-mono truncate max-w-25">
                {link.value}
              </p>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
