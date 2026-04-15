import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-medium tracking-tight">Projects</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <li
            key={p.name}
            className="flex flex-col gap-3 rounded-lg ring-1 ring-border p-3 hover:ring-muted/50 transition-colors"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-border/40">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-1 px-0.5">
              <h2 className="text-sm font-medium tracking-tight">{p.name}</h2>
              <p className="text-xs text-muted leading-relaxed">{p.summary}</p>
            </div>

            <div className="flex flex-wrap gap-3 px-0.5 pb-0.5 text-xs text-muted">
              {p.website && (
                <a
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  website ↗
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  github ↗
                </a>
              )}
              {p.blog && (
                <Link
                  href={p.blog}
                  className="hover:text-foreground transition-colors"
                >
                  read more →
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
