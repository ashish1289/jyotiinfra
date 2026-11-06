"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/hero_corporate_original.png"
            alt="Jyoti Infrastructure Corporate"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-primary/80 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-24 md:pt-32">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight mb-10 max-w-5xl mx-auto leading-[1.1]">
          <div className="overflow-hidden pb-2">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="inline-block"
            >
              Building Businesses.
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="inline-block text-white/90"
            >
              Creating Assets.
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2 mt-2">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="inline-block text-gold italic font-light pr-2"
            >
              Shaping the Future.
            </motion.div>
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Jyoti Infrastructure Private Limited is a diversified business group with a strong legacy, building and managing businesses across mining, automobiles, financial services, real estate, renewable energy, aviation and hospitality.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/businesses"
            className="px-8 py-4 bg-gold text-primary hover:bg-white hover:text-primary transition-colors font-medium tracking-wider uppercase text-sm w-full sm:w-auto"
          >
            Explore Our Businesses
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border border-white/30 hover:bg-white hover:text-primary transition-colors text-white font-medium tracking-wider uppercase text-sm w-full sm:w-auto"
          >
            Discover Our Story
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
