// components/PeopleHero.tsx
import Image from "next/image";

export default function PeopleHero() {
  return (
    <section className="relative w-full z-0">
      {/* Use a high-res image (≥1920px wide) */}
      <div className="relative w-full h-[42vh] sm:h-[50vh] lg:h-[56vh]">
        <Image
          src="/people-hero@2x.jpg"   // put this in /public
          alt="People — Chevalier Law LLC"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-5xl font-semibold tracking-wide">
            People
          </h1>
        </div>
      </div>
    </section>
  );
}
