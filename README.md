# Human Creative - Front-end 2026

[![Website](https://img.shields.io/badge/website-human--creative.co.uk-D2F865?style=flat-square)](https://human-creative.co.uk)
[![Status](https://img.shields.io/badge/status-development-orange?style=flat-square)]()

> A curated crew agency providing exceptional filmmaking talent while prioritizing freelancer welfare and sustainable working conditions.

## 📌 Current Status

**Development/Integration Phase** - These static HTML pages are being converted and integrated into a **Next.js + Supabase** project. This is NOT yet deployed to the live human-creative.co.uk website.

**Target Stack:**
- Next.js (React framework)
- Supabase (Backend - auth, database, storage)
- TailwindCSS (Styling)

## 📚 Documentation

This repository contains comprehensive documentation:

- **[README.md](README.md)** - This file - Quick overview and getting started
- **[HANDOFF.md](HANDOFF.md)** - Complete technical documentation + **Next.js Migration Guide**
- **[DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)** - **Next.js + Supabase integration guide** + future production deployment

## 🚀 Quick Start

### For Next.js Integration (Primary Use Case)

This static HTML site needs to be converted to Next.js components. See the comprehensive guide:

📖 **[Next.js Migration Guide in HANDOFF.md](HANDOFF.md#nextjs-migration-guide)**

**Quick overview:**
```bash
# 1. Set up Next.js project
npx create-next-app@latest human-creative --typescript --tailwind --app
cd human-creative

# 2. Install Supabase
npm install @supabase/supabase-js

# 3. Clone this repo for reference
git clone https://github.com/SnotBoogie1987/HMN-Front-end-2026.git reference-design

# 4. Follow the migration guide in HANDOFF.md
```

Key tasks:
- Convert `design_config.js` → `tailwind.config.js`
- Migrate `style.css` → `app/globals.css`
- Convert HTML pages → React/Next.js components
- Set up Supabase for data and images
- Use Next.js Image optimization

### For Static HTML Preview (Reference Only)

```bash
# Clone the repository
git clone https://github.com/SnotBoogie1987/HMN-Front-end-2026.git
cd HMN-Front-end-2026

# Start a local server
python -m http.server 8000

# Open in browser
# Visit: http://localhost:8000
```

### Before Deploying to Production (Future)

⚠️ **When ready for production:** See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)

Key tasks before production:
1. Fix image paths (replace local `file:///` paths)
2. Optimize images for web
3. Test on mobile devices
4. Add SEO meta tags
5. Complete work page content

## 🎨 Design System

**All styling is centralized in two files:**

- **`design_config.js`** - TailwindCSS configuration (colors, fonts, spacing)
- **`style.css`** - Custom CSS (animations, effects, component styles)

**Rules:**
- ✅ Edit these files for style changes
- ❌ Never add inline styles in HTML
- ❌ Never create one-off CSS classes

## 🏗️ Site Structure

```
├── index.html          # Homepage
├── manifesto.html      # Company manifesto
├── work.html           # Portfolio grid
├── impact.html         # Partnerships & impact
├── enquire.html        # Contact page
├── shop.html           # Shop (placeholder)
├── design_config.js    # ⭐ Tailwind config
├── style.css           # ⭐ Custom styles
├── assets/             # Images and logos
└── work/               # Individual project pages
```

## 🛠️ Tech Stack

### Current (Static HTML)
- HTML5 - Semantic markup
- TailwindCSS (CDN) - Utility-first CSS
- Vanilla JavaScript - Minimal configuration

### Target (Next.js Project)
- **Next.js 14+** - React framework
- **Supabase** - Backend (auth, database, storage)
- **TailwindCSS** - Utility-first CSS (locally installed)
- **TypeScript** - Type safety (recommended)
- **next/font** - Optimized font loading

## 🎯 Key Features

- ✨ Animated marquee with partner acknowledgments
- 🎨 Acid lime (#D2F865) brand color
- 📱 Responsive design (mobile optimization needed)
- 🌗 Dark/light theme support
- 🖼️ Portfolio grid with 12 projects
- 🤝 B-Corp and Living Wage certifications

## 📝 Pages

| Page | Description | Status |
|------|-------------|--------|
| **index.html** | Homepage with hero and branding | ✅ Complete |
| **manifesto.html** | Company mission and history | ✅ Complete |
| **work.html** | Portfolio grid | ✅ Complete |
| **impact.html** | Partnerships and impact | ✅ Complete |
| **enquire.html** | Contact/enquiry | ⚠️ Review needed |
| **shop.html** | E-commerce | 🚧 Placeholder |
| **work/*.html** | Individual projects | 🚧 Placeholder |

## 🔧 Development

### Generate Work Pages

```bash
node generate_work_pages.js
```

This creates individual portfolio pages from the project list.

### Adding a New Project

1. Add project name to `projects` array in `generate_work_pages.js`
2. Run the script to generate the page
3. Add images to `assets/work/`
4. Update the grid in `work.html`

### Modifying Styles

**Colors:**
```javascript
// design_config.js
colors: {
    primary: "#D2F865",  // Change brand color here
}
```

**Animations:**
```css
/* style.css */
@keyframes marquee {
    /* Modify animation here */
}
```

## ⚠️ Known Issues

### For Development
- 🟡 **Image paths** - Many use local `file:///` paths, need updating for your project
- 🟡 **Mobile navigation** - Fixed widths, needs responsive design
- 🟡 **Work pages** - Currently placeholder content
- 🟡 **Forms** - Need backend integration

### Before Future Production
- 🔴 **Image optimization** - Compress all images
- 🔴 **SEO** - Add meta tags, sitemap, robots.txt
- 🔴 **Email verification** - Confirm studio@human-creative.co.uk works

See [HANDOFF.md](HANDOFF.md#current-issues--known-limitations) for complete list.

## 🔧 Development Tasks

### Phase 1: Next.js Setup ✅
- [ ] Create Next.js project
- [ ] Install dependencies (Supabase, Tailwind plugins)
- [ ] Convert design_config.js → tailwind.config.js
- [ ] Migrate style.css → globals.css
- [ ] Set up Google Fonts with next/font

### Phase 2: Supabase Setup
- [ ] Create Supabase project
- [ ] Design database schema (work_projects, enquiries)
- [ ] Set up Row Level Security policies
- [ ] Create storage bucket for images
- [ ] Upload initial assets

### Phase 3: Component Migration
- [ ] Create shared layout and components
- [ ] Convert index.html → app/page.tsx
- [ ] Convert manifesto.html → app/manifesto/page.tsx
- [ ] Convert work.html → app/work/page.tsx (with Supabase data)
- [ ] Convert impact.html → app/impact/page.tsx
- [ ] Convert enquire.html → app/enquire/page.tsx (with form)
- [ ] Implement dynamic work detail pages

### Phase 4: Testing & Optimization
- [ ] Test all pages
- [ ] Optimize images with Next.js Image
- [ ] Test mobile responsiveness
- [ ] Implement error handling
- [ ] Add loading states

## 📖 Documentation Highlights

### Next.js Specific Guides
- **Component Structure** - Recommended folder organization
- **Supabase Integration** - Database schema and client setup
- **Dynamic Routing** - Work project pages with [slug]
- **Form Handling** - Enquiry form with Supabase
- **Image Optimization** - Using Next.js Image component
- **Font Loading** - next/font setup for Google Fonts

See [HANDOFF.md](HANDOFF.md#nextjs-migration-guide) for complete details.

## 🚀 Future Production Deployment

**Target:** human-creative.co.uk

**Process:**
1. Read [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)
2. Fix critical issues (image paths)
3. Test locally and in staging
4. Backup current site
5. Deploy to production
6. Post-deployment testing

## 📦 Portfolio Projects

Current work showcased:
- Aston Martin
- Under Armour
- BBC Stories
- Jaguar TCS
- Alain FC
- Tough Mudder
- Nike Wellfest
- Azimuth
- Lauryn Hill
- Budget Car Rental
- MyProtein
- Vivobarefoot

## 🤝 Partnerships

Featured partners include:
- Musicbed
- Peli Products
- BetterHelp
- Calmzone
- The Gym Group
- PolicyBee
- And more...

## 📧 Contact

- **Email:** studio@human-creative.co.uk
- **Website:** https://human-creative.co.uk

## 📄 License

All rights reserved - Human Creative

---

**For detailed documentation, see [HANDOFF.md](HANDOFF.md)**  
**For deployment instructions, see [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)**
