import Image from "next/image";
import Link from "next/link";
// If your alias "@/data/people" isn't set up, use the relative path below.
import { getPerson, people } from "@/data/people";
import PersonSplitHero from "@/components/PersonSplitHero";


export async function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const person = getPerson(params.slug);

  if (!person) {
    return (
      <main className="container py-14">
        <p>Person not found.</p>
        <Link href="/people" className="text-brand hover:underline mt-4 inline-block">
          ← Back to People
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* HERO — stacked on mobile, split on desktop */}
      <PersonSplitHero person={person} />


      {/* BODY */}
      <section className="container py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Left: tabs & content */}
          <div>
            <PeopleTab
              biography={person.biography}
              experience={person.experience}
              awards={person.awards}
              areas={person.practiceAreas}
            />
          </div>

          {/* Right: sidebar */}
          <aside className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                Contact Details
              </h3>
              <ul className="mt-2 text-sm text-gray-800 space-y-1">
                {person.phone && <li>T: {person.phone}</li>}
                {person.mobile && <li>M: {person.mobile}</li>}
                {person.email && (
                  <li>
                    E:{" "}
                    <a
                      href={`mailto:${person.email}`}
                      className="text-brand hover:underline"
                    >
                      {person.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                Qualifications
              </h3>
              <ul className="mt-2 text-sm text-gray-800 space-y-1">
                {(person.qualifications ?? []).map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-4">
              <Link href="/people" className="text-sm text-brand hover:underline">
                ← Back to People
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

// IMPORTANT: import after usage so TypeScript finds it even if editor reorders
import PeopleTab from "./IndividualPeople";