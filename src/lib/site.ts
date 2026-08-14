// Central site configuration for Yaara Consultancy Services
// Single source of truth for nav, contact, industries, pricing, FAQs.

export const SITE = {
  name: "Yaara Consultancy Services",
  shortName: "Yaara",
  tagline: "Advise · Analyze · Achieve",
  domain: "yaaraconsultancyservices.com",
  url: "https://www.yaaraconsultancyservices.com",
  founder: "Anakali Pawan Kalyan",
  founderRole: "Founder & CEO",
  foundedYear: 2024,
  experienceYears: 5,
} as const;

export const CONTACT = {
  email: "contact@yaaraconsultancyservices.com",
  phone: "+91 76750 16737",
  phoneHref: "tel:+917675016737",
  whatsapp: "917675016737",
  whatsappHref: "https://wa.me/917675016737",
  address: {
    line1: "4, 5-512, SY NO.5/1, Room No.401",
    line2: "Near Sindhu Hospitals, Izzath Nagar",
    line3: "Khanamet, Hi Tech City",
    line4: "Serilingampally, Rangareddy",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500084",
    country: "India",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

export type Industry = {
  slug: string;
  title: string;
  blurb: string;
  desc: string;
  services: string[];
  challenges: { title: string; desc: string }[];
  outcomes: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "startups-founders",
    title: "Startups & Founders",
    blurb: "Incorporation, founder agreements, ESOPs, and investor-ready books from day zero.",
    desc: "From your first Pvt Ltd to your Series A — we handle the financial backbone so you can focus on product and customers. DPIIT recognition, ESOP pooling, cap table hygiene, and pitch-ready financials.",
    services: ["Business Registration", "Startup India Registration", "Virtual CFO", "Startup Fundraising Support", "ROC Compliance", "Bookkeeping"],
    challenges: [
      { title: "Which structure?", desc: "Pvt Ltd vs LLP vs OPC — we help you choose based on funding plans, not guesses." },
      { title: "ESOP design", desc: "Pool sizing, vesting, and valuation that founders and employees both trust." },
      { title: "Investor-ready books", desc: "Clean financials that survive due diligence without rework." },
    ],
    outcomes: ["DPIIT recognition filed", "Cap table with ESOP pool", "Pitch-ready MIS", "Compliant from day one"],
  },
  {
    slug: "freelancers-professionals",
    title: "Freelancers & Professionals",
    blurb: "ITR, advance tax, and GST the moment you cross the threshold.",
    desc: "Independent consultants, gig workers, and creators — your income doesn't fit a Form 16. We handle ITR-3/4, 44ADA presumptive, advance tax, and GST registration when your turnover crosses the line.",
    services: ["Income Tax Return Filing", "Advance Tax", "GST Registration & Filing", "Tax Planning & Strategy", "Bookkeeping"],
    challenges: [
      { title: "44ADA or not?", desc: "Presumptive taxation can save you real money if you're eligible — we confirm." },
      { title: "Advance tax timing", desc: "Lumpy income means careful instalment planning to avoid 234C interest." },
      { title: "GST threshold", desc: "Inter-state sales or e-commerce trigger GST early — we flag it before you're late." },
    ],
    outcomes: ["Correct ITR form", "Minimised legitimate tax", "GST registered on time", "Clear monthly numbers"],
  },
  {
    slug: "small-medium-businesses",
    title: "Small & Medium Businesses",
    blurb: "Monthly accounting, GST, TDS, and payroll — effectively your back office.",
    desc: "Established SMBs that need a reliable financial back office without hiring a full team. Monthly bookkeeping, GST, TDS, payroll, and MIS — on retainer, with a single point of contact.",
    services: ["Bookkeeping & Accounting", "GST Registration & Filing", "TDS Compliance", "Payroll Services", "MIS Reporting", "Cash Flow Management"],
    challenges: [
      { title: "Reconciliation gaps", desc: "Books never match bank — we close the gap monthly, not annually." },
      { title: "Payroll burden", desc: "PF, ESI, payslips, TDS — outsourced end-to-end." },
      { title: "Cash visibility", desc: "13-week rolling cash view so shortfalls never surprise you." },
    ],
    outcomes: ["Monthly closed books", "Zero late filings", "Clean payroll runs", "Founder-readable MIS"],
  },
  {
    slug: "doctors-lawyers-architects",
    title: "Doctors, Lawyers, Architects",
    blurb: "Regulated professionals — 44ADA, professional tax, GST on consultancy, audits where they apply.",
    desc: "Professionals in regulated practices have specific obligations: 44ADA presumptive taxation, professional tax, GST on consultancy income, and tax audit when receipts cross ₹50L. We know the nuances.",
    services: ["Income Tax Return Filing", "Professional Tax", "GST Registration & Filing", "Tax Audit", "Bookkeeping"],
    challenges: [
      { title: "44ADA limits", desc: "Eligibility and the ₹50L/₷2 crore thresholds — confirmed for your practice." },
      { title: "GST on services", desc: "Healthcare exemptions vs taxable consultancy — mapped correctly." },
      { title: "Audit trigger", desc: "Crossing ₹50L gross receipts triggers tax audit — we prepare in advance." },
    ],
    outcomes: ["Optimised 44ADA filing", "Correct GST treatment", "Audit-ready records", "PT compliance by state"],
  },
  {
    slug: "ngos-trusts",
    title: "NGOs & Trusts",
    blurb: "12A/80G registration, FCRA readiness, and the audits that keep donations valid.",
    desc: "Non-profits need more than bookkeeping — 12A exemption, 80G donor deductibility, FCRA for foreign contributions, and specific audit thresholds. We handle the compliance that keeps your mission funded.",
    services: ["Section 8 / NGO Registration", "Auditing", "ROC Compliance", "Bookkeeping", "Financial Statement Preparation"],
    challenges: [
      { title: "12A + 80G", desc: "Both registrations needed for tax-exempt status and deductible donations." },
      { title: "FCRA readiness", desc: "If you receive foreign funds, FCRA compliance is non-negotiable." },
      { title: "Audit thresholds", desc: "Specific turnover triggers for NGO audit — we track them." },
    ],
    outcomes: ["12A/80G registered", "FCRA-ready documentation", "Audit-ready books", "Donor-compliant reporting"],
  },
  {
    slug: "manufacturers-traders",
    title: "Manufacturers & Traders",
    blurb: "Cost accounting, inventory valuation, GST input credits, and project finance.",
    desc: "Inventory-heavy businesses need cost accounting, stock valuation, GST input credit reconciliation, and often project finance for expansion. We keep COGS accurate and credits claimed.",
    services: ["Cost Accounting", "Inventory Management & Valuation", "GST Registration & Filing", "Project Finance", "MIS Reporting"],
    challenges: [
      { title: "True product cost", desc: "Overhead allocation that reveals real per-product margins." },
      { title: "GST input credits", desc: "Every eligible credit reconciled and claimed — no leakage." },
      { title: "Inventory shrinkage", desc: "Physical vs book reconciliation to catch losses early." },
    ],
    outcomes: ["Accurate COGS", "Maximised input credits", "Clean stock records", "Lender-ready project reports"],
  },
];

export type PricingTier = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "1,999",
    period: "/mo",
    blurb: "For freelancers and solo professionals who want filings handled without thinking about them.",
    features: [
      "GSTR-3B monthly filing",
      "Annual ITR filing",
      "Advance tax reminders",
      "WhatsApp access, 1-day reply",
      "Quarterly compliance review",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growing",
    price: "4,999",
    period: "/mo",
    blurb: "For small businesses that need a real back office — books, GST, TDS, and payroll together.",
    features: [
      "Everything in Starter, plus:",
      "Monthly bookkeeping & reconciliation",
      "TDS payment + quarterly returns",
      "Payroll for up to 5 people",
      "Priority WhatsApp, same-day reply",
      "Annual ROC basics (where applicable)",
    ],
    cta: "Choose Growing",
    featured: true,
  },
  {
    name: "Established",
    price: "Custom",
    period: "",
    blurb: "For Pvt Ltd companies, audit cases, and multi-state operations — scoped to your reality.",
    features: [
      "Everything in Growing, plus:",
      "Full ROC compliance & annual filings",
      "Statutory audit via CA partner network",
      "Dedicated monthly review call",
      "Multi-state GST handling",
      "Custom reporting cadence",
    ],
    cta: "Scope a quote",
    featured: false,
  },
];

