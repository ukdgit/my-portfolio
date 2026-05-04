"use client";

import { Briefcase } from "lucide-react";
import { FadeIn } from "./FadeIn";

type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  impact: string;
  stack: string;
};

const roles: Role[] = [
  {
    company: "Akrivia HCM",
    title: "Product Manager",
    location: "Hyderabad",
    period: "Apr 2024 — Feb 2026",
    impact:
      "Architected a composite RBAC layer that reduced role duplication by 90% and eliminated manual SQL dependencies for HR admins.",
    stack: "RBAC • Multi-tenant SaaS • Async processing • Data warehouse",
  },
  {
    company: "Phenom",
    title: "Backend Developer & Product Owner",
    location: "Hyderabad",
    period: "Jul 2021 — Dec 2022",
    impact:
      "Built scalable microservices while managing technical debt reduction by 30% across core services and delivery workflows.",
    stack: "Java • APIs • Microservices • Reliability",
  },
  {
    company: "AccioJob",
    title: "Technical Product Manager",
    location: "Gurugram",
    period: "Dec 2022 — Jan 2024",
    impact:
      "Scaled platform to 30K DAU and managed product lifecycle for a user base that drove $XM in placement value.",
    stack: "Growth experiments • Funnels • Product analytics • Platform scale",
  },
  {
    company: "Amazon",
    title: "Customer Service Associate — Product Insights & Operations",
    location: "Global Operations, Noida",
    period: "Sep 2018 — Jun 2021",
    impact:
      "Handled 10,000+ user interactions and surfaced recurring pain patterns that informed process improvements and better product insights loops.",
    stack: "Customer insights • Escalations • Workflow quality",
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Where I&apos;ve built impact
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Senior-PM style impact statements with clear metrics, scope, and
            system context.
          </p>
        </FadeIn>

        <div className="relative mt-14">
          <div
            className="absolute left-28 top-0 bottom-0 hidden w-px bg-zinc-800 md:block"
            aria-hidden
          />
          <ul className="space-y-8">
            {roles.map((role, i) => (
              <li key={role.company + role.period} className="relative">
                <FadeIn delay={i * 0.06}>
                  <div className="grid gap-4 md:grid-cols-[12rem_1fr] md:items-start">
                    <div className="md:pr-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        {role.period}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-zinc-300">
                        {role.location}
                      </p>
                    </div>

                    <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6 transition will-change-transform hover:-translate-y-1 hover:border-violet-500/30 hover:bg-zinc-900/55">
                      <span
                        className="absolute -left-2 top-6 hidden size-3 rounded-full border-4 border-zinc-950 bg-violet-500 md:block"
                        aria-hidden
                      />

                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <div>
                          <p className="text-sm font-semibold text-violet-300">
                            {role.company}
                          </p>
                          <p className="mt-1 text-lg font-semibold text-zinc-100">
                            {role.title}
                          </p>
                        </div>
                        <p className="flex items-center gap-2 text-sm text-zinc-500">
                          <Briefcase className="size-4 text-zinc-600" />
                          {role.stack}
                        </p>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                        {role.impact}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
