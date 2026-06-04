import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

const areas = [
  "Duncan",
  "Cowichan Bay",
  "Maple Bay",
  "Cobble Hill",
  "Mill Bay",
  "Shawnigan Lake",
  "Chemainus",
  "Crofton",
  "Ladysmith",
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {areas.map((area, i) => (
            <AnimateOnScroll key={area} delay={i * 60}>
              <div className="rounded-sm p-5 border border-cream-200 bg-white hover:border-bronze/30 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <svg
                    className="flex-shrink-0 text-bronze/60 group-hover:text-bronze transition-colors"
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
                  <p className="font-display font-semibold text-base text-charcoal-800">
                    {area}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* SEO text block */}
        <AnimateOnScroll delay={200}>
          <div className="mt-14 max-w-3xl mx-auto bg-charcoal-800/5 border border-charcoal-200 rounded-sm p-7">
            <h3 className="font-display text-xl font-semibold text-charcoal-800 mb-3">
              Mobile Car Detailing Near You in BC
            </h3>
            <p className="text-charcoal-500 text-sm leading-relaxed">
              Looking for <strong>mobile car detailing in Duncan, BC</strong>? Searching for{" "}
              <strong>auto detailing in Cowichan Valley</strong> or a{" "}
              <strong>mobile detailer near me</strong>? Ashton&apos;s Auto Detail serves all of the
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
