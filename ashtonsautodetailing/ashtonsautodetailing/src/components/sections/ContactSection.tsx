import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-charcoal-800 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #b8935a 0px, #b8935a 1px, transparent 1px, transparent 40px),
                            repeating-linear-gradient(0deg, #b8935a 0px, #b8935a 1px, transparent 1px, transparent 40px)`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <AnimateOnScroll>
            <div>
              <p className="section-subtitle">Get in Touch</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-tight mb-6">
                Ready for a Spotless Car?
              </h2>
              <div className="gold-line mb-8" />
              <p className="text-cream/65 leading-relaxed mb-10">
                Call us for a free quote, or book directly online. We serve Duncan and all of Cowichan
                Valley. Same-week appointments often available.
              </p>

              {/* Contact cards */}
              <div className="space-y-4">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center gap-5 group bg-white/5 hover:bg-white/10 border border-white/8 hover:border-bronze/30 rounded-sm p-5 transition-all duration-200"
                  aria-label="Call Ashton's Auto Detail"
                >
                  <div className="w-12 h-12 rounded-sm bg-bronze/20 flex items-center justify-center text-bronze flex-shrink-0 group-hover:bg-bronze/30 transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.45 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs font-mono tracking-[0.15em] uppercase mb-1">Phone</p>
                    <p className="text-cream font-semibold text-lg group-hover:text-bronze transition-colors">{SITE_CONFIG.phone}</p>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.emailHref}
                  className="flex items-center gap-5 group bg-white/5 hover:bg-white/10 border border-white/8 hover:border-bronze/30 rounded-sm p-5 transition-all duration-200"
                  aria-label="Email Ashton's Auto Detail"
                >
                  <div className="w-12 h-12 rounded-sm bg-bronze/20 flex items-center justify-center text-bronze flex-shrink-0 group-hover:bg-bronze/30 transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs font-mono tracking-[0.15em] uppercase mb-1">Email</p>
                    <p className="text-cream font-semibold group-hover:text-bronze transition-colors break-all">{SITE_CONFIG.email}</p>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group bg-white/5 hover:bg-white/10 border border-white/8 hover:border-bronze/30 rounded-sm p-5 transition-all duration-200"
                  aria-label="Instagram - Ashton's Auto Detail"
                >
                  <div className="w-12 h-12 rounded-sm bg-bronze/20 flex items-center justify-center text-bronze flex-shrink-0 group-hover:bg-bronze/30 transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs font-mono tracking-[0.15em] uppercase mb-1">Instagram</p>
                    <p className="text-cream font-semibold group-hover:text-bronze transition-colors">@ashtons.autodetail</p>
                  </div>
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: CTA + Hours */}
          <AnimateOnScroll delay={150}>
            <div className="flex flex-col gap-6">
              {/* Book card */}
              <div className="bg-bronze rounded-sm p-8 lg:p-10 text-center">
                <svg className="mx-auto mb-5" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="8" y1="14" x2="16" y2="14" />
                  <line x1="8" y1="18" x2="12" y2="18" />
                </svg>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">Book Online</h3>
                <p className="text-white/80 text-sm mb-7 leading-relaxed">
                  See available times and schedule your detail in minutes. Same-week bookings available.
                </p>
                <a
                  href={SITE_CONFIG.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-white text-bronze font-semibold rounded-sm text-sm tracking-wide hover:bg-cream transition-colors"
                >
                  View Availability &amp; Book
                </a>
              </div>

              {/* Hours card */}
              <div className="bg-white/5 border border-white/10 rounded-sm p-6">
                <h3 className="font-display text-lg font-semibold text-cream mb-4">
                  Hours of Operation
                </h3>
                <div className="space-y-2.5">
                  {[
                    { day: "Monday – Friday", hours: "10:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM – 6:00 PM" },
                    { day: "Sunday", hours: "By appointment" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-cream/50">{day}</span>
                      <span className="text-cream font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <p className="text-cream/40 text-xs">
                    * Hours may vary. Call to confirm availability.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
