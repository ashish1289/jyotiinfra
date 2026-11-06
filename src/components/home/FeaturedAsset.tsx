"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function FeaturedAsset() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Featured Hospitality Asset</h4>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-warm-white">
                A New Landmark on the Coast of Puri
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-white/70 text-lg font-light leading-relaxed"
            >
              <p>
                The Group has developed a 90-key luxury beachside resort in Puri, Odisha, operated by Indian Hotels Company Limited, a Tata Group company, under the iconic Taj brand.
              </p>
              <p>
                Taj Puri Resort & Spa, Puri, a unit of Pravat Hospitality Private Limited, commenced commercial operations on 24 December 2024.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10"
            >
              <div>
                <p className="text-gold font-serif text-3xl mb-1">90</p>
                <p className="uppercase tracking-widest text-xs font-semibold text-white/60">Luxury Keys</p>
              </div>
              <div>
                <p className="text-gold font-serif text-3xl mb-1">Taj</p>
                <p className="uppercase tracking-widest text-xs font-semibold text-white/60">Iconic Brand</p>
              </div>
              <div className="col-span-2">
                <p className="uppercase tracking-widest text-xs font-semibold text-white/60 mb-2">Location</p>
                <p className="text-white/80 text-sm font-light">Plot No: 545/1546, Sipasarubali, Puri, Odisha – 752001</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <Link 
                href="/businesses/hospitality"
                className="inline-flex px-8 py-4 bg-gold text-primary hover:bg-white transition-colors uppercase tracking-widest text-sm font-semibold"
              >
                Discover Taj Puri
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="w-full lg:w-1/2 relative h-[500px] md:h-[700px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image Parallax Container */}
            <div className="absolute inset-0 overflow-hidden shadow-2xl shadow-black/50">
              <Image
                src="/images/hero_hospitality.png"
                alt="Taj Puri Resort & Spa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>
            
            {/* Decorative Gold Border */}
            <div className="absolute -inset-4 border border-gold/30 z-0 pointer-events-none hidden md:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
