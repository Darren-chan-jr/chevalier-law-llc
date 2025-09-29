// app/about/page.tsx
import Image from "next/image";
import AboutTabs from "./AboutTabs";

export const metadata = { title: "Who We Are — Chevalier Law LLC" };

export type TabKey = "who" | "history" | "awards";
export type Copy = Record<TabKey, { title: string; paragraphs: string[] }>;

const COPY: Copy = {
  who: {
    title: "Who We Are",
    paragraphs: [
      "Chevalier Law LLC is a boutique law firm with expertise in corporate, capital markets, commercial litigation, international arbitration, and corporate real estate. Our lawyers have worked at major international and local firms and advise SGX-ST listed companies as well as private enterprises.",
      "We focus on delivering commercial, efficient, incisive and client-focused solutions for Singapore and the wider Asia-Pacific region.",
      "Our clients include listed companies, multinational corporations, private equity funds, asset managers, developers, high net worth individuals, and SMEs."
    ],
  },
  history: {
    title: "Our History",
    paragraphs: [
      "Founded by experienced practitioners, the firm has grown through long-term relationships with clients across key industries such as finance, real estate, technology and consumer goods.",
      "Our team has led significant cross-border transactions and complex disputes, building a track record for responsive, practical advice."
    ],
  },
  awards: {
    title: "Awards & Accolades",
    paragraphs: [
      "Recognised by regional directories and industry publications for work in corporate, employment and disputes.",
      "Team members have been cited as leading lawyers and rising stars for consistent delivery and client service."
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO with overlay */}
      <section className="relative w-full z-0">
        <div className="relative w-full h-[42vh] sm:h-[50vh] lg:h-[56vh]">
          <Image
            src="/chevalier.jpeg"   // <-- put a sharper image in /public
            alt="About Chevalier Law LLC"
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover"
          />
          {/* Subtle dark overlay for legibility */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Title overlay; doesn't capture clicks */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <h1 className="px-4 text-3xl sm:text-5xl font-semibold tracking-wider text-white drop-shadow"
                style={{ letterSpacing: "0.08em" }}>
              ABOUT US
            </h1>
          </div>
        </div>
      </section>

      {/* Tabs + Content (client) */}
      <section className="container py-6 sm:py-8 relative z-10">
        <AboutTabs copy={COPY} />
      </section>
    </main>
  );
}
