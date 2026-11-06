import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2 md:pr-12">
            <div className="flex items-center gap-4 md:gap-5 mb-8">
              <Image src="/logo.svg" alt="Jyoti Infrastructure Logo" width={80} height={144} className="h-14 w-auto md:h-16 lg:h-20 drop-shadow-md" />
              <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-[2.1rem] tracking-wide uppercase drop-shadow-sm leading-tight">
                JYOTI INFRASTRUCTURE
              </h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-8">
              Building Businesses. Creating Assets. Shaping the Future.
            </p>
          </div>

          <div>
            <h3 className="font-medium tracking-wider uppercase text-gold mb-6 text-sm">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-white/80 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/legacy" className="text-white/80 hover:text-gold transition-colors">
                  Legacy
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-white/80 hover:text-gold transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-white/80 hover:text-gold transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium tracking-wider uppercase text-gold mb-6 text-sm">
              Businesses
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/businesses/mining" className="text-white/80 hover:text-gold transition-colors">
                  Mining
                </Link>
              </li>
              <li>
                <Link href="/businesses/automobile" className="text-white/80 hover:text-gold transition-colors">
                  Automobile
                </Link>
              </li>
              <li>
                <Link href="/businesses/financial-services" className="text-white/80 hover:text-gold transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/businesses/real-estate" className="text-white/80 hover:text-gold transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/businesses/renewable-energy" className="text-white/80 hover:text-gold transition-colors">
                  Renewable Energy
                </Link>
              </li>
              <li>
                <Link href="/businesses/aviation" className="text-white/80 hover:text-gold transition-colors">
                  Aviation
                </Link>
              </li>
              <li>
                <Link href="/businesses/hospitality" className="text-white/80 hover:text-gold transition-colors">
                  Hospitality
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium tracking-wider uppercase text-gold mb-6 text-sm">
              Connect
            </h3>
            <ul className="space-y-4 mb-8">
              <li>
                <Link href="/contact" className="text-white/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-gold transition-colors">
                  Business Enquiries
                </Link>
              </li>
            </ul>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors group"
            >
              <span className="uppercase tracking-wider text-sm font-medium">Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Jyoti Infrastructure Private Limited. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
