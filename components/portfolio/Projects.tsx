"use client";

import {
  BadgeCheck,
  Brain,
  Code2,
  Database,
  ExternalLink,
  FileText,
  LayoutGrid,
  Rocket,
  Shield,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useMemo, useState } from "react";

const GITHUB = "https://github.com/ukdgit/";
const LINKEDIN = "https://www.linkedin.com/in/umakant-dwivedi-pm/";

type Category =
  | "All"
  | "AI"
  | "Engineering"
  | "Product & Strategy"
  | "GTM & Business";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  timeframe: string;
  description: string;
  metrics: string[];
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  stackIcons: React.ComponentType<{ className?: string }>[];
  href: string;
  ctaLabel?: string;
};

const caseStudies = {
  customReporting:
    "https://drive.google.com/file/d/1AvHZXdKas7TYCa41jI3dLBXNp8Xy8Str/view?usp=sharing",
  assignmentGroups:
    "https://drive.google.com/file/d/10YlqWmX79yI5F3GiDplhk1jf2TiLDcF0/view?usp=sharing",
  onboardingEngagement:
    "https://drive.google.com/file/d/1sJgcJSYD0mey9hyY2TVdqKFGgSBQbogu/view?usp=sharing",
  assessmentHiringInsights:
    "https://drive.google.com/file/d/1gffgBf-CzsGpcJQ0OMysQcCBAX-fX4Ur/view?usp=sharing",
} as const;

const categories: Category[] = [
  "All",
  "AI",
  "Engineering",
  "Product & Strategy",
  "GTM & Business",
];

export function Projects() {
  const [active, setActive] = useState<Category>("All");

  const projects = useMemo<Project[]>(
    () => [
      {
        title: "Custom Reporting (Self‑Serve Warehouse)",
        category: "Product & Strategy",
        timeframe: "Apr 2024 — Feb 2026",
        description:
          "Built a self-service reporting product with a custom data warehouse schema and 5 report types across phased releases—benchmarked to enterprise reporting patterns.",
        metrics: ["48h → near‑instant", "100% CS tickets eliminated", "5 report types"],
        tags: ["Data warehouse", "Star schema", "Reporting UX"],
        icon: Database,
        stackIcons: [Database, Code2, LayoutGrid],
        href: caseStudies.customReporting,
        ctaLabel: "Read case study",
      },
      {
        title: "Assignment Groups (Enterprise RBAC)",
        category: "Engineering",
        timeframe: "Apr 2024 — Feb 2026",
        description:
          "Architected an RBAC abstraction inspired by enterprise role models to separate role definitions from org scope—massively reducing duplication and config effort.",
        metrics: ["40–45 roles → 8", "~90% faster onboarding", "Enterprise scale"],
        tags: ["RBAC", "Async/batch", "Multi-tenant"],
        icon: Shield,
        stackIcons: [Shield, Code2, Database],
        href: caseStudies.assignmentGroups,
        ctaLabel: "Read case study",
      },
      {
        title: "Onboarding & Engagement Experiments",
        category: "GTM & Business",
        timeframe: "Dec 2022 — Jan 2024",
        description:
          "Designed and executed A/B experiments to reduce onboarding friction and compound engagement—optimized flows and incentives with a tight measure‑iterate loop.",
        metrics: ["20K → 30K sign-ups", "3× engagement", "+20% D7 retention (campaigns)"],
        tags: ["A/B testing", "Funnels", "Activation"],
        icon: Rocket,
        stackIcons: [Rocket, LayoutGrid, Database],
        href: caseStudies.onboardingEngagement,
        ctaLabel: "Read case study",
      },
      {
        title: "Assessment & Hiring Insights",
        category: "Product & Strategy",
        timeframe: "Dec 2022 — Jan 2024",
        description:
          "Launched an employer-facing assessment and insights product that translated candidate performance into capability signals for hiring teams and job-readiness for learners.",
        metrics: ["~8–12% revenue growth", "B2B insights", "Score-based decisions"],
        tags: ["B2B product", "Insights", "Decisioning"],
        icon: BadgeCheck,
        stackIcons: [BadgeCheck, Database, LayoutGrid],
        href: caseStudies.assessmentHiringInsights,
        ctaLabel: "Read case study",
      },
      {
        title: "AI Governance Framework",
        category: "AI",
        timeframe: "Apr 2024 — Feb 2026",
        description:
          "Framework defining when to use AI vs. rules-based logic, data readiness, and evaluation metrics—improving alignment on AI investments and delivery quality.",
        metrics: ["~50% manual ops reduced", "Rule vs LLM playbook", "Evaluation metrics"],
        tags: ["AI governance", "LLM workflows", "B2B SaaS"],
        icon: Sparkles,
        stackIcons: [Sparkles, Brain, Database],
        href: LINKEDIN,
        ctaLabel: "View",
      },
    ],
    []
  );

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-zinc-800/80 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Case studies & projects
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Filter by theme—then open a case study for the concise story + impact.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active === c
                    ? "border-violet-500/40 bg-violet-500/15 text-violet-100"
                    : "border-zinc-800 bg-zinc-900/25 text-zinc-300 hover:bg-zinc-800/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6 transition will-change-transform hover:-translate-y-1 hover:border-violet-500/35 hover:bg-zinc-900/55">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                      <Icon className="size-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs font-semibold text-zinc-300">
                        {project.category}
                      </span>
                      <span className="hidden rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs font-semibold text-zinc-500 sm:inline">
                        {project.timeframe}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-700/80 bg-zinc-950/50 px-3 py-1 text-xs font-medium text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
                    >
                      <FileText className="size-4" />
                      {project.ctaLabel ?? "View"}
                      <ExternalLink className="size-3.5" />
                    </a>
                    <div className="flex items-center gap-2 text-zinc-400">
                      {project.stackIcons.map((S, idx) => (
                        <span
                          key={idx}
                          className="flex size-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/40 transition group-hover:border-violet-500/25 group-hover:text-violet-200"
                          aria-hidden
                        >
                          <S className="size-4" />
                        </span>
                      ))}
                    </div>
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
