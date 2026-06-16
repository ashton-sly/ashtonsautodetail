# Ashton's Auto Detailing — Website

Professional mobile car detailing website for Cowichan Valley, BC.

## Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages (static HTML export)
- **Fonts**: Playfair Display (headings) + DM Sans (body) via Google Fonts

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Building for Production

```bash
npm run build
```

This generates a static `out/` folder ready for Cloudflare Pages.

---

## Deploying to Cloudflare Pages

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub repo
4. Set build command: `npm run build`
5. Set output directory: `out`
6. Deploy

When you purchase your domain, add it as a custom domain in Cloudflare Pages.

---

## Swapping the Domain

When you have your live domain, update **one file only**:

```ts
// src/lib/config.ts
domain: "https://ashtonsautodetailing.ca", // ← change this
```

Also update:
- `public/robots.txt` — update the Sitemap URL
- `public/sitemap.xml` — update the `<loc>` URL

---

## Customization Checklist

### 1. Replace Image Placeholders

| Location | What to add |
|---|---|
| Hero section (`HeroSection.tsx`) | Vehicle or lifestyle photo — full bleed background |
| About section (`AboutSection.tsx`) | Your personal/professional headshot |
| Gallery section (`GallerySection.tsx`) | Before/after detail photos (4 images) |
| `public/og-image.jpg` | 1200×630px social share image |
| `public/apple-touch-icon.png` | 180×180px app icon |
| `public/icons/icon-192.png` | PWA icon |
| `public/icons/icon-512.png` | PWA icon |

### 2. Add Your Logo

Replace the SVG logo placeholder in:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`

### 3. Instagram Handle

Update `instagramUrl` in `src/lib/config.ts` when your handle is confirmed.

### 4. Booking URL

Update `bookingUrl` in `src/lib/config.ts` when your Cal.com page is set up:
```ts
bookingUrl: "https://cal.com/ashtonsautodetailing",
```

### 5. Reviews

Once you have Google reviews, add them to `ReviewsSection.tsx`.

---

## SEO Keywords Targeted

- mobile car detailing Duncan
- car detailing Duncan BC
- auto detailing Duncan
- mobile detailing Cowichan Valley
- car detailing Cowichan Valley
- interior car detailing Duncan
- exterior car detailing Duncan
- mobile auto detailing near me
- car detailing near me
- mobile detailing near me

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx        ← SEO metadata, schema markup, fonts
│   └── page.tsx          ← Assembles all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx    ← Sticky header, mobile menu, sticky bottom bar
│   │   └── Footer.tsx    ← Footer with contact + areas
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── AreasSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── StatsBanner.tsx
│   └── ui/
│       └── AnimateOnScroll.tsx
├── lib/
│   └── config.ts         ← All business info — edit here first
└── styles/
    └── globals.css       ← Design tokens, utilities
```
