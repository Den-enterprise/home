import { Phone, Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE_TEL } from "@/data/brands";

export function ServicesCta() {
  return (
    <section className="relative pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="glass reveal relative overflow-hidden rounded-[2rem] px-7 py-14 text-center sm:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-32 h-64 opacity-40 blur-3xl"
            style={{ background: "var(--gradient-violet)" }}
          />
          <h2 className="relative text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Have an idea waiting to enter the{" "}
            <span className="gradient-text glow-text">digital universe?</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Whether you need a website, creative designs, or a digital solution, let&apos;s build it.
          </p>
          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT_PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_40px_oklch(0.66_0.24_256/0.65)]"
              style={{ background: "var(--gradient-violet)" }}
            >
              <Phone size={16} /> Start a Project
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/45 bg-card/40 px-7 py-3.5 text-sm font-semibold transition-all hover:border-primary hover:bg-primary/15"
            >
              <Mail size={16} /> Contact Den_enterprise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
