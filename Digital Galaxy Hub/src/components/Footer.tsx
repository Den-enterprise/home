import { brands } from "@/data/brands";
import logo from "@/assets/logo.png.asset.json";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#brands", label: "Our Brands" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="Den_enterprise logo"
                className="size-16 shrink-0 rounded-full object-contain sm:size-20"
              />
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Bringing Local Businesses Into The Digital Universe.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold tracking-[0.24em] text-muted-foreground">EXPLORE</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary-glow">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.24em] text-muted-foreground">OUR BRANDS</h2>
            <ul className="mt-4 space-y-2.5">
              {brands.map((b) => (
                <li key={b.id}>
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary-glow"
                  >
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © 2026 Den_enterprise. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
