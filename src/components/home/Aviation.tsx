"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plane, Compass, ShieldCheck, ArrowRight } from "lucide-react";

const stats = [
  { label: "Pan-India Flight Coverage", icon: Compass },
  { label: "Executive Business Charters", icon: Plane },
  { label: "Rigorous DGCA Compliance", icon: ShieldCheck },
];

export function Aviation() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Realistic Image Panel with badges */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              className="relative h-[420px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/photos/private-jet-sunset.jpg"
                alt="Executive Private Jet and Aviation Charter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white">
                <p className="font-bold text-base text-blue-400">Pan-India Strategic Air Connectivity</p>
                <p className="text-slate-300 text-xs mt-1">Connecting commercial epicenters with zero transit friction.</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-blue-600 uppercase tracking-widest text-sm font-bold mb-4 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                <Plane className="w-4 h-4 text-blue-600" />
                <span>Executive Aviation & Connectivity</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Seamless Air Travel for Industrial & Executive Mobility
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-slate-700 text-lg md:text-xl font-normal leading-relaxed"
            >
              <p>
                In an interconnected industrial landscape where rapid mobility drives competitive advantage, the Group has made strategic investments into private aviation and chartered flight logistics.
              </p>
              <p>
                Providing high-reliability, private aircraft services, our aviation wing links industrial hubs, project sites, and national business centers with uncompromising safety, efficiency, and comfort.
              </p>
            </motion.div>

            {/* Stats list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200"
            >
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-800">{s.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-2"
            >
              <Link
                href="/businesses/aviation"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-md transition-all group"
              >
                <span>Explore Aviation Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
