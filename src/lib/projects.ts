export type Project = {
  name: string;
  summary: string;
  image: string;
  website?: string;
  github?: string;
  blog?: string;
};

export const projects: Project[] = [
  {
    name: "Azen",
    summary: "Self host-able memory layer for AI agents",
    image: "/projects/azen.png",
    github: "https://github.com/azen-sh/azen-sh",
    blog: "/blog/azen",
  },
  {
    name: "InvoiceNudger",
    summary:
      "A platform that automatically follows up on unpaid invoices with smart, personalized reminders.",
    image: "/projects/invoice.png",
    website: "https://invoicenudger.vercel.app",
    github: "https://github.com/govind-vashishat/Invoice-nudger",
  },
];
