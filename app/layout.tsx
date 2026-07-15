import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Lilit Bareghamyan",
  description: "Front-end developer",
  openGraph: {
    title: "Lilit Bareghamyan",
    description: "Front-end developer",
    url: "https://lilitbareghamyan.vercel.app/",
    siteName: "Portfolio",
    images: [
      {
        url: "https://lilitbareghamyan.vercel.app/es.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff] text-[#000000] ">
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
