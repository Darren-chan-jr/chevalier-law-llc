// components/WhyChooseUs.tsx
import Image from "next/image";

type Card = { title: string; text: string; img: string };

const CARDS: Card[] = [
  {
    title: "Deep Expertise",
    text:
      "Our team comprises seasoned legal professionals with expertise in various fields, ready to provide profound legal insights for every case.",
    img: "/why-1.jpg", // replace with your image
  },
  {
    title: "Personalized Service",
    text:
      "Each client has unique needs. We offer personal service and tailored solutions aligned to your specific requirements.",
    img: "/why-2.jpg",
  },
  {
    title: "Integrity and Ethics",
    text:
      "We uphold high standards of integrity and ethics at every step to align with legal norms and regulations.",
    img: "/why-3.jpg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="container py-10 sm:py-14">
      <h2 className="text-center text-3xl font-serif text-brand">Why Choose Us</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {CARDS.map((c) => (
          <article key={c.title} className="border rounded-2xl overflow-hidden bg-white">
            <div className="relative w-full aspect-[4/3]">
              <Image src={c.img} alt={c.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
