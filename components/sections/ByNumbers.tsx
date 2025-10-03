// components/sections/bynumbers.tsx

const STATS: Array<[string, string]> = [
  ["10,000+", "Global Participants"],
  ["30+", "Countries Represented"],
  ["1,000+", "Hackathon Teams"],
  ["$1M+", "Investment in Innovation"],
  ["50+", "Tier-1 Media Partners"],
];

export default function ByNumbers() {
  return (
    <section className="section">
      <div className="container-x">
        <h2 className="mb-6">Global Scale, Human Focus</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {STATS.map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-black/40 p-6 text-center"
            >
              <div className="text-3xl font-semibold">{value}</div>
              <div className="mt-2 text-sm text-neutral-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
