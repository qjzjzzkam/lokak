// app/summit/page.tsx
export default function SummitPage() {
  return (
    <div className="container-x section">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Three Days That Will Define AI&apos;s Decade</h1>
        <p className="mt-3 text-lg text-neutral-300">
          Experience the convergence of technical innovation, policy wisdom, and business strategy at the world&apos;s most
          comprehensive AI summit.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Hybrid Excellence: Physical Presence, Global Reach</h2>
        <p className="text-neutral-200">
          Lokakṣema 2026 integrates high-level plenaries with specialized deep-dive tracks, creating unprecedented opportunities
          for knowledge exchange, partnership formation, and tangible impact.
        </p>
        <p className="text-neutral-200">
          <strong>Venue:</strong> Bharat Mandapam, Pragati Maidan, New Delhi—the prestigious venue that hosted the G20 Summit.
        </p>
        <p className="text-neutral-200">
          <strong>Format:</strong> Hybrid model combining physical attendance with global digital participation.
        </p>
        <p className="text-neutral-200">
          <strong>Accessibility:</strong> Full wheelchair accessibility, sign-language interpretation, automated captioning, and support desks.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Designed for Maximum Engagement</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h3 className="font-semibold">Morning Plenaries (09:00–12:30)</h3>
            <p className="mt-2 text-neutral-300">
              Grand challenges addressed by heads of state, Nobel laureates, AI pioneers, and civil society leaders.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h3 className="font-semibold">Parallel Track Sessions (14:00–17:30)</h3>
            <p className="mt-2 text-neutral-300">
              Deep-dive technical workshops, policy roundtables, and business strategy sessions.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h3 className="font-semibold">Evening Showcases (18:00–20:00)</h3>
            <p className="mt-2 text-neutral-300">
              Innovation demos, sponsor exhibits, hackathon updates, and structured networking receptions.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Three Tracks, Infinite Possibilities</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {[
            ["Technical & Research Deep Dive", "Foundation models, reproducible ML workflows, open benchmarks; sessions paired with open-source artifacts."],
            ["Business Strategy & Investment", "Case studies, investor roundtables, productization pathways, deal rooms."],
            ["Policy, Ethics & Society", "Governance frameworks, procurement guidance, ethical principles, societal impacts."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Built for Every Stakeholder</h2>
          <ul className="mt-4 space-y-2 text-neutral-200 list-disc list-inside">
            <li><strong>Researchers & Academics:</strong> Present work, collaborate, contribute to statements.</li>
            <li><strong>Industry Leaders & Executives:</strong> Partnerships, investment, innovation showcases, procurement access.</li>
            <li><strong>Policymakers & Regulators:</strong> Governance frameworks, G2G dialogues, expert access.</li>
            <li><strong>Students & Developers:</strong> Learn, hackathon, fast-track your career.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Beyond Standard Conference Programming</h2>
          <ul className="mt-4 space-y-2 text-neutral-200 list-disc list-inside">
            <li>Youth Dialogues • Global South Leadership Panels</li>
            <li>Simultaneous Interpretation in UN languages + Hindi</li>
            <li>24/7 Recording & On-demand access within 48 hours</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
