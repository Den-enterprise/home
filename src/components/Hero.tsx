import { Sparkles, ArrowRight, Mail } from "lucide-react";
import { StarField } from "./StarField";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-32">
      <StarField />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 size-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-violet)" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-primary-glow sm:text-xs">
            <Sparkles size={13} /> DIGITAL INNOVATION • MADE SIMPLE
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Bringing Local Businesses Into The{" "}
            <span className="gradient-text glow-text">Digital Universe.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="glow-text font-medium text-primary-glow">Den_enterprise</span> helps
            local businesses step into the digital world through creative design, modern websites,
            and practical digital products.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#brands"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_45px_oklch(0.66_0.24_256/0.7)]"
              style={{ background: "var(--gradient-violet)" }}
            >
              Explore Our Universe
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/45 bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary hover:bg-primary/15"
            >
              <Mail size={16} /> Let&apos;s Work Together
            </a>
          </div>
        </div>

        {/* Digital planet */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-md place-items-center md:grid">
          <div
            aria-hidden="true"
            className="animate-pulse-glow absolute size-40 rounded-full lg:size-52"
            style={{ background: "var(--gradient-violet)" }}
          />
          <div className="animate-float absolute size-40 rounded-full opacity-70 mix-blend-screen lg:size-52 [background:radial-gradient(circle_at_30%_25%,oklch(0.85_0.12_258/0.9),transparent_60%)]" />
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              aria-hidden="true"
              className="absolute rounded-full border border-primary/25"
              style={{
                width: `${60 + i * 22}%`,
                height: `${60 + i * 22}%`,
                animation: `orbit-spin ${18 + i * 10}s linear infinite`,
                transform: `rotateX(${68 - i * 6}deg)`,
              }}
            >
              <span
                className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-glow"
                style={{ boxShadow: "var(--shadow-glow-strong)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
