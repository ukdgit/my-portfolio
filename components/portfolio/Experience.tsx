"use client";

import { Briefcase } from "lucide-react";
import { FadeIn } from "./FadeIn";

type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    company: "Akrivia HCM",
    title: "Product Manager",
    location: "Hyderabad",
    period: "Apr 2024 — Feb 2026",
    highlights: [
      "B2B enterprise HCM SaaS: owned roadmap for Performance Management, role architecture, Goal Management, and custom reporting across the hire-to-retire lifecycle.",
      "Architected an enterprise RBAC layer (Assignment Groups) inspired by SAP-style role management—separating security roles from org scope and clearing bulk-assignment bottlenecks with async jobs and batch processing.",
      "Shipped a self-service Custom Reporting product on a star-schema warehouse (payroll, performance, employee data) with multiple report types, reducing CS dependency for HR admins.",
      "Drove AI-driven skill-gap workflows and an internal AI Governance Framework aligning teams on when to use AI vs. rules—contributing to ~50% reduction in manual HR operations.",
    ],
  },
  {
    company: "Phenom",
    title: "Backend Developer",
    location: "Hyderabad",
    period: "Jul 2021 — Dec 2022",
    highlights: [
      "Built and maintained ML-driven recommendation APIs for personalized career discovery at enterprise scale.",
      "Partnered with PMs to translate requirements into scalable backend designs—foundational system design and product-engineering collaboration.",
      "Improved performance, reliability, and data-system optimizations on a large cloud HR platform.",
    ],
  },
  {
    company: "AccioJob",
    title: "Technical Product Manager",
    location: "Gurugram",
    period: "Dec 2022 — Jan 2024",
    highlights: [
      "Scaled the platform to ~30K DAU through onboarding and engagement experiments (including a major sign-up lift) and 3× engagement gains via iterative student workflows.",
      "Launched employer-facing B2B assessment and hiring-insights capabilities contributing to ~8–12% revenue growth.",
      "Delivered high-availability systems for concurrent users during hackathons; introduced RCA practices for production stability.",
    ],
  },
  {
    company: "Amazon",
    title: "Customer Service Associate — Product Insights & Operations",
    location: "Global Operations, Noida",
    period: "Sep 2018 — Jun 2021",
    highlights: [
      "10,000+ customer interactions across global markets—deep intuition for real-world failure modes and the gap between designed workflows and actual behavior.",
      "Subject Matter Expert on complex escalations: platform expertise and clear communication under pressure.",
      "Surfaced recurring pain patterns to process-improvement teams—early product discovery that shaped how I approach user research today.",
    ],
  },
];

export function Experience() {
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Where I&apos;ve built impact
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            A vertical timeline of roles spanning technical product, backend
            engineering, and customer-grounded insights.
          </p>
        </FadeIn>

        <div className="relative mt-14 ml-3 border-l border-zinc-800 pl-8 sm:ml-4 sm:pl-10">
          <ul className="space-y-12">
            {roles.map((role, i) => (
              <li key={role.company + role.period} className="relative">
                <span
                  className="absolute -left-[37px] top-2 size-3 rounded-full border-4 border-zinc-950 bg-violet-500 sm:-left-[41px]"
                  aria-hidden
                />
                <FadeIn delay={i * 0.06}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <p className="text-sm font-semibold text-violet-300">
                        {role.company}
                      </p>
                      <p className="mt-1 text-lg font-medium text-zinc-100">
                        {role.title}
                      </p>
                      <p className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-zinc-500">
                        <Briefcase className="size-3.5 text-zinc-600" />
                        {role.location}
                        <span className="text-zinc-600">·</span>
                        {role.period}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5 sm:p-6">
                    {role.highlights.map((h) => (
                      <li
                        key={h.slice(0, 56)}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-500/80" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
