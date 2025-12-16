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
      {name: "Private Equity & Funds", slug: "private-equity-and-funds"},
      {name: "Corporate & Commercial", slug: "corporate-and-commercial"},
      {name: "Corporate Secretarial", slug: "corporate-secretarial"}
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
      { name: "China ('PRC') Practice", slug: "china-practice"},
      { name: "International Arbitration", slug: "international-arbitration" }
    ],
  },
  {
    title: "Litigation & Dispute Resolution",
    items: [
      { name: "Arbitration & Commercial Litigation", slug: "arbitration-and-commercial-litigation" },
      { name: "Construction Disputes", slug: "construction-disputes" },
      { name: "Mediation", slug: "mediation" },
    ],
  },
  {
    title: "Regulatory",
    items: [
      { name: "Regulatory Advisory", slug: "regulatory-advisory" }
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
  {
    slug: "mergers-and-acquisitions",
    name: "Mergers & Acquisitions ('M&A')",
    hero: "/m&a.jpg",
    overview: [
      "Our team has advised clients from a wide range of industries such as hospitality, real estate, construction, finance, water and utilities, mining, renewable energy, shipping, food and beverage, healthcare, professional services, technology, and education.",
      "Transactions which we have been involved in include reverse takeovers of public listed companies, offers under the Takeover Code, privatisation of public listed companies, leveraged and management buyouts, and local and cross border acquisitions and disposals of shares, businesses and assets and corporate restructuring/ amalgamation of both public listed and private companies.",
      "Other than relying on our experience and expertise in execution, clients also look to us for structuring and advising on the practical and commercial considerations of their M&A transactions to facilitate and ensure successful completion."
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
      title: "Mergers & Acquisitions — Chevalier Law LLC",
      description:
        "Mergers & Acquisitions lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  },
  {
    slug: "capital-markets",
    name: "Capital Markets",
    hero: "/capital_markets.jpg",
    overview: [
      "We have advised public listed companies, issue managers/ financial advisers, underwriters and placement agents, on a wide range of capital markets transactions including initial public offerings (“IPO”), pre-IPO investment, dual listings, reverse takeovers, public takeovers, de-listings, secondary fund raising such as rights and warrants issues and placement, and various corporate actions by listed companies.",
      "We also advise our listed clients on regulatory compliance and corporate governance matters. Derived from our experience in dealing with the regulators (including our Managing Director’s experience of being a director on several listed companies), we are familiar with the legal/ regulatory requirements and understand what regulators look for."
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
      title: "Capital Markets — Chevalier Law LLC",
      description:
        "Capital Markets lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  },
  {
    slug: "private-equity-and-funds",
    name: "Private Equity & Funds",
    hero: "/pe_and_funds.jpg",
    overview: [
      "We advise our private equity funds clients on their local and cross border downstream investment in selected companies in specific industries and their regulatory compliance. We have also advised licensed fund managers on the Variable Capital Company (“VCC”) regime in Singapore and prepared requisite documents in connection with the VCC."
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
      title: "Private Equity & Funds — Chevalier Law LLC",
      description:
        "Private Equity & Funds lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  },
  {
    slug: "arbitration-and-commercial-litigation",
    name: "Arbitration & Commercial Litigation",
    hero: "/arbitration_and_commercial_litigation.jpg",
    overview: [
      "Our team takes pride in handling a wide ranging area of concerns relating to construction disputes, debt recovery, shareholder disputes, landlord-tenant disputes, contractual and tortious litigation and more.",
      "Our clients range from small medium enterprises, public listed companies to sole proprietorships and building developers. Our services can be tailored to serve your needs, whatever they may be."
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
      title: "Arbitration & Commercial Litigation — Chevalier Law LLC",
      description:
        "Arbitration & Commercial Litigation lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  },
  {
    slug: "corporate-real-estate",
    name: "Corporate Real Estate",
    hero: "/corporate_real_estate.jpg",
    overview: [
      "Our team provides corporate real estate services for private individuals and companies in numerous high value and complex property transactions, involving office units, residential, industrial, commercial buildings. Our lawyers also handled transactions in the sale and lease back of JTC land and acquisitions. Other than acting in the sale, purchase, financing and leasing of the property, our lawyers can also provide expertise in structuring and advising on financing and refinancing facilities for real estate transactions."
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
      title: "Corporate Real Estate — Chevalier Law LLC",
      description:
        "Corporate Real Estate lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  },
  {
    slug: "private-client",
    name: "Private Client",
    hero: "/private_client.jpg",
    overview: [
      "Our private client practice includes advising clients in their asset management, legacy planning and aspects of wealth succession and asset protection. To complement the practice, our lawyers also prepare and execute wills and manage probate and the administration of estates."
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
      title: "Private Client — Chevalier Law LLC",
      description:
        "Private Client lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  },
  {
    slug: "china-practice",
    name: "China ('PRC') Practice",
    hero: "/china_practice.jpg",
    overview: [
      "Drawing from our experience of having acted on numerous transactions with PRC elements and our strong relationships with various PRC law firms cemented during our Managing Director’s previous stint as a Representative of the Shanghai Representative office of an international law firm, our transactional lawyers (who are fluent in communicating in written and oral business Chinese) are able to work seamlessly with PRC qualified lawyers on transactions and matters involving PRC laws and regulations and/or PRC entities. This has served us well in us acting on various matters for our international clients who undertake inbound and outbound investments in connection with China.",
      "We also regularly act for our PRC conglomerates and/or high net worth individuals clients in connection with their M&A, corporate finance and general corporate matters in Singapore."
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
      title: "China ('PRC') Practice — Chevalier Law LLC",
      description:
        "China ('PRC') Practice lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  },
  {
    slug: "corporate-and-commercial",
    name: "Corporate & Commercial",
    hero: "/corporate_and_commercial.jpg",
    overview: [
      "We advise our clients on joint ventures and corporate and commercial contracts including but not limited to shareholders’ agreements, distribution agreements, collaboration agreements, franchise agreements, service agreements, deeds of undertakings, and declarations of trust.",
      "We also prepare/ review facility loan agreements and security documents such as share charges, debentures, mortgages, deeds in respect of assignment of proceeds and insurance, and legal opinions opining on the capacity of transacting parties and the validity, legality and enforceability of such documentation pursuant to Singapore law."
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
      title: "Corporate & Commercial — Chevalier Law LLC",
      description:
        "Corporate & Commercial lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  },
  {
    slug: "corporate-secretarial",
    name: "Corporate Secretarial",
    hero: "/corporate_secretarial.jpg",
    overview: [
      "Our team provides corporate secretarial services (including named company secretary) to a number of public listed companies listed on Singapore Securities Trading Limited (“SGX-ST”) and Hong Kong Stock Exchange and also private limited companies.",
      "Our listed, funds and multinational clients see the value-add we can include in our services due to our familiarity with the laws and regulations, listing rules and corporate secretarial matters, and substantial experience dealing with the regulators including Singapore’s Accounting and Corporate Regulatory Authority and SGX-ST. This allows us to handle more complex cases than most other corporate secretarial firms and to provide a ‘one stop shop’ service."
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
      title: "Corporate Secretarial — Chevalier Law LLC",
      description:
        "Corporate Secretarial lawyers advising on acquisition finance, refinancing and regulatory matters.",
    },
  }
  // …add other practice areas here…
];

// If you are already using these elsewhere (e.g., footer), keep a flat list:
export const practiceAreas = practiceAreaDetails.map(({ slug, name }) => ({ slug, name }));


