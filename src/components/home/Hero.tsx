"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

const SLIDES = [
  {
    image: "/images/photos/solar-farm-aerial.jpg",
    alt: "Aerial view of a utility-scale solar farm",
    sector: "Renewable Energy",
    keyword: "75 MW of clean solar & wind power",
  },
  {
    image: "/images/photos/mining-open-pit.jpg",
    alt: "Open-pit mine with excavators and haul trucks",
    sector: "Responsible Mining",
    keyword: "Progressive land reclamation & zero effluent",
  },
  {
    image: "/images/photos/wind-farm-green.jpg",
    alt: "Wind turbines across green rolling hills",
    sector: "Climate Action",
    keyword: "120,000+ tonnes of CO₂ offset every year",
  },
  {
    image: "/images/photos/resort-pool.jpg",
    alt: "Luxury resort pool surrounded by tropical gardens",
    sector: "Eco-Luxury Hospitality",
    keyword: "Plastic-free, water-recycling Taj Puri Resort",
  },
  {
    image: "/images/photos/ev-charging.jpg",
    alt: "Electric vehicle connected to a charging station",
    sector: "Clean Mobility",
    keyword: "EV charging across Odisha's dealerships",
  },
];

const STATS = [
  { label: "60+ Years", value: "Legacy Since 1960s" },
  { label: "7 Sectors", value: "Diversified Portfolio" },
  { label: "4M+ Tonnes", value: "Responsible Ore / Year" },
  { label: "75 MW", value: "Solar & Wind Energy" },
  { label: "120k+ MT", value: "CO₂ Offset Annually" },
];

const SLIDE_MS = 6500;

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [index]); // restarting on change gives a full interval after a manual pick

  const slide = SLIDES[index];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col bg-[#0A192F]">
      {/* ── Background slideshow ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: reduceMotion ? 1 : 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "linear" }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                quality={85}
                priority={index === 0}
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navy wash: solid behind the copy on the left, opening up so the photo shines on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/70 to-[#0A192F]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]/50" />
      </div>

      {/* ── Copy ── */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex items-center pt-36 pb-16 md:pt-40">
        <div className="max-w-4xl text-white">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-emerald-300 text-sm font-semibold tracking-wider uppercase mb-8 backdrop-blur-md"
          >
            <Leaf className="w-4 h-4" />
            <span>Sustainable Growth · Since the 1960s</span>
          </motion.div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold tracking-tight leading-[1.1] mb-7">
            {["Building Businesses.", "Creating Assets."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 1 ? "text-slate-300" : "text-white"}`}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.15 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-2 mt-1">
              <motion.span
                className="block text-[0.82em] italic font-medium tracking-normal bg-gradient-to-r from-sky-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent pr-2"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              >
                Shaping a Sustainable Future.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative text-base md:text-lg text-slate-300 max-w-xl mb-10 leading-relaxed font-light border-l-2 border-emerald-400/70 pl-5"
          >
            A diversified Indian group creating enduring value through{" "}
            <span className="text-white font-normal">responsible mining</span>,{" "}
            <span className="text-white font-normal">renewable energy</span>, clean mobility,
            inclusive finance and eco-conscious hospitality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/businesses"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base rounded-md shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-3 group"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/sustainability"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-base border border-white/30 rounded-md transition-all flex items-center justify-center gap-3"
            >
              <Leaf className="w-5 h-5 text-emerald-300" />
              <span>Our Sustainability Commitment</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Slide caption + controls ── */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pb-8 flex justify-end">
        <div className="w-full sm:w-auto sm:min-w-[22rem] rounded-xl bg-[#0A192F]/70 backdrop-blur-md border border-white/15 p-5 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.sector}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              aria-live="polite"
            >
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-300 mb-1">{slide.sector}</p>
              <p className="text-white text-lg font-semibold leading-snug">{slide.keyword}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-4" role="tablist" aria-label="Choose slide">
            {SLIDES.map((s, i) => (
              <button
                key={s.sector}
                role="tab"
                aria-selected={i === index}
                aria-label={s.sector}
                onClick={() => setIndex(i)}
                className="relative h-1.5 flex-1 rounded-full bg-white/25 overflow-hidden"
              >
                {i === index && (
                  <motion.span
                    key={index}
                    className="absolute inset-y-0 left-0 bg-blue-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                  />
                )}
                {i < index && <span className="absolute inset-0 bg-white/60 rounded-full" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stat strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 w-full bg-[#0A192F]/85 backdrop-blur-md border-t border-white/10"
      >
        <div className="container mx-auto px-6 md:px-12 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left lg:border-l lg:border-white/15 lg:pl-5 lg:first:border-0 lg:first:pl-0">
              <p className="font-serif text-2xl md:text-3xl font-bold text-white">{stat.label}</p>
              <p className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-wider mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
