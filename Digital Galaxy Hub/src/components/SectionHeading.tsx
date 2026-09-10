export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.28em] text-primary-glow">
          {eyebrow.toUpperCase()}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
