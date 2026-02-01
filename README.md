# Human Creative - Front-end 2026

[![Website](https://img.shields.io/badge/website-human--creative.co.uk-D2F865?style=flat-square)](https://human-creative.co.uk)
[![Status](https://img.shields.io/badge/status-development-orange?style=flat-square)]()

> A curated crew agency providing exceptional filmmaking talent while prioritizing freelancer welfare and sustainable working conditions.

## 📌 Current Status

**Development/Integration Phase** - These front-end pages are being integrated into a current development project. This is NOT yet deployed to the live human-creative.co.uk website.

## 📚 Documentation

This repository contains comprehensive documentation:

- **[README.md](README.md)** - This file - Quick overview and getting started
- **[HANDOFF.md](HANDOFF.md)** - Complete technical documentation, architecture, and maintenance guide  
- **[DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)** - Integration guide for development + future production deployment steps

## 🚀 Quick Start

### For Development Integration

```bash
# Clone into your development project
git clone https://github.com/SnotBoogie1987/HMN-Front-end-2026.git frontend

# Or add as submodule
git submodule add https://github.com/SnotBoogie1987/HMN-Front-end-2026.git frontend
```

See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) for detailed integration instructions.

### Viewing Locally

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

- **HTML5** - Semantic markup
- **TailwindCSS** (CDN) - Utility-first CSS framework
- **Vanilla JavaScript** - Minimal JS for configuration
- **Node.js** - Build scripts

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

### Current Sprint
- [ ] Integrate pages into development project
- [ ] Update image paths for project structure
- [ ] Test design system integration
- [ ] Review mobile responsiveness

### Next Steps
- [ ] Complete work page content
- [ ] Implement form functionality
- [ ] Decide on shop page implementation
- [ ] Optimize for production

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
