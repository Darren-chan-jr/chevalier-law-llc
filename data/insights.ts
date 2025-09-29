// Add these types:
export type InsightBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 | 4 }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export type InsightPost = {
  slug: string;
  title: string;
  date: string;       // ISO, e.g. "2023-11-09"
  excerpt?: string;
  image?: string;     // /public path
  featured?: boolean;
  content?: InsightBlock[];  // ← NEW
};

// Example post with content:
export const insightPosts: InsightPost[] = [
    {
      slug: "legal-consultation-and-advice",
      title: "Legal Consultation and Advice",
      date: "2023-11-09",
      excerpt: "Key regulatory developments and how they may affect your business.",
      image: "/insights/feat-1.jpg",
      featured: true,
      content: [
        { type: "paragraph", text: "This article summarises recent developments and provides practical guidance for in-house teams." },
        { type: "heading", level: 2, text: "Key Takeaways" },
        { type: "list", items: [
          "Regulator expects earlier engagement on complex matters.",
          "Document decisions and rationale contemporaneously.",
          "Review internal escalation thresholds."
        ]},
        { type: "heading", level: 2, text: "Background" },
        { type: "paragraph", text: "Following consultation, new guidelines emphasise proportionality and risk-based supervision." },
        { type: "quote", text: "Prepare for scrutiny—process will matter as much as outcomes.", cite: "Chevalier Law LLC" },
        { type: "heading", level: 3, text: "What to do next" },
        { type: "paragraph", text: "Audit policies, train stakeholders, and set review cadence for high-risk areas." },
      ],
    },
    {
        slug: "law-and-justice-updates",
        title: "Law and Justice Updates",
        date: "2023-11-09",
        excerpt: "Recent decisions and practical takeaways for in-house counsel.",
        image: "/insights/feat-2.jpg",
        featured: true,
    },
    {
        slug: "crime-civil-law-justice-rights",
        title: "Crime, Civil Law, Justice & Rights",
        date: "2023-11-09",
        excerpt: "A primer on rights, remedies and procedure.",
        image: "/insights/feat-3.jpg",
        featured: true,
    },
    // …other posts…
  ];

  export const featuredInsights = insightPosts.filter(p => p.featured);
  
  export function formatPostDate(iso: string, string:"en-US") {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
