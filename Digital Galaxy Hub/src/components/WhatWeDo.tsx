import { Palette, Code2, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items: { icon: LucideIcon; tag: string; title: string; body: string }[] = [
  {
    icon: Palette,
    tag: "CREATE",
    title: "Turn ideas into visuals.",
    body: "Posters, videos, branding and other creative digital content.",
  },
  {
    icon: Code2,
    tag: "BUILD",
    title: "Turn ideas into websites.",
    body: "Modern websites for businesses, organizations, creators and projects.",
  },
  {
    icon: Lightbulb,
    tag: "INNOVATE",
    title: "Build useful digital products.",
    body: "Practical tools and platforms designed to solve real problems.",
  },
];

export function WhatWeDo() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Your Gateway to the Digital World"
          subtitle="Den_enterprise exists to make digital transformation accessible for local businesses and local people — no jargon, no bloated process."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, tag, title, body }, i) => (
            <article
              key={tag}
              className="glass card-rise reveal group relative overflow-hidden rounded-3xl p-8"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: "var(--gradient-violet)" }}
              />
              <div className="relative">
                <div className="grid size-12 place-items-center rounded-2xl border border-primary/40 bg-primary/15 text-primary-glow">
                  <Icon size={22} />
                </div>
                <p className="mt-6 text-xs font-semibold tracking-[0.24em] text-primary-glow">{tag}</p>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
