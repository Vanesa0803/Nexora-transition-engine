import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXORA | Mission to Transition",
  description: "AI-powered relocation command center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} min-h-screen bg-[#060B14] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}