import Link from "next/link";
import Image from "next/image";
import { Contributions } from "@/components/contributions";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/mdx";

export default async function Home() {
  const featured = projects.slice(0, 4);
  const allPosts = await getAllPosts("blog");
  const posts = allPosts.slice(0, 3);
  const allPapers = await getAllPosts("research");
  const papers = allPapers.slice(0, 3);
  return (
    <div className="flex flex-col gap-16">
      <section className="flex items-center gap-5">
        <Image
          src="/myself.jpg"
          alt="Govind Vashishat"
          width={160}
          height={160}
          priority
          className="h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover ring-1 ring-border shrink-0"
        />
        <p className="text-muted leading-relaxed">
          CS student and software developer. I build things — tools,
          experiments, and the occasional research paper.
        </p>
      </section>

      <Section title="github" href="https://github.com/govind-vashishat">
        <Contributions />
      </Section>

      <Section title="projects" href="/projects">
        {featured.length === 0 ? (
          <p className="text-muted text-sm">Nothing here yet.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((p) => (
              <li key={p.name}>
                <Link
                  href="/projects"
                  className="group flex gap-3 items-center rounded-md ring-1 ring-border p-2.5 hover:ring-muted/50 transition-colors"
                >
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded bg-border/40">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      quality={95}
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm text-foreground truncate">
                      {p.name}
                    </span>
                    <span className="text-xs text-muted truncate">
                      {p.summary}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="writing" href="/blog">
        {posts.length === 0 ? (
          <p className="text-muted text-sm">Nothing here yet.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {posts.map((p) => (
              <li
                key={p.slug}
                className="py-2.5 flex items-baseline justify-between gap-6"
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm hover:underline underline-offset-4"
                >
                  {p.title}
                </Link>
                <span className="text-xs text-muted shrink-0">{p.date}</span>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="research" href="/research">
        {papers.length === 0 ? (
          <p className="text-muted text-sm">Nothing here yet.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {papers.map((p) => (
              <li
                key={p.slug}
                className="py-2.5 flex items-baseline justify-between gap-6"
              >
                <Link
                  href={`/research/${p.slug}`}
                  className="text-sm hover:underline underline-offset-4"
                >
                  {p.title}
                </Link>
                <span className="text-xs text-muted shrink-0">{p.date}</span>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </div>
  );
}

function Section({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium tracking-tight uppercase">
          {title}
        </h2>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            ↗
          </a>
        ) : (
          <Link
            href={href}
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
