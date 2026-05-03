"use client";

import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Technical ownership from discovery to scale
          </h2>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          <p>
            Product leader with{" "}
            <span className="text-zinc-200">6.5+ years</span> across B2B SaaS,
            HCM, HR tech, and EdTech. I specialize in{" "}
            <span className="text-zinc-200">technical product ownership</span>{" "}
            and{" "}
            <span className="text-zinc-200">
              data warehouse modeling (star schema)
            </span>
            — turning multi-tenant constraints, RBAC, and analytics into
            products teams can ship and customers can trust.
          </p>
          <p>
            From PRDs and roadmaps to SQL, APIs, and async architectures, I
            connect engineering depth with measurable outcomes: adoption,
            retention, and operational efficiency.
          </p>
        </FadeIn>
        <FadeIn delay={0.14} className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Focus", v: "B2B SaaS, HCM, EdTech" },
            { k: "Based in", v: "Hyderabad, Telangana" },
            {
              k: "Education",
              v: "B.Tech — Instrumentation & Control, JSS Noida",
            },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {item.k}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-200">{item.v}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
