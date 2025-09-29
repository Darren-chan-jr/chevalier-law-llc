// data/practice-areas.ts
export type PracticeAreaItem = { name: string; slug: string };
export type PracticeAreaGroup = { title: string; items: PracticeAreaItem[] };

export const practiceAreaGroups: PracticeAreaGroup[] = [
  {
    title: "Corporate and Financial Services",
    items: [
      { name: "Banking & Finance", slug: "banking-and-finance" },
      { name: "Capital Markets", slug: "capital-markets" },
      { name: "Mergers & Acquisitions", slug: "mergers-and-acquisitions" },
      { name: "Corporate Real Estate", slug: "corporate-real-estate" },
    ],
  },
  {
    title: "Intellectual Property, Technology & Data",
    items: [
      { name: "IP Strategy & Protection", slug: "ip-strategy-protection" },
      { name: "Technology Transactions", slug: "technology-transactions" },
      { name: "Data Privacy", slug: "data-privacy" },
    ],
  },
  {
    title: "International Practices",
    items: [
      { name: "Cross-border Transactions", slug: "cross-border-transactions" },
      { name: "International Arbitration", slug: "international-arbitration" },
    ],
  },
  {
    title: "Litigation & Dispute Resolution",
    items: [
      { name: "Commercial Litigation", slug: "commercial-litigation" },
      { name: "Construction Disputes", slug: "construction-disputes" },
      { name: "Mediation", slug: "mediation" },
    ],
  },
  {
    title: "Regulatory",
    items: [
      { name: "Regulatory Advisory", slug: "regulatory-advisory" },
      { name: "Investigations", slug: "investigations" },
    ],
  },
  {
    title: "Senior Counsel",
    items: [{ name: "Senior Counsel Services", slug: "senior-counsel" }],
  },
  {
    title: "Specialised Practices",
    items: [
      { name: "Family Law", slug: "family-law" },
      { name: "Private Client", slug: "private-client" },
    ],
  },
  {
    title: "Tax",
    items: [{ name: "Corporate Tax", slug: "corporate-tax" }],
  },
];


// data/practice-areas.ts
export type PracticeAreaDetail = {
  slug: string;
  name: string;
  hero?: string;                         // optional banner image
  overview: string[];                    // paragraphs
  capabilities?: { heading: string; items: string[] }[];
  seo?: { title?: string; description?: string };
};

export const practiceAreaDetails: PracticeAreaDetail[] = [
  {
    slug: "banking-and-finance",
    name: "Banking & Finance",
    hero: "/practice-hero.jpg",
    overview: [
      "Our team advises lenders and borrowers on bilateral and syndicated loans, acquisition finance and asset-backed lending.",
      "We deliver practical solutions across cross-border and domestic transactions.",
    ],
    capabilities: [
      {
        heading: "What we do",
        items: [
          "Acquisition and leveraged finance",
          "Refinancing and restructuring",
          "Regulatory and licensing advisory",
        ],
      },
    ],
    seo: {
      title: "Banking & Finance — Chevalier Law LLC",
      description:
        "Banking & Finance lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  },
  // …add other practice areas here…
];

// If you are already using these elsewhere (e.g., footer), keep a flat list:
export const practiceAreas = practiceAreaDetails.map(({ slug, name }) => ({ slug, name }));


