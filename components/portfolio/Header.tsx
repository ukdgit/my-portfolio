"use client";

import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
] as const;

const RESUME_HREF = "/Umakant_Dwivedi_PM_Resume.pdf";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/85 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-zinc-950/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-violet-400"
        >
          Umakant Dwivedi
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <nav className="flex items-center gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-violet-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-900/35 transition hover:bg-violet-500"
          >
            <FileText className="size-4" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-300 hover:bg-zinc-800 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-800/80 hover:text-violet-300"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
                onClick={() => setOpen(false)}
              >
                <FileText className="size-4" />
                Resume
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
