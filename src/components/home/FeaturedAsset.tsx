"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Leaf, MapPin, ArrowRight } from "lucide-react";

export function FeaturedAsset() {
  return (
    <section className="py-24 md:py-32 bg-[#0A192F] text-white overflow-hidden relative border-b border-slate-800">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-emerald-400 uppercase tracking-widest text-sm font-bold mb-4 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-800">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span>Featured Sustainable Hospitality Asset</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Taj Puri Resort & Spa: Coastal Elegance Meets Eco-Conscious Luxury
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-slate-300 text-lg md:text-xl font-normal leading-relaxed"
            >
              <p>
                Developed by the Group under Pravat Hospitality Private Limited and operated by Indian Hotels Company Limited (IHCL, a Tata Enterprise), Taj Puri Resort & Spa stands as an iconic beachside sanctuary on the Bay of Bengal.
              </p>
              <p>
                Commencing commercial operations in December 2024, the resort is engineered with eco-sensitive coastal conservation protocols, on-site sewage treatment recycling, and zero single-use plastics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800"
            >
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <p className="text-blue-400 font-serif text-4xl font-bold mb-1">90</p>
                <p className="uppercase tracking-widest text-xs font-semibold text-slate-400">Luxury Rooms & Suites</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <p className="text-emerald-400 font-serif text-4xl font-bold mb-1">Taj</p>
                <p className="uppercase tracking-widest text-xs font-semibold text-slate-400">IHCL (A Tata Enterprise)</p>
              </div>
              <div className="col-span-2 p-4 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="uppercase tracking-widest text-xs font-bold text-slate-400 mb-1">Prime Oceanfront Location</p>
                  <p className="text-slate-300 text-sm">Plot No: 545/1546, Sipasarubali, Puri, Odisha – 752001</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Link 
                href="/businesses/hospitality"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-lg transition-all group"
              >
                <span>Discover Taj Puri Resort & Spa</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/realistic/hero_hospitality.jpg"
              alt="Taj Puri Resort & Spa Oceanfront Architecture"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">✦ Coastal Environmental Stewardship</span>
              <p className="text-white font-bold text-base">Setting New Benchmarks for Eco-Conscious Hospitality in Eastern India</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
