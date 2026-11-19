import Image from "next/image";
import Link from "next/link";
import { 
  Leaf, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Sustainability & ESG Excellence | Jyoti Infrastructure",
  description: "Explore Jyoti Infrastructure's ESG commitments: 75 MW clean energy, sustainable mining, land reclamation, green mobility, and social empowerment across India.",
};

const esgPillars = [
  {
    icon: Leaf,
    pillar: "Environment",
    title: "Decarbonization, Clean Energy & Eco-Restoration",
    description: "Driving large-scale carbon reduction and natural habitat protection through clean power generation and circular resource use.",
    items: [
      "75 MW Clean Energy Portfolio: 10 MW SECI Solar project in Patnagarh, Bolangir, and 65 MW multi-state Wind portfolio.",
      "120,000+ Metric Tonnes CO₂ emissions offset annually, replacing thermal power dependency.",
      "Sustainable Mining Practices: Progressive bench reclamation, topsoil conservation banks, and dust suppression mist cannons.",
      "Eco-Conscious Coastal Hospitality: 90-key Taj Puri Resort & Spa featuring 100% wastewater recycling and plastic-neutral operations.",
      "Clean Mobility Hub: Expanding EV charging infrastructure and hybrid vehicle distribution across Odisha."
    ],
    highlight: "120k+ MT CO₂ Offset Yearly"
  },
  {
    icon: Users,
    pillar: "Social",
    title: "Financial Inclusion & Community Prosperity",
    description: "Fostering inclusive economic growth, safe dignified housing, and local community well-being in all operating districts.",
    items: [
      "Saral Home Finance: Expanding affordable housing credit for informal-income and lower-middle-income families.",
      "Community Health & Clean Water: Setting up automated drinking water filtration units and mobile clinics in Keonjhar.",
      "Local Youth Employment: Over 80% local workforce hiring across mining, logistics, automotive, and hospitality verticals.",
      "Cultural & Artisan Support: Promoting Odia handlooms, coastal crafts, and temple art at Taj Puri Resort & Spa.",
      "Uncompromising Occupational Safety: Stringent zero-harm safety standards and continuous operator training."
    ],
    highlight: "Thousands of Families Housed"
  },
  {
    icon: ShieldCheck,
    pillar: "Governance",
    title: "Ethical Leadership & Multi-Decade Trust",
    description: "Upholding institutional integrity, fiscal prudence, and statutory compliance across all regulated sectors.",
    items: [
      "Rigorous Regulatory Compliance with the National Housing Bank (NHB), SECI, and Ministry of Mines.",
      "Over 25 years of multi-sectoral board experience guiding transparent, ethical corporate stewardship.",
      "Zero-tolerance policy against corrupt practices, environmental non-compliance, and labor violations.",
      "Long-term tangible asset strategy ensuring intergenerational stability for all stakeholders.",
      "Independent audits, environmental impact assessments (EIA), and structured stakeholder reporting."
    ],
    highlight: "100% Statutory Compliance"
  }
];

const impactStats = [
  { value: "75 MW", label: "Clean Power Capacity", sub: "Solar & Wind Generation" },
  { value: "120,000+", label: "Metric Tonnes CO₂ Offset", sub: "Displacing Thermal Power" },
  { value: "4M+ Tonnes", label: "Responsible Mineral Extraction", sub: "Zero Liquid Discharge" },
  { value: "100%", label: "Wastewater Recycled", sub: "Taj Puri & Processing Units" },
];

