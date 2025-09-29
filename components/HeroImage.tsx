import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="w-full">
      {/* Replace /hero.jpg with your real banner image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9]">
        <Image
          src="/hero.jpg"
          alt="Chevalier Law LLC — Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
