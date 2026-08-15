import {
  Receipt,
  FileText,
  Building2,
  BadgeCheck,
  Landmark,
  BookOpen,
  Users,
  Percent,
  Briefcase,
  ShieldCheck,
  KeyRound,
  ClipboardCheck,
  ScrollText,
  TrendingUp,
  Wallet,
  Banknote,
  PieChart,
  LineChart,
  Handshake,
  Search,
  Factory,
  Scale,
  FileCheck2,
  Stethoscope,
  GraduationCap,
  HeartPulse,
  Calculator,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory =
  | "Tax & Statutory Compliance"
  | "Business Registration & Corporate"
  | "Accounting & Bookkeeping"
  | "Payroll & HR Compliance"
  | "Advisory & Growth";

export type Service = {
  slug: string;
  title: string;
  shortTitle?: string;
  icon: LucideIcon;
  category: ServiceCategory;
  tagline: string; // one-line "why it matters"
  summary: string; // 1-2 sentences for overview cards
  whoNeeds: string[]; // concrete scenarios
  process: { step: string; desc: string }[];
  documents: string[];
  timeline: string;
  pricing: string;
  faqs: { q: string; a: string }[];
  featured?: boolean; // show on home + services hero
  comingSoon?: boolean;
};

export const CATEGORY_ORDER: ServiceCategory[] = [
  "Tax & Statutory Compliance",
  "Business Registration & Corporate",
  "Accounting & Bookkeeping",
  "Payroll & HR Compliance",
  "Advisory & Growth",
];

export const CATEGORY_DESCRIPTIONS: Record<ServiceCategory, string> = {
  "Tax & Statutory Compliance":
    "GST, income tax, TDS and the audits that keep you on the right side of every deadline.",
  "Business Registration & Corporate":
    "From your first incorporation to ongoing ROC filings, licences and trademarks.",
  "Accounting & Bookkeeping":
    "Clean books, real reporting, and the numbers you need to actually run the business.",
  "Payroll & HR Compliance":
    "Salaries, PF, ESI and full-and-final — handled accurately and on time.",
  "Advisory & Growth":
    "Forecasting, fundraising readiness and the financial clarity founders need to scale.",
};

export const SERVICES: Service[] = [
  // ---------- Tax & Statutory Compliance ----------
  {
    slug: "gst-registration-filing",
    title: "GST Registration & Filing",
    icon: Receipt,
    category: "Tax & Statutory Compliance",
    tagline: "Your GSTIN, monthly returns and reconciliations — all on time.",
    summary:
      "From your first GSTIN to monthly GSTR-3B and annual returns, filed accurately and reconciled to your books.",
    whoNeeds: [
      "Businesses crossing the ₹40L / ₹20L turnover threshold",
      "E-commerce sellers and inter-state traders",
      "Anyone already registered who keeps missing or misfiling returns",
    ],
    process: [
      { step: "Assess", desc: "We confirm your turnover, state(s) of operation, and the right scheme (regular / composition)." },
      { step: "Register", desc: "Apply for GSTIN, handle Aadhaar auth, and deliver your 15-digit number." },
      { step: "File monthly", desc: "GSTR-1 and GSTR-3B each month, reconciled to your books and IT system." },
      { step: "Reconcile", desc: "Annual GSTR-9 + GSTR-9C where applicable, matched to purchases." },
    ],
    documents: ["PAN of business & owners", "Aadhaar of owners", "Address proof of place of business", "Bank details / cancelled cheque", "Photographs of premises", "Digital Signature (DSC) for companies"],
    timeline: "Registration: 5–7 working days. Monthly filings: due by 20th.",
    pricing: "Registration ₹1,499 · Monthly filing from ₹999/mo",
    faqs: [
      { q: "When do I actually need to register for GST?", a: "When your aggregate turnover crosses ₹40 lakh (goods) or ₹20 lakh (services), or immediately if you sell inter-state or through e-commerce operators. We'll confirm your exact trigger before you pay for anything." },
      { q: "What happens if I miss a monthly return?", a: "A late fee of ₹50/day (₹20/day for nil returns) applies, capped per return. Repeated misses trigger notices. We file pending returns, handle the fee, and put you on a schedule so it doesn't recur." },
      { q: "Can you take over mid-year from another accountant?", a: "Yes — we review what's been filed, reconcile to date, and pick up cleanly. We'll flag anything that looks off in the prior filings too." },
    ],
    featured: true,
  },
  {
    slug: "income-tax-return-filing",
    title: "Income Tax Return (ITR) Filing",
    icon: FileText,
    category: "Tax & Statutory Compliance",
    tagline: "The right ITR form, every deduction you're entitled to.",
    summary:
      "Salaried, business, capital gains, or presumptive — filed with the correct form and every legitimate deduction claimed.",
    whoNeeds: [
      "Salaried individuals with income above ₹2.5L",
      "Freelancers and consultants (ITR-3 / 4)",
      "Businesses and professionals needing audit or presumptive filing",
    ],
    process: [
      { step: "Gather", desc: "Form 16, AIS, investment proofs, and business books where relevant." },
      { step: "Compute", desc: "We compute taxable income, apply deductions, and show you the draft before filing." },
      { step: "File", desc: "We e-file the correct ITR form and verify (Aadhaar OTP / DSC)." },
      { step: "Acknowledge", desc: "You receive the acknowledgement and we track processing + refund." },
    ],
    documents: ["PAN", "Aadhaar", "Form 16 / salary slips", "Bank statements", "Investment & deduction proofs (80C, 80D, etc.)", "Capital gains statements", "Business books (if applicable)"],
    timeline: "3–5 working days from documents. ITR due: 31 Jul (individuals), 31 Oct (audit cases).",
    pricing: "Salaried ₹999 · Business / 44ADA ₹2,499",
    faqs: [
      { q: "Which ITR form applies to me?", a: "Salaried with income under ₹50L → ITR-1. House property + salary → ITR-2. Business / profession → ITR-3, or ITR-4 under presumptive (44AD/44ADA). We pick the right one for you." },
      { q: "My employer already deducted TDS. Do I still need to file?", a: "Yes — TDS deduction and filing the return are separate obligations. If your income exceeds the basic exemption, filing is mandatory even with full TDS." },
      { q: "How are refunds processed?", a: "After e-verification, the CPC processes the return and credits any refund directly to your bank account. We track it and follow up if there's a delay." },
    ],
    featured: true,
  },
  {
    slug: "tds-compliance",
    title: "TDS Compliance",
    icon: Percent,
    category: "Tax & Statutory Compliance",
    tagline: "Deduct, deposit, and file quarterly — without the scramble.",
    summary:
      "TAN registration, monthly TDS deposit, quarterly returns and Form 16/16A — the full cycle handled quietly.",
    whoNeeds: [
      "Employers paying salary",
      "Businesses paying rent, professional fees, or commission above thresholds",
      "Any entity required to deduct tax at source",
    ],
    process: [
      { step: "TAN", desc: "Obtain your Tax Deduction Account Number if not held." },
      { step: "Deduct & deposit", desc: "Monthly deduction at correct rates, deposited by the 7th." },
      { step: "Quarterly return", desc: "File 24Q / 26Q / 27Q / 27EQ by due dates." },
      { step: "Certificates", desc: "Issue Form 16 (annual) and Form 16A (quarterly) to deductees." },
    ],
    documents: ["TAN", "PAN of deductor & deductees", "Payment details with sections", "Challan for deposits"],
    timeline: "Monthly deposit by 7th · Quarterly returns by 31 Jul / 31 Oct / 31 Jan / 31 May.",
    pricing: "From ₹1,499/quarter",
    faqs: [
      { q: "What are the common TDS sections I should know?", a: "194C (contractor), 194J (professional), 194I (rent), 194Q (purchase of goods), 192 (salary). We map every payment to the right section so nothing is missed." },
      { q: "What's the penalty for late deposit?", a: "1% interest per month on the delayed amount, plus a late fee on the return. We keep you ahead of the 7th so this never applies." },
    ],
  },
  {
    slug: "professional-tax",
    title: "Professional Tax",
    icon: Briefcase,
    category: "Tax & Statutory Compliance",
    tagline: "State-wise registration and returns, handled in the background.",
    summary:
      "Professional tax registration and returns for the entity and employees, scoped to your state's rules.",
    whoNeeds: [
      "Employers in states that levy professional tax",
      "Professionals earning above the state threshold",
      "Companies needing to regularise employee PT deductions",
    ],
    process: [
      { step: "Register", desc: "State-specific RC for the entity and employees." },
      { step: "Deduct", desc: "Monthly PT deducted from salaries per slab." },
      { step: "File", desc: "Monthly / annual returns as your state requires." },
    ],
    documents: ["PAN & GSTIN", "Incorporation / partnership deed", "Employee salary details", "Bank details"],
    timeline: "Registration 7–15 days (state-dependent).",
    pricing: "From ₹999/mo",
    faqs: [
      { q: "Is professional tax the same everywhere?", a: "No — it's a state levy and each state has its own slabs, due dates and return formats. Telangana, Karnataka, Maharashtra and others differ significantly. We handle the specifics for your state." },
    ],
  },
  {
    slug: "gst-audit",
    title: "GST Audit (GSTR-9C)",
    icon: ClipboardCheck,
    category: "Tax & Statutory Compliance",
    tagline: "Annual reconciliation and reconciliation statement, signed off.",
    summary:
      "GSTR-9 annual return and GSTR-9C reconciliation statement for businesses above the turnover threshold, via our CA partner network.",
    whoNeeds: [
      "Businesses with aggregate turnover above ₹2 crore (GSTR-9)",
      "Businesses above ₹5 crore requiring GSTR-9C reconciliation",
    ],
    process: [
      { step: "Compile", desc: "Gather annual GST data, books, and reconciliations." },
      { step: "Reconcile", desc: "Match GSTR-9 with audited financials." },
      { step: "Certify", desc: "CA partner certifies GSTR-9C where applicable." },
      { step: "File", desc: "Submit annual return + reconciliation before due date." },
    ],
    documents: ["Audited financial statements", "GSTR-1 & 3B for the year", "Books of accounts", "Purchase & sales registers"],
    timeline: "Due 31st December of following FY.",
    pricing: "From ₹14,999",
    faqs: [
      { q: "Who signs off the GSTR-9C?", a: "A practicing Chartered Accountant or Cost Accountant from our empanelled partner network — the certification is statutory and must be signed by a CA/CMA." },
    ],
  },
  {
    slug: "tax-audit",
    title: "Tax Audit (Section 44AB)",
    icon: ShieldCheck,
    category: "Tax & Statutory Compliance",
    tagline: "Statutory tax audit, signed by a practicing CA.",
    summary:
      "Section 44AB tax audit for businesses and professionals above the prescribed turnover, completed via our CA partner network.",
    whoNeeds: [
      "Businesses with turnover above ₹1 crore (₹10 crore with digital transactions)",
      "Professionals with gross receipts above ₹50 lakh",
      "Those opting out of presumptive taxation under 44AD",
    ],
    process: [
      { step: "Plan", desc: "Understand your books and the applicable audit threshold." },
      { step: "Audit", desc: "CA partner examines books, disallowances, and 26AS / TDS matching." },
      { step: "Report", desc: "Form 3CA/3CB and 3CD prepared and signed." },
      { step: "File", desc: "Filed electronically with your ITR." },
    ],
    documents: ["Books of accounts", "Bank statements", "TDS & GST returns", "Sales & purchase registers", "Expense vouchers"],
    timeline: "Due by 30th October (audit cases).",
    pricing: "From ₹24,999",
    faqs: [
      { q: "Is the tax audit done by you directly?", a: "The audit and Form 3CB-3CD certification is signed by a practicing Chartered Accountant from our empanelled partner network. We coordinate the entire process end-to-end." },
    ],
  },
  {
    slug: "tax-planning-strategy",
    title: "Tax Planning & Strategy",
    icon: PieChart,
    category: "Tax & Statutory Compliance",
    tagline: "Plan through the year, not just at filing season.",
    summary:
      "Structured tax planning to legitimately minimise your liability — across income, investments, and business structure.",
    whoNeeds: [
      "High-income individuals and professionals",
      "Businesses structuring transactions for tax efficiency",
      "Founders planning exits or capital gains",
    ],
    process: [
      { step: "Review", desc: "We map your current income, investments and tax exposure." },
      { step: "Plan", desc: "Identify deductions, exemptions and structure optimisations." },
      { step: "Execute", desc: "Implement through the year with checkpoints." },
    ],
    documents: ["Income details", "Investment portfolio", "Business financials"],
    timeline: "Ongoing — ideally starts in April, reviewed quarterly.",
    pricing: "From ₹9,999",
    faqs: [
      { q: "Is tax planning legal?", a: "Absolutely — tax planning (using legitimate deductions, exemptions and structures) is your right. Tax evasion is illegal; tax planning is not. We stay firmly on the legal side." },
    ],
  },
  {
    slug: "advance-tax",
    title: "Advance Tax",
    icon: Wallet,
    category: "Tax & Statutory Compliance",
    tagline: "Pay in four instalments — no surprises at year-end.",
    summary:
      "Estimate your year-end liability and pay advance tax in the four prescribed instalments to avoid interest under 234B/C.",
    whoNeeds: [
      "Anyone with estimated tax liability above ₹10,000 after TDS",
      "Businesses and freelancers with lumpy income",
    ],
    process: [
      { step: "Estimate", desc: "We project your annual income and net liability." },
      { step: "Schedule", desc: "15% / 45% / 75% / 100% by 15 Jun, 15 Sep, 15 Dec, 15 Mar." },
      { step: "Pay", desc: "We deposit each instalment and confirm challans." },
    ],
    documents: ["Income projection", "TDS already deducted"],
    timeline: "4 instalments: 15 Jun, 15 Sep, 15 Dec, 15 Mar.",
    pricing: "Included with retainer · One-off ₹1,499",
    faqs: [
      { q: "What if I overpay advance tax?", a: "Any excess is refunded with your ITR, often with interest under section 244A. We reconcile this at year-end." },
    ],
  },

  // ---------- Business Registration & Corporate ----------
  {
    slug: "business-registration",
    title: "Business Registration",
    icon: Building2,
    category: "Business Registration & Corporate",
    tagline: "Pvt Ltd, LLP, Partnership or OPC — incorporated end-to-end.",
    summary:
      "Private Limited, LLP, Partnership, or One Person Company — incorporated with DSC, DIN, name reservation, MOA/AOA, PAN and TAN in one pass.",
    whoNeeds: [
      "Founders starting a new venture",
      "Partnerships formalising their arrangement",
      "Solo founders weighing OPC vs Pvt Ltd",
    ],
    process: [
      { step: "Advise", desc: "We help you choose the right structure based on liability, taxation and funding plans." },
      { step: "Name", desc: "Reserve your company name via SPICe+ Part A." },
      { step: "File", desc: "DSC, DIN, MOA/AOA and incorporation filed together." },
      { step: "Deliver", desc: "Certificate of Incorporation, PAN, TAN, EPFO & ESIC registrations." },
    ],
    documents: ["PAN & Aadhaar of all directors/partners", "Address proof of registered office", "Utility bill (not older than 2 months)", "Photos", "DSC applications"],
    timeline: "10–15 working days.",
    pricing: "Pvt Ltd ₹6,999 · LLP ₹5,499 · OPC ₹5,999 (+ govt. fees)",
    faqs: [
      { q: "Pvt Ltd vs LLP — which should I pick?", a: "Pvt Ltd if you plan to raise external funding (investors prefer it). LLP if you want lower compliance burden and flexibility. We walk you through the trade-offs for your specific case." },
      { q: "What's included in the fee?", a: "DSC for two directors, DIN, name reservation, MOA/AOA drafting, incorporation filing, PAN, TAN, and EPFO/ESIC. Government fees are additional and depend on authorised capital." },
    ],
    featured: true,
  },
  {
    slug: "udyam-msme-registration",
    title: "Udyam (MSME) Registration",
    icon: BadgeCheck,
    category: "Business Registration & Corporate",
    tagline: "Unlock subsidies, priority credit and MSME protection.",
    summary:
      "Register your business under the Udyam portal to access collateral-free loans, subsidies, and MSME procurement protection.",
    whoNeeds: [
      "Any micro, small or medium enterprise",
      "Businesses seeking lower interest working capital loans",
      "Vendors wanting to sell to government / large buyers",
    ],
    process: [
      { step: "Eligibility", desc: "Confirm your classification (micro/small/medium) by investment & turnover." },
      { step: "Register", desc: "File on the Udyam portal with Aadhaar-linked verification." },
      { step: "Deliver", desc: "Permanent Udyam certificate, valid lifetime." },
    ],
    documents: ["Aadhaar of proprietor / partner", "PAN of business", "Business activity & bank details"],
    timeline: "1–2 working days.",
    pricing: "₹999",
    faqs: [
      { q: "Is Udyam registration mandatory?", a: "Not legally mandatory, but practically essential — it unlocks priority sector lending, protection against delayed payments (MSME Samadhaan), and subsidies. Free on the government portal; we charge for the hassle of getting it right." },
    ],
  },
  {
    slug: "roc-compliance-annual-filings",
    title: "ROC Compliance & Annual Filings",
    icon: Landmark,
    category: "Business Registration & Corporate",
    tagline: "Keep your company's statutory record spotless.",
    summary:
      "Annual ROC filings — AOC-4, MGT-7, DIR-3 KYC, board resolutions, and statutory registers — filed accurately and on time.",
    whoNeeds: [
      "Every registered company (Pvt Ltd, Ltd, OPC)",
      "Companies that have fallen behind on filings",
      "Directors needing DIR-3 KYC",
    ],
    process: [
      { step: "Prepare", desc: "Draft financials, board resolutions, and statutory registers." },
      { step: "File AOC-4", desc: "Financial statements filed within 30 days of AGM." },
      { step: "File MGT-7", desc: "Annual return filed within 60 days of AGM." },
      { step: "KYC & more", desc: "DIR-3 KYC by 30 Sep, plus ADT-1 and event-based filings." },
    ],
    documents: ["Audited financials", "Board minutes", "Shareholder details", "Statutory registers"],
    timeline: "AOC-4: 30 days post-AGM · MGT-7: 60 days post-AGM · DIR-3 KYC: 30 Sep.",
    pricing: "From ₹4,999 per form · Annual package from ₹14,999",
    faqs: [
      { q: "What happens if I miss ROC filings?", a: "A flat ₹100/day penalty per form applies, and directors' DINs can be deactivated after repeated defaults. We bring companies current and set up a calendar so it doesn't recur." },
    ],
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    icon: ShieldCheck,
    category: "Business Registration & Corporate",
    tagline: "Protect your name before someone else does.",
    summary:
      "Trademark search, application, objection handling, and registration — protecting your brand identity for 10 years.",
    whoNeeds: [
      "Any business with a unique name, logo, or tagline",
      "Brands expanding into new product categories",
      "Founders before launching publicly",
    ],
    process: [
      { step: "Search", desc: "Public registry search for conflicts in your class." },
      { step: "Apply", desc: "File under the right class(es) with your logo/wordmark." },
      { step: "Examine", desc: "Respond to examiner objections if raised." },
      { step: "Register", desc: "Trademark journal publication, then registration certificate." },
    ],
    documents: ["Logo / wordmark", "Business details", "Power of Attorney (TM-48)", "User affidavit (if claiming prior use)"],
    timeline: "6–18 months to registration; ™ symbol usable from application date.",
    pricing: "₹3,499 (+ govt. fees ₹4,500 per class)",
    faqs: [
      { q: "When can I use the ™ and ® symbols?", a: "Use ™ from the date you file the application. Use ® only after the trademark is fully registered and the certificate is issued." },
    ],
  },
  {
    slug: "digital-signature-certificate",
    title: "Digital Signature Certificate (DSC)",
    icon: KeyRound,
    category: "Business Registration & Corporate",
    tagline: "Class 3 DSC for filing, tenders and e-verification.",
    summary:
      "Class 3 DSC issuance and renewal — valid for e-filing of returns, e-tendering, and signing documents digitally.",
    whoNeeds: [
      "Directors of companies filing MCA returns",
      "Businesses participating in e-tenders",
      "Anyone needing to e-sign GST / income tax filings",
    ],
    process: [
      { step: "Apply", desc: "Submit identity & address verification." },
      { step: "Issue", desc: "Class 3 DSC issued on USB token or cloud." },
      { step: "Renew", desc: "We track the 2-year validity and renew before expiry." },
    ],
    documents: ["PAN & Aadhaar", "Passport-size photo", "Address proof"],
    timeline: "2–4 working days.",
    pricing: "₹1,499 (2-year validity)",
    faqs: [
      { q: "USB token vs cloud DSC?", a: "USB tokens are the traditional option; cloud DSCs let you sign from any device. We recommend cloud for most founders unless you specifically need the hardware token for e-tenders." },
    ],
  },
  {
    slug: "business-licenses",
    title: "Business Licenses",
    icon: ScrollText,
    category: "Business Registration & Corporate",
    tagline: "Shop & Establishment, FSSAI, Trade License, IEC — what you need, where you are.",
    summary:
      "Every licence your business legally needs — Shop & Establishment, FSSAI, Trade License, Import-Export Code and more.",
    whoNeeds: [
      "Any business with a physical premises",
      "Food businesses (manufacturers, restaurants, traders)",
      "Importers and exporters needing IEC",
    ],
    process: [
      { step: "Identify", desc: "We map the licences your specific business and location require." },
      { step: "Apply", desc: "File applications with the relevant authorities." },
      { step: "Deliver", desc: "Licence certificate, valid for the prescribed period." },
    ],
    documents: ["Business registration proof", "Premises address & rental agreement", "PAN & photos", "Activity-specific documents"],
    timeline: "Varies by licence (1 day to 30 days).",
    pricing: "From ₹1,499 per licence",
    faqs: [
      { q: "Which licences does my business need?", a: "It depends on your activity and location. A typical retail store needs Shop & Establishment + Trade License + GST. A food business adds FSSAI. An importer needs IEC. We'll give you a specific checklist." },
    ],
  },
  {
    slug: "startup-india-registration",
    title: "Startup India Registration",
    icon: TrendingUp,
    category: "Business Registration & Corporate",
    tagline: "DPIIT recognition and the tax benefits it unlocks.",
    summary:
      "DPIIT recognition as a startup under the Startup India scheme — unlocking tax holiday under Section 80-IAC and easier compliance.",
    whoNeeds: [
      "Incorporated startups under 10 years old",
      "Innovative businesses with turnover under ₹100 crore",
      "Founders seeking the 3-year tax holiday",
    ],
    process: [
      { step: "Prepare", desc: "Innovation pitch, incorporation docs, and sector details." },
      { step: "Apply", desc: "File on the Startup India portal for DPIIT recognition." },
      { step: "Tax exemption", desc: "Apply for 80-IAC tax holiday if eligible." },
    ],
    documents: ["Certificate of Incorporation", "PAN", "Pitch deck / innovation note", "Director details"],
    timeline: "10–20 working days.",
    pricing: "₹4,999",
    faqs: [
      { q: "Does every startup get the tax holiday?", a: "No — DPIIT recognition is separate from the 80-IAC tax holiday. Recognition is broad; the tax holiday requires inter-ministerial board approval. We help you assess eligibility honestly." },
    ],
  },
  {
    slug: "section-8-ngo-registration",
    title: "Section 8 / NGO Registration",
    icon: HeartPulse,
    category: "Business Registration & Corporate",
    tagline: "Set up a non-profit with 12A/80G tax-exempt status.",
    summary:
      "Section 8 company incorporation plus 12A and 80G registrations — enabling tax-exempt status and deductible donations.",
    whoNeeds: [
      "Founders starting a non-profit or charitable trust",
      "NGOs wanting to receive tax-deductible donations",
      "Existing trusts/societies formalising as Section 8",
    ],
    process: [
      { step: "Incorporate", desc: "Section 8 company set-up via SPICe+." },
      { step: "12A", desc: "Income tax exemption registration." },
      { step: "80G", desc: "Donor tax-deduction registration." },
      { step: "FCRA (optional)", desc: "If you plan to receive foreign contributions." },
    ],
    documents: ["Director details", "Memorandum & Articles", "Object & activity plan", "Registered office proof"],
    timeline: "30–60 days for incorporation + registrations.",
    pricing: "From ₹14,999",
    faqs: [
      { q: "What's the difference between 12A and 80G?", a: "12A exempts the NGO's own income from tax. 80G allows donors to claim a deduction on their donation. Most legitimate NGOs want both." },
    ],
  },

  // ---------- Accounting & Bookkeeping ----------
  {
    slug: "bookkeeping-accounting",
    title: "Bookkeeping & Accounting",
    icon: BookOpen,
    category: "Accounting & Bookkeeping",
    tagline: "Clean, reconciled books — and reports you can actually read.",
    summary:
      "Monthly bookkeeping in your preferred tool, fully reconciled to bank and GST, with reports that make sense to a non-accountant.",
    whoNeeds: [
      "Any business needing accurate monthly books",
      "Founders tired of messy spreadsheets",
      "Companies preparing for audit or fundraising",
    ],
    process: [
      { step: "Set up", desc: "We configure your accounting tool (Tally / Zoho / QuickBooks) properly." },
      { step: "Record", desc: "Monthly recording of sales, purchases, expenses, and bank entries." },
      { step: "Reconcile", desc: "Bank, GST, and TDS reconciliation every month." },
      { step: "Report", desc: "P&L, balance sheet, and a plain-English monthly summary." },
    ],
    documents: ["Bank statements", "Sales & purchase invoices", "Expense receipts", "GST returns", "Payroll data"],
    timeline: "Monthly — closed within 7 days of month-end.",
    pricing: "From ₹4,999/mo",
    faqs: [
      { q: "Which accounting tool do you use?", a: "Your choice — Tally Prime, Zoho Books, QuickBooks, or even a custom sheet for very small operations. We're tool-agnostic and work with what suits your scale." },
      { q: "Do you take over existing books?", a: "Yes. We review your current books, clean up any misclassifications, and continue from there. Most clients arrive with 6–12 months of unorganised data." },
    ],
    featured: true,
  },
  {
    slug: "bank-reconciliation",
    title: "Bank Reconciliation",
    icon: Banknote,
    category: "Accounting & Bookkeeping",
    tagline: "Every rupee accounted for, every month.",
    summary:
      "Monthly bank reconciliation matching your books to actual bank balances — catching errors, duplicates and missing entries.",
    whoNeeds: [
      "Businesses with multiple bank accounts",
      "Anyone noticing book vs bank balance mismatches",
      "Companies preparing for audit",
    ],
    process: [
      { step: "Match", desc: "Compare books against bank statements entry by entry." },
      { step: "Identify", desc: "Flag missing entries, duplicates, and uncleared items." },
      { step: "Adjust", desc: "Post correcting entries and clear reconciling items." },
    ],
    documents: ["Bank statements", "Books of accounts", "Cheque & deposit registers"],
    timeline: "Monthly, within 5 days of month-end.",
    pricing: "From ₹1,499/mo",
    faqs: [
      { q: "Why does my bank balance never match my books?", a: "Usually because of uncleared cheques, unrecorded bank charges, or timing differences. Regular reconciliation eliminates the gap — and surfaces any errors early." },
    ],
  },
  {
    slug: "accounts-receivable-payable",
    title: "Accounts Receivable / Payable",
    icon: Handshake,
    category: "Accounting & Bookkeeping",
    tagline: "Know who owes you — and who you owe.",
    summary:
      "AR/AP management with ageing analysis, follow-up schedules, and clear visibility on your working capital position.",
    whoNeeds: [
      "Businesses with credit sales or supplier credit",
      "Companies struggling with cash flow timing",
      "Anyone wanting tighter debtor follow-up",
    ],
    process: [
      { step: "Record", desc: "Track every invoice raised and bill received." },
      { step: "Age", desc: "Ageing buckets: 0–30, 31–60, 61–90, 90+ days." },
      { step: "Follow up", desc: "Scheduled debtor follow-ups; creditor payment calendar." },
    ],
    documents: ["Sales invoices", "Purchase bills", "Payment receipts", "Supplier statements"],
    timeline: "Ongoing — weekly ageing reports.",
    pricing: "From ₹2,499/mo",
    faqs: [
      { q: "Can you chase my customers for payment?", a: "We prepare professional follow-up communications and reminders for your approval; the actual sending can be done by you or on your behalf, depending on your preference." },
    ],
  },
  {
    slug: "mis-reporting",
    title: "MIS Reporting",
    icon: PieChart,
    category: "Accounting & Bookkeeping",
    tagline: "A dashboard you can actually run the business from.",
    summary:
      "Custom monthly MIS reports — P&L, cash flow, unit economics, KPIs — formatted for founders, not accountants.",
    whoNeeds: [
      "Founders wanting real visibility on performance",
      "Businesses preparing for investor reporting",
      "Teams needing consistent monthly metrics",
    ],
    process: [
      { step: "Define", desc: "We agree the 8–12 metrics that matter for your business." },
      { step: "Compile", desc: "Monthly data pulled and structured from your books." },
      { step: "Present", desc: "A one-page report with trends, variance, and commentary." },
    ],
    documents: ["Books of accounts", "Prior period reports", "Business KPI definitions"],
    timeline: "Monthly, within 10 days of month-end.",
    pricing: "From ₹3,499/mo",
    faqs: [
      { q: "What goes in a typical MIS?", a: "P&L summary, cash position, top customers, AR/AP ageing, burn rate (for startups), and 3–5 business-specific KPIs. We tailor the format to how you actually make decisions." },
    ],
  },
  {
    slug: "financial-statement-preparation",
    title: "Financial Statement Preparation",
    icon: FileCheck2,
    category: "Accounting & Bookkeeping",
    tagline: "P&L, balance sheet, notes — audit-ready.",
    summary:
      "Preparation of the full set of financial statements — Balance Sheet, P&L, notes, and schedules — in the format auditors and regulators expect.",
    whoNeeds: [
      "Companies preparing for statutory audit",
      "Businesses needing bank-ready financials",
      "Founders seeking investment (investor due diligence)",
    ],
    process: [
      { step: "Close books", desc: "Complete and reconcile the year's accounts." },
      { step: "Prepare", desc: "Balance sheet, P&L, cash flow, schedules, and notes." },
      { step: "Review", desc: "Internal review for classification and disclosure." },
    ],
    documents: ["Trial balance", "Ledgers", "Bank statements", "Supporting vouchers"],
    timeline: "2–3 weeks from complete books.",
    pricing: "From ₹9,999",
    faqs: [
      { q: "Are these audited financials?", a: "These are management-prepared financial statements. For statutory audit certification, we coordinate with our CA partner network to sign off." },
    ],
  },
  {
    slug: "cash-flow-management",
    title: "Cash Flow Management",
    icon: Wallet,
    category: "Accounting & Bookkeeping",
    tagline: "Know your cash position before it becomes a crisis.",
    summary:
      "Cash flow forecasting and monitoring — 13-week rolling view, working capital tracking, and early warnings.",
    whoNeeds: [
      "Growing businesses with tight working capital",
      "Startups managing runway",
      "Anyone who has been surprised by a cash shortfall",
    ],
    process: [
      { step: "Map", desc: "Weekly inflows and outflows for the next 13 weeks." },
      { step: "Monitor", desc: "Weekly check-in on actuals vs forecast." },
      { step: "Adjust", desc: "Reforecast and flag risks early." },
    ],
    documents: ["Bank balances", "AR/AP ageing", "Committed expenses", "Sales pipeline"],
    timeline: "Ongoing — weekly updates.",
    pricing: "From ₹3,999/mo",
    faqs: [
      { q: "How accurate is a 13-week forecast?", a: "Weeks 1–4 are highly accurate (committed), weeks 5–9 are reasonable, weeks 10–13 are directional. The value is in early warnings, not perfect prediction." },
    ],
  },
  {
    slug: "cost-accounting",
    title: "Cost Accounting",
    icon: Calculator,
    category: "Accounting & Bookkeeping",
    tagline: "Know what every product, job or service truly costs.",
    summary:
      "Cost accounting — allocating direct and indirect costs to products, services, and departments so you price profitably.",
    whoNeeds: [
      "Manufacturers needing product costing",
      "Service businesses with multi-service profitability",
      "Anyone pricing without knowing true margins",
    ],
    process: [
      { step: "Map cost centres", desc: "Identify direct and indirect cost categories." },
      { step: "Allocate", desc: "Apportion overheads on a sensible basis." },
      { step: "Report", desc: "Per-product / per-service margin analysis." },
    ],
    documents: ["Material costs", "Labour costs", "Overhead details", "Production / service volumes"],
    timeline: "Initial set-up 2–3 weeks; monthly updates thereafter.",
    pricing: "From ₹4,999/mo",
    faqs: [
      { q: "We're a services firm — is cost accounting relevant?", a: "Very. Knowing the true cost of each engagement (including unbillable time) reveals which clients are actually profitable and which are quietly losing you money." },
    ],
  },
  {
    slug: "inventory-management-valuation",
    title: "Inventory Management & Valuation",
    icon: Factory,
    category: "Accounting & Bookkeeping",
    tagline: "Right stock, right value, less write-off.",
    summary:
      "Inventory accounting — valuation methods (FIFO/weighted average), stock reconciliation, and slow-moving write-downs.",
    whoNeeds: [
      "Traders and manufacturers carrying stock",
      "Businesses with inventory shrinkage",
      "Companies needing accurate COGS",
    ],
    process: [
      { step: "Value", desc: "Adopt the right valuation method (FIFO / WAC)." },
      { step: "Reconcile", desc: "Physical vs book stock reconciliation." },
      { step: "Write down", desc: "Identify slow-moving / obsolete stock." },
    ],
    documents: ["Stock registers", "Purchase invoices", "Physical count sheets"],
    timeline: "Quarterly recommended.",
    pricing: "From ₹2,499/quarter",
    faqs: [
      { q: "FIFO or weighted average?", a: "Depends on your inventory turnover and tax strategy. FIFO often matches physical flow better; weighted average smooths price fluctuations. We recommend based on your specifics." },
    ],
  },
  {
    slug: "budgeting-forecasting",
    title: "Budgeting & Forecasting",
    icon: LineChart,
    category: "Accounting & Bookkeeping",
    tagline: "A budget you'll actually use — and reforecast against.",
    summary:
      "Annual budgeting with monthly variance analysis and rolling reforecasts — so you steer the business, not the other way around.",
    whoNeeds: [
      "Businesses wanting deliberate growth",
      "Founders who keep missing their numbers",
      "Teams needing shared financial targets",
    ],
    process: [
      { step: "Budget", desc: "Revenue, cost, and overhead plan for the year." },
      { step: "Compare", desc: "Monthly actual vs budget variance." },
      { step: "Reforecast", desc: "Quarterly rolling update." },
    ],
    documents: ["Historical financials", "Sales pipeline", "Cost structure", "Growth plans"],
    timeline: "Annual budget + monthly variance.",
    pricing: "From ₹4,999/mo",
    faqs: [
      { q: "Our numbers are unpredictable — is a budget useful?", a: "Especially then. A budget isn't about predicting perfectly; it's about having a shared baseline to measure against, so you spot deviations early and adjust intentionally." },
    ],
  },

  // ---------- Payroll & HR Compliance ----------
  {
    slug: "payroll-services",
    title: "Payroll Services",
    icon: Users,
    category: "Payroll & HR Compliance",
    tagline: "Salaries, payslips, PF/ESI and full-and-final — done.",
    summary:
      "End-to-end payroll processing — salary computation, payslips, PF/ESI deposits, TDS on salary, and exits.",
    whoNeeds: [
      "Any business with employees",
      "Companies hiring their first employee",
      "Teams wanting to outsource the monthly payroll grind",
    ],
    process: [
      { step: "Set up", desc: "Salary structures, PF/ESI registration, and TDS declarations." },
      { step: "Process", desc: "Monthly computation, payslip generation, and bank file." },
      { step: "Comply", desc: "PF/ESI deposit and return, TDS deposit and Form 16." },
      { step: "Exit", desc: "Full-and-final settlement on exits." },
    ],
    documents: ["Employee details", "CTC structures", "Attendance / leave", "Declarations (80C, rent, etc.)"],
    timeline: "Monthly — payslips within 3 days of month-end.",
    pricing: "From ₹299/employee/mo",
    faqs: [
      { q: "Do you handle PF and ESI registration too?", a: "Yes. PF is mandatory once you cross 20 employees; ESI applies to employees earning under ₹21,000. We handle registration, monthly deposit, and returns." },
      { q: "Can you process variable pay and bonuses?", a: "Yes — incentive structures, variable pay, joining / retention bonuses, and leave encashment are all handled in the monthly run." },
    ],
    featured: true,
  },
  {
    slug: "pf-esi-compliance",
    title: "PF & ESI Compliance",
    icon: HeartPulse,
    category: "Payroll & HR Compliance",
    tagline: "Statutory social security — registered, deposited, returned.",
    summary:
      "PF and ESI registration, monthly contributions, and returns — keeping you compliant with India's social security regimes.",
    whoNeeds: [
      "Employers with 20+ employees (PF)",
      "Employers with 10+ employees earning under ₹21,000 (ESI)",
      "Companies wanting to offer PF voluntarily",
    ],
    process: [
      { step: "Register", desc: "EPFO & ESIC registration with UAN generation." },
      { step: "Deposit", desc: "Monthly employer + employee contribution by 15th." },
      { step: "Return", desc: "Monthly ECR filing and ESI returns." },
    ],
    documents: ["Incorporation", "PAN", "Employee details", "Bank details", "Cancelled cheque"],
    timeline: "Registration 7–15 days; monthly thereafter.",
    pricing: "From ₹1,999/mo",
    faqs: [
      { q: "Is PF mandatory from day one?", a: "Mandatory once you cross 20 employees. Below that, it's voluntary. Many startups register early to attract talent and build employee benefits." },
    ],
  },

  // ---------- Advisory & Growth ----------
  {
    slug: "virtual-cfo",
    title: "Virtual CFO & Growth Advisory",
    icon: TrendingUp,
    category: "Advisory & Growth",
    tagline: "CFO-level insight without a full-time hire.",
    summary:
      "Part-time CFO support — financial strategy, fundraising readiness, investor reporting, and the clarity founders need to scale.",
    whoNeeds: [
      "Startups preparing to raise capital",
      "Growing businesses needing strategic financial direction",
      "Founders without a CFO on the team",
    ],
    process: [
      { step: "Diagnose", desc: "We assess your financial position and gaps." },
      { step: "Strategise", desc: "Build a financial roadmap aligned to your goals." },
      { step: "Execute", desc: "Monthly check-ins, investor reports, and ad-hoc support." },
    ],
    documents: ["Financials", "Business plan", "Cap table", "Fundraising targets"],
    timeline: "Retainer-based, monthly.",
    pricing: "From ₹24,999/mo",
    faqs: [
      { q: "Is this the same as bookkeeping?", a: "No — bookkeeping records the past; a Virtual CFO shapes the future. We handle unit economics, fundraising readiness, investor conversations, and strategic financial decisions." },
    ],
    comingSoon: true,
    featured: true,
  },
  {
    slug: "business-valuation",
    title: "Business Valuation",
    icon: PieChart,
    category: "Advisory & Growth",
    tagline: "Know what your business is worth — and why.",
    summary:
      "Independent business valuation using income, market, and asset approaches — for fundraising, exits, or internal clarity.",
    whoNeeds: [
      "Founders raising equity capital",
      "Business owners considering a sale",
      "Companies issuing ESOPs at fair value",
    ],
    process: [
      { step: "Analyse", desc: "Financials, growth, and comparable transactions." },
      { step: "Value", desc: "Multiple valuation methods applied." },
      { step: "Report", desc: "Valuation report with methodology and assumptions." },
    ],
    documents: ["3-year financials", "Projections", "Cap table", "Business plan"],
    timeline: "2–3 weeks.",
    pricing: "From ₹19,999",
    faqs: [
      { q: "Which valuation method is used?", a: "Typically a blend — DCF for growth businesses, comparable company analysis for market context, and asset-based for asset-heavy businesses. We apply the combination that fits your stage." },
    ],
  },
  {
    slug: "due-diligence",
    title: "Due Diligence Support",
    icon: Search,
    category: "Advisory & Growth",
    tagline: "Walk into investor or acquisition diligence prepared.",
    summary:
      "Buy-side and sell-side financial due diligence — clean data rooms, reconciled financials, and defensible numbers.",
    whoNeeds: [
      "Founders entering fundraising diligence",
      "Businesses being acquired",
      "Acquirers needing financial DD support",
    ],
    process: [
      { step: "Prepare", desc: "Organise financials into a clean data room." },
      { step: "Reconcile", desc: "Ensure all numbers tie and are defensible." },
      { step: "Defend", desc: "Support through Q&A and clarifications." },
    ],
    documents: ["Full financials", "Contracts", "Customer & supplier data", "Tax filings"],
    timeline: "Project-based, 3–6 weeks.",
    pricing: "From ₹49,999",
    faqs: [
      { q: "When should we start preparing for diligence?", a: "Ideally 3–6 months before raising. Clean financials, reconciled numbers, and organised documentation prevent deals from stalling over avoidable questions." },
    ],
  },
  {
    slug: "project-finance",
    title: "Project Finance",
    icon: Factory,
    category: "Advisory & Growth",
    tagline: "Structure and present funding for your next big project.",
    summary:
      "Project finance advisory — financial models, lender-ready projections, and support through the sanction process.",
    whoNeeds: [
      "Businesses expanding with new projects",
      "Manufacturers setting up new facilities",
      "Anyone seeking term loans for capital expenditure",
    ],
    process: [
      { step: "Model", desc: "Build a detailed financial model for the project." },
      { step: "Package", desc: "Prepare the CMA and projections lenders expect." },
      { step: "Support", desc: "Liaise through sanction and disbursement." },
    ],
    documents: ["Project cost breakdown", "Revenue projections", "Promoter details", "Existing financials"],
    timeline: "4–8 weeks.",
    pricing: "From ₹34,999",
    faqs: [
      { q: "What's a CMA data?", a: "Credit Monitoring Arrangement data — the standardised financial projection format banks require for term loans. We prepare it to exactly the format your lender expects." },
    ],
  },
  {
    slug: "loan-funding-assistance",
    title: "Loan & Funding Assistance",
    icon: Banknote,
    category: "Advisory & Growth",
    tagline: "From application to disbursement — less friction.",
    summary:
      "End-to-end support for business loans — documentation, lender matching, application tracking, and disbursement.",
    whoNeeds: [
      "Businesses seeking working capital or term loans",
      "Startups exploring debt or seed equity",
      "Anyone navigating the loan application maze",
    ],
    process: [
      { step: "Assess", desc: "Understand your need and eligibility." },
      { step: "Package", desc: "Prepare the application with all documents." },
      { step: "Submit", desc: "Apply to suitable lenders and track progress." },
      { step: "Disburse", desc: "Coordinate through to sanction and disbursal." },
    ],
    documents: ["Business financials", "Bank statements (12 months)", "GST returns", "ITR", "Project / use-of-funds note"],
    timeline: "2–6 weeks depending on lender and loan type.",
    pricing: "From ₹9,999",
    faqs: [
      { q: "Do you guarantee loan approval?", a: "No one can ethically guarantee approval — it depends on the lender's assessment. What we guarantee is a complete, well-presented application that maximises your chances and minimises back-and-forth." },
    ],
  },
  {
    slug: "startup-fundraising-support",
    title: "Startup Fundraising Support",
    icon: Handshake,
    category: "Advisory & Growth",
    tagline: "Term sheets, cap tables, and the numbers behind them.",
    summary:
      "Fundraising support — financial models, pitch numbers, term sheet review, and cap table management for early-stage startups.",
    whoNeeds: [
      "Pre-seed and seed-stage founders",
      "Startups raising their first institutional round",
      "Founders navigating term sheets",
    ],
    process: [
      { step: "Prepare", desc: "Financial model, unit economics, and use of funds." },
      { step: "Cap table", desc: "Clean cap table with ESOP pool and dilution modelling." },
      { step: "Review", desc: "Term sheet review — valuation, liquidation, anti-dilution." },
    ],
    documents: ["Current cap table", "Financial projections", "Pitch deck", "Existing agreements"],
    timeline: "Engagement-based through the raise.",
    pricing: "From ₹29,999",
    faqs: [
      { q: "Do you help find investors?", a: "We prepare you to raise — the model, the numbers, the cap table, and term sheet review. Introductions depend on your sector and stage; we'll be honest about what we can and can't do there." },
    ],
  },
  {
    slug: "internal-audit-controls",
    title: "Internal Audit & Controls",
    icon: ShieldCheck,
    category: "Advisory & Growth",
    tagline: "Find the gaps before anyone else does.",
    summary:
      "Internal audit and process review — identifying control weaknesses, process inefficiencies, and compliance gaps.",
    whoNeeds: [
      "Growing businesses with multiple processes",
      "Companies preparing for external audit",
      "Anyone concerned about fraud or leakage",
    ],
    process: [
      { step: "Scope", desc: "Identify the processes and risk areas to review." },
      { step: "Audit", desc: "Test controls, sample transactions, and interview." },
      { step: "Report", desc: "Findings, risk ratings, and practical remediation." },
    ],
    documents: ["Process documentation", "Financial records", "Access to team"],
    timeline: "2–4 weeks for a standard scope.",
    pricing: "From ₹24,999",
    faqs: [
      { q: "Is internal audit only for large companies?", a: "No — smaller businesses often benefit most, because control gaps are costlier relative to size. A single leakage prevented can pay for years of audit." },
    ],
  },
  {
    slug: "financial-health-checkup",
    title: "Financial Health Checkup",
    icon: Stethoscope,
    category: "Advisory & Growth",
    tagline: "A complete diagnostic of your business finances.",
    summary:
      "A one-time financial health check — profitability, liquidity, tax exposure, and compliance gaps, with a prioritised action plan.",
    whoNeeds: [
      "Founders who've never had a proper financial review",
      "Businesses feeling uncertain about their financial position",
      "Anyone considering engaging an accountant",
    ],
    process: [
      { step: "Review", desc: "Full review of books, filings, and cash position." },
      { step: "Diagnose", desc: "Identify strengths, risks, and gaps." },
      { step: "Plan", desc: "Prioritised action plan with cost estimates." },
    ],
    documents: ["Books of accounts", "Tax filings", "Bank statements", "Existing registrations"],
    timeline: "1–2 weeks.",
    pricing: "From ₹9,999",
    faqs: [
      { q: "Is this useful if I already have an accountant?", a: "Yes — it's an independent second opinion. We often find things internal accountants miss, simply because we're looking with fresh eyes." },
    ],
  },
];

// Convenience lookups
export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function servicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}

export function featuredServices(): Service[] {
  return SERVICES.filter((s) => s.featured);
}
