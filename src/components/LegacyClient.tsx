"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

const timelineEvents = [
  {
    year: "1960s",
    description: "Responsible Mining Operations Inception in Keonjhar, Odisha.",
    detail:
      "The founding cornerstone of Jyoti Infrastructure. Iron ore and manganese extraction commenced in the mineral-rich hills of Keonjhar, setting high standards for safety, continuous land reclamation, and localized employment.",
    image: "/images/realistic/hero_mining.jpg",
    yearNum: 1960,
    tag: "Natural Resources",
  },
  {
    year: "1990s",
    description: "Strategic Diversification into Regional Media, Logistics & Automobiles.",
    detail:
      "Recognizing the expanding economic frontier, the group diversified into commercial mobility, advertising, and state-wide infrastructure logistics.",
    image: "/images/realistic/hero_automobile.jpg",
    yearNum: 1990,
    tag: "Diversification",
  },
  {
    year: "1996",
    description: "Jyote Motors Established as TVS Dealership.",
    detail:
      "Marked the group's formal foray into the two-wheeler retail and service ecosystem, initiating a long-term partnership with TVS Motors that continues to thrive today.",
    image: "/images/realistic/hero_automobile.jpg",
    yearNum: 1996,
    tag: "Automotive",
  },
  {
    year: "2001",
    description: "Maruti Suzuki Dealership Landmark Partnership.",
    detail:
      "Partnering with India's passenger vehicle market leader, Jyote Motors launched world-class showrooms and certified service workshops, growing into Odisha's largest automotive retailer.",
    image: "/images/realistic/hero_automobile.jpg",
    yearNum: 2001,
    tag: "Automotive Network",
  },
  {
    year: "2008",
    description: "Jyoti Infrastructure Private Limited (JIPL) Formally Incorporated.",
    detail:
      "The corporate flagship holding company was established to unify operations, institutionalize governance, and drive strategic tangible asset creation across India.",
    image: "/images/realistic/hero_corporate.jpg",
    yearNum: 2008,
    tag: "Holding Flagship",
  },
  {
    year: "2013",
    description: "Audi Bhubaneswar & Luxury Mobility Flagship.",
    detail:
      "Brought German automotive engineering excellence to Odisha, pioneering the state's luxury automotive and high-voltage performance segment.",
    image: "/images/realistic/hero_automobile.jpg",
    yearNum: 2013,
    tag: "Luxury Retail",
  },
  {
    year: "2017",
    description: "Clean Energy Transition: 10 MW Solar with SECI.",
    detail:
      "The group decisively entered the renewable clean energy sector, executing a landmark 25-year Power Purchase Agreement with the Solar Energy Corporation of India (SECI) for a 10 MW Greenfield Solar Plant at Patnagarh, Bolangir.",
    image: "/images/realistic/hero_renewable.jpg",
    yearNum: 2017,
    tag: "Renewable Energy",
  },
  {
    year: "2020",
    description: "Expansion into 65 MW Wind Energy, Saral Home Finance & Aviation.",
    detail:
      "Scaled renewable capacity with a 65 MW multi-state wind energy portfolio (reaching 75 MW total clean energy) and invested in Saral Home Finance to democratize housing credit for lower-middle-income families.",
    image: "/images/realistic/hero_financial.jpg",
    yearNum: 2020,
    tag: "ESG & Multi-Sector",
  },
  {
    year: "2024",
    description: "Taj Puri Resort & Spa Commences Commercial Operations.",
    detail:
      "The 90-key ultra-luxury beachside landmark on the Bay of Bengal opened in December 2024, developed under Pravat Hospitality and operated by Indian Hotels Company Limited (IHCL, a Tata Enterprise) under strict coastal eco-preservation guidelines.",
    image: "/images/realistic/hero_hospitality.jpg",
    yearNum: 2024,
    tag: "Sustainable Luxury",
  },
  {
    year: "Present",
    description: "Nationally Recognized Conglomerate with 7 Robust Verticals.",
    detail:
      "Today, Jyoti Infrastructure commands over 4M+ tonnes annual responsible ore extraction, 75 MW clean power generation, 100k+ automotive clients, and premier tangible assets across India.",
    image: "/images/realistic/hero_corporate.jpg",
    yearNum: 2026,
    tag: "Future Outlook",
  },
];

function AnimatedYear({ year, yearNum }: { year: string; yearNum: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const isNumeric = /^\d{4}$/.test(year);
    if (!isNumeric) return;
    
    const start = yearNum - 30;
    const end = yearNum;
    const duration = 800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayVal(Math.floor(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, year, yearNum]);

  const isNumeric = /^\d{4}$/.test(year);

  return (
    <span ref={ref}>
      {isNumeric ? (isInView ? displayVal : yearNum - 30) : year}
    </span>
  );
}

function TimelineItem({ item }: { item: (typeof timelineEvents)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer group"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => setExpanded((v) => !v)}
    >
      {/* Corporate Blue Dot */}
      <motion.div
        className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-slate-100 z-10"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37,99,235,0.6)",
            "0 0 0 10px rgba(37,99,235,0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />

      <div
        className={`rounded-2xl border bg-white p-7 transition-all duration-300 hover:shadow-xl ${
          expanded ? "border-blue-500 shadow-xl" : "border-slate-200 shadow-sm hover:border-blue-400"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                {item.tag}
              </span>
            </div>
            <motion.h3
              className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors"
            >
              <AnimatedYear year={item.year} yearNum={item.yearNum} />
            </motion.h3>
            <p className="text-slate-700 text-lg md:text-xl font-normal leading-relaxed">
              {item.description}
            </p>
          </div>

          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 text-sm mt-1 transition-transform duration-300 ${
              expanded ? "rotate-45 bg-blue-50 text-blue-600 border-blue-300" : "group-hover:border-blue-500"
            }`}
          >
            +
          </div>
        </div>

        {/* Expanded detail */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            expanded
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-6 mt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-slate-600 font-normal leading-relaxed text-base md:text-lg">
              {item.detail}
            </p>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src={item.image}
                alt={`${item.year} era`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function LegacyClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex-1 bg-slate-50 text-slate-900" ref={containerRef}>
      {/* Hero Header */}
      <div className="pt-32 pb-20 bg-[#0A192F] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 shadow-md">
            <Compass className="w-4 h-4 text-blue-400" />
            <span>Over 60 Years of Industrial History</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Our Legacy Across Decades
          </h1>

          <div className="h-1 bg-blue-500 mx-auto w-24 rounded-full mb-6" />

          <p className="text-xl md:text-2xl text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed">
            From a solitary open-cast mine in Keonjhar to a national diversified group championing clean energy, green mobility, and world-class hospitality.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {/* Vertical line container */}
          <div className="relative pl-10 md:pl-20 border-l-2 border-blue-500/40 space-y-12">
            {timelineEvents.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
            Continuing the Legacy of Responsible Value Creation
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
            Discover our seven operating businesses and our forward-looking ESG commitments.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/businesses"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-md transition-all flex items-center gap-2"
            >
              <span>Explore Businesses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/sustainability"
              className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base border border-slate-300 rounded transition-all"
            >
              <span>Read Sustainability Commitments</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
