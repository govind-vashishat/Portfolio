"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/research", label: "research" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mb-16">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Govind Vashishat
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-muted">
          {links.map((l) => (
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

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex flex-col justify-center gap-[5px] p-2 -mr-2 text-foreground"
        >
          <span
            className={`h-px w-5 bg-current transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <ul className="sm:hidden mt-6 flex flex-col gap-4 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
