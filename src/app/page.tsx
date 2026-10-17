import Image from "next/image";
import { Contributions } from "@/components/contributions";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { stack } from "@/lib/stack";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <section className="flex items-center gap-5">
        <Image
          src="/myself.png"
          alt="Govind Vashishat"
          width={160}
          height={160}
          preload
          className="h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover ring-1 ring-white/10 shrink-0"
        />
        <p className="text-pretty leading-relaxed text-muted">
          CS student and software developer. I build things — tools,
          experiments, and the occasional research paper.
        </p>
      </section>

      <Section id="stack" title="stack">
        <ul className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-surface px-3 py-1 text-xs text-muted ring-1 ring-border transition-colors duration-300 hover:bg-surface-hover hover:text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="github"
        title="github"
        href="https://github.com/govind-vashishat"
      >
        <Contributions />
      </Section>

      <Section id="projects" title="projects">
        {projects.length === 0 ? (
          <p className="text-sm text-muted">Nothing here yet.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </ul>
        )}
      </Section>
    </div>
  );
}

function Section({
  id,
  title,
  href,
  children,
}: {
  id: string;
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {title}
        </h2>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} (opens in a new tab)`}
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            ↗
          </a>
        )}
      </div>
      {children}
    </section>
  );
}
