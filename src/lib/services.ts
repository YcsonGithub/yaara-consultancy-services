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
  UsersRound,
  IdCard,
  PiggyBank,
  Umbrella,
  FileSpreadsheet,
  Coins,
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
    title: "GST Registration & Filings",
    shortTitle: "GST",
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
    title: "TDS Filings & Compliance",
    shortTitle: "TDS Filings",
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
    title: "Professional Tax Registration & Filings",
    shortTitle: "Professional Tax",
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

  /* ============================================================
     Visiting-card catalog — company & firm registrations
     ============================================================ */
  {
    slug: "private-limited-company-registration",
    title: "Private Limited Company Registration",
    shortTitle: "Pvt Ltd Registration",
    icon: Building2,
    category: "Business Registration & Corporate",
    tagline: "The structure investors expect — incorporated and compliant from day one.",
    summary:
      "End-to-end Pvt Ltd incorporation on the MCA SPICe+ route: name approval, director DIN/DSC, MOA & AOA drafting, PAN, TAN, and the first board resolutions — with a bank account ready to open.",
    whoNeeds: [
      "Founders planning to raise angel or VC money",
      "Two or more people starting a business together",
      "Any business that needs limited liability and a real cap table",
    ],
    process: [
      { step: "Name & structure", desc: "Check name availability on MCA and confirm the authorised/paid-up capital you actually need." },
      { step: "Prepare", desc: "DSC and DIN for each director, with MOA/AOA drafted around your business objects and shareholding." },
      { step: "File SPICe+", desc: "Single integrated filing for incorporation, PAN, TAN, EPFO, ESIC and the bank account." },
      { step: "Hand over", desc: "Certificate of Incorporation, PAN, TAN, and a calendar for your first board meeting and filings." },
    ],
    documents: ["PAN & Aadhaar of all directors", "Passport-size photographs", "Address proof (bank statement / utility bill)", "Registered office address proof + NOC from owner", "Digital Signature Certificate (DSC) for each director"],
    timeline: "7–10 working days (subject to MCA processing).",
    pricing: "₹6,999 (+ govt. fees)",
    faqs: [
      { q: "Pvt Ltd or LLP for a startup?", a: "If you plan to raise external equity, a Pvt Ltd is almost always the answer — investors and ESOPs need shares. If you want limited liability with lighter compliance and two partners, an LLP is cheaper to run." },
      { q: "Are government fees included?", a: "No — MCA/ROC stamp duty and filing fees are charged at actuals and shown separately, so you always see what went to the government and what came to us." },
      { q: "How many directors do I need?", a: "A minimum of two directors and two shareholders. The same person can hold both roles, and at least one director must be an Indian resident." },
    ],
  },

  {
    slug: "llp-registration",
    title: "LLP Firm Registration",
    shortTitle: "LLP Registration",
    icon: Handshake,
    category: "Business Registration & Corporate",
    tagline: "Partner-friendly structure: limited liability, lighter compliance.",
    summary:
      "LLP incorporation with the MCA — FiLLiP filing, LLP agreement drafting and stamping, PAN and TAN, plus the annual filings that keep the LLP active.",
    whoNeeds: [
      "Two or more partners sharing profits without forming a company",
      "Professional firms that want liability protection",
      "Businesses that want fewer ROC formalities than a Pvt Ltd",
    ],
    process: [
      { step: "Name reserve", desc: "Reserve the LLP name on MCA (RUN-LLP) after checking name and trademark rules." },
      { step: "Incorporate", desc: "File FiLLiP with partner DPIN/DSC and registered office details." },
      { step: "Draft agreement", desc: "Prepare and stamp the LLP agreement covering capital, profit sharing and exit — within the statutory 30 days." },
      { step: "Activate", desc: "PAN, TAN, bank account support and the Form 11 / Form 8 filing calendar." },
    ],
    documents: ["PAN & Aadhaar of all partners", "Photographs and address proof of partners", "Registered office address proof + NOC", "Digital Signature Certificate (DSC) of designated partners", "Capital contribution and profit-sharing ratio"],
    timeline: "10–15 working days (stamp duty varies by state).",
    pricing: "₹5,499 (+ govt. fees & stamp duty)",
    faqs: [
      { q: "What does the LLP agreement need to cover?", a: "Capital contribution, profit-sharing ratio, decision-making, admission and exit of partners, and dispute resolution. It must be filed within 30 days of incorporation — a missing or generic agreement is the most common LLP problem we fix." },
      { q: "What are the annual LLP filings?", a: "Form 11 (Annual Return) and Form 8 (Statement of Account & Solvency), plus the ITR. Audit applies only once turnover crosses ₹40 lakh or contribution crosses ₹25 lakh." },
    ],
  },

  {
    slug: "partnership-firm-registration",
    title: "Partnership Firm Registration",
    shortTitle: "Partnership Firm",
    icon: UsersRound,
    category: "Business Registration & Corporate",
    tagline: "A deed that protects both partners — registered with the Registrar of Firms.",
    summary:
      "Partnership deed drafting, stamping and registration with the Registrar of Firms, plus the firm's PAN, current account support and ongoing compliance.",
    whoNeeds: [
      "Family businesses and trading firms running on a handshake",
      "Two or more partners who need a legally enforceable deed",
      "Firms that need registered status for banking or tenders",
    ],
    process: [
      { step: "Structure the terms", desc: "We turn your commercial understanding into clauses — capital, profit share, duties, exit and dissolution." },
      { step: "Stamp & sign", desc: "Deed printed on stamp paper of the right value and signed by every partner." },
      { step: "Register", desc: "File with the Registrar of Firms for your state and obtain the registration certificate." },
      { step: "Set up", desc: "Firm PAN, bank current account with the deed on record, and a compliance calendar." },
    ],
    documents: ["PAN & Aadhaar of all partners", "Proposed firm name and business activity", "Capital contribution of each partner", "Address proof of the firm's place of business", "Stamp paper / e-stamp of the applicable value"],
    timeline: "5–10 working days (state registration timelines vary).",
    pricing: "₹2,499 (+ stamp duty)",
    faqs: [
      { q: "Is registration mandatory for a partnership firm?", a: "Registration is optional in practice, but an unregistered firm cannot enforce its contractual rights in court, and banks and tenders usually insist on the certificate. We recommend registering." },
      { q: "Can I convert the firm to an LLP or Pvt Ltd later?", a: "Yes. We draft the deed clauses now so a later conversion doesn't create a tax or stamp-duty problem." },
    ],
  },

  {
    slug: "business-pan-registration",
    title: "Business PAN Registration",
    shortTitle: "Business PAN",
    icon: IdCard,
    category: "Business Registration & Corporate",
    tagline: "The tax identity your firm or company legally has to hold.",
    summary:
      "PAN application on Form 49A for firms, LLPs, companies, trusts and societies — with the correct constitution, so TDS, GST and banking records all link to one number.",
    whoNeeds: [
      "Newly incorporated companies, LLPs or firms without a PAN",
      "Trusts, societies and associations applying for exemption",
      "Entities whose PAN shows a wrong name or constitution",
    ],
    process: [
      { step: "Verify", desc: "Confirm the exact name and constitution from your incorporation or registration certificate." },
      { step: "Apply", desc: "File Form 49A through the authorised agency, with DSC or physical KYC as applicable." },
      { step: "Track", desc: "Follow the acknowledgement number through to allotment and share the PAN digitally." },
      { step: "Correct", desc: "Fix name, date or constitution mismatches before they block a TDS or GST filing." },
    ],
    documents: ["Certificate of Incorporation / Registration", "Partnership deed or trust deed", "Address proof of the entity", "Authorised signatory's ID and authority letter", "Existing PAN, if this is a correction"],
    timeline: "5–10 working days after application.",
    pricing: "₹999",
    faqs: [
      { q: "Does a business need a PAN separate from the owner's?", a: "Yes. Every entity that files a return, deducts TDS or opens a business bank account needs its own PAN. Using an individual's PAN for firm income is a common — and avoidable — mistake." },
      { q: "The PAN card has a spelling mistake. Can it be fixed?", a: "Yes, through a correction application. Bring it to us early — mismatched PAN details hold up TDS credit, GST matching and loan applications." },
    ],
  },

  {
    slug: "business-tan-registration",
    title: "Business TAN Registration",
    shortTitle: "Business TAN",
    icon: Landmark,
    category: "Business Registration & Corporate",
    tagline: "Required before you deduct or deposit a single rupee of TDS.",
    summary:
      "TAN application on Form 49B for every entity that deducts tax at source — so quarterly TDS returns and Form 16 / 16A are filed under the correct number from day one.",
    whoNeeds: [
      "Employers paying salary with TDS",
      "Businesses paying rent, contractor, professional or commission amounts above threshold",
      "New companies and firms setting up payroll for the first time",
    ],
    process: [
      { step: "Check", desc: "Confirm whether a TAN already exists for the entity in the same or another state." },
      { step: "Apply", desc: "File Form 49B with entity PAN and authorised signatory details." },
      { step: "Allot", desc: "TAN allotted and registered on TRACES for returns and challan mapping." },
      { step: "Integrate", desc: "Map TAN into your payroll and vendor-payment process so every deduction lands on the right return." },
    ],
    documents: ["Entity PAN", "Incorporation / registration certificate", "Address proof of the deductor", "Authorised signatory's ID and contact details"],
    timeline: "5–10 working days after application.",
    pricing: "₹999",
    faqs: [
      { q: "What happens if I deduct TDS without a TAN?", a: "The deduction is still due, and no return can be filed without a TAN — late filing fees and interest follow. It is a small fix now versus penalties later." },
      { q: "One TAN or one per state?", a: "One TAN per deductor is the norm, and branch offices quote the registered TAN. We set it up so multi-state clients file cleanly." },
    ],
  },

  /* ============================================================
     Visiting-card catalog — payroll, PF & ESI
     ============================================================ */
  {
    slug: "epfo-registration",
    title: "EPFO Registration",
    shortTitle: "EPFO Registration",
    icon: PiggyBank,
    category: "Payroll & HR Compliance",
    tagline: "PF registration for your establishment — compliant from hire number one.",
    summary:
      "Establishment registration with the Employees' Provident Fund Organisation — EPFO portal registration, employer code allotment, employee UAN generation and the KYC that makes PF fully online.",
    whoNeeds: [
      "Employers who have crossed (or are about to cross) 20 employees",
      "Establishments registering voluntarily below the 20-employee threshold",
      "Contractors who must register the workforce deployed at a client site",
    ],
    process: [
      { step: "Assess", desc: "Confirm the applicability date, employee count and whether the establishment is covered mandatorily or voluntarily." },
      { step: "Register", desc: "Create the establishment on the EPFO portal with entity and bank details under DSC or e-sign." },
      { step: "Enrol", desc: "Generate UANs for employees and seed Aadhaar, PAN and bank details for KYC." },
      { step: "Hand over", desc: "First ECR schedule, contribution rates and a monthly calendar you can hand to payroll." },
    ],
    documents: ["Entity registration proof (PAN, incorporation / partnership deed)", "Employer PAN and cancelled cheque", "Employee list with date of joining", "Salary structure and CTC break-up", "DSC / e-sign of the authorised signatory"],
    timeline: "5–10 working days.",
    pricing: "₹1,499",
    faqs: [
      { q: "When does EPFO become mandatory?", a: "For most establishments once headcount reaches 20. Certain classes are covered from the first employee, and voluntary registration is possible earlier — which is often wise if you're hiring fast." },
      { q: "What is a UAN and why does every employee need one?", a: "The Universal Account Number is a permanent employee ID that holds every PF account across jobs. With Aadhaar, PAN and bank KYC seeded, transfers and withdrawals happen online instead of on paper." },
    ],
  },

  {
    slug: "esic-registration",
    title: "ESIC Registration",
    shortTitle: "ESIC Registration",
    icon: Umbrella,
    category: "Payroll & HR Compliance",
    tagline: "Medical, sickness and maternity cover for your team — registered correctly.",
    summary:
      "Employer code registration with the Employees' State Insurance Corporation, employee-wise ESIC IP registration, and the contribution schedule your establishment is expected to maintain.",
    whoNeeds: [
      "Factories with 10 or more employees (2 or more in some states)",
      "Establishments where wages fall within the ESIC wage ceiling",
      "Employers already deducting ESI without a valid employer code",
    ],
    process: [
      { step: "Assess", desc: "Check headcount, wage ceiling and state applicability, including the retail and service-sector coverage rules." },
      { step: "Register", desc: "Obtain the employer code on the ESIC portal and register the establishment's bank and address details." },
      { step: "Enrol employees", desc: "Register each insured person, issue the IP number and capture family details for benefits." },
      { step: "Schedule", desc: "Contribution rates, monthly filing dates and the registers to maintain." },
    ],
    documents: ["Entity registration proof and PAN", "Employer bank details and cancelled cheque", "Employee list with wages, date of joining and family details", "Salary register / CTC structure", "Address proof of the factory / establishment"],
    timeline: "5–10 working days.",
    pricing: "₹1,499",
    faqs: [
      { q: "EPFO and ESIC — do I need both?", a: "Usually yes, if you cross the employee thresholds for both. EPFO covers provident fund; ESIC covers medical, sickness and maternity benefits. The two registrations are separate, and we handle them together." },
      { q: "What if wages rise above the ESIC ceiling later?", a: "Coverage continues while the employee remains insured, and the rules on continuing contributions are specific — we review the position each year so you don't over- or under-deduct." },
    ],
  },

  {
    slug: "epfo-filings",
    title: "EPFO Filings (ECR)",
    shortTitle: "EPFO Filings",
    icon: FileSpreadsheet,
    category: "Payroll & HR Compliance",
    tagline: "Monthly ECR, on time, with every UAN mapped and every rupee reconciled.",
    summary:
      "Monthly Electronic Challan-cum-Return preparation and filing, contribution reconciliation against payroll, and the corrections that keep your establishment's records clean.",
    whoNeeds: [
      "Registered establishments filing PF month after month",
      "Employers with pending, short-paid or mismatched ECRs",
      "Payroll teams dealing with joiners, exits and salary changes",
    ],
    process: [
      { step: "Collect", desc: "Take the month's salary register and map every member, including new joiners and exits." },
      { step: "Prepare", desc: "Build the ECR text file with correct wages, contribution and admin charges." },
      { step: "File & pay", desc: "Upload the ECR and generate the challan before the 15th, with the payment reference recorded." },
      { step: "Reconcile", desc: "Match the challan to your books and fix any mismatch in the next cycle." },
    ],
    documents: ["Monthly salary register", "New joiner KYC details (UAN / Aadhaar / PAN / bank)", "Exit dates and full-and-final notes", "Previous ECR / challan references"],
    timeline: "Monthly — ECR and payment due by the 15th.",
    pricing: "From ₹499/month (up to 20 employees)",
    faqs: [
      { q: "What is an ECR?", a: "The Electronic Challan-cum-Return is the monthly PF return that lists each member's wages and contributions. Filing it generates the payment challan — one document, two obligations." },
      { q: "What happens if the ECR is late?", a: "Damages and interest accrue on late payment, and repeated delays invite notices. More importantly, employees' passbooks stop updating, which blocks their loans and withdrawals." },
    ],
  },

  {
    slug: "esic-filings",
    title: "ESIC Filings",
    shortTitle: "ESIC Filings",
    icon: ClipboardCheck,
    category: "Payroll & HR Compliance",
    tagline: "Monthly contribution returns and employee records — filed and archived.",
    summary:
      "ESIC monthly contribution filing, insured-person registrations, exit records and issue resolution, so your establishment stays compliant and your team stays covered.",
    whoNeeds: [
      "Establishments filing ESI contributions every month",
      "Employers with unregistered or wrongly-registered employees",
      "HR teams managing hospitalisation claims that need clean records",
    ],
    process: [
      { step: "Inputs", desc: "Take the monthly salary register and flag new joiners, exits and wage changes." },
      { step: "Register & update", desc: "Register new insured persons and update exits on the ESIC portal." },
      { step: "File & pay", desc: "File the monthly contribution return and pay before the 15th." },
      { step: "Support claims", desc: "Keep records claim-ready so employees' medical and maternity claims aren't held up." },
    ],
    documents: ["Monthly salary register", "Employee KYC and family details for new registrations", "Exit dates", "Previous ESIC return and challan references"],
    timeline: "Monthly — return and payment due by the 15th.",
    pricing: "From ₹499/month",
    faqs: [
      { q: "What records do ESIC claims depend on?", a: "The employer's contribution record and the insured person's registration. If a month is short-filed or an employee was never registered, the claim is rejected — and the employee blames you, not the portal." },
      { q: "Can you clean up past ESIC periods?", a: "Yes. We review what's been filed, register omissions, file the missing periods where the portal allows, and tell you honestly what cannot be corrected." },
    ],
  },

  {
    slug: "payroll-processing",
    title: "Payroll Processing & Payslips",
    shortTitle: "Payroll",
    icon: Coins,
    category: "Payroll & HR Compliance",
    tagline: "Salaries, TDS, PF, ESI and payslips — one dependable monthly run.",
    summary:
      "End-to-end payroll: salary structuring, monthly computation, statutory deductions, payslip generation and the registers your accountant and auditor will ask for.",
    whoNeeds: [
      "Small businesses still running payroll on a spreadsheet",
      "Startups with 1–50 employees and no HR function",
      "Employers who want payslips and registers audit-ready",
    ],
    process: [
      { step: "Set up", desc: "Structure CTC, build the payroll master and confirm PF/ESI/PT applicability for each employee." },
      { step: "Run", desc: "Compute the month's payroll with attendance, leave, overtime, bonuses and reimbursements." },
      { step: "Deduct & file", desc: "TDS, PF, ESI and PT deductions computed, deposited and returned on time." },
      { step: "Deliver", desc: "Payslips released to employees, salary register and bank transfer file handed over." },
    ],
    documents: ["Employee master (CTC, date of joining, PAN, bank, UAN / ESIC numbers)", "Attendance and leave data for the month", "Bonus, incentive and overtime inputs", "Investment declarations and previous employment income"],
    timeline: "Payroll run within 2 working days of receiving inputs.",
    pricing: "From ₹99/employee/month",
    faqs: [
      { q: "Do you handle payslips and registers too?", a: "Yes — payslips, the salary register, the statutory deduction summary and the bank transfer file come as part of the monthly run, in formats an auditor or lender can read." },
      { q: "Can you take over mid-year with existing employees?", a: "Yes. We rebuild the employee master from your previous registers, reconcile opening balances for PF/ESI, and continue without a break in contributions." },
    ],
  },

  /* ============================================================
     Accounting & Bookkeeping
     ============================================================ */
  {
    slug: "bookkeeping-accounting",
    title: "Bookkeeping & Accounting",
    shortTitle: "Bookkeeping",
    icon: BookOpen,
    category: "Accounting & Bookkeeping",
    tagline: "Clean books every month — not a scramble at year end.",
    summary:
      "Monthly recording of sales, purchases, expenses, bank and GST entries in the accounting software of your choice, closed with a trial balance you can rely on.",
    whoNeeds: [
      "Startups with investors or lenders watching the numbers",
      "Businesses filing returns without clean books behind them",
      "Owners whose accountant only appears in the last week of the year",
    ],
    process: [
      { step: "Set up", desc: "Chart of accounts, opening balances and the software configured around how you actually bill." },
      { step: "Record", desc: "Sales, purchases, expenses, payroll and journals posted from your documents each month." },
      { step: "Reconcile", desc: "Bank, GST, TDS and party ledgers matched — differences explained, not buried." },
      { step: "Close", desc: "Monthly close with a trial balance, P&L and balance sheet you can act on." },
    ],
    documents: ["Sales and purchase invoices", "Bank statements for every account", "Expense bills and payment proof", "Loan, lease and EMI details", "GST returns filed for the period"],
    timeline: "Books closed by the 10th of the following month.",
    pricing: "From ₹2,999/month",
    faqs: [
      { q: "Which accounting software do you work on?", a: "Whichever suits you — Tally, Zoho Books, QuickBooks or a spreadsheet for very small volumes. If you have no system yet, we recommend one based on your turnover and whether you bill on GST." },
      { q: "Why does monthly bookkeeping cost more than a yearly filing?", a: "Because it prevents the expensive part — a year-end reconstruction that hides missed input credit, unreconciled banks and pending TDS. Monthly books cost less than fixing annual chaos." },
    ],
  },

  {
    slug: "mis-reporting",
    title: "MIS Reporting & Financial Statements",
    shortTitle: "MIS Reporting",
    icon: PieChart,
    category: "Accounting & Bookkeeping",
    tagline: "Numbers a founder can actually act on.",
    summary:
      "Monthly P&L, balance sheet, receivables and payables ageing and budget-versus-actual reporting — prepared for decisions, not just for filing.",
    whoNeeds: [
      "Owners making pricing, hiring or expansion decisions",
      "Businesses preparing for funding or a bank loan",
      "Companies with more than one revenue stream or location",
    ],
    process: [
      { step: "Agree metrics", desc: "Decide what matters for your business — margins, per-unit economics, working capital, department spend." },
      { step: "Build", desc: "Prepare the statements from closed books, with prior-period comparison." },
      { step: "Review", desc: "Walk through the numbers with you and flag what changed and why." },
      { step: "Improve", desc: "Refine the format each quarter as your questions get sharper." },
    ],
    documents: ["Closed books for the month", "Sales and purchase summaries", "Receivables and payables lists", "Bank balances and loan schedules"],
    timeline: "MIS delivered by the 12th of each month.",
    pricing: "From ₹1,999/month",
    faqs: [
      { q: "What is different about MIS versus a normal P&L?", a: "A filed P&L answers the tax department. MIS answers you: which product is actually profitable, where cash is stuck, what the month's fixed cost looked like against plan. Same books, different question." },
      { q: "Can you give it to my investor or bank?", a: "Yes. We prepare investor- and lender-ready packs — including the schedules and notes a diligence team will ask for." },
    ],
  },

  {
    slug: "bank-reconciliation",
    title: "Bank & Ledger Reconciliation",
    shortTitle: "Reconciliation",
    icon: Search,
    category: "Accounting & Bookkeeping",
    tagline: "Find the gap between what the bank says and what the books say.",
    summary:
      "Account-by-account reconciliation of bank, cash and ledger balances, with a plain-English explanation of every mismatch — and the corrections posted in your books.",
    whoNeeds: [
      "Businesses whose books have never matched the bank",
      "Owners switching accountants mid-year",
      "Anyone heading into a loan application, audit or due diligence",
    ],
    process: [
      { step: "Pull", desc: "Collect statements for every bank, cash and payment-gateway account for the period." },
      { step: "Match", desc: "Line-by-line matching of receipts, payments, charges, interest and unsettled items." },
      { step: "Explain", desc: "A written note on what caused each difference — timing, missed entries, or a real error." },
      { step: "Correct", desc: "Post the corrections and hand you a reconciled trial balance." },
    ],
    documents: ["Bank statements for all accounts", "Payment gateway settlement reports", "Cash book / petty cash records", "Current books (ledger export)"],
    timeline: "3–7 working days depending on volume of transactions.",
    pricing: "From ₹1,499/month",
    faqs: [
      { q: "Why do books drift even with an accountant?", a: "Almost always timing and information gaps — statements that never reached the accountant, gateway settlements net of fees, or auto-debits nobody recorded. Reconciling monthly closes those gaps while they are still small." },
      { q: "Do you reconcile old years too?", a: "Yes. Historical clean-up is common before a funding round or loan. We do it in slabs so you can see progress month by month instead of waiting for one large project." },
    ],
  },

  /* ============================================================
     Advisory & Growth
     ============================================================ */
  {
    slug: "virtual-cfo",
    title: "Virtual CFO",
    shortTitle: "Virtual CFO",
    icon: TrendingUp,
    category: "Advisory & Growth",
    tagline: "CFO-grade judgement without a CFO salary.",
    summary:
      "A senior finance partner on call — monthly performance review, pricing and margin analysis, cash planning, board-ready reporting and help with the big money decisions.",
    whoNeeds: [
      "Founders past ₹1–5 crore of revenue with no senior finance person",
      "Companies preparing for a funding round or bank facility",
      "Businesses whose margins have moved and nobody knows why",
    ],
    process: [
      { step: "Diagnose", desc: "A first review of books, margins, cash and compliance to find what needs attention." },
      { step: "Plan", desc: "A 90-day plan: reporting fixes, cost levers, pricing review and cash discipline." },
      { step: "Run monthly", desc: "Standing review call, MIS pack, variance analysis and decisions logged." },
      { step: "Escalate", desc: "Quarterly deep-dives — unit economics, budgets, funding preparation or cost restructuring." },
    ],
    documents: ["Access to books and bank statements", "Sales, purchase and cost data", "Existing budgets or forecasts", "Loan and investor documents"],
    timeline: "Monthly cadence, with a standing review call.",
    pricing: "From ₹24,999/month",
    faqs: [
      { q: "How is a Virtual CFO different from an accountant?", a: "Your accountant records what happened and files it. A Virtual CFO decides what to do about it — pricing, cost structure, hiring capacity, when to borrow, what the numbers must show before you raise." },
      { q: "Do you attend board or investor meetings?", a: "Yes, when needed. We prepare the pack, flag the risks early and can join the call to answer finance questions directly." },
    ],
  },

  {
    slug: "business-valuation",
    title: "Business Valuation",
    shortTitle: "Business Valuation",
    icon: Calculator,
    category: "Advisory & Growth",
    tagline: "A defensible number — not a guess dressed as a report.",
    summary:
      "Valuation of your business using income, market and asset approaches as appropriate, documented for fundraising, ESOP pricing, partner buyout or a bank and regulatory requirement.",
    whoNeeds: [
      "Founders pricing an ESOP pool or a new funding round",
      "Partners separating or buying each other out",
      "Companies needing a valuation report for a bank or authority",
    ],
    process: [
      { step: "Scope", desc: "Confirm the purpose of the valuation — it decides the method, the date and the level of scrutiny." },
      { step: "Gather", desc: "Historical financials, projections, asset details and comparables." },
      { step: "Value", desc: "Apply the appropriate methods, test the assumptions and triangulate a fair range." },
      { step: "Document", desc: "A written report with workings that survives an investor or authority's questions." },
    ],
    documents: ["3 years of financial statements (or since inception)", "Current management accounts", "Business projections and assumptions", "Asset and liability schedules", "Purpose statement for the valuation"],
    timeline: "7–14 working days after data collection.",
    pricing: "From ₹19,999",
    faqs: [
      { q: "Which valuation method will you use?", a: "It depends on the purpose. Fundraising usually needs a discounted cash-flow or revenue-multiple view; partner buyouts often need a net-asset view as a floor. We usually present a range, not a single heroic number." },
      { q: "Is a valuation report legally required anywhere?", a: "For certain MCA filings, ESOP issuance, and some bank and FEMA situations, a valuation from a qualified valuer is required. Where a registered valuer's sign-off is mandatory, we bring in our CA partner network." },
    ],
  },

  {
    slug: "financial-health-checkup",
    title: "Financial Health Checkup",
    shortTitle: "Health Checkup",
    icon: Stethoscope,
    category: "Advisory & Growth",
    tagline: "A full check-up of your books, compliance and cash — in one report.",
    summary:
      "A one-time deep review of your accounting records, filing status, tax positions and cash cycle, delivered as a written report with a fix-list in priority order.",
    whoNeeds: [
      "Owners who inherited books from a previous accountant",
      "Businesses that suspect missed filings or input credits",
      "Anyone preparing for funding, a loan, or a sale",
    ],
    process: [
      { step: "Review", desc: "Examine ledgers, bank reconciliations, GST and TDS filings, and statutory registers." },
      { step: "Score", desc: "Assess liquidity, profitability, compliance exposure and record hygiene." },
      { step: "Report", desc: "A written report: what is healthy, what is risky, and what to fix first." },
      { step: "Fix", desc: "Optional — we fix the priority items, or hand the list to your team." },
    ],
    documents: ["Last 2–3 years of financial statements", "GST, TDS and ITR acknowledgements", "Bank statements and loan schedules", "Current accounting file / software export"],
    timeline: "5–10 working days.",
    pricing: "From ₹9,999",
    faqs: [
      { q: "Is this useful if my books are already clean?", a: "Yes — the checkup also looks forward: input credit leaking, TDS rate errors, cash-cycle strain, and structures that will cost you tax next year. Clean books still hide expensive habits." },
      { q: "Will you talk to my existing accountant?", a: "Happily. We work with your team, share findings factually, and leave the records and explanations in place." },
    ],
  },

  {
    slug: "startup-india-registration",
    title: "Startup India (DPIIT) Registration",
    shortTitle: "Startup India",
    icon: BadgeCheck,
    category: "Advisory & Growth",
    tagline: "Get the recognition — and the benefits that come with it.",
    summary:
      "DPIIT recognition for your entity: eligibility check, Startup India portal registration, and guidance on the tax and tender benefits you can actually claim.",
    whoNeeds: [
      "Young companies wanting DPIIT-recognised startup status",
      "Founders applying for the 80-IAC tax holiday or angel-tax exemption",
      "Startups bidding for tenders and MSME-linked benefits",
    ],
    process: [
      { step: "Check eligibility", desc: "Entity age, turnover, innovation and structure — confirmed against the current DPIIT rules." },
      { step: "Prepare", desc: "Pitch note, incorporation documents, website and product description assembled in the required format." },
      { step: "Apply", desc: "File on the Startup India portal under the right entity and sector classification." },
      { step: "Claim", desc: "Guidance on what recognition unlocks — and the applications (80-IAC, exemptions) that follow." },
    ],
    documents: ["Certificate of Incorporation / registration", "PAN and GST (if applicable)", "Brief write-up on the product or service and its innovation", "Website / app links and branding materials", "Founder details and entity structure"],
    timeline: "7–20 working days (dependent on DPIIT processing rounds).",
    pricing: "₹4,999",
    faqs: [
      { q: "What does DPIIT recognition actually give me?", a: "Access to tenders and government schemes, self-certification on labour law compliance, easier IBC protection, and eligibility to apply for the income-tax holiday and angel-tax relief under the prescribed conditions." },
      { q: "Is the 80-IAC tax holiday automatic?", a: "No. DPIIT recognition is only the first gate — the 80-IAC application goes to an inter-ministerial board with its own criteria. We tell you honestly whether your business has a realistic case before you spend on it." },
    ],
  },

  {
    slug: "startup-fundraising-support",
    title: "Startup Fundraising Support",
    shortTitle: "Fundraising Support",
    icon: Briefcase,
    category: "Advisory & Growth",
    tagline: "So due diligence doesn't stall your round.",
    summary:
      "Diligence-ready data room, clean cap table, financial model and negotiation support — the financial backbone of an equity round, prepared before investors ask.",
    whoNeeds: [
      "Startups going into their first institutional round",
      "Founders whose diligence keeps raising uncomfortable questions",
      "Companies managing ESOP allocations across a growing team",
    ],
    process: [
      { step: "Prepare", desc: "Clean up books, cap table, statutory registers and contracts into an organised data room." },
      { step: "Model", desc: "Build the financial model, unit economics and use-of-funds plan investors will test." },
      { step: "Manage queries", desc: "Own the diligence tracker — answer investor questions with documents, not promises." },
      { step: "Document", desc: "Support on valuation notes, board approvals, share issuance and statutory filings after the round." },
    ],
    documents: ["Incorporation documents and statutory registers", "Cap table with ESOP details", "Financial statements and management accounts", "Contracts, IP and compliance records", "Business plan and projections"],
    timeline: "Data-room readiness in 2–4 weeks; round timeline depends on investors.",
    pricing: "Scoped per round — quote after a review",
    faqs: [
      { q: "Do you raise money for us?", a: "No — we are not a fundraise brokerage. We make your finance function survive diligence: the numbers, the records and the answers. The introductions are yours to make." },
      { q: "What kills diligence most often?", a: "Messy cap tables, ESOP promises with no paperwork, unreconciled books, and unfiled statutory returns. All fixable — if they are fixed before the term sheet, not after." },
    ],
  },

  {
    slug: "cash-flow-management",
    title: "Cash Flow Management",
    shortTitle: "Cash Flow",
    icon: Banknote,
    category: "Advisory & Growth",
    tagline: "Know what leaves the bank before it leaves.",
    summary:
      "A rolling 13-week cash forecast, receivables follow-up plan and working-capital levers, reviewed with you monthly so shortfalls stop being surprises.",
    whoNeeds: [
      "Businesses with lumpy customer payments",
      "Owners who make decisions without knowing next month's cash position",
      "Companies funding growth from working capital",
    ],
    process: [
      { step: "Map", desc: "Model every inflow and outflow — customer terms, vendor cycles, EMIs, statutory dues and salaries." },
      { step: "Forecast", desc: "Build the rolling 13-week cash forecast and keep it updated each month." },
      { step: "Act", desc: "Receivables escalation plan, vendor terms, and the levers to pull before a crunch." },
      { step: "Review", desc: "Monthly walk-through of actual versus forecast, with the next quarter's funding gaps flagged." },
    ],
    documents: ["Bank statements for all accounts", "Receivables and payables ageing", "Loan / EMI schedules", "Fixed cost and salary details", "Customer payment terms"],
    timeline: "First forecast in 5–7 working days, then monthly.",
    pricing: "From ₹4,999/month",
    faqs: [
      { q: "How is this different from my P&L?", a: "Profit is an opinion; cash is a fact. A business can be profitable and still miss salaries because GST, TDS and receivables timing stacked up. The forecast shows that before it happens." },
      { q: "Will you follow up with my customers for payment?", a: "We prepare the ageing, the letters and the escalation sequence, and can handle the follow-up with your approval. You keep the customer relationship — we handle the uncomfortable part." },
    ],
  },

  {
    slug: "project-finance",
    title: "Project Finance & Loan Support",
    shortTitle: "Project Finance",
    icon: LineChart,
    category: "Advisory & Growth",
    tagline: "Bank-ready project reports, CMA data and documentation.",
    summary:
      "Project reports, CMA data, ratio workings and documentation for term loans, working-capital limits and subsidy schemes — prepared to the format banks actually evaluate.",
    whoNeeds: [
      "Businesses financing machinery, premises or expansion",
      "Companies seeking working-capital limits or CGTMSE-backed loans",
      "MSMEs applying for subsidy and state incentive schemes",
    ],
    process: [
      { step: "Assess", desc: "Understand the requirement and the lender's expectations — term loan, CC limit or scheme-based." },
      { step: "Prepare", desc: "Projected financials, CMA data, ratio analysis and the report in the bank's format." },
      { step: "Submit", desc: "Assemble the documentation pack and respond to the bank's queries through sanction." },
      { step: "Track", desc: "Follow the sanction conditions — insurance, security creation, and end-use reporting." },
    ],
    documents: ["Last 3 years of financial statements and ITRs", "GST returns and bank statements", "Cost estimate / quotations for the project", "Collateral and guarantor details", "Entity and KYC documents"],
    timeline: "7–15 working days depending on the lender's format.",
    pricing: "From ₹14,999",
    faqs: [
      { q: "Do you guarantee sanction?", a: "No — the lender decides, always. What we control is the paperwork: projections that reconcile, ratios the bank can rely on, and answers prepared before they're asked. Sloppy CMA data is the most common reason a good case is rejected." },
      { q: "Can you help with subsidy schemes?", a: "Yes. Several central and state schemes offer capital or interest support to MSMEs. We check which you qualify for and prepare the application alongside the loan file." },
    ],
  },
];

/* ================================================================
   Catalog helpers
   ================================================================ */

/** Live size of the service catalog — use this instead of hard-coded counts. */
export const SERVICE_COUNT = SERVICES.length;

/** All services in a category, in catalog order. */
export function servicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}

/** Services flagged `featured` — used on the home page and the services hero. */
export function featuredServices(): Service[] {
  return SERVICES.filter((s) => s.featured);
}

/** Look up a single service by slug. */
export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Category name → URL-safe anchor (shared by /services and breadcrumbs). */
export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** True when the service has an indicative price to show. */
export function hasPublishedPrice(service: Service): boolean {
  return Boolean(service.pricing?.trim());
}
