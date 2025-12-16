// app/people/page.tsx
import PeopleHero from "@/components/PeopleHero";
import PersonTile from "@/components/PeopleTile";
import { people } from "@/data/people";

export const metadata = { title: "People — Chevalier Law LLC" };

export default function Page() {
  return (
    <main>
      <PeopleHero />

      {/* Page lead */}
      <section className="container py-8 sm:py-10">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold">Our Attorneys</h2>
        <p className="mt-2 text-center text-gray-600 text-sm">
          {/* replace with your subheading text */}
          With a combined experience of over 30 years, our team is committed to your specific needs
        </p>
      </section>

      {/* Grid of people */}
      <section className="container pb-12 sm:pb-16">
        <div className="grid gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <PersonTile key={p.slug} person={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
