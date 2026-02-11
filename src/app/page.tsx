import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <WhyUsSection />
      <SolutionsGrid />
      <ServicesSection />
      <PricingSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactForm />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sirius Solutions Lab",
            url: "https://siriuslab.kz",
            logo: "https://siriuslab.kz/images/logos/logo.png",
            description:
              "Официальный партнер МойСклад, amoCRM и Bitrix24 в Казахстане. Автоматизация бизнес-процессов.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Алматы",
              addressCountry: "KZ",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+7-700-020-09-59",
              contactType: "sales",
              availableLanguage: ["Russian", "Kazakh"],
            },
            sameAs: ["https://instagram.com/siriuslab.kz"],
          }),
        }}
      />
    </>
  );
}
