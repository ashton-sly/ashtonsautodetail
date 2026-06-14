import { SITE_CONFIG } from "@/lib/config";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center bg-charcoal-800 overflow-hidden"
      aria-label="Hero - Mobile Car Detailing Cowichan Valley"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(184,147,90,0.3) 2px,
              rgba(184,147,90,0.3) 3px
            )`,
          }}
        />
      </div>

      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-800/95 to-charcoal-800/60 z-10" />
        {/* IMAGE PLACEHOLDER , replace with actual vehicle/detailing photo */}
        <div className="w-full h-full bg-charcoal-700 flex items-center justify-center">
          <div className="text-center opacity-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="mx-auto text-cream">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p className="text-cream mt-2 text-sm font-mono tracking-widest uppercase">Hero Photo</p>
            <p className="text-cream/50 text-xs mt-1">Replace with vehicle/detailing photo</p>
          </div>
        </div>
      </div>

      {/* Gold accent line left */}
      <div className="absolute left-0 top-1/3 bottom-1/3 w-0.5 bg-gradient-to-b from-transparent via-bronze to-transparent z-20" />

      <div className="container-custom relative z-20 py-20 pt-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="section-subtitle text-bronze animate-fade-up mb-4">
            Duncan, BC &amp; Cowichan Valley
          </p>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-cream leading-[1.05] mb-6">
            Mobile Car{" "}
            <span className="text-bronze-gradient">Detailing</span>
            <br />
            in Cowichan Valley
          </h1>

          {/* Subheadline */}
          <p className="text-cream/75 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
            Professional mobile interior and exterior detailing delivered directly to your home or workplace. No drop-off. No waiting. Just a spotless car.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={SITE_CONFIG.phoneHref}
              className="group flex items-center justify-center gap-3 bg-bronze text-white font-semibold px-8 py-4 text-base tracking-wide rounded-sm transition-all duration-200 hover:bg-bronze-light hover:shadow-xl hover:shadow-bronze/20 active:scale-95"
              aria-label="Call Ashton's Auto Detail"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.45 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now , {SITE_CONFIG.phone}
            </a>
            <a
              href={SITE_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-cream/40 text-cream font-semibold px-8 py-4 text-base tracking-wide rounded-sm transition-all duration-200 hover:border-cream hover:bg-cream/10 active:scale-95"
              aria-label="Book an appointment online"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Online
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 text-cream/50 text-sm">
            {[
              "Mobile Service",
              "Cowichan Valley Based",
              "Free Quotes",
              "Flexible Scheduling",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-bronze inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent z-20" />
    </section>
  );
}
