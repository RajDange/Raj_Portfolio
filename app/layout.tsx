import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const title = "Raj Dange | Data Engineer & Data Architect";
const description =
  "Data Engineer and Data Architect building scalable data platforms on Azure, Microsoft Fabric, and Databricks.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/images/Logo_Image.png",
  },
  openGraph: {
    type: "website",
    siteName: "Raj Dange",
    title,
    description,
    images: [{ url: "/images/Logo_Image.png", alt: "Raj Dange" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/Logo_Image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-bg text-text-primary antialiased">
        <div className="flex min-h-screen flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 md:pl-[150px]">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}