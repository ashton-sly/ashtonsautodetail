import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SITE_CONFIG } from "@/lib/config";

const rows = [
  {
    service: "Exterior Detail",
    sedan: "$79",
    suv: "$99",
    truck: "$119",
  },
  {
    service: "Interior Detail",
    sedan: "$119",
    suv: "$139",
    truck: "$159",
  },
  {
    service: "Full Detail",
    sedan: "$179",
    suv: "$209",
    truck: "$239",
    highlight: true,
  },
];

export default function PricingTable() {
  return (
    <AnimateOnScroll delay={100}>
      <div className="overflow-x-auto rounded-sm border border-charcoal-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-charcoal-200">
              <th className="text-left py-4 px-5 font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal-400 w-1/4">
                Package
              </th>
              {["Sedan / Coupe", "SUV / Crossover", "Truck / Large SUV"].map((col) => (
                <th key={col} className="py-4 px-4 font-mono text-[10px] tracking-[0.15em] uppercase text-charcoal-400 text-center">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.service}
                className={`border-b border-charcoal-100 last:border-0 ${
                  row.highlight ? "bg-charcoal-800" : i % 2 === 0 ? "bg-white" : "bg-cream/40"
                }`}
              >
                <td className={`py-4 px-5 font-display font-semibold text-base ${row.highlight ? "text-cream" : "text-charcoal-800"}`}>
                  {row.service}
                  {row.highlight && (
                    <span className="ml-2 text-[10px] font-mono tracking-widest uppercase bg-bronze text-white px-2 py-0.5 rounded-sm align-middle">
                      Best Value
                    </span>
                  )}
                </td>
                {[row.sedan, row.suv, row.truck].map((price, j) => (
                  <td key={j} className={`py-4 px-4 text-center font-display text-xl font-semibold ${row.highlight ? "text-bronze" : "text-bronze"}`}>
                    {price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-charcoal-400 text-xs">
          * Custom pricing available for heavily soiled vehicles. Call for a free quote.
        </p>
        <a
          href={SITE_CONFIG.phoneHref}
          className="text-bronze font-semibold text-sm hover:underline flex-shrink-0"
        >
          {SITE_CONFIG.phone}
        </a>
      </div>
    </AnimateOnScroll>
  );
}
