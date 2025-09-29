// components/Testimonials.tsx
"use client";
import { useState, useEffect } from "react";

const QUOTES = [
  {
    text:
      "Their advice is of an extremely high standard, while remaining very commercial and practical.",
    source: "Chambers Asia-Pacific – Asia-Pacific’s Leading Lawyers for Business",
  },
  {
    text:
      "Clear, actionable guidance delivered on tight timelines. The team really understands business needs.",
    source: "General Counsel, Regional Conglomerate",
  },
  {
    text:
      "Responsive and reliable—precise advice that helped us navigate complex regulatory issues.",
    source: "Founder, Fintech Company",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  // (Optional) Auto-advance every 6s. Remove if you want manual only.
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % QUOTES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="container py-12 sm:py-16">
      <h2 className="text-center text-xl sm:text-2xl font-semibold">What Our Clients Say</h2>

      <div className="relative mt-6 sm:mt-8 max-w-3xl mx-auto text-center">
        <div className="text-5xl text-gray-300 absolute left-0 -top-2 select-none">“</div>

        <p className="text-gray-700 px-8">{QUOTES[i].text}</p>

        <div className="text-5xl text-gray-300 absolute right-0 -top-2 select-none">”</div>

        <div className="text-xs sm:text-sm text-gray-500 mt-4 font-medium">
          {QUOTES[i].source}
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to quote ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                idx === i ? "bg-brand" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
