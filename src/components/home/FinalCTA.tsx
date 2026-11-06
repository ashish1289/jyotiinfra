"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white text-center px-6 border-b border-white/10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8">
            Built on Legacy.<br /> Driven by Vision.<br /> Focused on the Future.
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            From natural resources to renewable energy, mobility, finance, real estate, aviation and hospitality, Jyoti Infrastructure continues to build businesses and tangible assets designed for long-term value creation.
          </p>

          <Link
            href="/businesses"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary hover:bg-white hover:text-primary transition-all uppercase tracking-wider text-sm font-semibold group"
          >
            Explore Our Businesses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
