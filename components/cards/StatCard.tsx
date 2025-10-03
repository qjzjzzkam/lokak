export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6 text-center">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="mt-2 text-sm text-neutral-300">{label}</div>
    </div>
  );
}
