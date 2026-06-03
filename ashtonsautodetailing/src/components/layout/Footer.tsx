import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-cream/60 pt-16 pb-24 lg:pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm bg-bronze flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z" fill="white" fillOpacity="0.9" />
                  <path d="M8 12L10.5 14.5L16 9" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block font-display text-cream font-semibold text-base">Ashton&apos;s</span>
                <span className="block font-mono text-bronze text-[10px] tracking-[0.2em] uppercase">Auto Detailing</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Professional mobile car detailing in Duncan and the Cowichan Valley. We come to you.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-cream text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={SITE_CONFIG.phoneHref} className="hover:text-bronze transition-colors flex items-center gap-2">
                  <span className="text-bronze">📞</span>
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.emailHref} className="hover:text-bronze transition-colors flex items-center gap-2 break-all">
                  <span className="text-bronze">✉️</span>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-bronze">📍</span>
                Duncan, BC — Mobile Service
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display text-cream text-lg font-semibold mb-4">Service Areas</h3>
            <p className="text-sm leading-relaxed">
              {SITE_CONFIG.serviceAreas.join(" · ")}
            </p>
            <div className="mt-4">
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved. Duncan, BC.</p>
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bronze transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <span className="text-white/20">|</span>
            <a href={SITE_CONFIG.phoneHref} className="hover:text-bronze transition-colors">
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
