import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Young Local Entrepreneur",
    desc: "Born and raised in the Cowichan Valley. Supporting a local business means keeping money in the community.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Convenient Scheduling",
    desc: "Book online or by phone, choose a time that works for you. Morning, afternoon , we work around your life.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "We Come to You",
    desc: "Stay home. Stay at work. We show up wherever your car is in the Cowichan Valley. Zero inconvenience.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Attention to Detail",
    desc: "Every surface is cleaned with professional-grade products used in detail shops across North America. We use P&S professional detailing chemicals — the same brand trusted by high-volume detail shops, rental fleets, and car enthusiasts who won't settle for anything less.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "Premium results without premium-shop prices. Exterior details start at just $79 , quality you can afford.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Customer-First Approach",
    desc: "Your satisfaction drives everything we do. We're building a reputation one happy customer at a time.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-charcoal-800 relative overflow-hidden"
    >
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #b8935a 0,
            #b8935a 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-custom relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="section-subtitle">Why Ashton&apos;s</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-tight mb-4">
              Why Choose Us
            </h2>
            <p className="text-cream/60 max-w-xl mx-auto leading-relaxed">
              We&apos;re not a big corporate shop. We&apos;re a local entrepreneur who cares about
              doing the job right and building trust, one vehicle at a time.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={reason.title} delay={i * 100}>
              <div className="group p-7 rounded-sm border border-white/8 hover:border-bronze/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-sm bg-bronze/15 flex items-center justify-center mb-5 text-bronze group-hover:bg-bronze/25 transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">
                  {reason.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA strip */}
        <AnimateOnScroll delay={200}>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.phoneHref}
              className="group flex items-center justify-center gap-3 bg-bronze text-white font-semibold px-8 py-4 text-sm tracking-wide rounded-sm transition-all duration-200 hover:bg-bronze-light"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.45 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Get a Free Quote
            </a>
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-cream text-sm px-8 py-4"
            >
              View Availability &amp; Book
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
