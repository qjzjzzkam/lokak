export default function FeaturedTracksSection() {
  return (
    <section className="section">
      <div className="container-x">
        <h2 className="mb-6">Three Pathways to Responsible AI</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-black/40 p-6 border border-white/10">
            <h3 className="text-lg font-semibold">Technical & Research Deep Dive</h3>
            <p className="mt-2 text-neutral-300">
              Advancing foundation models, MLOps, and reproducibility standards. Each session paired
              with open-source artifact releases to maximize global impact and accelerate research collaboration.
            </p>
          </div>
          <div className="rounded-xl bg-black/40 p-6 border border-white/10">
            <h3 className="text-lg font-semibold">Business Strategy & Investment</h3>
            <p className="mt-2 text-neutral-300">
              Linking innovation to markets through documented case studies, investor roundtables,
              and structured deal rooms. Where commercial viability meets social responsibility.
            </p>
          </div>
          <div className="rounded-xl bg-black/40 p-6 border border-white/10">
            <h3 className="text-lg font-semibold">Policy, Ethics & Society</h3>
            <p className="mt-2 text-neutral-300">
              Developing governance frameworks, procurement standards, and ethical principles that
              work across diverse regulatory environments and cultural contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
