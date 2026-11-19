import Link from "next/link";
import { Leadership as LeadershipComponent } from "@/components/home/Leadership";
import { Users, ArrowRight, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Board of Directors & Leadership | Jyoti Infrastructure",
  description: "Meet the executive leadership team of Jyoti Infrastructure Private Limited, guiding multigenerational asset creation across India.",
};

const boardMembers = [
  {
    name: "Nava Jyoti Patnaik",
    role: "Managing Director",
    image: "/images/navajyoti_patnaik.png",
    education: "Bachelor of Engineering in Industrial & Production, Manipal Institute of Technology (MIT), Karnataka",
    experience: "25+ Years Experience across Mining, Secondary Steel Manufacturing, Renewable Energy, Finance & Real Estate",
    description: [
      "Steered the Group's industrial expansion following a tenure with Mobar India Ltd. Successfully established a greenfield integrated secondary steel manufacturing plant in Rourkela, Odisha.",
      "Visionary architect of the Group's clean energy transition: Executed the milestone 10 MW Solar Power Project with Solar Energy Corporation of India Limited (SECI) in Patnagarh, Bolangir, and scaled a 65 MW Wind Energy Portfolio.",
      "Leads long-term tangible asset development and strategic corporate governance across all operating subsidiaries."
    ]
  },
  {
    name: "Devjyoti Patnaik",
    role: "Director",
    image: "/images/devjyoti_patnaik.png",
    education: "Bachelor of Commerce, BJB College, Utkal University, Odisha",
    experience: "25+ Years Experience in Automobile Retail, Media, Advertising, Natural Resources & Solar Power",
    description: [
      "Founded Jyote Motors in 1996 as an authorized TVS dealership, strategically transforming it into Odisha's foremost multi-brand automotive powerhouse.",
      "Spearheaded the introduction of international automotive giants to Odisha, managing premier dealerships for Maruti Suzuki, Audi, Harley-Davidson, and Suzuki.",
      "Currently leads the network-wide transition to electric vehicle (EV) charging infrastructure and customer-centric digital mobility solutions."
    ]
  },
  {
    name: "Roopali Mohanti",
    role: "Director",
    image: "/images/roopali_mohanti.png",
    education: "Institute of Hotel Management Catering Technology & Applied Nutrition, Kolkata (1993–96); Bachelor of Arts, Delhi University",
    experience: "10+ Years Experience in Ultra-Luxury Hospitality & Coastal Tourism Management",
    description: [
      "Distinguished career with Indian Hotels Company Limited (IHCL, a Tata Enterprise), holding operational leadership positions across prestigious flagship properties including Taj Mahal Palace Mumbai, Taj Fort Aguada Goa, Taj Coromandel Chennai, and Taj Bengal Kolkata.",
      "Spearheaded the development and launch of the 90-key Taj Puri Resort & Spa, Puri, Odisha—which commenced commercial operations in December 2024 under Pravat Hospitality Private Limited.",
      "Champions eco-sensitive coastal hospitality, plastic-neutral resort governance, and the integration of traditional Odia heritage into luxury guest experiences."
    ]
  }
];

export default function LeadershipPage() {
  return (
    <main className="flex-1 bg-slate-50 text-slate-900">
      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] md:min-h-[58vh] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-32 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 shadow-md">
            <Users className="w-4 h-4 text-blue-400" />
            <span>Corporate Governance & Board</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight">
            Board of Directors
          </h1>

          <div className="h-1 bg-blue-500 mx-auto w-24 rounded-full mb-6" />

          <p className="text-xl md:text-2xl font-normal text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Multi-decade institutional experience guiding sustainable growth, operational excellence, and stakeholder trust.
          </p>
        </div>
      </section>

      {/* ── Visual Cards Strip ── */}
      <LeadershipComponent />

      {/* ── Comprehensive In-Depth Director Bios ── */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest block mb-2">Executive Profiles</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Decades of Proven Stewardship</h2>
          </div>

          {boardMembers.map((member, idx) => (
            <div 
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start ${idx > 0 ? "border-t border-slate-200 pt-16" : ""}`}
            >
              <div className="md:col-span-4 border-l-4 border-blue-600 pl-6 space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm uppercase tracking-wider font-bold text-blue-600">{member.role}</p>
                <div className="pt-2 text-xs text-slate-500 font-semibold">{member.experience}</div>
              </div>

              <div className="md:col-span-8 space-y-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block mb-0.5">Academic Background</span>
                    <p className="text-sm md:text-base font-semibold text-slate-800">{member.education}</p>
                  </div>
                </div>

                <div className="space-y-4 text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                  {member.description.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0A192F] text-white border-t border-slate-800 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Engage With Our Leadership
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            For investor relations, strategic partnerships, and corporate queries, reach out directly to our corporate secretariat.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-md transition-all group"
            >
              <span>Contact Board Secretariat</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
