import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#b8935a" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(184,147,90,0.4) 0%, transparent 60%),
                            radial-gradient(circle at 70% 50%, rgba(184,147,90,0.2) 0%, transparent 60%)`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="section-subtitle">Customer Reviews</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-tight mb-4">
              Customer Reviews
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-2xl mx-auto text-center">
            {/* Stars row */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative">
                  {/* Empty star outline */}
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b8935a" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-sm p-8 lg:p-12">
              <div className="w-16 h-16 rounded-full bg-bronze/20 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              <p className="font-display text-xl sm:text-2xl text-cream leading-relaxed mb-8 italic">
                &ldquo;We are currently accepting our first customers. Book now and help us earn our first 5-star review.&rdquo;
              </p>

              <p className="text-cream/40 text-sm font-mono tracking-wide uppercase mb-8">
                — Ashton&apos;s Auto Detailing, Duncan BC
              </p>

              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
                aria-label="Book and be our first review"
              >
                Be Our First Customer
              </a>
            </div>

            <p className="text-cream/30 text-xs mt-6 font-mono tracking-wide">
              REVIEWS WILL BE POSTED HERE AS WE EARN THEM
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
