import Image from "next/image";
import PostCard from "@/components/PostCard";
import { featuredInsights, formatPostDate } from "@/data/insights";

export const metadata = {
  title: "Knowledge & Insights — Chevalier Law LLC",
  description:
    "Legal updates and publications on the latest regulatory developments that matter to clients and friends of the firm.",
};

export default function InsightsPage() {
  const featured = featuredInsights.map(p => ({
    ...p,
    dateLabel: formatPostDate(p.date, "en-US"),
  }));

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[220px] sm:h-[260px] overflow-hidden">
        <Image
          src="/insights/hero.jpg"   // put a banner at /public/insights/hero.jpg
          alt="Knowledge & Insights"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Title overlay; doesn't capture clicks */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-3xl sm:text-5xl font-semibold tracking-wider text-white drop-shadow"
              style={{ letterSpacing: "0.08em" }}>
            Knowledge & Insights
          </h1>
        </div>
      </section>

      {/* Intro + Featured */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="prose max-w-none text-[15px] leading-7 text-gray-700">
          <p>
            At Chevalier Law LLC, we provide legal updates and publications on the latest legal and
            regulatory developments that matter to our clients and friends.
          </p>
          <p>
            You are encouraged to look through our online legal updates and publications by using the
            search function below.
          </p>
          <p className="text-gray-600">
            <strong>Note:</strong> The legal updates and publications on this site are for general
            information only and should not be considered legal advice.
          </p>
        </div>

        {/* (Optional) lightweight search bar - filters titles only */}
        {/* Remove this block if you don't want a search yet */}
        {/* <InsightsSearch /> */}

        <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-gray-700">
          Featured Posts
        </h2>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredInsights.map((p) => (
            <PostCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              date={p.date}
              image={p.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
