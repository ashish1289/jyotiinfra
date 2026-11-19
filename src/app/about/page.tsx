import Image from "next/image";
import Link from "next/link";
import { Shield, Leaf, Target, Users, ArrowRight, Compass } from "lucide-react";

export const metadata = {
  title: "About Us | Jyoti Infrastructure",
  description: "Learn about the heritage, visionary leadership, sustainability values, and tangible asset scale of Jyoti Infrastructure Private Limited.",
};

const values = [
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    desc: "Over 60 years of ethical enterprise, total statutory compliance, and transparent governance across all ventures.",
  },
  {
    icon: Leaf,
    title: "Sustainable Stewardship",
    desc: "Embedding ESG standards into every sector, from 75 MW clean energy to zero-effluent mining reclamation.",
  },
  {
    icon: Target,
    title: "Tangible Asset Creation",
    desc: "Focusing on enduring, real-economy capital assets that withstand macroeconomic volatility and create lasting value.",
  },
  {
    icon: Users,
    title: "Community Prosperity",
    desc: "Advancing financial inclusion, localized technical hiring, rural healthcare, and regional infrastructure development.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-slate-50 text-slate-900">
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/realistic/hero_corporate.jpg"
            alt="Jyoti Infrastructure Corporate Headquarters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0F2A4A]/80" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-32 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 shadow-md">
            <Compass className="w-4 h-4 text-blue-400" />
            <span>Corporate Profile & Group Heritage</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight">
            Building on Legacy. Driven by Vision.
          </h1>

          <div className="h-1 bg-blue-500 mx-auto w-24 rounded-full mb-6" />

          <p className="text-xl md:text-2xl font-normal text-slate-200 max-w-3xl mx-auto leading-relaxed">
            A diversified Indian conglomerate pioneering sustainable industry, renewable power, and enduring tangible asset development.
          </p>
        </div>
      </section>

      {/* ── Main About Story ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-20">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 border-l-4 border-blue-600 pl-6">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest block mb-1">Our Origins</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Six Decades of Heritage</h2>
            </div>
            <div className="md:col-span-8 text-lg md:text-xl text-slate-700 font-normal leading-relaxed space-y-6">
              <p>
                Jyoti Infrastructure Private Limited (JIPL) serves as the holding and asset creation vanguard of our diversified group. While incorporated in 2008 to orchestrate modern multi-sectoral ventures, our commercial lineage began in the 1960s with open-cast mining in the Keonjhar district of Western Odisha.
              </p>
              <p>
                From an initial capacity of approximately 0.2 million tonnes of iron ore and manganese per year, we expanded over decades to exceed 4 million metric tonnes annually—establishing an exemplary record of environmental safety, topsoil conservation, and workforce dignity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-slate-200 pt-16">
            <div className="md:col-span-4 border-l-4 border-blue-600 pl-6">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest block mb-1">Our Purpose</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Vision & Mission</h2>
            </div>
            <div className="md:col-span-8 text-lg md:text-xl text-slate-700 font-normal leading-relaxed space-y-6">
              <p>
                To stand as India&apos;s premier diversified business group celebrated for operational scale, fiscal resilience, and the creation of tangible assets that stimulate regional prosperity and spearhead environmental sustainability.
              </p>
              <p>
                We believe genuine enterprise value is judged by the positive footprint left on communities and nature. Whether building a 75 MW clean power portfolio, democratizing housing finance through Saral Home Finance, or preserving coastal dunes at Taj Puri Resort & Spa, our mission is long-term stewardship.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="border-t border-slate-200 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest block mb-2">The Principles That Guide Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">{v.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0A192F] text-white border-t border-slate-800 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Explore the Businesses Behind Our Growth
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Discover our operations across Renewable Energy, Sustainable Mining, Automobile Retail, Hospitality, and Financial Services.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/businesses"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-md transition-all flex items-center gap-2"
            >
              <span>Explore Group Businesses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/sustainability"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-base border border-slate-700 rounded transition-all"
            >
              <span>Our ESG Roadmap</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
