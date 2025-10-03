# Lokakṣema 2026 — Website

Enterprise-grade Next.js App Router site for the **Global AI Well-being Summit**.
Design language inspired by premium conference sites, with **video hero**, **image-on-scroll background**, and clean information architecture.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS**
- **Framer Motion** (optional, used sparingly)
- **Zod** for form validation helpers

## Getting Started

```bash
# 1) Install deps
npm i

# 2) Add env vars
cp .env.example .env.local
# Edit NEXT_PUBLIC_SITE_URL and any provider keys

# 3) Dev
npm run dev

lokaksema/
├─ app/
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ page.tsx                         # HOME (video hero + image after scroll)
│  ├─ about/
│  │  └─ page.tsx
│  ├─ summit/
│  │  ├─ page.tsx                      # Summit Program overview
│  │  └─ agenda/
│  │     └─ page.tsx                   #    Full    agenda (optional)
│  ├─ hackathon/
│  │  └─ page.tsx
│  ├─ sponsorship/
│  │  └─ page.tsx
│  ├─ legacy-impact/
│  │  └─ page.tsx
│  ├─ contact/
│  │  └─ page.tsx
│  ├─ sponsors/
│  │  ├─ page.tsx                      # Sponsors directory
│  │  └─ [id]/
│  │     └─ page.tsx                   # Sponsor detail (optional)
│  ├─ blog/
│  │  ├─ page.tsx                      # Blog index
│  │  └─ [slug]/
│  │     └─ page.tsx                   # Blog post
│  ├─ register/
│  │  └─ page.tsx                      # CTA landing for "Register for Summit"
│  ├─ api/
│  │  ├─ newsletter/route.ts           # POST subscribe
│  │  ├─ contact/route.ts              # POST contact form
│  │  └─ sponsors/route.ts             # (optional) GET/POST sponsors
│  ├─ sitemap.ts
│  └─ robots.txt
│
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx                    # SuperAI-style nav (logo, sections, CTA)
│  │  └─ Footer.tsx                    # SuperAI-style footer (footnote)
│  ├─ background/
│  │  └─ MediaBackground.tsx           # Handles video-on-landing + image-on-scroll
│  ├─ hero/
│  │  └─ CyberHero.tsx                 # Headline/subheadline/CTAs
│  ├─ sections/
│  │  ├─ About.tsx
│  │  ├─ Why.tsx
│  │  ├─ ByNumbers.tsx
│  │  ├─ FeaturedTracks.tsx
│  │  └─ CTAJoin.tsx
│  ├─ cards/
│  │  ├─ StatCard.tsx
│  │  ├─ SponsorCard.tsx
│  │  └─ BlogCard.tsx
│  ├─ forms/
│  │  ├─ NewsletterForm.tsx
│  │  ├─ ContactForm.tsx
│  │  └─ SponsorInquiryForm.tsx
│  └─ ui/
│     ├─ Button.tsx
│     ├─ Container.tsx
│     ├─ SectionHeader.tsx
│     └─ Badge.tsx
│
├─ content/
│  ├─ blog/                            # MDX content (optional)
│  │  ├─ welcome.mdx
│  │  └─ responsible-ai-report.mdx
│  └─ data/
│     ├─ sponsors.json
│     └─ stats.json
│
├─ lib/
│  ├─ seo.ts                           # Default/route-specific metadata
│  ├─ constants.ts                     # Copy, nav items, routes, socials
│  ├─ utils.ts
│  └─ validations.ts                   # zod schemas for forms
│
├─ public/
│  ├─ media/
│  │  ├─ hero.mp4                      # Landing background video
│  │  └─ hero-fallback.jpg             # Image (scroll / fallback)
│  ├─ images/
│  │  ├─ logo-light.svg
│  │  ├─ logo-dark.svg
│  │  ├─ og-cover.jpg
│  │  └─ sponsors/
│  │     ├─ placeholder-1.svg
│  │     └─ ...
│  └─ og/
│     └─ default-og.png
│
├─ styles/
│  └─ prose.css                        # Optional typography tweaks
│
├─ middleware.ts                       # Security headers, redirects, etc. (optional)
├─ next.config.mjs
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ package.json
├─ .env.example                        # API keys (newsletter, email)
└─ README.md
