import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white pt-24 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 md:pr-8">
            <div className="flex items-center gap-4 md:gap-5 mb-6">
              <Image 
                src="/logo.svg" 
                alt="Jyoti Infrastructure Logo" 
                width={80} 
                height={144} 
                className="h-14 w-auto md:h-16 lg:h-20 drop-shadow-md" 
              />
              <div>
                <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-[2.1rem] tracking-wide uppercase drop-shadow-sm leading-tight">
                  JYOTI INFRASTRUCTURE
                </h2>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Private Limited</p>
              </div>
            </div>
            
            <p className="text-slate-300 text-base leading-relaxed max-w-md mb-6">
              Building Businesses. Creating Assets. Shaping the Future.
            </p>

            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 max-w-md space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Leaf className="w-4 h-4" />
                <span>ESG & Sustainability Commitment</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Driving low-carbon infrastructure, clean renewable energy (75 MW capacity), and sustainable resource management across India.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase text-blue-400 mb-6 text-sm">
              Company
            </h3>
            <ul className="space-y-3.5 text-base">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About Group
                </Link>
              </li>
              <li>
                <Link href="/legacy" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Our Legacy (Since 1960s)
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Board & Leadership
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Sustainability & ESG</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase text-blue-400 mb-6 text-sm">
              Business Sectors
            </h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link href="/businesses/mining" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Sustainable Mining
                </Link>
              </li>
              <li>
                <Link href="/businesses/renewable-energy" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Renewable Energy
                </Link>
              </li>
              <li>
                <Link href="/businesses/automobile" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Automobile Retail
                </Link>
              </li>
              <li>
                <Link href="/businesses/hospitality" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Hospitality (Taj Puri)
                </Link>
              </li>
              <li>
                <Link href="/businesses/financial-services" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/businesses/real-estate" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Commercial Real Estate
                </Link>
              </li>
              <li>
                <Link href="/businesses/aviation" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Aviation Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase text-blue-400 mb-6 text-sm">
              Contact & Enquiries
            </h3>
            <ul className="space-y-4 mb-8 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Corporate Office, Bhubaneswar, Odisha – 751001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="break-all">contact@jyotiinfrastructure.com</span>
              </li>
            </ul>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-semibold tracking-wider uppercase transition-all shadow-md group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 Jyoti Infrastructure Private Limited. All Rights Reserved.</p>
          <p className="flex items-center gap-2 text-slate-400">
            <Leaf className="w-4 h-4 text-emerald-400" aria-hidden />
            <span>Committed to responsible, low-carbon growth.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
