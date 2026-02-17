# Quick Start Guide - Noventra Technologies Website

## What's Been Built

A stunning, highly professional, and fully animated multi-page website for Noventra Technologies with:

✨ **6 Complete Pages**
- Home/Landing Page (Hero, Services, Features, About, Contact)
- Solutions Showcase (Expandable service details)
- About Company (Story, Values, Team, Stats)
- Contact & Inquiries (Contact form, location, hours)
- Portfolio/Case Studies (6 real-world examples)
- Pricing Plans (3 tiers with features)

🎨 **Professional Design**
- Premium color palette (Deep Teal + Vibrant Cyan)
- Rich minimalism aesthetic
- Smooth animations and transitions
- Fully responsive mobile design
- Professional logo designed

🚀 **Modern Technology Stack**
- Next.js 16 (App Router)
- React with TypeScript
- Tailwind CSS
- shadcn/ui Components
- Vercel Analytics

## How to Use

### View the Website
1. Click the "Preview" button in v0 to see the live website
2. The site is fully functional with:
   - Smooth navigation between pages
   - Animated sections
   - Interactive forms
   - Mobile menu

### Customize for Your Use

#### Change Company Name/Branding
1. Find all instances of "Noventra" and replace
2. Update the logo in `/public/logo.jpg`
3. Edit metadata in `/app/layout.tsx`

#### Update Services
1. Edit `/app/page.tsx` - the `services` array
2. Change descriptions, icons, and details
3. Update `/app/solutions/page.tsx` for detailed descriptions

#### Modify Contact Information
1. Update phone: `+91 8100012764` → your number
2. Update address in multiple files (search for "Panipat")
3. Update GSTIN: `06AALCN1852F1ZI` → your code
4. Update email: search and replace throughout

#### Customize Colors
Edit `/app/globals.css`:
```css
/* Change Primary Color (currently deep teal) */
--primary: oklch(0.35 0.15 270); /* Edit these numbers */

/* Change Accent Color (currently vibrant cyan) */
--accent: oklch(0.65 0.18 200); /* Edit these numbers */
```

## File Structure

```
/app                 → Page routes
  ├── page.tsx      → Home page
  ├── layout.tsx    → Root layout (update metadata here)
  ├── globals.css   → Global styles (update colors here)
  ├── solutions/    → Solutions page
  ├── about/        → About page
  ├── contact/      → Contact page
  ├── portfolio/    → Case studies
  └── pricing/      → Pricing page

/components          → Reusable components
  ├── header.tsx    → Navigation
  ├── footer.tsx    → Footer
  └── scroll-to-top.tsx → Back-to-top button

/public              → Static assets
  └── logo.jpg      → Your logo (currently Noventra)
```

## Key Features to Customize

### 1. Homepage Services
- File: `/app/page.tsx`
- Section: `const services = [...]`
- Add/remove/edit the 10 services

### 2. Portfolio/Case Studies
- File: `/app/portfolio/page.tsx`
- Section: `const caseStudies = [...]`
- Replace with your own projects

### 3. Pricing Plans
- File: `/app/pricing/page.tsx`
- Section: `const pricingPlans = [...]`
- Customize tiers, features, prices

### 4. Team/About Info
- File: `/app/about/page.tsx`
- Update company story, values, team info

### 5. Contact Details
- Files: `/app/contact/page.tsx`, `/app/about/page.tsx`, `/app/page.tsx`
- Search for phone, address, GSTIN
- Update with your information

## Deployment

### Option 1: Vercel (Recommended)
1. Connect GitHub repository
2. Select this project
3. Click "Deploy"
4. Your site goes live automatically

### Option 2: Download & Deploy
1. Download the ZIP file from v0
2. Use `shadcn-cli` to set up locally
3. Deploy to your hosting platform

### Option 3: Use Locally
1. Download ZIP
2. Run: `pnpm install`
3. Run: `pnpm dev`
4. Open: `http://localhost:3000`

## Animation Features

All pages include:
- ✅ Fade-in animations on load
- ✅ Slide-in effects on scroll
- ✅ Smooth hover transitions
- ✅ Staggered grid animations
- ✅ Scroll-to-top button
- ✅ Smooth page transitions

No need to modify - they're built-in!

## SEO Setup

Update metadata in `/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Company Name | Your Services',
  description: 'Your description here',
  keywords: 'your, keywords, here',
  // ... more metadata
}
```

## Contact Form

The contact form is ready to use. To make it functional:
1. Add a backend API endpoint
2. Update the `handleSubmit` function in `/app/contact/page.tsx`
3. Connect to your email service (SendGrid, Mailgun, etc.)

Currently it logs to console for testing.

## Mobile Responsive

The site is fully responsive and includes:
- ✅ Mobile hamburger menu
- ✅ Touch-friendly buttons
- ✅ Optimized typography
- ✅ Responsive grid layouts
- ✅ Mobile-optimized images

## Common Customizations

### Change Button Colors
Find `.bg-primary` or `.bg-accent` and update to your colors

### Update Navigation Links
Edit `/components/header.tsx` - the `navLinks` array

### Modify Sections
Each page is modular. Find the section you want to change and edit it directly.

### Add New Pages
1. Create new folder in `/app/your-page/`
2. Add `page.tsx` file
3. Import Header and Footer components
4. Update navigation links

## Need Help?

Refer to:
- `/WEBSITE_STRUCTURE.md` - Complete documentation
- Component comments in code
- Next.js docs: nextjs.org
- Tailwind CSS: tailwindcss.com
- shadcn/ui: ui.shadcn.com

## Features Included

✅ 10 Services/Products listed
✅ 6 Case studies with testimonials
✅ Contact form with validation
✅ Pricing comparison
✅ Company information (GSTIN, Address, Phone)
✅ Mobile-responsive design
✅ Professional animations
✅ SEO optimized
✅ Accessibility features
✅ Fast loading performance

---

**Your professional website is ready to customize and launch!**
