export default function Hero() {
    return (
      <section className="container py-16 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
              Experienced. Strategic. Client‑Focused.
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              We deliver clear, practical legal solutions across corporate, commercial and dispute matters.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/practice-areas" className="px-5 py-3 rounded-2xl bg-brand text-white text-sm hover:bg-brand-light">Our Expertise</a>
              <a href="/contact" className="px-5 py-3 rounded-2xl bg-brand text-white text-sm hover:bg-brand-light">Contact Us</a>
            </div>
          </div>
          <div className="rounded-2xl aspect-[4/3] bg-gray-100" />
        </div>
      </section>
    );
  }