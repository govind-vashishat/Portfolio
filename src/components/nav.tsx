import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/research", label: "research" },
];

export function Nav() {
  return (
    <nav className="mb-16 flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-bold tracking-tight text-foreground"
      >
        Govind Vashishat
      </Link>
      <ul className="flex gap-5 text-sm text-muted">
        {links.slice(1).map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
