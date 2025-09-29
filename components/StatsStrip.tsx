// components/StatsStrip.tsx
const STATS = [
    { value: "1500+", label: "Happy Clients" },
    { value: "150+", label: "Attorneys" },
    { value: "2000+", label: "Practice Areas" }, // replace with your real metric/label
    { value: "500+", label: "Case Dismiss" },     // replace label if needed
  ];
  
  export default function StatsStrip() {
    return (
      <section className="container py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, idx) => (
            <div
              key={idx}
              className="text-center border-t pt-6 sm:border-none sm:pt-0"
            >
              <div className="text-3xl font-bold text-brand">{s.value}</div>
              <div className="text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  