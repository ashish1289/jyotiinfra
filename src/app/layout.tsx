import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jyoti Infrastructure Private Limited | Diversified Business Group",
  description: "Jyoti Infrastructure Private Limited is a diversified business group with interests across mining, automobiles, financial services, real estate, renewable energy, aviation and hospitality.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-warm-white text-charcoal selection:bg-gold selection:text-primary">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
