import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "@/lib/mdx";

export function generateStaticParams() {
  return getAllPosts("blog").map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost("blog", slug);
  if (!post) return notFound();
  const { Content, meta } = post;
  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight">{meta.title}</h1>
        <span className="text-xs text-muted">{meta.date}</span>
      </header>
      <div className="prose-invert flex flex-col gap-4 text-foreground/90 leading-relaxed [&_h2]:text-lg [&_h2]:font-medium [&_h2]:mt-8 [&_a]:underline [&_a]:underline-offset-4 [&_code]:font-mono [&_code]:text-sm [&_code]:bg-border [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded">
        <Content />
      </div>
    </article>
  );
}
