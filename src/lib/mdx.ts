import client from "../../tina/__generated__/client";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  cover: string;
};

export async function getAllPosts(
  kind: "blog" | "research",
): Promise<PostMeta[]> {
  if (kind === "blog") {
    const res = await client.queries.blogConnection();
    const edges = res.data.blogConnection.edges ?? [];
    return edges
      .map((edge) => {
        const node = edge!.node!;
        return {
          slug: node._sys.filename,
          title: node.title,
          date: node.date ?? "",
          cover: node.cover ?? "",
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }

  const res = await client.queries.researchConnection();
  const edges = res.data.researchConnection.edges ?? [];
  return edges
    .map((edge) => {
      const node = edge!.node!;
      return {
        slug: node._sys.filename,
        title: node.title,
        date: node.date ?? "",
        cover: node.cover ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPost(slug: string) {
  try {
    const res = await client.queries.blog({
      relativePath: `${slug}.mdx`,
    });
    return {
      body: res.data.blog.body,
      meta: {
        slug,
        title: res.data.blog.title,
        date: res.data.blog.date ?? "",
        cover: res.data.blog.cover ?? "",
      } as PostMeta,
    };
  } catch {
    return null;
  }
}

export async function getResearchPost(slug: string) {
  try {
    const res = await client.queries.research({
      relativePath: `${slug}.mdx`,
    });
    return {
      body: res.data.research.body,
      meta: {
        slug,
        title: res.data.research.title,
        date: res.data.research.date ?? "",
        cover: res.data.research.cover ?? "",
      } as PostMeta,
    };
  } catch {
    return null;
  }
}
