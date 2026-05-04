"use client";

import { Briefcase, ChevronDown, GraduationCap, Medal } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useMemo, useState } from "react";

type ExperienceSection = {
  heading: string;
  bullets: string[];
};

type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  tags: string[];
  summary: string;
  sections: ExperienceSection[];
};

const roles: Role[] = [
  {
    company: "Akrivia HCM",
    title: "Associate Product Manager",
    location: "Hyderabad, India",
    period: "Apr 2024 — Feb 2026",
    tags: ["B2B SaaS", "HCM", "Enterprise", "RBAC", "AI"],
    summary:
      "Sole PM for Performance, Goals, Role Architecture, and Custom Reporting across 50+ mid-market and enterprise clients.",
    sections: [
      {
        heading: "Technical Product Management",
        bullets: [
          "Architected RBAC “Assignment Groups” abstraction consolidating 40–45 duplicate roles into 8, reducing onboarding config time ~90% (1 day → 1 hour).",
          "Designed Goal Plan Template data model enabling multi-OKR participation; drove ~30% increase in year-round goal completion.",
        ],
      },
      {
        heading: "Data & Self‑Serve Reporting",
        bullets: [
          "Shipped self-service reporting with a custom warehouse schema + 5 report types across 2 phased releases; cut turnaround 48h → near-instant and eliminated 100% reporting CS tickets.",
        ],
      },
      {
        heading: "AI & Governance",
        bullets: [
          "Designed AI skill-gap workflow with LLM fuzzy matching + rules thresholds + HRBP review gate; saved each HRBP ~20 hrs/month and reduced manual HR ops by ~50%.",
          "Built an AI governance framework that redirected 2 features from LLMs to simpler rules-based solutions, saving engineering cycles.",
        ],
      },
    ],
  },
  {
    company: "AccioJob",
    title: "Technical Product Manager",
    location: "Gurugram, India",
    period: "Dec 2022 — Jan 2024",
    tags: ["EdTech", "B2C + B2B", "Growth", "Experiments", "Platform"],
    summary:
      "Built employer & student-facing features on a hiring platform scaling from 20K → 30K daily active users.",
    sections: [
      {
        heading: "Product & Growth",
        bullets: [
          "Grew daily sign-ups ~50% (20K → 30K) and improved engagement 3× via A/B experiments on onboarding and student workflows.",
          "Improved D7 retention +20% during campaign periods by shipping “Code vs Clock” live competition experiences.",
        ],
      },
      {
        heading: "GTM & Business",
        bullets: [
          "Launched an assessment product delivering job-readiness scores for students and capability scores for hiring teams; contributed ~8–12% revenue growth.",
        ],
      },
      {
        heading: "Reliability & Operations",
        bullets: [
          "Reduced repeat production incidents from 3–4/quarter to 1 by introducing a structured RCA process (systemic prevention over reactive fixes).",
        ],
      },
    ],
  },
  {
    company: "Phenom",
    title: "Product Development Engineer I (Backend | Product)",
    location: "Hyderabad, India",
    period: "Jul 2021 — Dec 2022",
    tags: ["Backend", "HR SaaS", "APIs", "ML", "System design"],
    summary:
      "Engineering-to-PM bridge role building ML-powered recommendation APIs for personalized career discovery at enterprise scale.",
    sections: [
      {
        heading: "Engineering & Systems",
        bullets: [
          "Built and maintained ML recommendation APIs powering career discovery experiences; strengthened system design instincts used later in PM ownership.",
          "Partnered with product stakeholders to translate requirements into scalable backend designs and delivery plans.",
        ],
      },
    ],
  },
  {
    company: "Amazon",
    title: "Customer Service Associate (Product Insights | Operations)",
    location: "Noida, India",
    period: "Sep 2018 — Jun 2021",
    tags: ["Operations", "Customer insights", "Escalations", "Discovery"],
    summary:
      "Frontline customer insights across global markets—built intuition for failure modes, workflow gaps, and measurable friction.",
    sections: [
      {
        heading: "Product Insights (in a non‑PM role)",
        bullets: [
          "Handled 10,000+ customer interactions; identified recurring pain patterns and fed structured insights to process teams—an early product discovery loop.",
          "Served as SME on complex escalations requiring platform expertise and clear communication under pressure.",
        ],
      },
    ],
  },
];

