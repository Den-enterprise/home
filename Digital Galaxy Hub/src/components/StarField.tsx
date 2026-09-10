import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; s: number };

/** Lightweight canvas starfield with slow drift. Pauses for reduced motion. */
export function StarField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let stars: Star[] = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(160, Math.round((w * h) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random(),
        s: Math.random() * 0.08 + 0.02,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const st of stars) {
        st.a += 0.008;
        const alpha = 0.25 + Math.abs(Math.sin(st.a)) * 0.7;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190, 214, 255, ${alpha})`;
        ctx.fill();
        st.y -= st.s;
        if (st.y < -2) {
          st.y = h + 2;
          st.x = Math.random() * w;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    if (reduced) {
      ctx.clearRect(0, 0, w, h);
      for (const st of stars) {
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(190, 214, 255, 0.6)";
        ctx.fill();
      }
    } else {
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
