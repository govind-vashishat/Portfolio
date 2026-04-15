import fs from "node:fs";
import path from "node:path";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readDir(kind: "blog" | "research"): string[] {
  const dir = path.join(CONTENT_ROOT, kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function parseFrontmatter(source: string): {
  meta: Record<string, string>;
  body: string;
} {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: source };
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) meta[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return { meta, body: match[2] };
}

export function getAllPosts(kind: "blog" | "research"): PostMeta[] {
  const slugs = readDir(kind);
  const posts = slugs.map((slug) => {
    const file = fs.readFileSync(
      path.join(CONTENT_ROOT, kind, `${slug}.mdx`),
      "utf8",
    );
    const { meta } = parseFrontmatter(file);
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "",
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(kind: "blog" | "research", slug: string) {
  const slugs = readDir(kind);
  if (!slugs.includes(slug)) return null;
  const mod = await import(`../../content/${kind}/${slug}.mdx`);
  const file = fs.readFileSync(
    path.join(CONTENT_ROOT, kind, `${slug}.mdx`),
    "utf8",
  );
  const { meta } = parseFrontmatter(file);
  return {
    Content: mod.default as React.ComponentType,
    meta: {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "",
    } as PostMeta,
  };
}
