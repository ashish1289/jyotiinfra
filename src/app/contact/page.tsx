"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactInfoItems = [
  {
    label: "Address",
    lines: [
      "Jyoti Infrastructure Private Limited",
      "Corporate Office, Bhubaneswar",
      "Odisha – 751001, India",
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    label: "Business Enquiries",
    lines: ["contact@jyotiinfrastructure.com", "+91 (0) 0000 000000"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const formFields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your Name", span: 1 },
  { id: "email", label: "Email", type: "email", placeholder: "your@email.com", span: 1 },
  { id: "phone", label: "Phone", type: "tel", placeholder: "Phone Number", span: 1 },
  { id: "company", label: "Company", type: "text", placeholder: "Company Name", span: 1 },
  { id: "subject", label: "Subject", type: "text", placeholder: "Subject", span: 2 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-80px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-80px" });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <main className="flex-1 bg-warm-white text-charcoal">
      {/* Hero Header */}
      <div className="pt-24 pb-16 bg-primary text-white text-center relative overflow-hidden">
        {/* Diagonal stripe bg */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #B89452 0px, #B89452 1px, transparent 1px, transparent 20px)",
          }}
        />

        <motion.div
          className="container mx-auto px-6 md:px-12 mt-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Contact Us
          </motion.h1>

          {/* Animated gold line separator */}
          <motion.div
            className="h-[2px] bg-gold mx-auto mb-5"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Let's Build the Future Together
          </motion.p>
        </motion.div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ── Contact Information ── */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: -40 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="font-serif text-3xl text-primary mb-8 border-l-4 border-gold pl-4">
                Corporate Office
              </h2>

              {/* Floating contact info cards */}
              <div className="space-y-5 mb-10">
                {contactInfoItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex gap-4 p-5 bg-white border border-primary/8 rounded-sm shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                    whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(184,148,82,0.12)" }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/5 rounded-sm flex items-center justify-center text-gold">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary uppercase tracking-widest text-xs mb-1">
                        {item.label}
                      </h4>
                      {item.lines.map((line, li) => (
                        <p key={li} className="text-charcoal/75 font-light text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Google Maps embed */}
              <motion.div
                className="w-full h-[300px] overflow-hidden rounded-sm border border-primary/10 shadow-sm"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={infoInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119784.6816985413!2d85.76393765!3d20.2960587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1699999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jyoti Infrastructure – Bhubaneswar, Odisha"
                />
              </motion.div>
            </motion.div>

            {/* ── Contact Form ── */}
            <div ref={formRef}>
              <motion.h2
                className="font-serif text-3xl text-primary mb-8 border-l-4 border-gold pl-4"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Send an Enquiry
              </motion.h2>

              <form onSubmit={handleSubmit}>
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                >
                  {/* Grid row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formFields.slice(0, 2).map((field) => (
                      <motion.div key={field.id} variants={fieldVariants}>
                        <label
                          htmlFor={field.id}
                          className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2"
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-charcoal placeholder:text-charcoal/40"
                          placeholder={field.placeholder}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Grid row 2: Phone + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formFields.slice(2, 4).map((field) => (
                      <motion.div key={field.id} variants={fieldVariants}>
                        <label
                          htmlFor={field.id}
                          className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2"
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-charcoal placeholder:text-charcoal/40"
                          placeholder={field.placeholder}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Subject */}
                  <motion.div variants={fieldVariants}>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-charcoal placeholder:text-charcoal/40"
                      placeholder="Subject"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={fieldVariants}>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-widest text-primary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-white border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none text-charcoal placeholder:text-charcoal/40"
                      placeholder="Your message..."
                    />
                  </motion.div>

                  {/* Animated submit button */}
                  <motion.div variants={fieldVariants}>
                    <motion.button
                      type="submit"
                      disabled={submitting || submitted}
                      className="relative overflow-hidden px-8 py-4 bg-primary text-gold uppercase tracking-widest text-sm font-semibold w-full md:w-auto disabled:opacity-70"
                      whileHover={!submitting && !submitted ? { scale: 1.02 } : {}}
                      whileTap={!submitting && !submitted ? { scale: 0.98 } : {}}
                    >
                      {/* Shimmer overlay on hover */}
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-x-full"
                        whileHover={{ translateX: "200%" }}
                        transition={{ duration: 0.5 }}
                      />

                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {submitting ? (
                          <>
                            <motion.span
                              className="w-4 h-4 border-2 border-gold border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            Sending…
                          </>
                        ) : submitted ? (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Enquiry Sent
                          </>
                        ) : (
                          "Submit Enquiry"
                        )}
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
