import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

const areaDetails = [
  { name: "Duncan", note: "Primary Service Area", primary: true },
  { name: "Cowichan Bay", note: "Waterfront community", primary: false },
  { name: "Maple Bay", note: "Coastal village", primary: false },
  { name: "Cobble Hill", note: "Rural community", primary: false },
  { name: "Mill Bay", note: "Growing suburb", primary: false },
  { name: "Shawnigan Lake", note: "Lake community", primary: false },
  { name: "Chemainus", note: "Mural city", primary: false },
  { name: "Crofton", note: "Seaside village", primary: false },
  { name: "Ladysmith", note: "Historic harbour", primary: false },
];

export default function AreasSection() {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-cream">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="section-subtitle">Where We Serve</p>
            <h2 className="section-title mb-4">
              Service Areas
            </h2>
            <p className="text-charcoal-500 max-w-xl mx-auto leading-relaxed">
              We provide mobile car detailing across the entire{" "}
              <strong>Cowichan Valley</strong> region. Not sure if we cover your area?{" "}
              <a href={SITE_CONFIG.phoneHref} className="text-bronze font-semibold hover:underline">
                Give us a call.
              </a>
            </p>
          </div>
        </AnimateOnScroll>

        {/* Area grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {areaDetails.map((area, i) => (
            <AnimateOnScroll key={area.name} delay={i * 60}>
              <div
                className={`relative rounded-sm p-5 border transition-all duration-200 group ${
                  area.primary
                    ? "bg-charcoal-800 border-charcoal-700 text-cream"
                    : "bg-white border-cream-200 hover:border-bronze/30 hover:shadow-md"
                }`}
              >
                {area.primary && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-bronze-dark via-bronze-light to-bronze-dark" />
                )}
                <div className="flex items-start gap-3">
                  <svg
                    className={`flex-shrink-0 mt-0.5 ${area.primary ? "text-bronze" : "text-bronze/60 group-hover:text-bronze"} transition-colors`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className={`font-display font-semibold text-base ${area.primary ? "text-cream" : "text-charcoal-800"}`}>
                      {area.name}
                    </p>
                    <p className={`text-xs mt-0.5 ${area.primary ? "text-cream/50" : "text-charcoal-400"}`}>
                      {area.note}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile SEO text block */}
        <AnimateOnScroll delay={200}>
          <div className="mt-14 max-w-3xl mx-auto bg-charcoal-800/5 border border-charcoal-200 rounded-sm p-7">
            <h3 className="font-display text-xl font-semibold text-charcoal-800 mb-3">
              Mobile Car Detailing Near You in BC
            </h3>
            <p className="text-charcoal-500 text-sm leading-relaxed">
              Looking for <strong>mobile car detailing in Duncan, BC</strong>? Searching for{" "}
              <strong>auto detailing in Cowichan Valley</strong> or a{" "}
              <strong>mobile detailer near me</strong>? Ashton&apos;s Auto Detailing serves all of the
              Cowichan Valley area, including Duncan, Cobble Hill, Mill Bay, Shawnigan Lake, Ladysmith,
              Chemainus, and more. We bring professional interior and exterior detailing directly to your
              driveway or workplace. Call today for a free quote.
            </p>
            <div className="mt-5">
              <a href={SITE_CONFIG.phoneHref} className="btn-primary text-sm">
                Get a Free Quote
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
