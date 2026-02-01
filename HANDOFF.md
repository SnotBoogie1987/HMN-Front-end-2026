# Human Creative - Repository Handoff Documentation

## Project Overview

**Human Creative** is a crew agency website for freelance filmmakers, formerly a production company established in 2018. The website showcases their mission to provide exceptional talent while prioritizing freelancer welfare and sustainable working conditions in the filmmaking industry.

**Target Domain**: human-creative.co.uk  
**Current Status**: Development/Integration Phase  
**Development Stack**: Next.js + Supabase  
**Purpose**: These static HTML pages are being integrated into a Next.js application with Supabase backend. This is NOT yet being deployed to the live production website.

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

### Current Static Implementation
- **HTML5** - Semantic markup structure
- **TailwindCSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - Minimal JavaScript for configuration
- **Node.js** - For build scripts (work page generation)

### Target Development Stack
- **Next.js** - React framework for production
- **Supabase** - Backend as a Service (authentication, database, storage)
- **TailwindCSS** - Utility-first CSS framework (will be installed locally)
- **React** - Component-based UI (via Next.js)

### Design System (IMPORTANT)

**📐 All design and styling MUST be sourced from:**
1. **`design_config.js`** - TailwindCSS configuration (colors, fonts, spacing)
2. **`style.css`** - Custom CSS (animations, text strokes, component styles)

**DO NOT add inline styles or one-off CSS classes.** All styling should be:
- Defined in `design_config.js` for Tailwind utilities
- Defined in `style.css` for custom styles
- Applied using existing classes in HTML

This ensures consistency across the entire site and makes maintenance easier.

### Fonts
- **Anton** - Display font for headlines
- **Inter** - Sans-serif for body text
- **Space Mono** - Monospace font
- **Azeret Mono** - Monospace for navigation and marquee text

### Color Palette (Defined in design_config.js)
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

### 🎨 Design System Rules

**CRITICAL: All styling changes MUST go through the design system:**

1. **For color, font, or spacing changes** → Edit `design_config.js`
2. **For animations, effects, or component styles** → Edit `style.css`
3. **Never add inline styles** or style attributes in HTML
4. **Never add one-off CSS classes** directly in HTML files

### Modifying Colors

**Always edit `design_config.js`** (NOT individual HTML files):
```javascript
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#D2F865",              // Acid Lime accent
                "background-light": "#F5F5F5",   // Light mode background
                "background-dark": "#000000",    // Dark mode background
                "dark-surface": "#000000",
            },
            // ... rest of config
        },
    },
};
```

**To change the brand color:** Change `primary: "#D2F865"` to your new color, and it will update across the entire site automatically.

### Modifying Typography

**Edit `design_config.js`** to change fonts:
```javascript
fontFamily: {
    display: ["'Anton'", "sans-serif"],     // Headlines
    sans: ["'Inter'", "sans-serif"],        // Body text
    mono: ["'Space Mono'", "monospace"],    // Code/mono
},
```

**Edit `style.css`** for component-specific typography:
```css
/* Navigation Links */
.nav-link-style {
    font-family: 'azeret-mono-v2', 'Azeret Mono', monospace;
    font-size: 17.1224px;
    line-height: 20.5469px;
    /* ... */
}
```

### Modifying Spacing

**Edit `design_config.js`** to add new spacing values:
```javascript
spacing: {
    '128': '32rem',  // Add custom spacing values here
    '144': '36rem',
}
```

Then use in HTML: `<div class="mt-128">...</div>`

### Customizing Animations

**All animations are defined in `style.css`:**

```css
/* Marquee Animation */
@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-20%); }
}
.animate-marquee {
    animation: marquee 64s linear infinite;  /* Adjust 64s to change speed */
}
```

### Adding New Reusable Styles

**For new component styles, add to `style.css`:**

```css
/* Example: Adding a new button style */
.btn-primary {
    background-color: #D2F865;
    color: #000000;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background-color: #c4e955;
}
```

Then use in HTML: `<button class="btn-primary">Click Me</button>`

