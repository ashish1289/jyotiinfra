"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Sun, Wind, ArrowRight } from "lucide-react";

export function RenewableEnergy() {
  return (
    <section className="py-24 md:py-32 bg-[#0A192F] text-white overflow-hidden relative border-b border-slate-800">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 75% 50%, rgba(13,148,136,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Realistic Image with interactive visual border */}
          <motion.div 
            className="w-full lg:w-1/2 relative h-[500px] md:h-[620px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/photos/wind-sunset.jpg"
              alt="Jyoti Infrastructure Solar and Wind Energy Installations"
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

            {/* Floating Clean Energy Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white text-base font-bold">120,000+ Tonnes CO₂ Offset</p>
                  <p className="text-slate-400 text-xs">PPA executed with SECI (Solar Energy Corporation of India)</p>
                </div>
              </div>
            </div>

            {/* Animated Energy Accent Line */}
            <motion.div 
              className="absolute top-0 right-0 w-1 bg-emerald-400"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
            />
          </motion.div>

          {/* Text Content with increased font sizes */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-emerald-400 uppercase tracking-widest text-sm font-bold mb-4 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-800">
                <Sun className="w-4 h-4 text-emerald-400" />
                <span>Clean Energy & Decarbonization</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Powering India’s Green Energy Horizon
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-slate-300 text-lg md:text-xl font-normal leading-relaxed"
            >
              <p>
                Through wholly owned subsidiary Jyoti Solar Solutions Private Limited, the Group executed a milestone 25-year Power Purchase Agreement (PPA) with the Solar Energy Corporation of India Limited (SECI) for a 10 MW Greenfield Solar Power Plant at Patnagarh, District Bolangir, Odisha.
              </p>
              <p>
                Complementing solar generation, our 65 MW Wind Energy portfolio feeds clean, zero-emission electricity into regional power grids—displacing fossil fuels and advancing India’s net-zero transition goals.
              </p>
            </motion.div>

            {/* Impact Metric Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800"
            >
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Sun className="w-5 h-5" />
                  <span className="uppercase tracking-widest text-xs font-bold text-slate-400">Solar Power Plant</span>
                </div>
                <p className="text-white font-serif text-4xl font-bold">10 <span className="text-blue-400 text-2xl font-sans">MW</span></p>
                <p className="text-slate-400 text-xs mt-1">Patnagarh, Bolangir (SECI PPA)</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <Wind className="w-5 h-5" />
                  <span className="uppercase tracking-widest text-xs font-bold text-slate-400">Wind Energy Assets</span>
                </div>
                <p className="text-white font-serif text-4xl font-bold">65 <span className="text-emerald-400 text-2xl font-sans">MW</span></p>
                <p className="text-slate-400 text-xs mt-1">Multi-state wind assets</p>
              </div>
            </motion.div>

            {/* Sustainability CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-2"
            >
              <Link
                href="/businesses/renewable-energy"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-md transition-all group"
              >
                <span>Explore Clean Energy Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
