"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const photos = [
  {
    src: "/images/beforeafter/01-toyota-exterior.png",
    alt: "Before and after exterior car detailing on a black Toyota Matrix in Duncan, BC — paint decontamination and sealant",
    label: "Exterior Detail",
    desc: "Black Toyota Matrix — paint decontamination & sealant",
  },
  {
    src: "/images/beforeafter/02-honda-interior.png",
    alt: "Before and after interior car detailing on a Honda in the Cowichan Valley — full vacuum and fabric refresh",
    label: "Interior Detail",
    desc: "Honda — full vacuum, wipe-down & fabric refresh",
  },
  {
    src: "/images/beforeafter/03-honda-wheels.png",
    alt: "Before and after wheel and tire detailing on a Honda — brake dust removal and UV tire dressing in Duncan, BC",
    label: "Wheel & Tire Detail",
    desc: "Honda — brake dust removal & tire dressing",
  },
  {
    src: "/images/beforeafter/04-civic-interior.png",
    alt: "Before and after interior detailing on a Honda Civic in Cowichan Valley — deep clean, dash and console restoration",
    label: "Interior Detail",
    desc: "Honda Civic — deep clean, dash & console restoration",
  },
  {
    src: "/images/beforeafter/05-tesla-exterior.png",
    alt: "Before and after exterior mobile car detailing on a red Tesla Model X in Duncan, BC — hand wash and paint sealant",
    label: "Exterior Detail",
    desc: "Tesla Model X — hand wash, clay bar & paint sealant",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-cream-100">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Work</p>
            <h2 className="section-title mb-4">Before &amp; After</h2>
            <p className="text-charcoal-500 max-w-md mx-auto text-sm leading-relaxed">
              Real results from real customers across the Cowichan Valley.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Carousel */}
        <AnimateOnScroll>
          <div className="relative max-w-3xl mx-auto">
            {/* Main image */}
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-charcoal-100 shadow-2xl">
              <Image
                src={photos[current].src}
                alt={photos[current].alt}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-900/80 to-transparent px-6 py-5">
                <p className="text-bronze font-mono text-xs tracking-[0.2em] uppercase mb-1">{photos[current].label}</p>
                <p className="text-cream text-sm">{photos[current].desc}</p>
              </div>
            </div>

            {/* Prev / Next buttons */}
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-800/80 border border-white/10 flex items-center justify-center text-cream hover:bg-bronze hover:border-bronze transition-all duration-200 z-10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-800/80 border border-white/10 flex items-center justify-center text-cream hover:bg-bronze hover:border-bronze transition-all duration-200 z-10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to photo ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === current ? "bg-bronze w-6" : "bg-charcoal-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Thumbnail strip */}
        <AnimateOnScroll delay={100}>
          <div className="flex gap-3 mt-6 justify-center overflow-x-auto pb-2">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`View ${photo.label}`}
                className={`relative flex-shrink-0 w-20 h-14 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
                  i === current ? "border-bronze" : "border-transparent opacity-60 hover:opacity-80"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover"
                  sizes="80px"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