export type FlatFee = {
  service: string;
  fee: string;
  note: string;
};

export const FLAT_FEES: FlatFee[] = [
  { service: "GST Registration", fee: "1,499", note: "one-time, incl. first return" },
  { service: "ITR — salaried", fee: "999", note: "per filing" },
  { service: "ITR — business / 44ADA", fee: "2,499", note: "per filing" },
  { service: "Pvt Ltd incorporation", fee: "6,999", note: "+ govt. fees" },
  { service: "LLP incorporation", fee: "5,499", note: "+ govt. fees" },
  { service: "OPC incorporation", fee: "5,999", note: "+ govt. fees" },
  { service: "Udyam (MSME)", fee: "999", note: "one-time" },
  { service: "Trademark filing", fee: "3,499", note: "+ govt. fees" },
  { service: "DSC Class 3", fee: "1,499", note: "2-year validity" },
  { service: "ROC annual filing", fee: "from 4,999", note: "per form" },
  { service: "GST audit (9C)", fee: "from 14,999", note: "per year" },
  { service: "Tax audit (44AB)", fee: "from 24,999", note: "per year" },
  { service: "Business valuation", fee: "from 19,999", note: "one-time" },
  { service: "Virtual CFO", fee: "from 24,999", note: "per month" },
  { service: "Financial health checkup", fee: "from 9,999", note: "one-time" },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Are you a Chartered Accountancy firm?",
    a: "No — and we think being straight about that matters more than pretending otherwise. Yaara is an accounting, tax, and compliance consultancy run by a practitioner with five years of hands-on accounting experience. For work that legally requires a practicing Chartered Accountant's signature — statutory audits and certain certifications — we engage an empanelled network of independent CAs. That's the same model every reputable compliance platform in India uses, and it means your sign-off is real, verifiable, and properly accountable.",
  },
  {
    q: "How are you different from ClearTax, Vakilsearch, or IndiaFilings?",
    a: "Those are good portals. The difference is who handles your work. With a portal, you're often a ticket in a queue; with Yaara, you get a single person who knows your name, your books, and your next deadline — reachable on WhatsApp, replying within a working day. If you want software, use a portal. If you want a person, use us.",
  },
  {
    q: "What if I've already missed a deadline?",
    a: "It happens more often than you'd think, and it's usually fixable. We assess what's pending, file the overdue return(s), handle any late fee or notice that's come in, and bring you fully current — then put you on a schedule so it doesn't happen again. The earlier you tell us, the smaller the damage.",
  },
  {
    q: "How do you handle my documents and data?",
    a: "Documents come in via WhatsApp Business or a secure, encrypted upload — whichever you prefer. We don't share your data with third parties, and we retain records only as long as needed for compliance and statutory limitation periods. You can request a copy or deletion of your records at any time.",
  },
  {
    q: "Do you work with businesses outside Hyderabad?",
    a: "Yes. GST, TDS, ITR, and ROC are central regimes — we handle them nationwide. A few things are state-specific (professional tax, certain trade licences), and we'll tell you upfront if your state needs a local touch or a partner referral. Our office is in Hyderabad but our clients are pan-India.",
  },
  {
    q: "What's included in the free 20-minute consultation?",
    a: "A plain-English map of what your business actually owes, a transparent price, and a recommended next step. No sales script, no pressure to sign. If we're not the right fit, we'll say so and point you somewhere better.",
  },
  {
    q: "Can you take over mid-year from another accountant?",
    a: "Yes — this is one of the most common ways clients arrive. We do a handover review of what's been filed and what's pending, reconcile the books to date, and pick up cleanly from where your previous accountant left off. We'll also flag anything that looks off.",
  },
  {
    q: "How do payments work?",
    a: "Retainer fees are billed monthly in advance; one-off services are invoiced at engagement. We accept UPI, bank transfer, and cheques. All invoices are GST-compliant where applicable.",
  },
];

export const STATS = [
  { value: "5", unit: "yrs", label: "hands-on accounting experience" },
  { value: "30", unit: "+", label: "compliance services under one roof" },
  { value: "1", unit: "day", label: "typical response time, working days" },
  { value: "CA", unit: "network", label: "empanelled partners for statutory sign-off" },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Consult", desc: "A free 20-minute call. We understand your business and what's actually due — no jargon, no pressure." },
  { n: "02", title: "Document", desc: "You share what's needed over WhatsApp or a secure upload. We confirm receipt and flag anything missing immediately." },
  { n: "03", title: "File", desc: "We prepare, walk you through it, and file with the right authority — accurately and before the deadline." },
  { n: "04", title: "Confirm", desc: "You get filed acknowledgements, a clear record, and the next deadline already on your calendar." },
];
