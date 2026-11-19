import { BusinessPortfolio } from "@/components/home/BusinessPortfolio";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Our Businesses & Sectors | Jyoti Infrastructure",
  description: "Explore the diversified business portfolio of Jyoti Infrastructure: Renewable Energy, Sustainable Mining, Automobile Retail, Hospitality, Finance, Real Estate, and Aviation.",
};

export default function BusinessesPage() {
  return (
    <div className="flex-1 bg-slate-50 text-slate-900">
      <div className="relative min-h-[48vh] md:min-h-[55vh] flex items-center justify-center bg-[#0A192F] text-white text-center pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 shadow-md">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Diversified Tangible Asset Portfolio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight">
            Our Business Sectors
          </h1>

          <div className="h-1 bg-blue-500 mx-auto w-24 rounded-full mb-6" />

          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            Seven strategic sectors united by institutional discipline, high operational safety, and deep commitments to sustainability.
          </p>
        </div>
      </div>
      <BusinessPortfolio />
    </div>
  );
}
