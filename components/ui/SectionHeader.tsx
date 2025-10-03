export default function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-8">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-neutral-300">{subtitle}</p>}
    </header>
  );
}
