"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function InteractiveBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const reduceMotion = useReducedMotion();

  // A stable initial seed prevents visible "jump" during hydration.
  const initialPoints = useMemo(() => {
    const points: Point[] = [];
    for (let i = 0; i < 64; i++) {
      points.push({
        x: (i * 97) % 1000,
        y: (i * 193) % 700,
        vx: ((i % 7) - 3) * 0.08,
        vy: ((i % 5) - 2) * 0.08,
      });
    }
    return points;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: Point[] = initialPoints.map((p) => ({ ...p }));
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect?.width ?? window.innerWidth));
      h = Math.max(1, Math.floor(rect?.height ?? window.innerHeight));
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Re-seed points into the new bounds while keeping ordering stable.
      points = points.map((p, i) => ({
        ...p,
        x: (p.x / 1000) * w || ((i * 127) % w),
        y: (p.y / 700) * h || ((i * 211) % h),
      }));
    };

    const onMove = (e: PointerEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;
      const mx = mouse.x;
      const my = mouse.y;

      // Draw connections first for a crisp net effect.
      const maxDist = Math.min(220, Math.max(140, Math.min(w, h) * 0.22));
      const maxDist2 = maxDist * maxDist;

      for (let i = 0; i < points.length; i++) {
        const a = points[i]!;

        for (let j = i + 1; j < points.length; j++) {
          const b = points[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxDist2) continue;

          const t = 1 - d2 / maxDist2;
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.06 + t * 0.12})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Update + draw points.
      for (let i = 0; i < points.length; i++) {
        const p = points[i]!;

        // Gentle drift.
        p.x += p.vx;
        p.y += p.vy;

        // Cursor influence (subtle pull + repulsion at very close range).
        if (mouse.active) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const d2 = dx * dx + dy * dy;
          const r = 260;
          const r2 = r * r;
          if (d2 < r2) {
            const d = Math.sqrt(d2) || 1;
            const strength = (1 - d2 / r2) * 0.018;
            p.vx += (dx / d) * strength;
            p.vy += (dy / d) * strength;

            // tiny repulsion for "breathing" effect
            if (d < 56) {
              const repulse = (1 - d / 56) * 0.03;
              p.vx -= (dx / d) * repulse;
              p.vy -= (dy / d) * repulse;
            }
          }
        }

        // Friction.
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Bounds.
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > w) {
          p.x = w;
          p.vx *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > h) {
          p.y = h;
          p.vy *= -1;
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const alpha = clamp(0.18 + speed * 0.55, 0.18, 0.55);
        ctx.fillStyle = `rgba(228, 228, 231, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.25, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = window.requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });

    rafRef.current = window.requestAnimationFrame(step);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [initialPoints, reduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(139,92,246,0.16),transparent_55%),radial-gradient(800px_circle_at_80%_30%,rgba(99,102,241,0.12),transparent_60%)]" />
      <Spotlight />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-85 [mask-image:radial-gradient(600px_circle_at_center,black,transparent_75%)] sm:[mask-image:radial-gradient(900px_circle_at_center,black,transparent_75%)]"
        aria-hidden
      />
    </div>
  );
}

function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0, active: false });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: PointerEvent) =>
      setPos({ x: e.clientX, y: e.clientY, active: true });
    const onLeave = () => setPos((p) => ({ ...p, active: false }));
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [reduceMotion]);

  const opacity = pos.active ? 1 : 0;

  return (
    <div
      className="absolute inset-0 transition-opacity duration-300"
      style={{
        opacity,
        background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.12), rgba(9,9,11,0) 60%)`,
      }}
      aria-hidden
    />
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

