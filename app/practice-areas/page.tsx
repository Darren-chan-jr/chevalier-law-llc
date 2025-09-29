// app/practice-areas/page.tsx
import Image from "next/image";
import PracticeAreasSidebar from "@/components/PracticeAreasSidebar";
import { practiceAreaGroups } from "@/data/practice-areas";

export const metadata = { title: "Practices — Chevalier Law LLC" };

export default function Page() {
  return (
    <main>
      {/* Hero (replace /practice-hero.jpg with your own) */}
      <section className="relative h-[220px] sm:h-[260px] overflow-hidden">
        <Image
          src="/practice-hero.jpg"
          alt="Practices"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Title overlay; doesn't capture clicks */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-3xl sm:text-5xl font-semibold tracking-wider text-white drop-shadow"
              style={{ letterSpacing: "0.08em" }}>
            Practice Areas
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="grid gap-8 md:grid-cols-[320px,1fr]">
          {/* Left: Sidebar */}
          <div>
            <PracticeAreasSidebar groups={practiceAreaGroups} />
          </div>

          {/* Right: Intro text */}
          <article>
            <h2 className="text-2xl sm:text-[26px] font-semibold text-gray-900">
              We make a world of difference.
            </h2>

            <div className="mt-4 space-y-4 text-[15px] leading-7 text-gray-700">
              <p>
                In each of our practice groups, we are focused on making a difference. As a full
                service, broad spectrum firm, no matter what practices you have contact with, our
                work will always be exceptional. Our rapid rise to become one of Singapore’s
                biggest and best firms is testament to this.
              </p>
              <p>
                The exceptional nature of our work has drawn recognition from major regional and
                international commentators, and we have established ourselves among the top echelons
                of the Asian legal world. Our impressive track record is the result of the
                dedication and professionalism of our lawyers who provide clients with practical and
                creative solutions to legal problems.
              </p>
              <p>
                The collaborative nature of our practices ensures that clients receive the quality
                of service that is essential in today’s competitive and challenging environment.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
