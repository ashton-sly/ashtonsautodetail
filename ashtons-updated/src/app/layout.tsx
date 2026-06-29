import type { Metadata } from "next";
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `Mobile Car Detailing Duncan BC | ${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Ashton's Auto Detailing offers professional mobile car detailing in Duncan, BC and the Cowichan Valley. We come to you — at home or work. Interior, exterior, and full detail packages starting at $79.",
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: "Ashton's Auto Detailing" }],
  creator: "Ashton's Auto Detailing",
  publisher: "Ashton's Auto Detailing",
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
    title: `Mobile Car Detailing Duncan BC | ${SITE_CONFIG.name}`,
    description:
      "Professional mobile car detailing in Duncan, BC and the Cowichan Valley. We come to you. Interior, exterior, and full detail packages starting at $79. Book online today.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.domain}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ashton's Auto Detailing — Mobile Car Detailing in Duncan, BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Mobile Car Detailing Duncan BC | ${SITE_CONFIG.name}`,
    description:
      "Professional mobile car detailing in Duncan, BC and the Cowichan Valley. We come to you — starting at $79.",
    images: [`${SITE_CONFIG.domain}/images/og-image.jpg`],
  },
  alternates: {
    canonical: "https://ashtonsautodetail.ca/",
  },
  category: "Automotive Services",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoDetailing",
      "@id": "https://ashtonsautodetail.ca/#business",
      name: "Ashton's Auto Detailing",
      alternateName: "Ashton's Auto Detail",
      description:
        "Professional mobile car detailing service in Duncan, BC and the Cowichan Valley. We come to your home or workplace — no drop-off required. Interior, exterior, and full detail packages.",
      url: "https://ashtonsautodetail.ca",
      telephone: "+12507091371",
      email: "ashtonsly1@gmail.com",
      image: "https://ashtonsautodetail.ca/images/hero-bg.jpg",
      logo: "https://ashtonsautodetail.ca/logo.png",
      priceRange: "$$",
      currenciesAccepted: "CAD",
      paymentAccepted: "Cash, Credit Card, E-Transfer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Duncan",
        addressRegion: "BC",
        addressCountry: "CA",
        addressCountryName: "Canada",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.7784,
        longitude: -123.7079,
      },
      areaServed: [
        "Duncan",
        "Mill Bay",
        "Cobble Hill",
        "Shawnigan Lake",
        "Chemainus",
        "Lake Cowichan",
        "Ladysmith",
        "Cowichan Bay",
        "Maple Bay",
        "Crofton",
        "Cowichan Valley",
      ].map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "British Columbia",
          containedInPlace: {
            "@type": "Country",
            name: "Canada",
          },
        },
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "5",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", "name": "June Rhodes" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Ashton takes that whole problem away. He came to me, did an amazing job, and the car looked brand new.",
          datePublished: "2026-06-28",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", "name": "Brin Slydell" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "He showed up on time, did the job professionally, and charged a fair price. My car looks how it did when I bought it.",
          datePublished: "2026-06-14",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", "name": "Tahlon Buttle" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Had my vehicle detailed by Ashton this afternoon and couldn't be happier with the results. The attention to detail was outstanding.",
          datePublished: "2026-06-23",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mobile Car Detailing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Car Detail",
              description:
                "Professional hand wash, deep wheel and rim cleaning, tire dressing with UV-protective coating, door jamb wipe down, paint protection sealant.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "79",
              priceCurrency: "CAD",
              minPrice: "79",
              maxPrice: "119",
              description: "Sedan from $79, SUV from $99, Truck from $119",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Interior Car Detail",
              description:
                "Full vacuum of seats, floors and trunk, UV-protective surface treatment, console and vent cleaning, leather and plastic protection, streak-free interior windows, light stain removal.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "119",
              priceCurrency: "CAD",
              minPrice: "119",
              maxPrice: "159",
              description: "Sedan from $119, SUV from $139, Truck from $159",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Car Detail",
              description:
                "Complete interior and exterior detailing package. Best value — includes everything in both the interior and exterior detail packages plus paint protection sealant.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "179",
              priceCurrency: "CAD",
              minPrice: "179",
              maxPrice: "239",
              description: "Sedan from $179, SUV from $209, Truck from $239",
            },
          },
        ],
      },
      sameAs: [
        "https://www.instagram.com/ashtons.autodetail/",
        "https://www.google.com/maps/place/Ashton%E2%80%99s+Auto+Detailing/@48.7783175,-123.7106779",
      ],
      founder: {
        "@type": "Person",
        name: "Ashton",
        jobTitle: "Founder & Lead Detailer",
        worksFor: {
          "@id": "https://ashtonsautodetail.ca/#business",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ashtonsautodetail.ca/#website",
      url: "https://ashtonsautodetail.ca",
      name: "Ashton's Auto Detailing",
      description:
        "Mobile car detailing in Duncan, BC and the Cowichan Valley.",
      publisher: {
        "@id": "https://ashtonsautodetail.ca/#business",
      },
      inLanguage: "en-CA",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does mobile car detailing cost in Duncan, BC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ashton's Auto Detailing prices start at $79 for an exterior detail, $119 for an interior detail, and $179 for a full detail on a sedan or coupe. SUVs and trucks are priced slightly higher. Call 250-709-1371 for a free quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need water and power for mobile detailing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we need access to a water hose and a power outlet at your location. Other than that, we bring all professional equipment and products with us. We come to your home or workplace anywhere in the Cowichan Valley.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a full detail take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full detail typically takes 2.5 to 4 hours depending on the vehicle size and condition. Interior-only or exterior-only details are usually 1.5 to 2.5 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve in the Cowichan Valley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Duncan, Mill Bay, Cobble Hill, Shawnigan Lake, Chemainus, Lake Cowichan, Ladysmith, Cowichan Bay, Maple Bay, Crofton, and the surrounding Cowichan Valley area. Not sure if we cover your area? Call 250-709-1371.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a car wash and a car detail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A car wash is a basic rinse and soap that removes surface dirt. A car detail is a thorough, professional cleaning of every surface — inside and out — using professional-grade products. Detailing includes paint protection sealant, UV-protective coatings, stain removal, and cleaning of tight spots that a regular wash never reaches.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer same-week appointments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — same-week appointments are often available. Book online at cal.com/ashtonsautodetail or call 250-709-1371 to check availability.",
      },
    },
  ],
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
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/markdown" href="/md/services.md" title="Services" />
        <link rel="alternate" type="text/markdown" href="/md/about.md" title="About" />
        <link rel="alternate" type="text/markdown" href="/md/areas.md" title="Service Areas" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
