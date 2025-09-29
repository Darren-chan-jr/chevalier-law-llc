import Image from "next/image";
import type { Person } from "@/data/people";

export default function PersonSplitHero({
  person,
  fallbackBannerUrl = "/person-hero@2x.png",
}: { person: Person; fallbackBannerUrl?: string }) {
  const { name, title } = person;
  const bannerUrl = person.banner ?? fallbackBannerUrl;

  return (
    <section className="relative w-full border-t border-b border-black/10">
      {/* ✅ Gradient background restored */}
      <div
        className="relative w-full overflow-hidden
                   bg-gradient-to-r from-[#f3f6f9] via-[#e4edf3] to-[#6f7e8b]"
        style={{ height: "clamp(220px, 36vw, 520px)" }}
      >
        {/* RIGHT: portrait slice (always absolute; no stacking) */}
        <div className="absolute inset-y-0 right-0
                        w-[48%] sm:w-[46%] md:w-[44%] lg:w-[40%] xl:w-[38%]">
          <Image
            src={bannerUrl}
            alt={name}
            fill
            priority
            quality={95}
            sizes="(max-width: 639px) 48vw,
                   (max-width: 767px) 46vw,
                   (max-width: 1023px) 44vw,
                   (max-width: 1279px) 40vw,
                   38vw"
            className="object-contain object-right"  // no cropping
          />
        </div>

        {/* LEFT DESIGN AREA (everything left of the portrait slice) */}
        <div className="absolute inset-y-0 left-0
                        right-[48%] sm:right-[46%] md:right-[44%] lg:right-[40%] xl:right-[38%]">
          {/* Subtle lines/panels box */}
          <div className="pointer-events-none absolute
                          left-[8%] right-[10%] top-[18%] bottom-[18%]">
            {/* vertical line */}
            <div className="absolute left-[18%] top-0 h-full w-px bg-black/10" />
            {/* horizontal line */}
            <div className="absolute left-0 top-[20%] w-full h-px bg-black/10" />
            {/* translucent panels */}
            <div className="absolute left-[12%] bottom-[7%] h-10 w-[58%]
                            rounded-md bg-gradient-to-r from-black/10 to-transparent" />
            <div className="absolute left-[28%] bottom-[3%] h-8 w-[42%]
                            rounded-md bg-gradient-to-r from-black/10 to-transparent" />
          </div>

          
        {/* NAME/TITLE CARD — lock to a consistent spot just above the top grey bar */}
        <div
            className="absolute z-10 right-[15%]"
            // Top grey panel is at bottom:28% and has height ~2.5rem => keep a small gap above it
            style={{ bottom: "calc(28% + 2rem)" }}
        >
            <div
                className="
                bg-transparent backdrop-blur-sm px-5 py-4
                /* Lock width so long names wrap but the block doesn't 'grow' wider/narrower */
                w-[min(520px,46vw)] sm:w-[min(520px,44vw)] md:w-[min(520px,42vw)] lg:w-[min(520px,40vw)]
                max-w-[550px]
                "
            >
                <div
                className="
                    font-semibold tracking-wide text-brand leading-[1.02]
                    text-[clamp(24px,5.2vw,56px)]
                "
                >
                {name}
                </div>
                <div
                className="
                    text-brand/90 leading-snug
                    text-[clamp(14px,2.1vw,20px)]
                "
                >
                {title}
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}