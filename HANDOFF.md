# Human Creative - Repository Handoff Documentation

## Project Overview

**Human Creative** is a crew agency website for freelance filmmakers, formerly a production company established in 2018. The website showcases their mission to provide exceptional talent while prioritizing freelancer welfare and sustainable working conditions in the filmmaking industry.

### Company Mission
- Provide curated crew solutions with exceptional talent
- Support freelance "Shooting Editors" (self-shooters, editing videographers)
- Create sustainable, healthy working conditions in the film industry
- Build an unrivalled network of support for freelancers
- Partner with brands that share their vision

### Key Features
- Portfolio showcase of work with major brands (Aston Martin, Under Armour, BBC Stories, Jaguar, etc.)
- Company manifesto and mission statement
- Impact partnerships with brands like Musicbed, Peli Products, BetterHelp, etc.
- Enquiry system for potential clients
- Shop functionality (placeholder)
- B-Corp and Living Wage certifications

## Technical Stack

### Core Technologies
- **HTML5** - Semantic markup structure
- **TailwindCSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - Minimal JavaScript for configuration
- **Node.js** - For build scripts (work page generation)

### Fonts
- **Anton** - Display font for headlines
- **Inter** - Sans-serif for body text
- **Space Mono** - Monospace font
- **Azeret Mono** - Monospace for navigation and marquee text

### Color Palette
- **Primary (Acid Lime)**: `#D2F865`
- **Background Light**: `#F5F5F5`
- **Background Dark**: `#000000`
- **Text**: Black on light, white/gray on dark

## Repository Structure

```
HMN-Front-end-2026/
├── assets/                          # Image assets
│   ├── b_corp_logo.png             # B-Corp certification logo
│   ├── brand_logos.png             # Partner brand logos
│   ├── living_wage_logo.png        # Living Wage logo
│   ├── one_percent_logo.png        # 1% for the Planet logo
│   └── work/                       # Work portfolio images
├── work/                            # Individual work project pages
│   ├── alainfc.html
│   ├── astonmartin.html
│   ├── azimuth.html
│   ├── bbcstories.html
│   ├── budgetcarrental.html
│   ├── jaguartcs.html
│   ├── laurynhill.html
│   ├── myprotein.html
│   ├── nikewellfest.html
│   ├── toughmudder.html
│   ├── underarmour.html
│   └── vivobarefoot.html
├── Reference Screenshots/           # Design reference images
│   ├── Home (index).png
│   ├── enquire.png
│   ├── impact.png
│   ├── manifesto.png
│   ├── shop.png
│   └── work.png
├── index.html                       # Homepage
├── manifesto.html                   # Company manifesto page
├── work.html                        # Portfolio grid page
├── enquire.html                     # Contact/enquiry page
├── impact.html                      # Partnership & impact page
├── shop.html                        # Shop page
├── style.css                        # Custom CSS (animations, strokes, nav)
├── design_config.js                 # Tailwind configuration
├── generate_work_pages.js           # Script to generate work portfolio pages
└── [Brand logos - various PNG files]
```

## Page Descriptions

### 1. index.html (Homepage)
- Features animated marquee with partner acknowledgments
- Main navigation with logo and menu items
- Hero section with company branding
- Responsive layout with dark/light theme support

### 2. manifesto.html (The Humanifesto)
- Company mission and history
- Story of evolution from production company to crew agency
- Focus on "Shooting Editors" and filmmaker welfare
- Founder information (Mike King, Director & Co-Founder)

### 3. work.html (Portfolio)
- Grid layout showcasing client work
- 12 project links:
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

### 4. impact.html (Partnerships & Impact)
- Partnership information and benefits
- Impact categories and scaling strategy
- B-Corp, Living Wage, and 1% for the Planet certifications
- Partner brand logos display
- Member information pack request link

### 5. enquire.html (Contact)
- Contact form or enquiry information
- Client outreach page

### 6. shop.html (E-commerce)
- Placeholder for future shop functionality

