"use client";

import { Brain, Code2, LineChart } from "lucide-react";
import { FadeIn } from "./FadeIn";

const groups = [
  {
    title: "Product",
    icon: LineChart,
    items: ["PRDs", "Strategy", "Roadmap"],
  },
  {
    title: "Technical",
    icon: Code2,
    items: ["Java", "SQL", "MongoDB", "RBAC"],
  },
  {
    title: "AI",
    icon: Brain,
    items: ["IBM Certified AI PM", "Prompt engineering"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-zinc-800/80 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            How I ship
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Grouped by how I work with teams—strategy, systems, and AI-enabled
            products.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <FadeIn key={g.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {g.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item}>
                        <span className="inline-block rounded-full border border-zinc-700/80 bg-zinc-950/60 px-3 py-1.5 text-xs font-medium text-zinc-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
