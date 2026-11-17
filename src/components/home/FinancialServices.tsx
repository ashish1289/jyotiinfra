"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Home, Users } from "lucide-react";

const badges = [
  { label: "NHB Regulated", icon: ShieldCheck },
  { label: "Small Ticket Housing", icon: Home },
  { label: "Financial Inclusion", icon: Users },
];

export function FinancialServices() {
  return (
    <section className="py-24 md:py-32 bg-warm-white text-charcoal overflow-hidden">
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
              <h4 className="text-primary uppercase tracking-widest text-sm font-semibold mb-6">
                Financial Services
              </h4>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Creating Access to Affordable Finance
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-charcoal/70 text-lg font-light leading-relaxed"
            >
              <p>
                The Company has an investment in Saral Home Finance Limited, a
                housing finance company regulated by the National Housing Bank,
                catering to small-ticket housing loans for the lower-middle-income
                segment.
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
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-gold/40 bg-gold/5 text-primary text-xs font-semibold uppercase tracking-widest cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    {badge.label}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                href="/businesses/financial-services"
                className="inline-flex items-center gap-2 uppercase tracking-wider text-sm font-bold text-primary hover:text-gold transition-colors group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image with animated gold border reveal */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[520px]">
            {/* Gold border lines — reveal on scroll */}
            {/* Top border */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="absolute -top-2 -left-2 right-6 h-0.5 bg-gold z-20"
            />
            {/* Left border */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              style={{ originY: 0 }}
              className="absolute -top-2 -left-2 bottom-6 w-0.5 bg-gold z-20"
            />
            {/* Bottom border */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              style={{ originX: 1 }}
              className="absolute -bottom-2 left-6 -right-2 h-0.5 bg-gold z-20"
            />
            {/* Right border */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              style={{ originY: 1 }}
              className="absolute top-6 -right-2 -bottom-2 w-0.5 bg-gold z-20"
            />

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative h-full w-full overflow-hidden"
            >
              <Image
                src="/images/hero_financial.png"
                alt="Financial Services"
                fill
                className="object-cover shadow-xl"
              />
              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-primary/10" />
            </motion.div>

            {/* Floating badge: NHB Regulated — prominent overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              animate={{ y: [0, -6, 0] }}
              className="absolute -right-4 top-10 md:top-16 z-30 bg-primary text-white px-5 py-4 shadow-xl"
            >
              <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-1">
                Regulated by
              </p>
              <p className="font-serif text-lg font-bold">NHB</p>
              <p className="text-white/60 text-xs">National Housing Bank</p>
            </motion.div>

            {/* Floating badge: Affordable Housing */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -left-4 bottom-12 z-30 bg-gold text-primary px-5 py-4 shadow-xl"
            >
              <p className="font-serif text-2xl font-bold leading-none">₹</p>
              <p className="font-semibold text-sm mt-1">Small Ticket</p>
              <p className="text-primary/70 text-xs">Housing Loans</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
