import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const posts = await getAllPosts("blog");
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium tracking-tight">blog</h1>
      {posts.length === 0 ? (
        <p className="text-muted text-sm">Nothing here yet.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-border">
          {posts.map((p) => (
            <li key={p.slug} className="py-4 flex items-baseline justify-between gap-6">
              <Link
                href={`/blog/${p.slug}`}
                className="hover:underline underline-offset-4"
              >
                {p.title}
              </Link>
              <span className="text-xs text-muted shrink-0">{p.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
