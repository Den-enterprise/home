import { CalendarClock, Users, Orbit } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { icon: CalendarClock, value: "7+", label: "Years in orbit", hint: "Building digital products since day one." },
  { icon: Users, value: "25", label: "Team members", hint: "Designers, developers and strategists." },
  { icon: Orbit, value: "5", label: "Brands in our universe", hint: "One connected digital ecosystem." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="ABOUT US"
          title="Seven years of building the digital universe"
          subtitle="Den_enterprise has spent 7 years helping local businesses launch into the digital world — with a team of 25 people working across design, development and product."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="glass card-rise rounded-3xl p-7">
              <s.icon size={22} className="text-primary-glow" />
              <p className="glow-text mt-5 font-display text-4xl font-bold text-primary-glow">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{s.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.hint}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          What started as a small creative unit has grown into a multi-brand ecosystem covering design,
          web development, education tools and practical software. Every brand under Den_enterprise
          shares the same mission: make quality digital work accessible to businesses around us.
        </p>
      </div>
    </section>
  );
}
