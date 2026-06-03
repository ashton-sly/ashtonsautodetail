import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <AnimateOnScroll>
            <div className="relative">
              {/* Main photo placeholder */}
              <div className="relative rounded-sm overflow-hidden aspect-[4/5] bg-charcoal-100 border border-charcoal-200 max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-charcoal-300 mb-4">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <p className="text-charcoal-400 font-display text-lg">Founder Photo</p>
                  <p className="text-charcoal-300 text-xs mt-2 font-mono tracking-wide">Replace with your photo</p>
                </div>
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-bronze" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-bronze" />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-4 -right-4 lg:right-8 bg-charcoal-800 text-cream rounded-sm p-5 shadow-xl">
                <p className="font-display text-3xl font-semibold text-bronze">100%</p>
                <p className="text-cream/60 text-xs mt-1 font-mono tracking-wide uppercase">Mobile Service</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text side */}
          <AnimateOnScroll delay={150}>
            <div>
              <p className="section-subtitle">The Story</p>
              <h2 className="section-title mb-6">
                Built from the Ground Up
              </h2>

              <div className="gold-line mb-8" />

              <div className="space-y-4 text-charcoal-600 leading-relaxed">
                <p>
                  My name is Ashton, and I&apos;m a young entrepreneur from the Cowichan Valley. I started{" "}
                  <strong className="text-charcoal-800">Ashton&apos;s Auto Detailing</strong> because I saw a gap in
                  the local market — people needed professional, affordable detailing without the hassle of
                  dropping their car off at a shop.
                </p>
                <p>
                  So I built the solution myself. Mobile detailing means I come directly to your home or
                  workplace in Duncan, Cowichan Bay, Ladysmith, or anywhere else in the valley. You keep
                  your schedule. I handle your car.
                </p>
                <p>
                  I treat every vehicle like it&apos;s my own. That means no rushing, no cutting corners,
                  and no leaving until the job is done right. My goal is simple: build a reputation in this
                  community through honest work and real results.
                </p>
                <p>
                  If you&apos;re looking for a detailer you can trust, someone local who genuinely cares
                  about quality — give me a call. I&apos;d love to earn your business.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="btn-primary"
                  aria-label="Call Ashton"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.45 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Ashton
                </a>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="Follow on Instagram"
                >
                  Follow on Instagram
                </a>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-8 border-t border-charcoal-200">
                <p className="font-display text-2xl text-charcoal-800 italic">Ashton</p>
                <p className="text-bronze text-sm font-mono tracking-wide mt-1">Founder, Ashton&apos;s Auto Detailing</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
