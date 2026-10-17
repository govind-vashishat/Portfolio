import Link from "next/link";

const sections = [
  { id: "stack", label: "stack" },
  { id: "github", label: "github" },
  { id: "projects", label: "projects" },
];

export function Nav() {
  return (
    <header className="mx-auto flex w-full max-w-2xl items-center justify-between px-6 pt-8">
      <Link
        href="/"
        className="text-sm font-medium tracking-tight text-foreground"
      >
        Govind Vashishat
      </Link>

      <ul className="flex items-center gap-5 text-sm">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="text-muted transition-colors hover:text-foreground"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
