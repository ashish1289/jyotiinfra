import { Leaf } from "lucide-react";

const commitments = [
  "Net-Zero Pathway",
  "75 MW Renewable Energy",
  "Responsible Mining",
  "Land Reclamation & Reforestation",
  "Water Stewardship",
  "Circular Economy",
  "Clean & Electric Mobility",
  "Plastic-Free Hospitality",
  "Biodiversity Conservation",
  "Financial Inclusion",
  "Community Development",
  "Ethical Governance",
];

/** Slow-scrolling band of the Group's sustainability commitments, shown under the home hero. */
export function SustainabilityTicker() {
  // Rendered twice so the -50% translate loops seamlessly.
  const loop = [...commitments, ...commitments];

  return (
    <section
      aria-label="Our sustainability commitments"
      className="relative bg-[#0F2A4A] border-y border-blue-900/60 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0F2A4A] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0F2A4A] to-transparent z-10" />

      {/* Screen readers get the list once, not the animated duplicate */}
      <ul className="sr-only">
        {commitments.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <div aria-hidden className="flex w-max animate-marquee py-5">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-7 shrink-0">
            <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-100 text-base md:text-lg font-semibold tracking-wide whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
