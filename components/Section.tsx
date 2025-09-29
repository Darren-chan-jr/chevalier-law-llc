export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="container py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        <div className="mt-6">{children}</div>
      </section>
    );
  }