"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

const PARTICLES = [
  { cx: "10%", cy: "20%", r: 2, delay: 0 },
  { cx: "85%", cy: "15%", r: 1.5, delay: 0.4 },
  { cx: "75%", cy: "75%", r: 2.5, delay: 0.8 },
  { cx: "20%", cy: "70%", r: 1.5, delay: 1.2 },
  { cx: "50%", cy: "88%", r: 1, delay: 0.6 },
  { cx: "92%", cy: "50%", r: 2, delay: 0.2 },
  { cx: "5%",  cy: "50%", r: 1.5, delay: 1.0 },
  { cx: "60%", cy: "10%", r: 1, delay: 0.3 },
  { cx: "35%", cy: "92%", r: 1.5, delay: 0.7 },
  { cx: "65%", cy: "55%", r: 1, delay: 1.4 },
];

const STATS = [
  { label: "Since 1960s", value: "60+ Years Legacy" },
  { label: "7 Strategic Sectors", value: "Diversified Portfolio" },
  { label: "4M+ Tonnes", value: "Annual Ore Capacity" },
  { label: "75 MW", value: "Solar & Wind Clean Energy" },
  { label: "Taj Puri Resort", value: "90-Key Luxury Eco-Asset" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#0A192F]">
      {/* Background Image & Corporate Blue/Grey Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/realistic/hero_corporate.jpg"
            alt="Jyoti Infrastructure Corporate Headquarters & Assets"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        {/* Multi-layered corporate gradient: navy blue & slate */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0F2A4A]/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]/60" />
      </div>

      {/* Floating Particles */}
      <svg
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
        aria-hidden="true"
      >
        {PARTICLES.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#60A5FA"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.7, 0.2, 0.7], scale: 1 }}
            transition={{
              opacity: { repeat: Infinity, duration: 3.5, delay: p.delay, ease: "easeInOut" },
              scale: { duration: 1, delay: p.delay + 0.5 },
            }}
          />
        ))}
      </svg>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-32 pb-20 md:pt-40 md:pb-24 flex-1 flex flex-col items-center justify-center">
        {/* Sustainability & ESG Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-8 shadow-lg backdrop-blur-md"
        >
          <Leaf className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>ESG Committed · Sustainable Mining · 75 MW Clean Energy</span>
        </motion.div>

        {/* Grand Headline with increased font size */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.08] text-white">
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-block"
            >
              Building Businesses.
            </motion.div>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="inline-block text-slate-200"
            >
              Creating Assets.
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2 mt-1">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="inline-block text-blue-400 font-normal italic pr-2"
            >
              Shaping a Sustainable Future.
            </motion.div>
          </div>
        </h1>

        {/* Corporate Blue Accent Line */}
        <div className="relative h-[3px] w-36 mx-auto mb-8 overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 bg-blue-500 w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "center" }}
          />
        </div>

        {/* Subtitle with increased font size & sustainability context */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 font-normal leading-relaxed"
        >
          A premier diversified conglomerate driving industrial scale and environmental stewardship.
          Pioneering responsible resource extraction, renewable solar and wind power, green mobility,
          and sustainable luxury hospitality across India.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <Link
            href="/businesses"
            className="px-9 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wider uppercase text-base rounded shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-3 w-full sm:w-auto group"
          >
            <span>Explore Our Businesses</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/sustainability"
            className="px-9 py-4 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold tracking-wider uppercase text-base border border-slate-600/80 rounded transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-emerald-300"
          >
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span>Sustainability & ESG</span>
          </Link>
        </motion.div>
      </div>

      {/* Corporate Stat Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 w-full"
      >
        <div className="backdrop-blur-md bg-slate-950/80 border-t border-slate-800">
          <div className="container mx-auto px-6 md:px-12 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-white font-bold text-lg md:text-xl tracking-tight text-blue-400">
                  {stat.label}
                </span>
                <span className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-wider mt-0.5">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
