import { brands } from "@/data/brands";
import { BrandCard } from "./BrandCard";
import { SectionHeading } from "./SectionHeading";

export function DigitalUniverse() {
  const services = brands.filter((b) => b.group === "services");
  const products = brands.filter((b) => b.group === "products");

  return (
    <section id="brands" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Digital Universe"
          title="One Enterprise. Multiple Worlds."
          subtitle="Explore the brands and products built under the Den_enterprise ecosystem."
        />

        <div className="mt-16">
          <h3 className="reveal text-xs font-semibold tracking-[0.28em] text-muted-foreground">
            CREATIVE &amp; DIGITAL SERVICES
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {services.map((b, i) => (
              <BrandCard key={b.id} brand={b} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="reveal text-xs font-semibold tracking-[0.28em] text-muted-foreground">
            DIGITAL PRODUCTS
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((b, i) => (
              <BrandCard key={b.id} brand={b} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
