import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

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
        <div>
          <Header />
          <main>
            {children}
          </main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
