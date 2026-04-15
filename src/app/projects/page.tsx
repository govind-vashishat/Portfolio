export default function ProjectsPage() {
  const projects = [
    {
      name: "Azen",
      description: "Previous project.",
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium tracking-tight">projects</h1>
      <ul className="flex flex-col divide-y divide-border">
        {projects.map((p) => (
          <li key={p.name} className="py-4 flex items-baseline justify-between gap-6">
            <div className="flex flex-col gap-1">
              <a
                href={p.href}
                className="text-foreground hover:underline underline-offset-4"
              >
                {p.name}
              </a>
              <span className="text-sm text-muted">{p.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
