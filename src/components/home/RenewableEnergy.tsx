"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function RenewableEnergy() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/hero_renewable.png"
                alt="Renewable Energy"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            {/* Animated Energy Line */}
            <motion.div 
              className="absolute top-0 right-0 w-[2px] bg-gold"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
            />
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Sustainability</h4>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Powering a Sustainable Future
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
                Through its wholly owned subsidiary, Jyoti Solar Solutions Private Limited, the Company executed a Power Purchase Agreement with Solar Energy Corporation of India Limited (SECI) for a 10 MW Solar Power Plant at Patnagarh, District Bolangir, Odisha as a developer since 2017.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-12 pt-8 border-t border-white/10"
            >
              <div>
                <p className="text-white font-serif text-4xl mb-1">10 <span className="text-gold text-2xl">MW</span></p>
                <p className="uppercase tracking-widest text-xs font-semibold text-white/60">Solar Power Plant</p>
              </div>
              <div>
                <p className="text-white font-serif text-4xl mb-1">65 <span className="text-gold text-2xl">MW</span></p>
                <p className="uppercase tracking-widest text-xs font-semibold text-white/60">Wind Energy Portfolio</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
