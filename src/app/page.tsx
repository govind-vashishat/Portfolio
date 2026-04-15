import Link from "next/link";
import Image from "next/image";
import { Contributions } from "@/components/contributions";

export default function Home() {
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
          experiments, and the occasional research paper. Previously{" "}
          <span className="text-foreground">Azen</span>.
        </p>
      </section>

      <Section title="github" href="https://github.com/govind-vashishat">
        <Contributions />
      </Section>

      <Section title="projects" href="/projects">
        <p className="text-muted text-sm">A few things I&apos;ve built recently.</p>
      </Section>

      <Section title="writing" href="/blog">
        <p className="text-muted text-sm">Notes and posts.</p>
      </Section>

      <Section title="research" href="/research">
        <p className="text-muted text-sm">Papers and long-form work.</p>
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
