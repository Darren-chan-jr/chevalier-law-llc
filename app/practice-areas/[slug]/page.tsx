

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LawyerCard from "@/components/LawyerCard";
import { practiceAreaDetails } from "@/data/practice-areas";
import { people } from "@/data/people"; // getPerson not needed here
import { ChevronLeft } from "lucide-react";
import { toSlug } from "@/lib/slug";

export async function generateStaticParams() {
  return practiceAreaDetails.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = practiceAreaDetails.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.seo?.title ?? `${p.name} — Chevalier Law LLC`,
    description: p.seo?.description ?? p.overview?.[0],
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = practiceAreaDetails.find((x) => x.slug === params.slug);
  if (!p) notFound();

  // lawyers tagged with this practice slug
  const target = toSlug(p.slug); // normalize target once
  const team = people.filter(per =>
    (per.practiceAreas ?? []).some(area => toSlug(area) === target)
  );

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[220px] sm:h-[260px] overflow-hidden">
        <Image
          src={p.hero ?? "/practice-hero.jpg"}
          alt={`${p.name} — Practices`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h1
            className="px-4 text-3xl sm:text-5xl font-semibold tracking-wider text-white drop-shadow"
            style={{ letterSpacing: "0.08em" }}
          >
            Practice Areas
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <Link
          href="/practice-areas"
          className="inline-flex items-center gap-2 text-brand hover:underline text-sm"
          aria-label="Back to Practice Areas"
        >
          <ChevronLeft size={16} />
          Back to Our Expertise
        </Link>

        <h2 className="mt-6 text-2xl sm:text-[26px] font-semibold text-gray-900">{p.name}</h2>

        <div className="mt-4 space-y-4 text-[15px] leading-7 text-gray-700">
          {(p.overview ?? []).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {team.length > 0 && (
          <>
            <hr className="my-8 border-gray-200" />
            <h3 className="text-xl font-semibold text-gray-900">Get in touch</h3>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {team.map((per) => (
                <LawyerCard
                  key={per.slug}
                  href={`/people/${encodeURIComponent(per.slug)}`}
                  name={per.name}
                  title={per.title}
                  photo={per.photo}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
