import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { FounderNote } from "@/components/site/founder-note";
import { Industries } from "@/components/site/industries";
import { ComplianceCalendar } from "@/components/site/compliance-calendar";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { BookingSection } from "@/components/site/booking-section";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <FounderNote />
        <Industries />
        <ComplianceCalendar />
        <Pricing />
        <Faq />
        <BookingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
