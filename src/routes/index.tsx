import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatWeDo } from "@/components/WhatWeDo";
import { DigitalUniverse } from "@/components/DigitalUniverse";
import { Ecosystem } from "@/components/Ecosystem";
import { WhyUs } from "@/components/WhyUs";
import { ServicesCta } from "@/components/ServicesCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

const title = "Den_enterprise — Bringing Local Businesses Into The Digital Universe";
const description =
  "Den_enterprise builds websites, creative designs and practical digital products that help local businesses step into the digital world.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <DigitalUniverse />
        <Ecosystem />
        <WhyUs />
        <ServicesCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
