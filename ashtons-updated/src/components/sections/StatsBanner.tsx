const stats = [
  { value: "100%", label: "Mobile Service" },
  { value: "3", label: "Packages Available" },
  { value: "9+", label: "Areas Served" },
  { value: "Free", label: "Quotes" },
];

export default function StatsBanner() {
  return (
    <div className="bg-bronze py-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl lg:text-4xl font-semibold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm font-mono tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
