import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Socials } from "@/components/socials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Govind Vashishat",
  description: "CS student & software developer — projects, writing, research.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="mx-auto w-full max-w-2xl px-6 py-16 flex-1 flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <footer className="mt-24 pt-8 border-t border-border flex items-center justify-between text-xs text-muted">
            <span>© {new Date().getFullYear()} Govind Vashishat</span>
            <Socials />
          </footer>
        </div>
      </body>
    </html>
  );
}
