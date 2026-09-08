import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";
import { t } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: t.ar.metaTitle },
      { name: "description", content: t.ar.metaDescription },
      { property: "og:title", content: t.ar.metaTitle },
      { property: "og:description", content: t.ar.metaDescription },
      { property: "og:locale", content: "ar_EG" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: t.en.metaTitle },
      { name: "twitter:description", content: t.en.metaDescription },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Legal Point",
          description: t.en.metaDescription,
          areaServed: "Egypt",
          email: "info@legalpoint.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Alexandria",
            addressCountry: "EG",
          },
          openingHours: "Sa-Th 09:00-18:00",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { isAr } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Stats />
        <Process />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <Toaster position={isAr ? "top-left" : "top-right"} />
    </div>
  );
}
