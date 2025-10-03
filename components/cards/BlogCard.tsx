import Link from "next/link";

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
}: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block rounded-xl border border-white/10 bg-black/30 p-6 hover:bg-black/40 transition"
    >
      <div className="text-xs text-neutral-400">{new Date(date).toLocaleDateString()}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300 line-clamp-3">{excerpt}</p>
      <span className="mt-3 inline-block text-sm text-neutral-200">Read more →</span>
    </Link>
  );
}