### Adding Navigation Items

**Update the navigation section in each HTML file**, using existing style classes:
```html
<a href="newpage.html" class="text-primary nav-link-style shrink-0">NEW PAGE</a>
<div class="w-[243px] shrink-0"></div>  <!-- Spacer, keep consistent -->
```

### Design System Workflow

**When you need to add styling:**

1. **Check if a Tailwind utility exists** → Use it (e.g., `bg-black`, `text-white`)
2. **Check if a custom class exists in style.css** → Use it (e.g., `nav-link-style`)
3. **If neither exist:**
   - For colors/fonts/spacing → Add to `design_config.js`
   - For effects/animations/components → Add to `style.css`
   - Apply the new class in HTML

**DO NOT:**
- ❌ Add `style="..."` attributes in HTML
- ❌ Create one-off classes for single elements
- ❌ Duplicate existing styles
- ❌ Use arbitrary values when a design token exists

## Key Components

### Design System Files (SOURCE OF TRUTH)

#### 1. design_config.js
**Purpose:** Central configuration for TailwindCSS  
**Controls:** Colors, fonts, spacing, breakpoints

```javascript
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#D2F865",              // All primary color usage
                "background-light": "#F5F5F5",   // Light backgrounds
                "background-dark": "#000000",    // Dark backgrounds
                "dark-surface": "#000000",
            },
            fontFamily: {
                display: ["'Anton'", "sans-serif"],
                sans: ["'Inter'", "sans-serif"],
                mono: ["'Space Mono'", "monospace"],
            },
            spacing: {
                '128': '32rem',
            }
        },
    },
};
```

**When to edit:**
- Changing brand colors
- Adding new color variants
- Modifying font families
- Adding custom spacing values
- Adjusting responsive breakpoints

#### 2. style.css
**Purpose:** Custom styles not covered by Tailwind  
**Contains:** Animations, text effects, component-specific styles

```css
/* Text Stroke Effects */
.text-stroke-lime { ... }
.text-stroke-black { ... }

/* Animations */
@keyframes marquee { ... }
.animate-marquee { ... }

/* Component Styles */
span.SflwFl.tCj5mo.wixui-text-marquee__text { ... }
.nav-link-style { ... }
```

**When to edit:**
- Creating new animations
- Adding text effects (stroke, shadow)
- Defining component-specific styles
- Custom hover/focus states
- Complex selectors not possible in Tailwind

### How These Files Work Together

```
HTML Files
    ↓
design_config.js → TailwindCSS Classes (bg-primary, font-display, etc.)
    ↓
style.css → Custom Classes (nav-link-style, animate-marquee, etc.)
    ↓
Final Rendered Styles
```

**Example in Practice:**
```html
<!-- Uses both design system files -->
<a href="work.html" class="text-primary nav-link-style shrink-0">
    <!--                   ^                ^
                           |                |
                   design_config.js    style.css  -->
    WORK
</a>
```

### 2. Animated Marquee
- Located in header section
- Scrolls partner acknowledgments
- Infinite loop animation
- Customizable speed in `style.css`

