"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px] gap-4">

            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Ashton's Auto Detail - Home"
            >
              <Image
                src="/logo.png"
                alt="Ashton's Auto Detail logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
              <div className="leading-tight">
                <span className="block font-display text-cream font-semibold text-base tracking-wide">
                  Ashton&apos;s
                </span>
                <span className="block font-mono text-bronze text-[10px] tracking-[0.2em] uppercase">
                  Auto Detail
                </span>
              </div>
            </a>

            {/* Desktop Nav + star rating pill */}
            <nav className="hidden lg:flex items-center gap-5 flex-1 justify-center" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-cream/70 hover:text-bronze text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/blog/"
                className="text-cream/70 hover:text-bronze text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap"
              >
                Blog
              </Link>

              {/* Star rating pill — sits inline with nav */}
              <a
                href="#reviews"
                onClick={(e) => { e.preventDefault(); handleNavClick("#reviews"); }}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 hover:border-bronze/40 px-3 py-1 rounded-full transition-all duration-200 group"
                aria-label="5.0 stars on Google"
              >
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#b8935a" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-cream/80 group-hover:text-bronze">5.0</span>
              </a>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2 text-cream border border-cream/20 hover:border-bronze hover:text-bronze px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-sm whitespace-nowrap"
                aria-label="Call Ashton's Auto Detail"
              >
                <PhoneIcon />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="btn-primary text-sm px-5 py-2 whitespace-nowrap"
                aria-label="Call for a free quote"
              >
                Call Now
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 text-cream"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] border-t border-white/10" : "max-h-0"
          }`}
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <div className="px-4 pb-6 pt-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-cream/80 hover:text-bronze text-base py-2.5 border-b border-white/5 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/blog/"
              className="text-cream/80 hover:text-bronze text-base py-2.5 border-b border-white/5 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            {/* Star rating in mobile menu */}
            <div className="flex items-center gap-1.5 py-2.5 border-b border-white/5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#b8935a" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="text-xs text-cream/60 ml-1">5.0 on Google</span>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex-1 flex items-center justify-center gap-2 border border-cream/20 text-cream py-3 text-sm font-semibold rounded-sm"
              >
                <PhoneIcon />
                Call Now
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex-1 btn-primary text-sm py-3"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/10 shadow-2xl">
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 text-cream py-4 text-sm font-semibold"
          style={{ backgroundColor: "#1a1a1a" }}
          aria-label="Call Now"
        >
          <PhoneIcon />
          Call Now
        </a>
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 bg-bronze text-white py-4 text-sm font-semibold"
          aria-label="Call for a free quote"
        >
          <CalendarIcon />
          Free Quote
        </a>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.45 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
