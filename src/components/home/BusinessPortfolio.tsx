"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Shield, Zap, Car, Building2, Plane, Hotel } from "lucide-react";
import { useState } from "react";

const businesses = [
  {
    title: "Sustainable Mining",
    tag: "Responsible Extraction",
    description: "Decades of open-cast mining in Keonjhar with progressive land reclamation, water recycling, and 4M+ tonnes annual production.",
    image: "/images/photos/mining-open-pit.jpg",
    link: "/businesses/mining",
    icon: Shield,
    esgNote: "Bio-fencing & dust suppression",
  },
  {
    title: "Renewable Energy",
    tag: "Clean Energy Transition",
    description: "10 MW SECI Solar project in Patnagarh and a 65 MW Wind portfolio offsetting over 120,000 metric tonnes of CO₂ annually.",
    image: "/images/photos/wind-sunset.jpg",
    link: "/businesses/renewable-energy",
    icon: Zap,
    esgNote: "75 MW total clean capacity",
  },
  {
    title: "Automobile Retail & EV",
    tag: "Next-Gen Mobility",
    description: "Odisha’s premier automotive dealer group representing Maruti Suzuki, Audi, Harley-Davidson, and TVS with growing EV charging setups.",
    image: "/images/photos/ev-charging.jpg",
    link: "/businesses/automobile",
    icon: Car,
    esgNote: "Active EV transition focus",
  },
  {
    title: "Luxury Hospitality",
    tag: "Eco-Conscious Tourism",
    description: "Taj Puri Resort & Spa: 90-key ultra-luxury beachside landmark operated with IHCL, adhering to sustainable coastal conservation standards.",
    image: "/images/photos/resort-pool.jpg",
    link: "/businesses/hospitality",
    icon: Hotel,
    esgNote: "Plastic-neutral operations",
  },
  {
    title: "Financial Services",
    tag: "Social & Financial Inclusion",
    description: "Saral Home Finance: NHB-regulated small-ticket housing finance empowering lower-middle-income families with dignified shelter credit.",
    image: "/images/photos/financial-advisory.jpg",
    link: "/businesses/financial-services",
    icon: Shield,
    esgNote: "Empowering semi-urban communities",
  },
  {
    title: "Commercial Real Estate",
    tag: "Tangible Asset Infrastructure",
    description: "Strategic commercial and mixed-use tangible assets across Delhi, Pondicherry, and Bhubaneswar built to high energy-efficiency standards.",
    image: "/images/photos/city-towers.jpg",
    link: "/businesses/real-estate",
    icon: Building2,
    esgNote: "Long-term green asset creation",
  },
  {
    title: "Private Aviation",
    tag: "Pan-India Connectivity",
    description: "High-standard executive charter flights and aircraft fleet management delivering efficient and dependable pan-India business travel.",
    image: "/images/photos/private-jet-sunset.jpg",
    link: "/businesses/aviation",
    icon: Plane,
    esgNote: "Optimized route flight efficiency",
  },
];

function BusinessCard({
  business,
  index,
}: {
  business: (typeof businesses)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = business.icon;

  return (
    <Link href={business.link} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-[480px] w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-700/60 shadow-lg group-hover:border-blue-500/80 transition-all duration-500 flex flex-col justify-end"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Realistic Image */}
        <Image
          src={business.image}
          alt={business.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Corporate Blue & Slate Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-[#0A192F]/20 group-hover:bg-[#0A192F]/40 transition-colors duration-500 z-10" />

        {/* Top Tag & ESG Badge */}
        <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded bg-slate-900/90 backdrop-blur-md border border-slate-700 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            {business.tag}
          </span>
          <span className="px-2.5 py-1 rounded bg-emerald-950/80 backdrop-blur-md border border-emerald-800/80 text-emerald-300 text-xs font-medium flex items-center gap-1">
            <Leaf className="w-3 h-3 text-emerald-400" />
            <span className="hidden sm:inline">{business.esgNote}</span>
          </span>
        </div>

        {/* Shimmer sweep on hover */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={hovered ? { x: "200%", opacity: [0, 0.4, 0] } : { x: "-100%", opacity: 0 }}
          transition={hovered ? { duration: 0.7, ease: "easeOut" } : { duration: 0 }}
          className="absolute inset-y-0 w-1/3 z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 20%, rgba(96,165,250,0.3) 50%, transparent 80%)",
          }}
        />

        {/* Blue accent bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800 group-hover:bg-blue-500 transition-colors duration-300 z-30" />

        {/* Card Content with larger, readable typography */}
        <div className="relative z-20 p-7 space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              {business.title}
            </h3>
          </div>

          <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed line-clamp-3">
            {business.description}
          </p>

          <div className="pt-2 flex items-center gap-2 text-blue-400 uppercase tracking-wider text-xs md:text-sm font-semibold group-hover:text-white transition-colors duration-300">
            <span>Explore Vertical</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function BusinessPortfolio() {
  return (
    <section className="py-24 md:py-32 bg-slate-100 border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-blue-600 uppercase tracking-widest text-sm font-bold mb-3"
            >
              Diversified Group Sectors
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 max-w-2xl"
            >
              Seven Robust Verticals. United by Sustainable Value.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-semibold uppercase tracking-wider transition-all shadow-md group"
            >
              <span>View All Businesses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <BusinessCard key={index} business={business} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
