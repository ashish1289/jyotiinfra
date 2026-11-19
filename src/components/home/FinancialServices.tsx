"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Home, Users, CheckCircle2 } from "lucide-react";

const badges = [
  { label: "NHB Regulated Entity", icon: ShieldCheck },
  { label: "Affordable Green Housing", icon: Home },
  { label: "ESG Social Inclusion", icon: Users },
];

export function FinancialServices() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-blue-600 uppercase tracking-widest text-sm font-bold mb-4 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Financial Inclusion & Social Housing</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Democratizing Access to Dignified Housing Finance
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4 text-slate-700 text-lg md:text-xl font-normal leading-relaxed"
            >
              <p>
                Through our strategic stake in Saral Home Finance Limited, a specialized housing finance institution regulated by the National Housing Bank (NHB), we address the critical shortage of credit for lower-middle-income families.
              </p>
              <p>
                By underwriting small-ticket home loans for self-employed individuals and families in Tier-2 and Tier-3 geographies, we enable the dream of secure homeownership while driving local economic resilience.
              </p>
            </motion.div>

            {/* Floating stat badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-semibold uppercase tracking-wider shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <Link
                href="/businesses/financial-services"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-md transition-all group"
              >
                <span>Learn About Saral Home Finance</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <Image
              src="/images/realistic/hero_financial.jpg"
              alt="Financial Inclusion & Strategic Consultation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl">
              <div className="flex items-center gap-2 text-blue-700 text-sm font-bold uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Empowering Tier-2 & Tier-3 Communities</span>
              </div>
              <p className="text-slate-600 text-sm">Providing accessible housing credit with fast, transparent processing for underserved households.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
