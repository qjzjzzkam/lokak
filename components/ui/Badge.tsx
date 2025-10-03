export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}
