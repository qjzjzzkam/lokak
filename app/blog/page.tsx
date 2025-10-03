// app/blog/page.tsx
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/cards/BlogCard";

export const metadata: Metadata = pageMeta({
  title: "Blog",
  path: "/blog",
});

export const revalidate = 3600;

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="container-x section">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Insights & Updates</h1>
      <p className="mt-4 text-neutral-200 max-w-2xl">
        Announcements, program notes, and research highlights from Lokakṣema 2026.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <BlogCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            excerpt={p.excerpt || ""}
            date={p.date}
          />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-10 text-neutral-400">Posts coming soon.</p>
      )}
    </div>
  );
}