type Tab = "Work" | "Education & Certifications";

export function Experience() {
  const [tab, setTab] = useState<Tab>("Work");
  const [open, setOpen] = useState<Record<string, boolean>>({
    "Akrivia HCM": true,
  });

  const items = useMemo(() => roles, []);

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-zinc-800/80 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Expand roles to see PM-style breakdowns (even for engineering and
            operations roles), plus education and certifications.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="inline-flex rounded-full border border-zinc-800 bg-zinc-900/30 p-1">
            {(["Work", "Education & Certifications"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  tab === t
                    ? "bg-violet-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-800/60"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </FadeIn>

        {tab === "Work" ? (
          <div className="relative mt-12">
            <div
              className="absolute left-28 top-0 bottom-0 hidden w-px bg-zinc-800 md:block"
              aria-hidden
            />

            <ul className="space-y-6">
              {items.map((role, i) => {
                const isOpen = !!open[role.company];
                return (
                  <li key={role.company + role.period} className="relative">
                    <FadeIn delay={i * 0.05}>
                      <div className="grid gap-4 md:grid-cols-[12rem_1fr] md:items-start">
                        <div className="md:pr-6">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                            {role.period}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-zinc-300">
                            {role.location}
                          </p>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/35 transition hover:border-violet-500/30 hover:bg-zinc-900/55">
                          <span
                            className="absolute -left-2 top-6 hidden size-3 rounded-full border-4 border-zinc-950 bg-violet-500 md:block"
                            aria-hidden
                          />

                          <button
                            type="button"
                            onClick={() =>
                              setOpen((prev) => ({
                                ...prev,
                                [role.company]: !prev[role.company],
                              }))
                            }
                            className="flex w-full items-start justify-between gap-4 p-6 text-left"
                            aria-expanded={isOpen}
                          >
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-violet-300">
                                {role.company}
                              </p>
                              <p className="mt-1 text-lg font-semibold text-zinc-100">
                                {role.title}
                              </p>
                              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                                {role.summary}
                              </p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {role.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded-full border border-zinc-700/80 bg-zinc-950/50 px-3 py-1 text-xs font-semibold text-zinc-300"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <ChevronDown
                              className={`mt-1 size-5 shrink-0 text-zinc-500 transition ${
                                isOpen ? "rotate-180 text-violet-300" : ""
                              }`}
                            />
                          </button>

                          {isOpen ? (
                            <div className="border-t border-zinc-800 px-6 py-6">
                              <div className="grid gap-6 lg:grid-cols-2">
                                {role.sections.map((section) => (
                                  <div key={section.heading}>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
                                      {section.heading}
                                    </p>
                                    <ul className="mt-3 space-y-2">
                                      {section.bullets.map((b) => (
                                        <li
                                          key={b.slice(0, 60)}
                                          className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                                        >
                                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-500/80" />
                                          <span>{b}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </FadeIn>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <GraduationCap className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold text-zinc-100">Education</h3>
                </div>
                <div className="mt-5 space-y-2">
                  <p className="text-sm font-semibold text-zinc-200">
                    JSS Academy of Technical Education, Noida
                  </p>
                  <p className="text-sm text-zinc-400">
                    B.Tech — Instrumental & Control Engineering (2013 — 2017)
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Top 5% of batch",
                      "Published research project at IIT Delhi",
                      "MUN representative",
                    ].map((t) => (
                      <li
                        key={t}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-500/80" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Medal className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold text-zinc-100">
                    Certifications
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {[
                    "IBM AI Product Manager Professional Certification (2026)",
                    "Full Stack Web Development (MERN) (2021)",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-500/80" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
}