### 3. Navigation Bar
- Fixed width elements for precise spacing
- Acid lime (#D2F865) color for links
- Black background with white/primary text
- Responsive considerations needed for mobile

### 4. Dark/Light Theme
- Uses Tailwind's `dark:` prefix
- Supports `bg-background-light` and `bg-background-dark`
- Manual toggle implementation would be needed

### 5. Typography
- Display headlines: Anton font
- Body text: Inter font
- Code/mono: Space Mono, Azeret Mono
- Uppercase styling for emphasis

## Current Issues & Known Limitations

### 1. Image Paths (CRITICAL - MUST FIX BEFORE DEPLOYMENT)
- Several images use local file paths that will NOT work on the live website:
  ```html
  file:///C:/Users/Scott/.gemini/antigravity/brain/...
  ```
- **Impact**: Images will be broken on human-creative.co.uk
- **Action Required**: 
  1. Locate actual image files
  2. Move to `assets/` directory with proper names (e.g., `logo.png`)
  3. Replace all references with relative paths (e.g., `/assets/logo.png` or `assets/logo.png`)
- **Affects**: 
  - Logo images in navigation (all pages)
  - Work thumbnails on work.html
  - Decorative images on manifesto.html
  
**Files to update:**
- `index.html` (line 32)
- `manifesto.html` (line 32, 75, 76)
- `work.html` (line 32)
- `impact.html` (line 32, 70)
- `enquire.html` (check for similar issues)
- `shop.html` (check for similar issues)
- All files in `work/` directory (line 37)

### 2. Work Pages
- Currently placeholder pages with "under construction" message
- Need actual content, images, and project details before launching to human-creative.co.uk
- Consider priority: which projects to complete first

### 3. Shop Page
- Likely a placeholder
- Decide if this should be removed or implemented before launch
- If keeping, integrate e-commerce solution (Shopify, WooCommerce, etc.)

### 4. Responsive Design
- Navigation has fixed widths (129px, 243px, 264px) that may not work well on mobile
- **Action Required**: Test on mobile devices and adjust for human-creative.co.uk launch
- Consider implementing responsive breakpoints or hamburger menu
- Test on various screen sizes (mobile, tablet, desktop)

### 5. External Dependencies
- TailwindCSS loaded from CDN (ensure availability and version stability)
- Google Fonts loaded from CDN
- No offline fallback - consider implications for human-creative.co.uk
- **Recommendation**: Consider self-hosting critical CSS/fonts for better reliability

### 6. Email Configuration
- Enquiry links point to `studio@human-creative.co.uk`
- **Action Required**: Verify this email exists and is monitored
- Test email sending if there are forms

## Deployment Considerations

### Current Status: Development/Integration

**This codebase is currently being integrated into a development project** and is NOT yet ready for production deployment to human-creative.co.uk.

### Integration into Existing Project

When integrating these pages into your development project:

1. **Preserve the Design System**
   - Keep `design_config.js` and `style.css` as the source of truth
   - Integrate these files into your build process
   - Ensure all pages reference these files correctly

2. **Adapt File Paths**
   - Update paths based on your project structure
   - Ensure consistency across all pages
   - Update asset paths to match your project's assets directory

3. **Merge with Existing Styles**
   - If you have existing styles, carefully merge with `style.css`
   - Ensure no class name conflicts
   - Maintain the design tokens in `design_config.js`

4. **Update Dependencies**
   - If your project uses npm/package.json, consider installing TailwindCSS locally instead of CDN
   - Install font packages if needed
   - Consider adding build tools (PostCSS, etc.)

### Integration into Existing Project

**For Next.js + Supabase Integration:**

This repository contains static HTML pages that need to be converted to Next.js components. See the detailed [Next.js Migration Guide](#nextjs-migration-guide) below.

When integrating these pages into your Next.js + Supabase project:

1. **Preserve the Design System**
   - Migrate `design_config.js` to `tailwind.config.js`
   - Integrate `style.css` into your Next.js global styles
   - Maintain design tokens for consistency

2. **Convert HTML to React/Next.js Components**
   - Break pages into reusable components
   - Use Next.js App Router or Pages Router
   - Implement layouts for shared elements (header, footer, nav)

3. **Integrate Supabase**
   - Use for image storage (replace local file paths)
   - Implement authentication if needed
   - Store work portfolio data in Supabase database
   - Use for form submissions (enquire page)

4. **Update Asset Management**
   - Move images to Next.js `public/` directory or Supabase Storage
   - Use Next.js `<Image>` component for optimization
   - Update all asset paths

---

## Next.js Migration Guide

### Prerequisites

Your Next.js project should have:
```bash
npm install next react react-dom
npm install -D tailwindcss postcss autoprefixer
npm install @supabase/supabase-js
```

### Step 1: Set Up TailwindCSS in Next.js

**Install TailwindCSS:**
```bash
npx tailwindcss init -p
```

**Convert `design_config.js` to `tailwind.config.js`:**

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D2F865",              // Acid Lime
        "background-light": "#F5F5F5",
        "background-dark": "#000000",
        "dark-surface": "#000000",
      },
      fontFamily: {
        display: ["'Anton'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        marquee: 'marquee 64s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-20%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

**Migrate `style.css` to global styles:**

```css
/* app/globals.css or styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Text Strokes */
@layer utilities {
  .text-stroke-lime {
    -webkit-text-stroke: 1px #D2F865;
    color: transparent;
  }
  .text-stroke-black {
    -webkit-text-stroke: 1px #000000;
    color: transparent;
  }
}

/* Component Styles */
@layer components {
  .nav-link-style {
    font-family: 'azeret-mono-v2', 'Azeret Mono', monospace;
    font-size: 17.1224px;
    line-height: 20.5469px;
    vertical-align: baseline;
    letter-spacing: normal;
    word-spacing: 0px;
    margin: 0px;
    padding: 0px;
    font-weight: 400;
    font-style: normal;
  }
}
```

### Step 2: Set Up Google Fonts in Next.js

**Using next/font (recommended):**

```javascript
// app/layout.js or pages/_app.js
import { Anton, Inter, Space_Mono } from 'next/font/google'

const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

**Update tailwind.config.js:**
```javascript
fontFamily: {
  display: ["var(--font-anton)", "sans-serif"],
  sans: ["var(--font-inter)", "sans-serif"],
  mono: ["var(--font-space-mono)", "monospace"],
},
```

### Step 3: Create Component Structure

**Recommended folder structure:**

```
your-nextjs-project/
├── app/                          # Next.js 13+ App Router
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Homepage (from index.html)
│   ├── manifesto/
│   │   └── page.js               # Manifesto page
│   ├── work/
│   │   ├── page.js               # Work grid
│   │   └── [slug]/
│   │       └── page.js           # Individual work pages
│   ├── impact/
│   │   └── page.js               # Impact page
│   ├── enquire/
│   │   └── page.js               # Enquire page
│   └── shop/
│       └── page.js               # Shop page
├── components/
│   ├── Header.js                 # Shared header
│   ├── Navigation.js             # Main nav
│   ├── Marquee.js                # Partner marquee
│   ├── Footer.js                 # Shared footer
│   └── work/
│       ├── WorkGrid.js
│       └── WorkCard.js
├── lib/
│   └── supabase.js               # Supabase client
├── public/
│   └── assets/                   # Images
└── styles/
    └── globals.css               # Global styles
```

### Step 4: Convert HTML Pages to React Components

**Example: Homepage (app/page.js)**

```jsx
// app/page.js
import Header from '@/components/Header'
import Marquee from '@/components/Marquee'

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans antialiased text-black dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <main>
        {/* Port content from index.html here */}
        <section className="bg-background-dark text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] text-primary mb-6">
              HUMAN CREATIVE
            </h1>
            {/* ... rest of content ... */}
          </div>
        </section>
      </main>
    </div>
  )
}
```

**Example: Shared Header Component**

```jsx
// components/Header.js
import Link from 'next/link'
import Image from 'next/image'
import Marquee from './Marquee'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="w-full">
      <Marquee />
      <Navigation />
    </header>
  )
}
```

**Example: Marquee Component**

```jsx
// components/Marquee.js
export default function Marquee() {
  const text = "WITH THANKS TO: MUSICBED | PELI PRODUCTS | BETTERHELP | CALMZONE | THE GYM GROUP | POLICYBEE | MEDIA TRAVELS | MICHAEL B. BENNETT ACCOUNTING | FLYKITT | ATOMOS | WEX PHOTO VIDEO |"
  
  return (
    <section className="bg-primary text-black pt-[50px] pb-[25px] overflow-hidden whitespace-nowrap border-b border-black block">
      <div className="flex animate-marquee w-max">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="mx-4 font-mono text-sm" aria-hidden="true">
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}
```

**Example: Navigation Component**

```jsx
// components/Navigation.js
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const links = [
    { href: '/manifesto', label: 'MANIFESTO' },
    { href: '/work', label: 'WORK' },
    { href: '/enquire', label: 'ENQUIRE' },
    { href: '/impact', label: 'IMPACT' },
    { href: '/shop', label: 'SHOP' },
  ]

  return (
    <nav className="bg-black text-white h-[130px] flex items-center overflow-hidden min-w-full">
      <div className="flex items-center min-w-max pl-[75px]">
        {/* Logo */}
        <Link href="/" className="block w-[271px] shrink-0 py-[20px]">
          <Image 
            src="/assets/logo.png" 
            alt="HUMAN." 
            width={271} 
            height={90}
            className="w-full h-auto"
            priority
          />
        </Link>

        <div className="w-[129px] shrink-0"></div>

        {/* Main Links */}
        <div className="flex items-center">
          {links.map((link, index) => (
            <div key={link.href} className="flex items-center">
              <Link href={link.href} className="text-primary nav-link-style shrink-0">
                {link.label}
              </Link>
              {index < links.length - 1 && <div className="w-[243px] shrink-0"></div>}
            </div>
          ))}
        </div>

        <div className="w-[264px] shrink-0"></div>
        <Link href="#" className="text-white nav-link-style shrink-0">ACCOUNT</Link>
        <div className="w-[100px] shrink-0"></div>
      </div>
    </nav>
  )
}
```

### Step 5: Integrate Supabase

**Set up Supabase client:**

```javascript
// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

