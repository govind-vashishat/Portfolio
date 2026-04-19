export type Project = {
  name: string;
  summary: string;
  image: string;
  website?: string;
  github?: string;
  blog?: string;
};

export const projects: Project[] = [
  {
    name: "Azen",
    summary: "Self host-able memory layer for AI agents",
    image: "/projects/azen.png",
    github: "https://github.com/azen-sh/azen-sh",
    blog: "/blog/azen",
  },
];
