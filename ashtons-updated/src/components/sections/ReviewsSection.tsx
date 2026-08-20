"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

const reviews = [
  {
    name: "Christy Murray",
    badge: "Local Guide",
    stars: 5,
    text: "My car's inside looks like when I first bought it! Very happy with the service. Ashton did a great job cleaning my car!",
    timeAgo: "20 hours ago",
  },
  {
    name: "Florian Emprin",
    badge: null,
    stars: 5,
    text: "Ashton did an amazing job!! Paid a lot of attention to every detail, our truck looks brand new again. Highly recommended, friendly and professional service.",
    timeAgo: "1 week ago",
  },
  {
    name: "Isla Souter",
    badge: null,
    stars: 5,
    text: "Very professional, responded and scheduled me in to clean my car in a very timely manner! He did a fantastic job, great eye to detail — my car looks brand new inside! Highly recommend!",
    timeAgo: "2 weeks ago",
  },
  {
    name: "Parker Bertrand",
    badge: null,
    stars: 5,
    text: "Ashton did an amazing job detailing my Mustang. He showed up right on time, came to my place, and was great to deal with.",
    timeAgo: "4 weeks ago",
  },
  {
    name: "Seth Miller",
    badge: null,
    stars: 5,
    text: "Best detailing I have ever had! Very professional and did an amazing job. Highly recommend!",
    timeAgo: "4 weeks ago",
  },
  {
    name: "June Rhodes",
    badge: "Local Guide",
    stars: 5,
    text: "You know how you keep meaning to take the car into the car wash and can't ever seem to time it right? They are closed, or you're rushing, or it just doesn't happen. Ashton takes that whole problem away. He came to me, did an amazing job, and the car looked brand new.",
    timeAgo: "7 weeks ago",
  },
  {
    name: "Yanisa Slydell",
    badge: null,
    stars: 5,
    text: "Ashton detailed the exterior of my BMW and it turned out amazing. He took his time and paid attention to all the little details — the wheels, the paint, the tires, all of it. Would absolutely recommend.",
    timeAgo: "8 weeks ago",
  },
  {
    name: "Amanda Sly",
    badge: "Local Guide",
    stars: 5,
    text: "Squeaky clean inside and out!!",
    timeAgo: "8 weeks ago",
  },
  {
    name: "Tahlon Buttle",
    badge: null,
    stars: 5,
    text: "Had my vehicle detailed by Ashton this afternoon and couldn't be happier with the results. The attention to detail was outstanding — everything was spotless. Exceeded my expectations. Highly recommend.",
    timeAgo: "8 weeks ago",
  },
  {
    name: "Brin Slydell",
    badge: "Local Guide",
    stars: 5,
    text: "Ashton came to my place and cleaned my whole car. He showed up on time, did the job professionally, and charged a fair price. My car looks how it did when I bought it.",
    timeAgo: "9 weeks ago",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#b8935a" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white/5 border border-white/10 rounded-sm p-6 mx-3">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-cream font-semibold text-sm">{review.name}</p>
          {review.badge && (
            <p className="text-bronze text-[11px] font-mono tracking-wide mt-0.5">{review.badge}</p>
          )}
        </div>
        {/* Google G icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <StarRating count={review.stars} />
      <p className="text-cream/75 text-sm leading-relaxed mt-3 mb-4">&ldquo;{review.text}&rdquo;</p>
      <p className="text-cream/30 text-[11px] font-mono tracking-wide">{review.timeAgo}</p>
    </div>
  );
}

export default function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const posRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const speed = 0.6; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clone children for seamless loop
    const original = Array.from(track.children) as HTMLElement[];
    original.forEach((child) => {
      const clone = child.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });

    const totalWidth = original.reduce((sum, el) => sum + el.offsetWidth + 24, 0); // 24 = gap (mx-3*2)

    const animate = () => {
      if (!isPaused) {
        posRef.current += speed;
        if (posRef.current >= totalWidth) {
          posRef.current = 0;
        }
        if (track) {
          track.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused]);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-charcoal-800 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(184,147,90,0.4) 0%, transparent 60%),
                            radial-gradient(circle at 70% 50%, rgba(184,147,90,0.2) 0%, transparent 60%)`
        }} />
      </div>

      <div className="container-custom relative z-10 mb-12">
        <AnimateOnScroll>
          <div className="text-center">
            <p className="section-subtitle">What Customers Say</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-tight mb-4">
              Customer Reviews
            </h2>
            {/* Overall rating */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#b8935a" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-cream font-semibold text-lg">5.0</span>
              <span className="text-cream/40 text-sm font-mono">·</span>
              <a
                href="https://www.google.com/maps/place/Ashton%27s+Auto+Detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 text-sm hover:text-bronze transition-colors font-mono tracking-wide"
              >
                10 reviews on Google
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #1a1a1a, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #1a1a1a, transparent)" }} />

        <div
          ref={trackRef}
          className="flex py-4"
          style={{ willChange: "transform", display: "flex" }}
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container-custom relative z-10 mt-12 text-center">
        <AnimateOnScroll>
          <a
            href="https://g.page/r/ashtonsautodetailing/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-bronze/40 text-bronze hover:bg-bronze hover:text-white px-6 py-3 text-sm font-semibold rounded-sm tracking-wide transition-all duration-200"
          >
            Leave a Google Review
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
