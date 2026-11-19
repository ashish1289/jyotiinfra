"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf, ArrowRight } from "lucide-react";
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

/** "/" only matches exactly; every other link also matches its sub-pages (e.g. /businesses/mining). */
function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /** Clicking a link to the page you're already on returns to the top instead of doing nothing. */
  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    if (href === pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "bg-[#0A192F]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-slate-950/20"
            : "bg-gradient-to-b from-[#0A192F]/80 to-transparent py-5 lg:py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
          <Link href="/" onClick={handleNavClick("/")} className="z-50 relative flex items-center shrink-0" aria-label="Jyoti Infrastructure – Home">
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

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative flex items-center gap-1.5 px-3 py-2 rounded-md text-[0.9375rem] font-semibold tracking-wide transition-colors duration-200",
                    active ? "text-white" : "text-slate-300 hover:text-white"
                  )}
                >
                  {link.name === "Sustainability" && (
                    <Leaf
                      className={cn(
                        "w-4 h-4 transition-colors",
                        active ? "text-emerald-400" : "text-emerald-400/80 group-hover:text-emerald-400"
                      )}
                      aria-hidden
                    />
                  )}
                  <span>{link.name}</span>

                  {/* Hover underline (inactive links only) */}
                  {!active && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-slate-400/60 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  )}

                  {/* Active indicator – slides between tabs on navigation */}
                  {active && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute left-3 right-3 -bottom-0.5 h-[3px] rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:block shrink-0">
            <Link
              href="/contact"
              onClick={handleNavClick("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[0.9375rem] font-semibold tracking-wide bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-900/30 transition-all duration-300 group"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button
            className="lg:hidden z-50 relative p-2 -mr-2 text-white rounded-md"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0A192F] flex flex-col justify-center items-center px-6 overflow-y-auto"
          >
            <nav aria-label="Mobile" className="flex flex-col items-stretch gap-2 w-full max-w-sm pt-24 pb-10">
              {navLinks.map((link) => {
                const active = isLinkActive(pathname, link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={handleNavClick(link.href)}
                    className={cn(
                      "flex items-center justify-between gap-3 px-5 py-3.5 rounded-lg border-l-4 text-2xl font-serif transition-colors",
                      active
                        ? "border-blue-500 bg-blue-600/15 text-white"
                        : "border-transparent text-slate-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span>{link.name}</span>
                    {link.name === "Sustainability" && <Leaf className="w-5 h-5 text-emerald-400" aria-hidden />}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={handleNavClick("/contact")}
                className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-base font-semibold tracking-wide bg-blue-600 text-white hover:bg-blue-500 transition-colors"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
