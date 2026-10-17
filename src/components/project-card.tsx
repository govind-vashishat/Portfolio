import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { name, summary, image, website, github, writeup } = project;
  const primary = website ?? github ?? writeup;
  const external = primary?.startsWith("http");

  return (
    <li className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black transition-colors duration-300 hover:border-white/25">
      {/* Covers the whole card so anywhere you point is clickable. The
          explicit links below sit above it on z-10. */}
      {primary && (
        <a
          href={primary}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          aria-label={`${name} — open project`}
          className="absolute inset-0 z-[1] rounded-xl"
        />
      )}

      <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-black">
        <Image
          src={image}
          alt={`${name} preview`}
          fill
          sizes="(max-width: 640px) 100vw, 336px"
          quality={95}
          placeholder="blur"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-medium tracking-tight text-foreground">
            {name}
          </h3>
          {primary && (
            <span
              aria-hidden="true"
              className="text-xs text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            >
              {external ? "↗" : "→"}
            </span>
          )}
        </div>
        <p className="text-xs leading-relaxed text-pretty text-muted">
          {summary}
        </p>

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-2 pt-3">
          {website && <CardLink href={website}>website</CardLink>}
          {github && <CardLink href={github}>github</CardLink>}
          {writeup && <CardLink href={writeup}>write-up</CardLink>}
        </div>
      </div>
    </li>
  );
}

function CardLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const className =
    "rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] whitespace-nowrap text-muted transition-colors hover:border-white/30 hover:text-foreground";
  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
