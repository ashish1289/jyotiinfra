"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Businesses", href: "/businesses" },
  { name: "Leadership", href: "/leadership" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Legacy", href: "/legacy" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-primary/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
            : "bg-transparent py-5 lg:py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="z-50 relative flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Jyoti Infrastructure Logo" 
              width={64} 
              height={115} 
              className={cn(
                "w-auto transition-all duration-300 drop-shadow-md",
                isScrolled ? "h-10 md:h-12" : "h-12 md:h-14 lg:h-16"
              )} 
              priority 
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wider uppercase transition-colors hover:text-gold",
                  "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/businesses"
              className={cn(
                "inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-300",
                "bg-gold text-primary hover:bg-white hover:text-primary"
              )}
            >
              Explore Our Businesses
            </Link>
          </div>

          <button
            className={cn("lg:hidden z-50 relative p-2 -mr-2 text-white")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-primary flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/businesses"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 inline-flex items-center justify-center px-8 py-4 text-base font-medium uppercase tracking-wider bg-gold text-primary hover:bg-white hover:text-primary transition-colors"
              >
                Explore Our Businesses
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
