import { Zap, HeartHandshake, Wand2, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const principles: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Zap, title: "Simple", body: "Digital solutions without unnecessary complexity." },
  {
    icon: HeartHandshake,
    title: "Accessible",
    body: "Helping local businesses take their first digital steps.",
  },
  { icon: Wand2, title: "Creative", body: "Combining technology with creativity." },
  { icon: Wrench, title: "Practical", body: "Building things that actually solve problems." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Den_enterprise?"
          title="Technology Shouldn't Feel Complicated."
          subtitle="For many local businesses, entering the digital world can feel complicated, expensive or intimidating. Den_enterprise exists to simplify that journey."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="glass card-rise reveal group rounded-3xl p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid size-12 place-items-center rounded-2xl border border-primary/40 bg-primary/15 text-primary-glow transition-transform duration-300 group-hover:scale-110">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
