"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, ShieldCheck, Users, ArrowRight } from "lucide-react";

const esgPillars = [
  {
    icon: Leaf,
    badge: "Environmental Stewardship",
    title: "Decarbonization & Land Eco-Restoration",
    description:
      "Accelerating India's transition to clean energy through a 75 MW portfolio (10 MW Solar with SECI + 65 MW Wind). In our mining belts, we enforce continuous topsoil reclamation, extensive tree plantations, and automated dust suppression mist cannons.",
    stats: "120,000+ MT CO₂ Offset Annually",
    color: "emerald",
  },
  {
    icon: Users,
    badge: "Social Empowerment",
    title: "Financial Inclusion & Community Welfare",
    description:
      "Through Saral Home Finance, we extend affordable small-ticket housing loans to lower-middle-income families. Across Odisha, our CSR initiatives establish clean drinking water units, rural healthcare camps, and local technical employment.",
    stats: "Thousands of Families Empowered",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    badge: "Corporate Governance",
    title: "Ethical Integrity & Multi-Decade Trust",
    description:
      "Upholding stringent regulatory compliance across the National Housing Bank (NHB), SECI, and mining authorities. Our board delivers over 25 years of multi-sectoral leadership anchored in fiscal prudence and stakeholder transparency.",
    stats: "100% Statutory Compliance",
    color: "slate",
  },
];

export function SustainabilityESG() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(13,148,136,0.2) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(37,99,235,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-sm font-semibold tracking-wider uppercase mb-4"
          >
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Sustainability & ESG Framework</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Responsible Growth for Generations to Come
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed"
          >
            At Jyoti Infrastructure, sustainability is not an afterthought—it is the operational backbone of how we build businesses and develop long-term tangible assets.
          </motion.p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {esgPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="p-8 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-2">
                    {pillar.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-700/80 flex items-center justify-between text-sm">
                  <span className="text-emerald-300 font-semibold">{pillar.stats}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Banner Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
              Explore Our Comprehensive ESG & Sustainability Roadmap
            </h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Discover how our renewable projects, eco-friendly mining technologies, and community programs create tangible environmental and social value.
            </p>
          </div>

          <Link
            href="/sustainability"
            className="shrink-0 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base rounded shadow-lg transition-all flex items-center gap-3 group"
          >
            <span>Read Sustainability Report</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
