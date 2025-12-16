import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="w-full">
      {/* Replace /hero.jpg with your real banner image */}
      <div className="relative w-full h-[90vh] min-h-[420px] aspect-[16/9] sm:aspect-[21/9]">
        <Image
          src="/hero.jpg"
          alt="Chevalier Law LLC — Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-16 sm:pb-24">
      <h1 className="px-4 text-5xl sm:text-5xl font-brand tracking-wider text-white drop-shadow"
          style={{ letterSpacing: "0.08em" }}>
        Your Trusted Legal Advisor
      </h1>
    </div>
    </section>
  );
}
