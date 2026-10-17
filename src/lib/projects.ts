import type { StaticImageData } from "next/image";
import azen from "../../public/projects/azen.png";
import invoice from "../../public/projects/invoice.png";
import kivo from "../../public/projects/kivo.png";

export type Project = {
  name: string;
  summary: string;
  /** Statically imported so each image keeps its own dimensions and gets a blur placeholder. */
  image: StaticImageData;
  website?: string;
  github?: string;
  /** Optional link to a longer write-up. External URL, or an internal path. */
  writeup?: string;
};

export const projects: Project[] = [
  {
    name: "Kivo",
    summary:
      "Open-source coding agent for your terminal. Describe a task and it reads your code, edits files, and runs your tests until it's done.",
    image: kivo,
    website: "https://kivoforge.vercel.app",
    github: "https://github.com/govind-vashishat/Kivo",
  },
  {
    name: "Azen",
    summary: "Self host-able memory layer for AI agents",
    image: azen,
    github: "https://github.com/azen-sh/azen-sh",
  },
  {
    name: "InvoiceNudger",
    summary:
      "A platform that automatically follows up on unpaid invoices with smart, personalized reminders.",
    image: invoice,
    website: "https://invoicenudger.vercel.app",
    github: "https://github.com/govind-vashishat/Invoice-nudger",
  },
];
