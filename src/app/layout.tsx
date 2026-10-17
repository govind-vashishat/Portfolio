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
  description: "CS student & software developer — projects and experiments.",
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
      <body className="min-h-full flex flex-col text-foreground">
        <Nav />
        <div className="mx-auto w-full max-w-2xl px-6 pb-16 flex-1 flex flex-col">
          <main className="flex-1 pt-12">{children}</main>
          <footer className="mt-20 pt-8 border-t border-white/[0.07] flex items-center justify-between text-xs text-muted">
            <span>© {new Date().getFullYear()} Govind Vashishat</span>
            <Socials />
          </footer>
        </div>
      </body>
    </html>
  );
}
