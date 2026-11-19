"use client";

import { useState } from "react";
import { MapPin, Mail, Send, CheckCircle2, Leaf } from "lucide-react";

const contactInfoItems = [
  {
    label: "Corporate Headquarters",
    lines: [
      "Jyoti Infrastructure Private Limited",
      "Corporate Office, Bhubaneswar",
      "Odisha – 751001, India",
    ],
    icon: MapPin,
  },
  {
    label: "Corporate Communications & Enquiries",
    lines: ["contact@jyotiinfrastructure.com", "+91 (0) 674 2500000"],
    icon: Mail,
  },
  {
    label: "ESG & Sustainability Office",
    lines: ["esg@jyotiinfrastructure.com", "Environmental & Social Governance Division"],
    icon: Leaf,
  },
];

const formFields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Your Full Name", span: 1 },
  { id: "email", label: "Email Address", type: "email", placeholder: "your.email@organization.com", span: 1 },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 00000 00000", span: 1 },
  { id: "company", label: "Company / Organization", type: "text", placeholder: "Organization Name", span: 1 },
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="flex-1 bg-slate-50 text-slate-900">
      {/* ── Hero ── */}
      <div className="pt-32 pb-20 bg-[#0A192F] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 shadow-md">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Connect & Collaborate</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Contact Us
          </h1>

          <div className="h-1 bg-blue-500 mx-auto w-24 rounded-full mb-6" />

          <p className="text-xl md:text-2xl text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build enduring, sustainable value together. Connect with our corporate office and business leaders.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ── Contact Information ── */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-3 border-l-4 border-blue-600 pl-4">
                  Corporate Office
                </h2>
                <p className="text-slate-600 text-base md:text-lg">
                  Reach out for executive queries, business partnerships, and ESG collaboration.
                </p>
              </div>

              {/* Contact info cards */}
              <div className="space-y-4">
                {contactInfoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-400 transition-all"
                    >
                      <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg border border-blue-200 flex items-center justify-center text-blue-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                          {item.label}
                        </h4>
                        {item.lines.map((line, li) => (
                          <p key={li} className="text-slate-600 font-normal text-sm md:text-base leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map embed */}
              <div className="w-full h-[280px] overflow-hidden rounded-xl border border-slate-200 shadow-sm">
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
              </div>
            </div>

            {/* ── Contact Form ── */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2 border-l-4 border-blue-600 pl-4">
                Send an Enquiry
              </h2>
              <p className="text-slate-600 text-sm md:text-base mb-8">
                Complete the form below and our secretariat will respond within 24 business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.slice(0, 2).map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        required
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors text-slate-900 placeholder:text-slate-400 text-base"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.slice(2, 4).map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors text-slate-900 placeholder:text-slate-400 text-base"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="sector"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Area of Interest / Sector
                  </label>
                  <select
                    id="sector"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors text-slate-900 text-base"
                  >
                    <option value="general">General Corporate Enquiry</option>
                    <option value="renewable">Renewable Clean Energy (Solar & Wind)</option>
                    <option value="sustainability">ESG & Sustainability Partnerships</option>
                    <option value="mining">Sustainable Mining & Minerals</option>
                    <option value="automobile">Automobile Retail & EV Infrastructure</option>
                    <option value="hospitality">Hospitality (Taj Puri Resort & Spa)</option>
                    <option value="finance">Financial Services (Saral Home Finance)</option>
                    <option value="realestate">Commercial Real Estate Assets</option>
                    <option value="aviation">Private Aviation & Charters</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors resize-none text-slate-900 placeholder:text-slate-400 text-base"
                    placeholder="Provide details about your query or proposal..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {submitting ? (
                    <span>Sending Enquiry...</span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2 text-emerald-300">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Enquiry Submitted Successfully</span>
                    </span>
                  ) : (
                    <>
                      <span>Submit Corporate Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
