import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const posts = await getAllPosts("blog");
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-medium tracking-tight">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-muted text-sm">Nothing here yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((p) => (
            <li
              key={p.slug}
              className="flex flex-col gap-3 rounded-lg ring-1 ring-border p-3 hover:ring-muted/50 transition-colors"
            >
              <Link href={`/blog/${p.slug}`} className="flex flex-col gap-3">
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-border/40">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 px-0.5">
                  <h2 className="text-sm font-medium tracking-tight">
                    {p.title}
                  </h2>
                  <span className="text-xs text-muted">{p.date}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
