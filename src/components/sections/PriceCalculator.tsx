"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

const pricing = {
  exterior: { sedan: 79, suv: 99, truck: 119 },
  interior: { sedan: 119, suv: 139, truck: 159 },
  full: { sedan: 179, suv: 209, truck: 239 },
};

const serviceLabels: Record<string, string> = {
  exterior: "Exterior Detail",
  interior: "Interior Detail",
  full: "Full Detail",
};

const vehicleLabels: Record<string, string> = {
  sedan: "Sedan / Coupe",
  suv: "SUV / Crossover / Minivan",
  truck: "Truck / Large SUV",
};

type Service = keyof typeof pricing;
type Vehicle = keyof typeof pricing.exterior;

export default function PriceCalculator() {
  const [service, setService] = useState<Service | null>(null);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  const price = service && vehicle ? pricing[service][vehicle] : null;

  return (
    <div className="bg-charcoal-800 rounded-sm p-7 lg:p-10">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-bronze text-xs tracking-[0.2em] uppercase mb-2">Instant Quote</p>
        <h3 className="font-display text-2xl lg:text-3xl font-semibold text-cream mb-8">
          What&apos;s your price?
        </h3>

        {/* Step 1 - Service */}
        <div className="mb-7">
          <p className="text-cream/50 text-xs font-mono tracking-widest uppercase mb-3">
            Step 1 — Pick your service
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(Object.keys(serviceLabels) as Service[]).map((s) => (
              <button
                key={s}
                onClick={() => setService(s)}
                className={`py-3.5 px-4 rounded-sm text-sm font-semibold tracking-wide border transition-all duration-200 text-left ${
                  service === s
                    ? "bg-bronze border-bronze text-white"
                    : "border-white/15 text-cream/70 hover:border-bronze/50 hover:text-cream"
                }`}
              >
                {serviceLabels[s]}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 - Vehicle */}
        <div className="mb-8">
          <p className="text-cream/50 text-xs font-mono tracking-widest uppercase mb-3">
            Step 2 — Pick your vehicle size
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(Object.keys(vehicleLabels) as Vehicle[]).map((v) => (
              <button
                key={v}
                onClick={() => setVehicle(v)}
                className={`py-3.5 px-4 rounded-sm text-sm font-semibold tracking-wide border transition-all duration-200 text-left ${
                  vehicle === v
                    ? "bg-bronze border-bronze text-white"
                    : "border-white/15 text-cream/70 hover:border-bronze/50 hover:text-cream"
                }`}
              >
                {vehicleLabels[v]}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div
          className={`rounded-sm border transition-all duration-300 overflow-hidden ${
            price
              ? "border-bronze/40 bg-white/5"
              : "border-white/10 bg-white/[0.02]"
          }`}
        >
          {price ? (
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="text-cream/50 text-xs font-mono tracking-wide uppercase mb-1">Your price</p>
                <p className="font-display text-5xl font-semibold text-bronze">${price}</p>
                <p className="text-cream/60 text-sm mt-1">
                  {serviceLabels[service!]} / {vehicleLabels[vehicle!]}
                </p>
              </div>
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 btn-primary px-7 py-3.5"
              >
                Book Now
              </a>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-cream/30 text-sm font-mono tracking-wide">
                Select a service and vehicle size above to see your price
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
