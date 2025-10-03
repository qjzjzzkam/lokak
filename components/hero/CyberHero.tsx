import Button from "@/components/ui/Button";

export default function CyberHero() {
  return (
    <div className="relative z-10 h-full flex items-center">
      <div className="container-x">
        <p className="kicker">New Delhi • Q4 2026 • Bharat Mandapam</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">
          Where AI Meets Humanity&apos;s Future
        </h1>
        <p className="mt-5 text-lg md:text-xl max-w-3xl text-neutral-200">
          Lokakṣema 2026: The Global AI Well-being Summit. Convening world leaders, researchers,
          and innovators to ensure artificial intelligence serves the welfare of all.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/register">Register for Summit</Button>
          <Button href="/sponsorship" data-variant="outline">Become a Sponsor</Button>
          <Button href="/hackathon" data-variant="outline">Join the Hackathon</Button>
        </div>
      </div>
    </div>
  );
}
