import { useEffect, useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#brands", label: "Our Brands" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_10px_40px_-20px_oklch(0.62_0.24_255/0.6)]" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8"
      >
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5"
        >
          <img
            src={logo.url}
            alt="Den_enterprise logo"
            className="size-14 shrink-0 rounded-full object-contain sm:size-16"
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-5 py-2 text-sm font-medium text-foreground transition-all hover:bg-primary/30 hover:shadow-[0_0_28px_oklch(0.66_0.24_256/0.55)]"
          >
            <Rocket size={15} /> Start a Project
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-card/60 text-foreground lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-5 py-3 text-base font-medium"
            >
              <Rocket size={16} /> Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
