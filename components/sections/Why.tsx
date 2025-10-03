export default function WhySection() {
  return (
    <section className="section">
      <div className="container-x">
        <h2 className="mb-4">India as the Neutral Global Convener</h2>
        <p className="mb-6">
          Unlike bilateral summits or bloc-based conferences, Lokakṣema positions India as a
          trusted multilateral convener. We bring together stakeholders from the Global North
          and South for balanced, inclusive dialogue that transcends geopolitical divisions.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Innovation",
              d: "Frontier research, reproducible methodologies, and deployable pilots that transform theoretical breakthroughs into real-world solutions.",
            },
            {
              t: "Governance",
              d: "Policy frameworks that balance technological advancement with ethical safeguards, ensuring AI development serves humanity responsibly.",
            },
            {
              t: "Impact",
              d: "Real-world solutions reaching communities most in need, with measurable outcomes and sustainable deployment models.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-xl bg-black/40 p-6 border border-white/10">
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-neutral-300">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
