"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

const pricing = {
  exterior: { sedan: 89, suv: 119, truck: 139 },
  interior: { sedan: 139, suv: 159, truck: 179 },
  full: { sedan: 219, suv: 249, truck: 279 },
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

const PET_HAIR_FEE = 30;

type Service = keyof typeof pricing;
type Vehicle = keyof typeof pricing.exterior;

export default function PriceCalculator() {
  const [service, setService] = useState<Service | null>(null);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [petHair, setPetHair] = useState<boolean | null>(null);

  const basePrice = service && vehicle ? pricing[service][vehicle] : null;
  const totalPrice = basePrice !== null && petHair !== null
    ? basePrice + (petHair ? PET_HAIR_FEE : 0)
    : basePrice;

  const allSelected = service && vehicle && petHair !== null;

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
        <div className="mb-7">
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

        {/* Step 3 - Pet Hair */}
        <div className="mb-8">
          <p className="text-cream/50 text-xs font-mono tracking-widest uppercase mb-3">
            Step 3 — Pet hair in the vehicle?
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPetHair(false)}
              className={`py-3.5 px-4 rounded-sm text-sm font-semibold tracking-wide border transition-all duration-200 text-left ${
                petHair === false
                  ? "bg-bronze border-bronze text-white"
                  : "border-white/15 text-cream/70 hover:border-bronze/50 hover:text-cream"
              }`}
            >
              No pet hair
            </button>
            <button
              onClick={() => setPetHair(true)}
              className={`py-3.5 px-4 rounded-sm text-sm font-semibold tracking-wide border transition-all duration-200 text-left ${
                petHair === true
                  ? "bg-bronze border-bronze text-white"
                  : "border-white/15 text-cream/70 hover:border-bronze/50 hover:text-cream"
              }`}
            >
              <span>Yes — pet hair</span>
              <span className="block text-xs font-normal mt-0.5 opacity-70">+$30 pet hair fee</span>
            </button>
          </div>
        </div>

        {/* Result */}
        <div
          className={`rounded-sm border transition-all duration-300 overflow-hidden ${
            allSelected
              ? "border-bronze/40 bg-white/5"
              : "border-white/10 bg-white/[0.02]"
          }`}
        >
          {allSelected ? (
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="text-cream/50 text-xs font-mono tracking-wide uppercase mb-1">Your estimated price</p>
                <p className="font-display text-5xl font-semibold text-bronze">${totalPrice}</p>
                <p className="text-cream/60 text-sm mt-1">
                  {serviceLabels[service!]} / {vehicleLabels[vehicle!]}
                  {petHair && <span className="text-bronze/70"> + pet hair fee</span>}
                </p>
              </div>
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex-shrink-0 btn-primary px-7 py-3.5 flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.45 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call to Book
              </a>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-cream/30 text-sm font-mono tracking-wide">
                Select your service, vehicle size, and pet hair status above
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
