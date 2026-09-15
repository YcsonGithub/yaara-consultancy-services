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

  // ---------- From visiting card: portal registrations & LUT ----------
  {
    slug: "income-tax-portal-registration",
    title: "Income Tax Portal Registration",
    icon: FileText,
    category: "Tax & Statutory Compliance",
    tagline: "Your gateway to the income tax e-filing portal.",
    summary:
      "Register your business or individual profile on the income tax e-filing portal — enabling ITR submission, TDS credit view, and all other tax compliance activities.",
    whoNeeds: [
      "New businesses needing ITR filing access",
      "Professionals without an active portal account",
      "Entities needing to view TDS credit statements",
    ],
    process: [
      { step: "Verify", desc: "Confirm PAN-Aadhaar linking and registered mobile number." },
      { step: "Register", desc: "Create the portal profile and activate via OTP." },
      { step: "Activate", desc: "Enable e-verification, ITR filing, and profile management." },
    ],
    documents: ["PAN", "Aadhaar", "Registered mobile number"],
    timeline: "Same day to 1 working day.",
    pricing: "₹499",
    faqs: [
      { q: "Can I file ITR myself once registered?", a: "Yes — once your portal profile is active, you can file directly. We also offer managed ITR filing as a separate service if you'd prefer us to handle it." },
    ],
  },
  {
    slug: "traces-portal-registration",
    title: "TRACES Portal Registration",
    icon: Receipt,
    category: "Tax & Statutory Compliance",
    tagline: "Your TAN's home for TDS returns and Form 16/16A.",
    summary:
      "Register on the TRACES portal using your TAN — enabling TDS return filing, Form 16/16A generation, and challan trace confirmations.",
    whoNeeds: [
      "Employers required to deduct TDS",
      "Businesses paying rent, professional fees, or commission",
      "Anyone needing to view or download Form 16/16A",
    ],
    process: [
      { step: "Obtain TAN", desc: "Ensure you have a 10-digit TAN allotted." },
      { step: "Register", desc: "Create TRACES profile with TAN and OTP authentication." },
      { step: "Configure", desc: "Set up admin users, upload challans, and enable return filing." },
    ],
    documents: ["TAN", "PAN of deductor", "Registered mobile number", "Email address"],
    timeline: "1–2 working days.",
    pricing: "₹499",
    faqs: [
      { q: "What can I do once registered on TRACES?", a: "File quarterly TDS returns (24Q, 26Q, 27Q, 27EQ), generate and download Form 16/16A, view challan status, and manage your TDS ledger." },
    ],
  },
  {
    slug: "gst-lut-filing",
    title: "GST LUT Filing",
    icon: FileCheck2,
    category: "Tax & Statutory Compliance",
    tagline: "Zero-rated supplies without paying GST upfront.",
    summary:
      "File your GST Letter of Undertaking (LUT) for zero-rated supplies — export, deemed exports, and SEZ transactions without paying IGST in advance.",
    whoNeeds: [
      "Exporters shipping out of India",
      "Businesses making SEZ supplies",
      "Importers with zero-rated transactions",
    ],
    process: [
      { step: "Assess", desc: "Confirm your export or zero-rated supply eligibility and turnover." },
      { step: "Prepare", desc: "Draft the LUT application form for the new financial year." },
      { step: "File", desc: "Submit the LUT on the GST portal before the 25th of April." },
    ],
    documents: [
      "Valid GSTIN",
      "Bank account details",
      "Export commitment or SEZ supply details",
      "Authorized signatory details",
    ],
    timeline: "Submitted by 25th April each financial year.",
    pricing: "₹1,999 per filing",
    faqs: [
      { q: "When must the LUT be filed?", a: "Every financial year, by 25th April — or before your first zero-rated supply. We track and file it on time so your exports remain duty-free." },
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
      "Class 3 DSC issuance and renewal — valid for e-filing of returns, e-tendering, EPFO KYC (DSC & e-sign) and signing documents digitally.",
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
  // ---------- Shop & Establishment (from visiting card) ----------
  {
    slug: "shop-establishment-registration",
    title: "Shop & Establishment Registration",
    icon: Building2,
    category: "Business Registration & Corporate",
    tagline: "State-level registration for shops, offices, and commercial establishments — mandatory in most states.",
    summary:
      "Registration under the state Shop & Establishment Act — a legal requirement for most businesses with physical premises, covering working hours, holidays, and employee conditions.",
    whoNeeds: [
      "Any shop, office, or commercial establishment with employees",
      "Retail stores, hotels, restaurants, and cafes",
      "Offices, warehouses, and service establishments",
    ],
    process: [
      { step: "Register", desc: "File the application with the state labour/shops department within the prescribed time of starting operations." },
      { step: "Details", desc: "Provide establishment name, address, type, number of employees, and working hours." },
      { step: "Certificate", desc: "Registration certificate issued — display prominently at the premises." },
      { step: "Renew", desc: "Renewal handled annually or as per state rules." },
    ],
    documents: ["Business registration / ownership proof", "Premises address proof", "Owner/manager details and ID proof", "Employee count and details", "Photo of premises"],
    timeline: "3–10 working days (varies by state).",
    pricing: "From ₹999",
    faqs: [
      { q: "Is Shop & Establishment registration mandatory?", a: "In most states, yes — any shop, office, or commercial establishment must register under the state Shop & Establishment Act, usually within 30 days of starting operations." },
      { q: "Does it apply to online-only businesses?", a: "Generally no — Shop & Establishment registration is for businesses with a physical premises. If you have a registered office or workspace, check your state's specific rules." },
      { q: "How often do I need to renew?", a: "Renewal periods vary by state — some are annual, some every few years. We track your state's renewal schedule and handle it." },
    ],
  },
  // ---------- FSSAI Registration (from visiting card) ----------
  {
    slug: "fssai-registration",
    title: "FSSAI Registration",
    icon: ShieldCheck,
    category: "Business Registration & Corporate",
    tagline: "Food safety licence for any business that makes, stores, sells, or serves food.",
    summary:
      "FSSAI (Food Safety and Standards Authority of India) registration or licence — mandatory for any business involved in food manufacturing, processing, packaging, storage, distribution, or sale.",
    whoNeeds: [
      "Food manufacturers and processors",
      "Restaurants, cafes, hotels, and cloud kitchens",
      "Retailers, distributors, and transporters of food",
      "Online food businesses and food delivery platforms",
    ],
    process: [
      { step: "Assess", desc: "We determine whether you need Basic Registration (turnover below ₹12 lakh), State Licence (₹12 lakh–₹20 crore), or Central Licence (above ₹20 crore, or inter-state / large manufacturers)." },
      { step: "Apply", desc: "File the FSSAI application with the appropriate authority along with required documents." },
      { step: "Issue", desc: "FSSAI licence/registration certificate issued with your 14-digit FSSAI number." },
    ],
    documents: ["Business registration proof", "Premises ownership or rental agreement / NOC", "List of food products handled", "Owner/director details and ID proof", "Photo of premises and equipment"],
    timeline: "Basic registration: 1–7 days. State licence: 30–60 days. Central licence: 45–60 days.",
    pricing: "Basic Registration from ₹1,499 · State Licence from ₹4,499 · Central Licence — quote on request",
    faqs: [
      { q: "Which FSSAI category do I fall under?", a: "It depends on your turnover and scale. Below ₹12 lakh/year → Basic Registration. ₹12 lakh to ₹20 crore → State Licence. Above ₹20 crore, inter-state operations, or large manufacturers → Central Licence. We assess your exact category before you apply." },
      { q: "Can I operate without FSSAI?", a: "No — FSSAI registration or licence is mandatory for any food business. Operating without it can lead to penalties and closure. We get you registered before you start operations." },
      { q: "How long is FSSAI licence valid?", a: "FSSAI licences are valid for 1 to 5 years depending on the category and your choice at application. Renewal must be applied for at least 30 days before expiry." },
    ],
  },

  // ---------- IEC Code Registration (from visiting card) ----------
  {
    slug: "iec-code-registration",
    title: "IEC Code Registration",
    icon: Handshake,
    category: "Business Registration & Corporate",
    tagline: "The Import-Export Code — required for any Indian business that imports or exports goods or services.",
    summary:
      "IEC (Import-Export Code) registration from the DGFT — a 10-digit code that every Indian importer and exporter needs to clear customs and conduct foreign trade.",
    whoNeeds: [
      "Importers of goods or services into India",
      "Exporters of goods or services from India",
      "Freight forwarders, custom brokers, and trading companies",
    ],
    process: [
      { step: "GUID", desc: "Obtain a Digital Signature-based GUID (Government User ID) on the DGFT portal." },
      { step: "Apply", desc: "File the IEC application online — proprietorship, partnership, company, or any other entity." },
      { step: "Issue", desc: "IEC code issued — valid for the lifetime of the firm (no renewal needed)." },
    ],
    documents: ["Business registration proof (PAN, incorporation, partnership deed)", "PAN of the firm and proprietors/directors", "Bank account details and IEC code request letter", "Address proof of registered office", "Digital Signature Certificate (DSC) of authorised signatory"],
    timeline: "3–7 working days.",
    pricing: "₹1,499",
    faqs: [
      { q: "Is IEC mandatory for every export and import?", a: "Yes — an IEC is mandatory for any import or export of goods or services from/to India, except for certain personal or specific exempted transactions. Customs and banking require it." },
      { q: "How long is an IEC valid?", a: "IEC is valid for the lifetime of the business entity. There is no renewal requirement — it stays valid until the business closes or the IEC is surrendered/cancelled." },
      { q: "Do I need a DSC for IEC?", a: "A Digital Signature Certificate (DSC) is required for most IEC applications. We arrange the DSC and handle the full application — you just provide the documents." },
    ],
  },
  {
    slug: "business-licenses",
    title: "Business Licenses",
    icon: ScrollText,
    category: "Business Registration & Corporate",
    tagline: "The aggregated business licenses bundle — or pick the individual services below.",
    summary:
      "Every licence your business legally needs — Shop & Establishment, FSSAI, Trade License, Import-Export Code and more. Each also has its own dedicated page below.",
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
      { q: "Which licences does my business need?", a: "It depends on your activity and location. See our individual licence pages — Shop & Establishment Registration, Trade License, FSSAI Registration, and IEC Code Registration — or get a custom checklist from us." },
    ],
  },



  {
    slug: "trade-license",
    title: "Trade License",
    icon: Landmark,
    category: "Business Registration & Corporate",
    tagline: "The local licence every shop, trade, and commercial establishment needs to operate legally.",
    summary:
      "Trade license registration with your local municipal authority — the basic licence most physical businesses need to operate from a premises, whether a shop, office, or commercial establishment.",
    whoNeeds: [
      "Any business operating from a physical premises",
      "Retail shops, markets, and shopping complexes",
      "Trading and commercial establishments in municipal limits",
    ],
    process: [
      { step: "Identify", desc: "We identify your local authority and the exact licence category your business falls under." },
      { step: "Apply", desc: "File the trade license application with the municipal corporation, including premises and owner details." },
      { step: "Issue", desc: "Trade license certificate issued, valid for the prescribed period — typically 1 to 3 years, renewable." },
    ],
    documents: ["Business registration proof", "Premises address and rental/ownership proof", "Owner identity and address proof", "Photographs of premises", "NOC from owner (if rented)"],
    timeline: "7–21 working days (varies by municipality).",
    pricing: "From ₹1,499",
    faqs: [
      { q: "Is a trade licence the same as Shop & Establishment registration?", a: "No — they're separate licences from different authorities. A trade licence is from your local municipal corporation; Shop & Establishment is from the state labour department. Many businesses need both." },
      { q: "How long is a trade licence valid?", a: "Usually 1 to 3 years depending on the municipality. It must be renewed before expiry — we track and handle renewals for you." },
    ],
  },

  // ---------- EPFO KYC (DSC & E-sign) - from visiting card ----------
  {
    slug: "epfo-kyc",
    title: "EPFO KYC (DSC & E-sign)",
    icon: Users,
    category: "Payroll & HR Compliance",
    tagline: "Verify your identity with EPFO using DSC or e-sign - done once, works everywhere.",
    summary:
      "Complete your EPFO KYC using a Class 3 Digital Signature Certificate or Aadhaar-based e-sign - so your UAN is verified and your EPF account becomes fully online and portable.",
    whoNeeds: [
      "Any EPF member whose UAN KYC status shows 'Pending'",
      "Employees changing jobs who need seamless PF transfer",
      "Establishments wanting their workforce KYC-compliant",
    ],
    process: [
      { step: "Check", desc: "We check your UAN KYC status and identify what's pending - Aadhaar, PAN, or bank." },
      { step: "Certify", desc: "Sign the KYC form using your DSC or Aadhaar e-sign." },
      { step: "Verify", desc: "KYC approved on the EPFO portal - your UAN is now fully verified." },
    ],
    documents: ["UAN number", "Aadhaar linked to UAN", "PAN", "Class 3 DSC (if using DSC mode)", "Bank account details (if not already seeded)"],
    timeline: "1-2 working days per member.",
    pricing: "₹299 per member",
    faqs: [
      { q: "What is EPFO KYC and why does it matter?", a: "KYC verifies your identity with EPFO using Aadhaar, PAN, and bank details. Once verified, your PF account becomes fully online - you can transfer, withdraw, and check balances without physical paperwork." },
      { q: "DSC or e-sign - which should I use?", a: "E-sign via Aadhaar OTP is the easiest if your Aadhaar is linked to your mobile. DSC is required in some cases and is preferred for bulk KYC by establishments. We handle both." },
      { q: "Can you do KYC for our whole team at once?", a: "Yes - for establishments, we process KYC for all employees in bulk using DSC, which is the standard approach for companies." },
    ],
  },

]
