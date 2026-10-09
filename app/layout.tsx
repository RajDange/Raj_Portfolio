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

export const metadata: Metadata = {
  title: "Raj Dange | Data Engineer & Data Architect",
  description:
    "Data Engineer and Data Architect building scalable data platforms on Azure, Microsoft Fabric, and Databricks.",
    icons: {
    icon: "/images/Logo_Image.png", // update this path to match your actual filename
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