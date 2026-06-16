"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config";

const navLinks = [
  { label: "Home",          href: "#home" },
  { label: "Services",      href: "#services" },
  { label: "Pricing",       href: "#services" },
  { label: "Service Areas", href: "#areas" },
  { label: "About",         href: "#about" },
  { label: "Contact",       href: "#contact" },
];

const sectionIds = ["home", "services", "areas", "about", "contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [underline, setUnderline] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
          // Pick the section with the highest intersection ratio
          let best = "home";
          let bestRatio = 0;
          visible.forEach((ratio, sId) => {
            if (ratio >= bestRatio) { bestRatio = ratio; best = sId; }
          });
          setActiveSection(best);
        },
        { threshold: [0, 0.1, 0.3, 0.5], rootMargin: "-72px 0px 0px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Position underline under active nav link
  const updateUnderline = useCallback(() => {
    if (!navRef.current) return;
    // Find the first link whose href matches active section
    const matchingHref = `#${activeSection}`;
    let target: HTMLAnchorElement | null = null;
    linkRefs.current.forEach((el, href) => {
      if (href === matchingHref && !target) target = el;
    });
    if (!target) {
      setUnderline(null);
      return;
    }
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = (target as HTMLAnchorElement).getBoundingClientRect();
    setUnderline({ left: linkRect.left - navRect.left, width: linkRect.width });
  }, [activeSection]);

  useEffect(() => { updateUnderline(); }, [updateUnderline]);

  useEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 group"
              aria-label="Ashton's Auto Detail - Home"
            >
              <Image
                src="/logo.png"
                alt="Ashton's Auto Detail logo"
                width={48}
                height={48}
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

            {/* Desktop Nav */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-6 relative" aria-label="Main navigation">
              {/* Sliding underline */}
              {underline && (
                <span
                  className="nav-underline"
                  style={{ left: underline.left, width: underline.width, opacity: 1 }}
                />
              )}
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    ref={(el) => {
                      if (el) linkRefs.current.set(link.href, el);
                      else linkRefs.current.delete(link.href);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 pb-1 ${
                      isActive ? "text-bronze" : "text-cream/70 hover:text-bronze"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2 text-cream border border-cream/20 hover:border-bronze hover:text-bronze px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-sm"
                aria-label="Call Ashton's Auto Detail"
              >
                <PhoneIcon />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2"
                aria-label="Book a detailing appointment"
              >
                Book Now
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
                key={link.href}
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
            <div className="flex gap-3 mt-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex-1 flex items-center justify-center gap-2 border border-cream/20 text-cream py-3 text-sm font-semibold rounded-sm"
              >
                <PhoneIcon />
                Call Now
              </a>
              <a
                href={SITE_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-primary text-sm py-3"
              >
                Book Now
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
          href={SITE_CONFIG.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="book-pulse flex-1 flex items-center justify-center gap-2 bg-bronze text-white py-4 text-sm font-semibold"
          aria-label="Book Online"
        >
          <CalendarIcon />
          Book Online
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