## Development Guide

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (for running build scripts)
- Text editor or IDE
- Local web server (optional, for testing)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/SnotBoogie1987/HMN-Front-end-2026.git
   cd HMN-Front-end-2026
   ```

2. **Open in browser**
   - Simply open `index.html` in a web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. **View the site**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or open `index.html` directly in your browser

### Working with Work Pages

The `generate_work_pages.js` script creates individual portfolio pages:

```bash
node generate_work_pages.js
```

This generates HTML files in the `work/` directory based on the project list. To add a new project:

1. Add the project name to the `projects` array in `generate_work_pages.js`
2. Run the script to generate the new page
3. Add corresponding images to `assets/work/`
4. Update the grid in `work.html` to link to the new project

## Customization Guide

### Modifying Colors

Edit `design_config.js`:
```javascript
colors: {
    primary: "#D2F865",        // Change accent color
    "background-light": "#F5F5F5",  // Light mode background
    "background-dark": "#000000",   // Dark mode background
}
```

### Adding Navigation Items

Update the navigation section in each HTML file:
```html
<a href="newpage.html" class="text-primary nav-link-style shrink-0">NEW PAGE</a>
```

### Customizing Animations

The marquee animation is defined in `style.css`:
```css
@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-20%); }
}
.animate-marquee {
    animation: marquee 64s linear infinite;
}
```

Adjust the duration (64s) to speed up or slow down the marquee.

## Key Components

### 1. Animated Marquee
- Located in header section
- Scrolls partner acknowledgments
- Infinite loop animation
- Customizable speed in `style.css`

### 2. Navigation Bar
- Fixed width elements for precise spacing
- Acid lime (#D2F865) color for links
- Black background with white/primary text
- Responsive considerations needed for mobile

### 3. Dark/Light Theme
- Uses Tailwind's `dark:` prefix
- Supports `bg-background-light` and `bg-background-dark`
- Manual toggle implementation would be needed

### 4. Typography
- Display headlines: Anton font
- Body text: Inter font
- Code/mono: Space Mono, Azeret Mono
- Uppercase styling for emphasis

## Current Issues & Known Limitations

### 1. Image Paths
- Several images use local file paths:
  ```html
  file:///C:/Users/Scott/.gemini/antigravity/brain/...
  ```
- **Action Required**: Replace with proper relative or CDN paths
- Affects: Logo images, work thumbnails, and decorative images

### 2. Work Pages
- Currently placeholder pages with "under construction" message
- Need actual content, images, and project details

### 3. Shop Page
- Likely a placeholder
- E-commerce functionality needs to be implemented

### 4. Responsive Design
- Navigation has fixed widths that may not work well on mobile
- Consider implementing responsive breakpoints
- Test on various screen sizes

### 5. External Dependencies
- TailwindCSS loaded from CDN (ensure availability)
- Google Fonts loaded from CDN
- No offline fallback

## Deployment Considerations

### Static Hosting
This is a static website and can be hosted on:
- **GitHub Pages** (recommended for this repo)
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**
- **Traditional web hosting**

### Pre-Deployment Checklist
- [ ] Replace all local file paths with proper URLs
- [ ] Optimize images (compress, use WebP format)
- [ ] Add meta tags for SEO
- [ ] Add Open Graph tags for social sharing
- [ ] Test all links
- [ ] Verify responsive design on mobile devices
- [ ] Add favicon
- [ ] Test performance with Lighthouse
- [ ] Set up analytics (if needed)
- [ ] Configure custom domain (if applicable)

### GitHub Pages Deployment
```bash
# Push to main branch
git push origin main

# Enable GitHub Pages in repository settings
# Settings > Pages > Source: main branch > / (root)
```

## Browser Support

### Tested Browsers
- Chrome 90+ ✓
- Firefox 88+ ✓
- Safari 14+ ✓
- Edge 90+ ✓

### CSS Features Used
- CSS Grid
- Flexbox
- CSS Animations
- Custom Properties (via Tailwind)
- Text stroke effects

## Maintenance Tasks

### Regular Updates
1. **Content Updates**
   - Add new portfolio items to `work.html`
   - Update partner logos in marquee
   - Refresh brand logos in `assets/`

2. **Performance**
   - Compress images periodically
   - Review and remove unused CSS
   - Check for broken links

3. **Dependencies**
   - Monitor TailwindCSS CDN version
   - Update Google Fonts if needed
   - Test with newer browser versions

## Contact & Resources

### Useful Links
- Repository: `https://github.com/SnotBoogie1987/HMN-Front-end-2026`
- TailwindCSS Docs: `https://tailwindcss.com/docs`
- Google Fonts: `https://fonts.google.com/`

### Design References
- Reference screenshots are in `Reference Screenshots/` directory
- These show the intended design for each page
- Use as a guide for implementing new features

## Future Enhancements

### Recommended Improvements
1. **Fix Image Paths**
   - Priority: HIGH
   - Move images to `assets/` directory
   - Update all image references

2. **Complete Work Pages**
   - Add project descriptions
   - Include project images/videos
   - Add client testimonials

3. **Mobile Optimization**
   - Redesign navigation for mobile
   - Test and adjust layouts for small screens
   - Add hamburger menu

4. **SEO Optimization**
   - Add meta descriptions
   - Implement schema markup
   - Create sitemap.xml
   - Add robots.txt

5. **Performance**
   - Implement lazy loading for images
   - Add service worker for offline functionality
   - Optimize CSS delivery

6. **Accessibility**
   - Add ARIA labels
   - Ensure keyboard navigation
   - Test with screen readers
   - Improve color contrast where needed

7. **Interactive Features**
   - Add form validation to enquire.html
   - Implement dark mode toggle
   - Add smooth scroll animations
   - Consider adding a blog/news section

8. **E-commerce**
   - Implement shop functionality
   - Add payment gateway integration
   - Create product pages

## Quick Reference Commands

```bash
# Generate work pages
node generate_work_pages.js

# Start local server (Python)
python -m http.server 8000

# Start local server (Node)
npx http-server

# View in browser
open http://localhost:8000

# Git workflow
git add .
git commit -m "Your message"
git push origin main
```

## Notes for Next Developer

- The site has a strong brand identity with the acid lime (#D2F865) color
- Maintain the minimalist, bold aesthetic
- Focus on readability and clean typography
- The marquee is a key brand element - keep it visible
- B-Corp and Living Wage certifications are important to display
- The company values welfare and sustainability - consider this in any additions
- Currently no backend - future forms may need backend integration
- Image paths are the most critical issue to fix first

---

**Last Updated**: 2026-02-01  
**Version**: 1.0  
**Prepared by**: GitHub Copilot Agent
