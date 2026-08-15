import type { Metadata } from "next";
import { PageHero } from "@/components/site/section";
import { ComplianceCalendarFull } from "./calendar-full";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compliance Calendar — GST, TDS, ITR, ROC Deadlines",
  description:
    "A live, always-current compliance calendar for Indian founders. GST, TDS, ITR, advance tax and ROC deadlines for the next 12 months — with countdowns, filtering and a month-grid view.",
  alternates: { canonical: `${SITE.url}/resources/compliance-calendar` },
};

export default function ComplianceCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources · Compliance Calendar"
        title={
          <>
            Every deadline that matters.{" "}
            <span className="italic font-light">In one place.</span>
          </>
        }
        intro="GST, TDS, ITR, advance tax and ROC — the dates you can't afford to miss. Bookmark this page; we keep it current."
      />
      <ComplianceCalendarFull />
    </>
  );
}
