import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Brand } from "@/data/brands";

export function BrandCard({ brand, index = 0 }: { brand: Brand; index?: number }) {
  return (
    <article
      className="glass card-rise reveal group relative flex flex-col overflow-hidden rounded-3xl p-7"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-24 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: "var(--gradient-violet)" }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-border bg-foreground p-2">
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
        <ExternalLink
          size={18}
          aria-hidden="true"
          className="mt-1 text-muted-foreground transition-colors group-hover:text-primary-glow"
        />
      </div>

      <div className="relative mt-6 min-w-0 flex-1">
        <h3 className="truncate text-xl font-semibold">{brand.name}</h3>
        <p className="mt-1.5 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium tracking-wide text-primary-glow">
          {brand.category}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{brand.description}</p>
      </div>

      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-7 inline-flex items-center justify-between gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-medium transition-all hover:bg-primary/25 hover:shadow-[0_0_30px_oklch(0.66_0.24_256/0.45)]"
      >
        <span className="truncate">{brand.cta}</span>
        <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}
