import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const placeholders = [
  { label: "Before", sublabel: "Pre-detail condition" },
  { label: "After", sublabel: "Post-detail result" },
  { label: "Before", sublabel: "Interior clean" },
  { label: "After", sublabel: "Interior result" },
];

export default function GallerySection() {
  return (
    <section className="py-20 lg:py-24 bg-cream-100">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Work</p>
            <h2 className="section-title mb-4">Before &amp; After</h2>
            <p className="text-charcoal-500 max-w-md mx-auto text-sm leading-relaxed">
              Photos coming soon as we service our first customers in Duncan and the Cowichan Valley.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {placeholders.map((p, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="relative rounded-sm overflow-hidden bg-charcoal-100 aspect-[4/5] flex flex-col items-center justify-center border border-charcoal-200 group">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-charcoal-300 mb-3">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="font-display text-2xl font-semibold text-charcoal-400">{p.label}</span>
                  <span className="text-charcoal-300 text-xs mt-1 font-mono tracking-wide">{p.sublabel}</span>
                  <span className="text-charcoal-200 text-[10px] mt-3 tracking-widest uppercase">Photo coming soon</span>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-bronze/40" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-bronze/40" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <p className="text-center text-charcoal-400 text-xs mt-8 font-mono tracking-wide">
            PHOTOS WILL BE ADDED AS WE SERVE CUSTOMERS — CHECK BACK SOON
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
