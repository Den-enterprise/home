import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { brands } from "@/data/brands";
import { SectionHeading } from "./SectionHeading";

export function Ecosystem() {
  const [activeId, setActiveId] = useState<string>(brands[0]?.id ?? "");
  const active = brands.find((b) => b.id === activeId) ?? brands[0]!;

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Ecosystem"
          title="A Constellation of Products"
          subtitle="Everything we build orbits one idea: making digital simple for local people."
        />

        {/* Desktop / tablet orbit */}
        <div className="mt-16 hidden md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div
              aria-hidden="true"
              className="absolute inset-[12%] rounded-full border border-primary/20"
              style={{ animation: "orbit-spin 60s linear infinite" }}
            />
            <div aria-hidden="true" className="absolute inset-[26%] rounded-full border border-primary/15" />

            <div className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/50 bg-card/70 p-3 text-center backdrop-blur animate-pulse-glow lg:size-40">
              <span className="font-display text-sm font-bold leading-tight lg:text-base">
                <span className="glow-text text-primary-glow">DEN</span>
                <br />
                ENTERPRISE
              </span>
            </div>

            {brands.map((b, i) => {
              const angle = (i / brands.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 42;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              const isActive = b.id === activeId;
              return (
                <button
                  key={b.id}
                  type="button"
                  onMouseEnter={() => setActiveId(b.id)}
                  onFocus={() => setActiveId(b.id)}
                  onClick={() => setActiveId(b.id)}
                  aria-pressed={isActive}
                  className={`absolute grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border p-2 text-center text-[10px] font-semibold leading-tight backdrop-blur transition-all duration-300 lg:size-24 lg:text-xs ${
                    isActive
                      ? "scale-110 border-primary bg-primary/25 text-foreground shadow-[0_0_40px_oklch(0.66_0.24_256/0.6)]"
                      : "border-border bg-card/60 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {b.name}
                </button>
              );
            })}
          </div>

          <div className="glass reveal rounded-3xl p-8">
            <p className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] text-primary-glow">
              {active.category}
            </p>
            <h3 className="mt-4 text-2xl font-semibold">{active.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.description}</p>
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_35px_oklch(0.66_0.24_256/0.6)]"
              style={{ background: "var(--gradient-violet)" }}
            >
              Explore <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Mobile vertical ecosystem */}
        <ol className="mt-14 space-y-5 border-l border-primary/25 pl-6 md:hidden">
          <li className="relative">
            <span className="absolute -left-[31px] top-2 size-3.5 rounded-full bg-primary shadow-[0_0_20px_oklch(0.66_0.24_256/0.8)]" />
            <p className="font-display text-lg font-bold">
              <span className="glow-text text-primary-glow">DEN</span>_ENTERPRISE
            </p>
            <p className="mt-1 text-sm text-muted-foreground">The core of the ecosystem.</p>
          </li>
          {brands.map((b) => (
            <li key={b.id} className="glass reveal relative rounded-2xl p-5">
              <span className="absolute -left-[31px] top-7 size-2.5 rounded-full bg-primary-glow" />
              <h3 className="text-base font-semibold">{b.name}</h3>
              <p className="mt-1 text-[11px] tracking-wide text-primary-glow">{b.category}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium"
              >
                Explore <ArrowUpRight size={15} />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
