// app/contact/page.tsx
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact — Chevalier Law LLC",
  description:
    "Phone, address, opening hours and directions to Chevalier Law LLC.",
};

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[220px] sm:h-[260px] overflow-hidden">
        {/* Replace with your banner: /public/contact/hero.jpg */}
        <Image
          src="/contact/hero.jpg"
          alt="Contact"
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
            Contact Us
          </h1>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <h2 className="text-2xl sm:text-[26px] font-semibold text-gray-900">
          Have Any Questions?
          <br className="hidden sm:block" /> Feel Free To Contact Us!
        </h2>

        {/* Four items */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={<Phone className="h-5 w-5" />}
            title="Phone Numbers"
          >
            <div>T: +65 6980 8710</div>
            <div>F: +65 6980 8906</div>
          </InfoCard>

          <InfoCard icon={<MapPin className="h-5 w-5" />} title="Physical Address">
            <div>112 Robinson Road</div>
            <div>#04-02</div>
            <div>Singapore 068902</div>
          </InfoCard>

          <InfoCard icon={<Clock className="h-5 w-5" />} title="Opening Hours">
            <div>Mon–Fri</div>
            <div>09:00AM – 06:00PM</div>
          </InfoCard>

          <InfoCard icon={<Mail className="h-5 w-5" />} title="Email Address">
            <Link
              href="mailto:info@chevalierlawllc.com"
              className="text-brand hover:underline"
            >
              info@chevalierlawllc.com
            </Link>
          </InfoCard>
        </div>

        {/* Getting here */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900">Getting Here</h3>

          <div className="mt-4 space-y-5 text-[15px] leading-7 text-gray-800">
            <div>
              <strong>By car—</strong>
              <div>You can park at Oxley Tower, Robinson Centre or SBF Center.</div>
            </div>

            <div>
              <strong>By taxi—</strong>
              <div>The nearest taxi stand is at E15 Taxi Stand along Robinson Road.</div>
            </div>

            <div>
              <strong>By train—</strong>
              <div>
                Alight at Tanjong Pagar MRT station (Exit A) / Telok Ayer MRT station (Exit F) /
                Shenton Way MRT station (Exit 6)
              </div>
            </div>

            <div>
              <strong>By bus—</strong>
              <div>Nearest Bus Stop: 80 Robinson Road</div>
              <div className="mt-1">
                Nearest bus service numbers: 10, 10e, 97, 97e, 106, 133, 196, 196e, 513, 651, 652,
                653, 654, 655, 657, 660, 660M, 661, 663, 665, 666, 667, 668, 670, 671, 672, 674,
                680E, 888E, 951E, 982E
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- little helper for the four info tiles --- */
function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="mt-1 text-gray-700 text-[15px] leading-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
