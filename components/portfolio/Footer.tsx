"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "./FadeIn";

const LINKEDIN = "https://www.linkedin.com/in/umakant-dwivedi-pm/";
const GITHUB = "https://github.com/ukdgit/";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            Let&apos;s connect
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Open to conversations on technical product roles, enterprise SaaS,
            and AI-enabled HR platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-500/50"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href="mailto:dwivediumakant6@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-500/50"
            >
              <Mail className="size-4" />
              Email
            </a>
          </div>
          <p className="mt-12 text-center text-xs text-zinc-600 sm:text-left">
            © {new Date().getFullYear()} Umakant Dwivedi. Built with Next.js &
            Tailwind CSS.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
