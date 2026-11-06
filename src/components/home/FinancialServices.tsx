"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FinancialServices() {
  return (
    <section className="py-24 md:py-32 bg-warm-white text-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-primary uppercase tracking-widest text-sm font-semibold mb-6">Financial Services</h4>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Creating Access to Affordable Finance
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal/70 text-lg font-light leading-relaxed"
            >
              <p>
                The Company has an investment in Saral Home Finance Limited, a housing finance company regulated by the National Housing Bank, catering to small-ticket housing loans for the lower-middle-income segment.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/hero_financial.png"
              alt="Financial Services"
              fill
              className="object-cover shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
