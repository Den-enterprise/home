import { Mail, ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL } from "@/data/brands";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative pt-12 sm:pt-16 pb-24 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Digital."
          subtitle="Have an idea? Email us — a website, designs, or a digital product. We'll take it from there."
        />

        <div className="mt-14 flex justify-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="glass reveal group flex min-w-0 max-w-2xl flex-col items-center gap-6 rounded-3xl p-8 text-center transition-all hover:border-primary/60 sm:p-12"
          >
            <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary-glow transition-shadow group-hover:shadow-[0_0_35px_oklch(0.66_0.24_256/0.6)]">
              <Mail size={28} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold tracking-[0.24em] text-muted-foreground">
                EMAIL US
              </span>
              <span className="mt-2 block break-all font-display text-2xl font-bold text-foreground transition-colors group-hover:text-primary-glow sm:text-3xl">
                {CONTACT_EMAIL}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/45 px-6 py-3 text-sm font-semibold transition-colors group-hover:bg-primary/15">
              Send an Email <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