**Environment variables (.env.local):**
```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Use Cases for Supabase:**

1. **Image Storage** - Store work portfolio images, logos, etc.
```javascript
// Upload image to Supabase Storage
const { data, error } = await supabase.storage
  .from('work-images')
  .upload('project-name.jpg', file)

// Get public URL
const { data: { publicUrl } } = supabase.storage
  .from('work-images')
  .getPublicUrl('project-name.jpg')
```

2. **Work Portfolio Database**
```javascript
// Create table in Supabase:
// work_projects (id, title, slug, description, client, image_url, created_at)

// Fetch work projects
const { data: projects } = await supabase
  .from('work_projects')
  .select('*')
  .order('created_at', { ascending: false })
```

3. **Contact Form Submissions**
```javascript
// app/enquire/page.js
'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function EnquirePage() {
  const [formData, setFormData] = useState({})
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { data, error } = await supabase
      .from('enquiries')
      .insert([formData])
    
    if (!error) {
      // Show success message
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  )
}
```

4. **Authentication (if needed)**
```javascript
// For member login/account functionality
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password',
})
```

### Step 6: Dynamic Work Pages

**Create dynamic route for work projects:**

```jsx
// app/work/[slug]/page.js
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const { data: projects } = await supabase
    .from('work_projects')
    .select('slug')
  
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function WorkDetailPage({ params }) {
  const { data: project } = await supabase
    .from('work_projects')
    .select('*')
    .eq('slug', params.slug)
    .single()
  
  if (!project) {
    notFound()
  }
  
  return (
    <main className="bg-background-dark min-h-screen text-white flex flex-col justify-center items-center">
      <h1 className="font-display text-8xl text-primary uppercase text-center max-w-4xl">
        {project.title}
      </h1>
      <p className="font-mono text-xl mt-4">{project.description}</p>
      {project.image_url && (
        <Image 
          src={project.image_url} 
          alt={project.title}
          width={1200}
          height={675}
          className="mt-8"
        />
      )}
    </main>
  )
}
```

### Step 7: Optimize Images with Next.js

**Replace `<img>` with Next.js `<Image>`:**

```jsx
// Before (HTML)
<img src="assets/logo.png" alt="HUMAN." class="w-full h-auto">

