import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Image from "next/image";
import patternBg from "./assets/bg-tablet-pattern.svg";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-vietnam-pro",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Manage | Landing Page",
  description: "A Frontend Mentor solution of Manage landing page made by Roniel Sanchez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.className} antialiased`}
      >
        <div className="relative size-full flex flex-col min-h-[calc(100vh-96px)] overflow-x-hidden">
          <Header />
          <Image src={patternBg} className="-z-10 absolute -top-10 -right-10 md:-right-25 object-contain" alt="Aestethic" />
          <main className="flex-1">
            {children}
          </main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
