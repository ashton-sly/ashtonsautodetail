"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

const faqs = [
  {
    q: "How much does mobile car detailing cost in Duncan, BC?",
    a: "Prices start at $89 for an exterior detail, $139 for an interior detail, and $219 for a full detail on a sedan or coupe. SUVs are a bit more, and trucks are at the top of the range. Call for a free quote — custom pricing is available for heavily soiled vehicles.",
  },
  {
    q: "Do you need water and power at my location?",
    a: "Yes — we need access to a standard garden hose and a power outlet. Other than that, we bring all equipment and professional-grade products with us. If you're not sure whether your driveway or workplace works, just give us a call.",
  },
  {
    q: "How long does a full detail take?",
    a: "A full detail typically takes 2.5 to 4 hours depending on vehicle size and condition. Interior-only or exterior-only details usually run 1.5 to 2.5 hours. We don't rush — the job's done when it's done right.",
  },
  {
    q: "What areas in the Cowichan Valley do you serve?",
    a: `We serve Duncan, Mill Bay, Cobble Hill, Shawnigan Lake, Chemainus, Lake Cowichan, Ladysmith, Cowichan Bay, Maple Bay, Crofton, and surrounding areas. Not sure if we cover your spot? Call ${SITE_CONFIG.phone} and we'll let you know.`,
  },
  {
    q: "What's the difference between a car wash and a detail?",
    a: "A car wash removes surface dirt with soap and water. A detail is a thorough, professional cleaning of every surface — inside and out — using professional-grade products. Detailing includes paint protection sealant, UV-protective coatings, stain removal, and cleaning of tight spots a regular wash never reaches.",
  },
  {
    q: "Can I book a same-week appointment?",
    a: "Yes — same-week appointments are often available. Call 250-709-1371 to check what's open and get a free quote.",
  },
  {
    q: "Do you offer car wash and detailing near me in the Cowichan Valley?",
    a: "Yes — if you're searching for car wash and detailing near me, Ashton's Auto Detailing brings full-service mobile detailing directly to your driveway or workplace anywhere in the Cowichan Valley, including Duncan, Mill Bay, and Chemainus. Call for a free quote and we'll get you booked.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-cream">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="section-subtitle">Common Questions</p>
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="text-charcoal-500 max-w-md mx-auto text-sm leading-relaxed">
              Everything you need to know before booking your detail in Duncan or the Cowichan Valley.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 60}>
              <div className="border border-charcoal-200 rounded-sm overflow-hidden bg-white">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-charcoal-800 text-sm leading-snug group-hover:text-bronze transition-colors">
                    {faq.q}
                  </span>
                  <svg
                    className={`flex-shrink-0 text-bronze transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64" : "max-h-0"}`}
                >
                  <p className="px-6 pb-5 text-sm text-charcoal-500 leading-relaxed border-t border-charcoal-100 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="text-center mt-10">
            <p className="text-charcoal-400 text-sm mb-4">Still have a question?</p>
            <a href={SITE_CONFIG.phoneHref} className="btn-primary text-sm">
              Call 250-709-1371
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