export default function SustainabilityPage() {
  return (
    <main className="flex-1 bg-slate-50 text-slate-900">
      {/* ── Flagship Hero ── */}
      <section className="relative min-h-[65vh] md:min-h-[72vh] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/realistic/hero_esg.jpg"
            alt="Jyoti Infrastructure Sustainability and Clean Energy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0F2A4A]/80" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-32 pb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/80 text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-6 shadow-md">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Environmental, Social & Corporate Governance (ESG)</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight">
            Building for Tomorrow with Integrity & Care
          </h1>

          <div className="h-1 bg-emerald-400 mx-auto w-24 rounded-full mb-6" />

          <p className="text-xl md:text-2xl font-normal text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Our commitment to sustainable growth, clean energy transition, ecological restoration, and inclusive social empowerment across India.
          </p>
        </div>
      </section>

      {/* ── Key Impact Numbers Strip ── */}
      <section className="py-12 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="font-serif text-3xl md:text-4xl font-bold text-blue-700 mb-1">{item.value}</p>
                <p className="text-sm font-bold text-slate-900 mb-0.5">{item.label}</p>
                <p className="text-xs text-slate-500 font-medium">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESG Framework Pillars ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 uppercase tracking-widest text-sm font-bold block mb-3">
              Strategic ESG Roadmap
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Three Pillars of Sustainable Growth
            </h2>
            <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
              Every project we fund, build, or operate is evaluated through our rigorous environmental and social impact criteria.
            </p>
          </div>

          <div className="space-y-12">
            {esgPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 md:p-12 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-4 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold block">
                      Pillar {idx + 1} · {pillar.pillar}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                        {pillar.highlight}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-8 bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200/80 space-y-4">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-4">Core Commitments & Metrics</h4>
                    <div className="space-y-3.5">
                      {pillar.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <p className="text-base text-slate-700 leading-relaxed font-normal">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Realistic Photographic Case Study Section ── */}
      <section className="py-24 bg-[#0A192F] text-white border-t border-slate-800">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-400 uppercase tracking-widest text-sm font-bold block mb-3">
              Action on the Ground
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Sustainability in Practice Across Our Assets
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed">
              Tangible evidence of our decarbonization and community initiatives across Odisha and Pan-India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src="/images/realistic/hero_renewable.jpg"
                  alt="Patnagarh 10 MW Solar Plant with SECI"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-slate-950/80 text-blue-300 border border-slate-700 text-xs font-bold uppercase">
                  Clean Solar & Wind
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-white">Patnagarh 10 MW Solar + 65 MW Wind Energy</h3>
                <p className="text-slate-300 text-base leading-relaxed font-normal">
                  Our flagship solar park developed in partnership with the Solar Energy Corporation of India Limited (SECI), generating millions of green units each year and displacing thousands of tonnes of coal combustion.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src="/images/realistic/hero_mining.jpg"
                  alt="Responsible Mining Reclamation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-slate-950/80 text-emerald-300 border border-slate-700 text-xs font-bold uppercase">
                  Eco-Restoration
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-white">Sustainable Mining & Topsoil Preservation</h3>
                <p className="text-slate-300 text-base leading-relaxed font-normal">
                  In Keonjhar, our mining operations incorporate progressive bench tree plantation, zero-effluent water treatment, and high-pressure dust suppression mist cannons to preserve natural biodiversity.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src="/images/realistic/hero_hospitality.jpg"
                  alt="Taj Puri Coastal Eco-Conscious Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-slate-950/80 text-blue-300 border border-slate-700 text-xs font-bold uppercase">
                  Eco-Hospitality
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-white">Taj Puri Resort & Spa: Coastal Preservation</h3>
                <p className="text-slate-300 text-base leading-relaxed font-normal">
                  Operated with IHCL (a Tata Enterprise), Taj Puri enforces zero single-use plastic, comprehensive on-site greywater recycling for landscaped botanical gardens, and energy-conserving thermal architecture.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src="/images/realistic/hero_community.jpg"
                  alt="Community Welfare & Financial Inclusion"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-slate-950/80 text-emerald-300 border border-slate-700 text-xs font-bold uppercase">
                  Social Prosperity
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-white">Saral Home Finance & Community CSR</h3>
                <p className="text-slate-300 text-base leading-relaxed font-normal">
                  Empowering lower-middle-income families with dignified housing credit while establishing community water filtration plants and vocational skill centers across rural Odisha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
            Partner With Us in Sustainable Value Creation
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Connect with our leadership to explore institutional partnerships, clean energy initiatives, and responsible asset creation.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-md transition-all flex items-center gap-2"
            >
              <span>Contact ESG Office</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/businesses"
              className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base border border-slate-300 rounded transition-all"
            >
              <span>Explore Group Businesses</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
