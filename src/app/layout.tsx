import type { Metadata } from "next";
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.name} | Mobile Car Detailing Duncan BC`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Ashton's Auto Detail offers professional mobile car detailing in Duncan, BC and the Cowichan Valley. We come to you , at home or work. Interior, exterior, and full detail packages starting at $79.",
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: "Ashton's Auto Detail" }],
  creator: "Ashton's Auto Detail",
  publisher: "Ashton's Auto Detail",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_CONFIG.domain,
    title: `${SITE_CONFIG.name} | Mobile Car Detailing Duncan BC`,
    description:
      "Professional mobile car detailing in Duncan and Cowichan Valley. We come to you. Interior, exterior, and full detail packages. Book online today.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ashton's Auto Detail - Mobile Car Detailing Duncan BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Mobile Car Detailing Duncan BC`,
    description:
      "Professional mobile car detailing in Duncan and Cowichan Valley. We come to you.",
    images: [`${SITE_CONFIG.domain}/og-image.jpg`],
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  category: "Automotive Services",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE_CONFIG.domain}/#business`,
  name: SITE_CONFIG.name,
  description:
    "Professional mobile car detailing service in Duncan, BC and the Cowichan Valley. Interior, exterior, and full detail packages.",
  url: SITE_CONFIG.domain,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  image: `${SITE_CONFIG.domain}/og-image.jpg`,
  priceRange: "$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, E-Transfer",
  areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
    containedInPlace: {
      "@type": "State",
      name: "British Columbia",
      containedInPlace: {
        "@type": "Country",
        name: "Canada",
      },
    },
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Duncan",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE_CONFIG.location.lat,
    longitude: SITE_CONFIG.location.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Detailing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Detail",
          description: "Hand wash, wheel cleaning, tire cleaning, door jamb wipe down, exterior shine",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "79",
          priceCurrency: "CAD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Detail",
          description: "Vacuum, dash cleaning, console cleaning, door panels, windows, light stain removal",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "99",
          priceCurrency: "CAD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Detail",
          description: "Complete interior and exterior detailing package",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "149",
          priceCurrency: "CAD",
        },
      },
    ],
  },
  sameAs: [SITE_CONFIG.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Duncan, British Columbia" />
        <meta name="geo.position" content="48.7784;-123.7079" />
        <meta name="ICBM" content="48.7784, -123.7079" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