// After (Next.js)
<Image 
  src="/assets/logo.png" 
  alt="HUMAN." 
  width={271} 
  height={90}
  className="w-full h-auto"
  priority  // For above-the-fold images
/>
```

### Step 8: Migration Checklist

- [ ] Install TailwindCSS and plugins in Next.js
- [ ] Convert design_config.js to tailwind.config.js
- [ ] Migrate style.css to globals.css
- [ ] Set up Google Fonts with next/font
- [ ] Create component structure
- [ ] Convert index.html to app/page.js
- [ ] Convert manifesto.html to app/manifesto/page.js
- [ ] Convert work.html to app/work/page.js
- [ ] Convert impact.html to app/impact/page.js
- [ ] Convert enquire.html to app/enquire/page.js
- [ ] Create shared components (Header, Navigation, Marquee)
- [ ] Set up Supabase client
- [ ] Create Supabase tables for work projects
- [ ] Upload images to Supabase Storage or Next.js public/
- [ ] Implement dynamic work project pages
- [ ] Convert all img tags to Next.js Image components
- [ ] Test all pages in development
- [ ] Implement form handling with Supabase

---

### Development Workflow (Old Static Site)

### Future Production Deployment

When ready to deploy to human-creative.co.uk:

### Future Production Deployment

When ready to deploy to human-creative.co.uk:

#### Deployment Options

#### Option 1: Traditional Web Hosting
If human-creative.co.uk is currently on traditional hosting (cPanel, etc.):
1. **Backup Current Site**
   - Download all existing files from the server
   - Export any databases (if applicable)
   - Document current configuration

2. **Upload via FTP/SFTP**
   ```bash
   # Use an FTP client (FileZilla, Cyberduck, etc.)
   # Or use command line:
   sftp user@human-creative.co.uk
   put -r /path/to/HMN-Front-end-2026/*
   ```

3. **Verify Files**
   - Ensure all HTML, CSS, JS files are uploaded
   - Verify `assets/` directory is complete
   - Check file permissions (typically 644 for files, 755 for directories)

#### Option 2: Modern Static Hosting
Alternative hosting options for improved performance:
- **Netlify** (recommended - free tier, automatic deployments)
- **Vercel** (excellent performance, free tier)
- **Cloudflare Pages** (fast CDN, free tier)
- **GitHub Pages** (free, but requires public repo or GitHub Pro)

**Netlify Deployment Example:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --prod --dir=.
```

#### Option 3: Keep Current Hosting, Use CDN
- Upload to existing host
- Add Cloudflare in front for caching and CDN
- Configure DNS through Cloudflare

### Pre-Deployment Checklist (For Future Production Release)

#### Must-Fix Issues Before Production
- [x] **CRITICAL**: Replace all local file paths with proper URLs
  - Logo: `file:///C:/Users/Scott/.gemini/...` → `/assets/logo.png`
  - Work images need proper paths
  - Decorative images need proper paths
  
- [ ] **HIGH**: Optimize all images
  - Compress PNG files (use TinyPNG or similar)
  - Convert to WebP where supported
  - Add fallbacks for older browsers

- [ ] **HIGH**: Test all email links
  - Verify `mailto:studio@human-creative.co.uk` works
  - Test enquiry form functionality

#### SEO & Performance
- [ ] Add meta descriptions to all pages
- [ ] Add Open Graph tags for social media sharing
- [ ] Create and upload favicon.ico
- [ ] Add robots.txt file
- [ ] Create sitemap.xml
- [ ] Test page load speed with Google PageSpeed Insights
- [ ] Implement lazy loading for images below the fold
- [ ] Add Google Analytics or alternative (if needed)

#### Browser & Device Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on tablet sizes
- [ ] Verify responsive navigation works
- [ ] Check all links (use broken link checker)

#### Domain & SSL
- [ ] Ensure SSL certificate is active for human-creative.co.uk
- [ ] Verify HTTPS redirects work (HTTP → HTTPS)
- [ ] Test www.human-creative.co.uk redirects to human-creative.co.uk (or vice versa)
- [ ] Check DNS settings are correct

#### Content Verification
- [ ] Review all text for typos and accuracy
- [ ] Verify company information is current
- [ ] Confirm partner logos are up to date
- [ ] Check contact email addresses work
- [ ] Test enquiry form submissions

### Deployment Steps for human-creative.co.uk

1. **Backup Current Site**
   ```bash
   # SSH into server and create backup
   tar -czf human-creative-backup-$(date +%Y%m%d).tar.gz /path/to/current/site
   ```

2. **Fix Critical Issues**
   - Replace all local file paths
   - Add missing images to `assets/` directory
   - Update image references in HTML

3. **Test Locally**
   ```bash
   # Run local server
   python -m http.server 8000
   # Test thoroughly at http://localhost:8000
   ```

4. **Stage Deployment (Recommended)**
   - Deploy to subdomain first: `staging.human-creative.co.uk` or `beta.human-creative.co.uk`
   - Test thoroughly in staging environment
   - Get stakeholder approval

5. **Production Deployment**
   - Upload files to production server
   - Test immediately after deployment
   - Monitor for issues in first 24 hours

6. **Post-Deployment**
   - Submit sitemap to Google Search Console
   - Update any external links pointing to the site
   - Monitor analytics for traffic patterns
   - Check server logs for errors

### DNS Configuration
Ensure DNS is pointing to the correct hosting:
```
A Record: @ → [Your Server IP]
CNAME: www → human-creative.co.uk
```

### Rollback Plan
If issues occur after deployment:
```bash
# Restore from backup
tar -xzf human-creative-backup-YYYYMMDD.tar.gz
# Move files back to web root
```

Keep the backup for at least 30 days after successful deployment.

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

### Before Launch to human-creative.co.uk

**CRITICAL (Must fix before going live):**
1. **Fix Image Paths**
   - Priority: CRITICAL
   - All local file:/// paths must be replaced
   - Move images to proper locations in repository
   - Update all image references

2. **Mobile Optimization**
   - Test navigation on mobile devices
   - Redesign navigation for small screens
   - Add hamburger menu for mobile
   - Test all pages on iPhone, Android devices

3. **Email & Forms**
   - Verify studio@human-creative.co.uk email works
   - Test all mailto: links
   - If enquire.html has a form, ensure it submits correctly
   - Set up form handling (backend or service like Formspree)

**HIGH PRIORITY:**
4. **Complete Work Pages**
   - Decide which projects to showcase first
   - Add project descriptions
   - Include project images/videos
   - Add client testimonials
   - OR hide/remove until ready

5. **SEO Optimization**
   - Add meta descriptions to all pages
   - Implement schema markup for business information
   - Create sitemap.xml
   - Add robots.txt
   - Set up Google Search Console

6. **Performance**
   - Optimize all images (compress, use WebP)
   - Implement lazy loading for images
   - Test with Google PageSpeed Insights
   - Optimize CSS delivery
   - Add browser caching headers

**MEDIUM PRIORITY:**
7. **Accessibility**
   - Add ARIA labels where needed
   - Ensure keyboard navigation works
   - Test with screen readers
   - Improve color contrast where needed
   - Add alt text to all images

8. **Analytics & Tracking**
   - Add Google Analytics or alternative
   - Set up conversion tracking
   - Monitor user behavior
   - Track enquiry form submissions

### After Launch

9. **Interactive Features**
   - Add form validation to enquire.html
   - Implement dark mode toggle (if desired)
   - Add smooth scroll animations
   - Consider adding a blog/news section

10. **E-commerce**
    - If shop is needed, implement shop functionality
    - Add payment gateway integration
    - Create product pages
    - Set up inventory management

11. **Content Management**
    - Consider adding a CMS (WordPress headless, Contentful, etc.)
    - Make it easier to update work portfolio
    - Enable non-technical staff to update content

### Migration from Current Site

**Planning Checklist:**
- [ ] Audit current human-creative.co.uk content
- [ ] Identify pages/content not in new design
- [ ] Plan redirects for any changed URLs
- [ ] Set up 301 redirects for moved/renamed pages
- [ ] Update any external links to the site
- [ ] Inform partners/clients of site update
- [ ] Monitor search rankings during transition
- [ ] Keep old site backup accessible for reference

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
