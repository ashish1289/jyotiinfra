"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = ["Maruti Suzuki", "TVS Motors", "Audi", "Harley-Davidson", "Suzuki"];

export function Automobile() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_automobile.png"
          alt="Automobile Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-charcoal/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-widest text-sm font-semibold mb-4"
          >
            Automobile Retail
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
          >
            Driving Mobility Across Odisha
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 font-light"
          >
            The Group has built a strong presence in automobile dealerships across Odisha, representing leading brands and creating a successful automotive retail network.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="px-6 py-4 md:px-8 md:py-6 bg-white/5 border border-white/10 backdrop-blur-sm text-white font-serif text-xl md:text-2xl hover:bg-white/10 transition-colors"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
