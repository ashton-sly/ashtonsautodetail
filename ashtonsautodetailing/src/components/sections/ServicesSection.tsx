import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

const services = [
  {
    name: "Exterior Detail",
    price: "$79",
    priceLabel: "Starting at",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14l2 4-2 6z" />
        <circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" />
      </svg>
    ),
    description: "A thorough exterior clean that brings your car's finish back to life — from the ground up.",
    features: [
      "Hand wash & rinse",
      "Wheel & rim cleaning",
      "Tire cleaning & dressing",
      "Door jamb wipe down",
      "Exterior shine & dry",
    ],
    highlight: false,
  },
  {
    name: "Interior Detail",
    price: "$99",
    priceLabel: "Starting at",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    description: "Deep interior cleaning that removes dirt, dust, and stains from every surface inside your vehicle.",
    features: [
      "Full vacuum (seats, floors, trunk)",
      "Dash & console cleaning",
      "Door panel wipe down",
      "Interior window cleaning",
      "Light stain removal",
    ],
    highlight: false,
  },
  {
    name: "Full Detail",
    price: "$149",
    priceLabel: "Starting at",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    description: "The complete package — everything from our interior and exterior details combined into one premium service.",
    features: [
      "Complete exterior detail",
      "Complete interior detail",
      "Best value package",
      "Ideal for seasonal cleans",
      "Custom pricing available",
    ],
    highlight: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream">
      <div className="container-custom">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="section-subtitle">What We Offer</p>
            <h2 className="section-title mb-4">
              Professional Detailing Services
            </h2>
            <p className="text-charcoal-500 max-w-xl mx-auto leading-relaxed">
              Every package is delivered mobile — we come to your home or workplace anywhere in the{" "}
              <strong>Cowichan Valley</strong>. No shop drop-off required.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.name} delay={i * 120}>
              <div
                className={`service-card relative rounded-sm overflow-hidden h-full flex flex-col ${
                  service.highlight
                    ? "bg-charcoal-800 text-cream shadow-2xl ring-1 ring-bronze/40"
                    : "bg-white text-charcoal-800 shadow-sm border border-cream-200"
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-bronze-dark via-bronze-light to-bronze-dark" />
                )}

                {/* Most Popular badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-bronze text-white text-[10px] font-mono tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7 lg:p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-sm flex items-center justify-center mb-6 ${
                      service.highlight
                        ? "bg-bronze/20 text-bronze"
                        : "bg-cream text-bronze"
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Name + Price */}
                  <div className="mb-5">
                    <h3
                      className={`font-display text-2xl font-semibold mb-1 ${
                        service.highlight ? "text-cream" : "text-charcoal-800"
                      }`}
                    >
                      {service.name}
                    </h3>
                    <p
                      className={`text-sm mb-1 ${
                        service.highlight ? "text-cream/50" : "text-charcoal-400"
                      }`}
                    >
                      {service.priceLabel}
                    </p>
                    <p className="font-display text-4xl font-semibold text-bronze">
                      {service.price}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      service.highlight ? "text-cream/70" : "text-charcoal-500"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <svg
                          className="flex-shrink-0 mt-0.5 text-bronze"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className={service.highlight ? "text-cream/80" : "text-charcoal-600"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={SITE_CONFIG.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold tracking-wide rounded-sm transition-all duration-200 ${
                      service.highlight
                        ? "bg-bronze text-white hover:bg-bronze-light"
                        : "border-2 border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-cream"
                    }`}
                  >
                    Book This Package
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Free quote note */}
        <AnimateOnScroll delay={400}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-charcoal-800/5 border border-charcoal-800/10 rounded-sm px-6 py-4">
              <svg className="text-bronze flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-sm text-charcoal-600">
                <strong className="text-charcoal-800">Free quotes available.</strong> Custom pricing for heavily soiled vehicles — call{" "}
                <a href={SITE_CONFIG.phoneHref} className="text-bronze font-semibold hover:underline">
                  {SITE_CONFIG.phone}
                </a>
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
