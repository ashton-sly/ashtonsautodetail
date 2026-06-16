"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { raw: "100", suffix: "%", label: "Mobile Service" },
  { raw: "3",   suffix: "",  label: "Packages Available" },
  { raw: "9",   suffix: "+", label: "Areas Served" },
  { raw: null,  suffix: "",  label: "Quotes", display: "Free" },
];

function useCountUp(target: number, duration = 1600, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}

function StatItem({ raw, suffix, label, display }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const counted = useCountUp(raw ? parseInt(raw) : 0, 1600, active);

  const displayValue = display
    ? display
    : raw
    ? `${active ? counted : 0}${suffix}`
    : suffix;

  return (
    <div ref={ref}>
      <p className="font-display text-3xl lg:text-4xl font-semibold text-white mb-1">
        {displayValue}
      </p>
      <p className="text-white/70 text-sm font-mono tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}

export default function StatsBanner() {
  return (
    <div className="bg-bronze py-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
