"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const LINKEDIN = "https://www.linkedin.com/in/umakant-dwivedi-pm/";
const GITHUB = "https://github.com/ukdgit/";
const EMAIL = "mailto:dwivediumakant6@gmail.com";
const BRAND_PILLS = ["Ex-Phenom", "Ex-Amazon", "6.5+ Yrs Exp"] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col justify-center pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute -right-24 bottom-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90"
            >
              SDE ➔ Product Manager
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.1] lg:text-6xl"
            >
              Umakant Dwivedi — Product Manager.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.11 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {BRAND_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-zinc-800 bg-zinc-900/35 px-3.5 py-1.5 text-xs font-semibold text-zinc-200"
                >
                  {pill}
                </span>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
            >
              Bridging the gap between complex backend architecture and user-centric
              product growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:bg-violet-500"
              >
                Get to know me
                <ArrowDown className="size-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-500/50 hover:text-white"
              >
                View projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-500/40 hover:text-violet-300"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-500/40 hover:text-violet-300"
              >
                <Github className="size-4" />
                GitHub
              </a>
              <a
                href={EMAIL}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-500/40 hover:text-violet-300"
              >
                <Mail className="size-4" />
                Email
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            whileHover={{ y: -4 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-violet-500/35 via-indigo-500/10 to-transparent blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/40 p-5 shadow-2xl shadow-black/35 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="relative size-32 overflow-hidden rounded-full ring-1 ring-white/10 sm:size-36">
                  <Image
                    src="/umakant.png"
                    alt="Umakant Dwivedi"
                    fill
                    sizes="(min-width: 640px) 144px, 128px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold text-zinc-100">
                    Umakant Dwivedi
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Product • Systems • AI
                  </p>
                  <p className="mt-2 inline-flex items-center rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                    Open to PM roles
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "Experience", v: "6.5+ yrs" },
                  { k: "Domains", v: "B2B SaaS" },
                  { k: "Focus", v: "RBAC + Data" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-3"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                      {s.k}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-zinc-200">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900/25 p-4">
                <p className="text-sm leading-relaxed text-zinc-400">
                  I turn complex permissions, data models, and async constraints
                  into calm, self‑serve experiences HR admins and enterprise teams
                  can adopt confidently.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
