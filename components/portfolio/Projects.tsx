"use client";

import { ExternalLink, LayoutGrid, Shield } from "lucide-react";
import { FadeIn } from "./FadeIn";

const GITHUB = "https://github.com/ukdgit/";
const LINKEDIN = "https://www.linkedin.com/in/umakant-dwivedi-pm/";

const projects = [
  {
    title: "AI Governance Framework",
    description:
      "Internal framework defining when to use AI vs. rules-based logic, data readiness criteria, and evaluation metrics—improving cross-team alignment on AI investments and contributing to ~50% reduction in manual HR operations.",
    icon: Shield,
    tags: ["AI Governance", "LLM Workflows", "B2B SaaS"],
    href: LINKEDIN,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, Tailwind CSS, and Vercel—fast, accessible, and easy to extend as work evolves.",
    icon: LayoutGrid,
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    href: GITHUB,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-zinc-800/80 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Featured work
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Highlights that pair product judgment with technical execution.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6 transition hover:border-violet-500/35 hover:bg-zinc-900/55">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                      <Icon className="size-5" />
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-violet-400 opacity-90 transition group-hover:opacity-100"
                    >
                      View
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-700/80 bg-zinc-950/50 px-3 py-1 text-xs font-medium text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
