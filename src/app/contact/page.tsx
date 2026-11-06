"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="flex-1 bg-warm-white text-charcoal">
      <div className="pt-24 pb-12 bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12 mt-20">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Let's Build the Future Together
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl text-primary mb-8 border-l-4 border-gold pl-4">Corporate Office</h2>
              <div className="space-y-8 font-light text-charcoal/80 text-lg">
                <div>
                  <h4 className="font-semibold text-primary uppercase tracking-widest text-sm mb-2">Address</h4>
                  <p>Jyoti Infrastructure Private Limited</p>
                  <p>Corporate Office Address Placeholder</p>
                  <p>Bhubaneswar, Odisha, India</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary uppercase tracking-widest text-sm mb-2">Business Enquiries</h4>
                  <p>contact@jyotiinfrastructure.com</p>
                  <p>+91 (0) 0000 000000</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 w-full h-[300px] bg-charcoal/5 border border-charcoal/10 flex items-center justify-center">
                <p className="text-charcoal/50 uppercase tracking-widest text-sm font-semibold">Map Placeholder</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-primary mb-8 border-l-4 border-gold pl-4">Send an Enquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-widest text-primary mb-2">Name</label>
                    <input type="text" id="name" className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-widest text-primary mb-2">Email</label>
                    <input type="email" id="email" className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold uppercase tracking-widest text-primary mb-2">Phone</label>
                    <input type="tel" id="phone" className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Phone Number" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold uppercase tracking-widest text-primary mb-2">Company</label>
                    <input type="text" id="company" className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Company Name" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold uppercase tracking-widest text-primary mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Subject" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-widest text-primary mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Your message..."></textarea>
                </div>

                <button type="submit" className="px-8 py-4 bg-primary text-gold hover:bg-charcoal transition-colors uppercase tracking-widest text-sm font-semibold w-full md:w-auto">
                  Submit Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
