# Integration & Deployment Guide

## 📋 Current Status: Development Integration

**This codebase is being integrated into a Next.js + Supabase development project.**  
This is NOT yet being deployed to the live human-creative.co.uk website.

**Stack:**
- **Next.js** - React framework
- **Supabase** - Backend (auth, database, storage)
- **TailwindCSS** - Styling (will be installed locally)

## 🚀 Next.js Integration Quick Start

### Step 1: Set Up Your Next.js Project (if not already done)

```bash
# Create new Next.js app (if starting fresh)
npx create-next-app@latest human-creative --typescript --tailwind --app
cd human-creative

# Install Supabase
npm install @supabase/supabase-js

# Install additional dependencies
npm install @tailwindcss/forms @tailwindcss/typography
```

### Step 2: Clone This Repository for Reference

```bash
# Clone alongside your Next.js project
git clone https://github.com/SnotBoogie1987/HMN-Front-end-2026.git reference-design
```

### Step 3: Migrate Design System

**Copy and convert design_config.js to tailwind.config.js:**

```javascript
// tailwind.config.js in your Next.js project
import type { Config } from 'tailwindcss'

const config: Config = {
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
        display: ["var(--font-anton)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
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
export default config
```

**Merge style.css into globals.css:**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Text Strokes from style.css */
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

/* Component Styles from style.css */
@layer components {
  .nav-link-style {
    font-family: 'azeret-mono-v2', 'Azeret Mono', monospace;
    font-size: 17.1224px;
    line-height: 20.5469px;
    font-weight: 400;
  }
}
```

### Step 4: Set Up Fonts

**Configure Google Fonts using next/font:**

```typescript
// app/layout.tsx
import { Anton, Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

### Step 5: Create Components

**Recommended structure:**
```
app/
├── layout.tsx                    # Root layout
├── page.tsx                      # Homepage
├── manifesto/
│   └── page.tsx
├── work/
│   ├── page.tsx                  # Work grid
│   └── [slug]/
│       └── page.tsx              # Dynamic work pages
├── impact/
│   └── page.tsx
├── enquire/
│   └── page.tsx
└── shop/
    └── page.tsx

components/
├── Header.tsx
├── Navigation.tsx
├── Marquee.tsx
└── work/
    ├── WorkGrid.tsx
    └── WorkCard.tsx

lib/
├── supabase.ts                   # Supabase client
└── types.ts                      # TypeScript types

public/
└── assets/
    ├── logo.png
    └── ...
```

### Step 6: Set Up Supabase

**Create Supabase client:**

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

**Create .env.local:**
```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Recommended Supabase Schema:**

```sql
-- Work Projects Table
CREATE TABLE work_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  thumbnail_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  published BOOLEAN DEFAULT false
);

-- Enquiries Table
CREATE TABLE enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE work_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Policies (adjust based on your needs)
CREATE POLICY "Work projects are viewable by everyone" 
  ON work_projects FOR SELECT 
  USING (published = true);

CREATE POLICY "Anyone can submit enquiries" 
  ON enquiries FOR INSERT 
  WITH CHECK (true);
```

**Set up Storage Bucket:**
```sql
-- In Supabase Storage, create a bucket called 'work-images'
-- Make it public or create signed URLs
```

### Step 7: Convert Pages to Components

**Example: Homepage**

```tsx
// app/page.tsx
import Header from '@/components/Header'

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans antialiased text-black dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <main>
        <section className="bg-background-dark text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] text-primary mb-6">
              HUMAN CREATIVE
            </h1>
            {/* Convert content from index.html */}
          </div>
        </section>
      </main>
    </div>
  )
}
```

**Example: Navigation Component**

```tsx
// components/Navigation.tsx
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
      </div>
    </nav>
  )
}
```

**Example: Work Grid with Supabase**

```tsx
// app/work/page.tsx
import { supabase } from '@/lib/supabase'
import WorkCard from '@/components/work/WorkCard'

export default async function WorkPage() {
  const { data: projects } = await supabase
    .from('work_projects')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  return (
    <main className="bg-background-dark min-h-screen">
      <section className="py-24">
        <h1 className="font-display text-8xl text-primary text-center mb-12">WORK</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[7px] max-w-[1120px] mx-auto">
          {projects?.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
```

**Example: Enquire Form with Supabase**

```tsx
// app/enquire/page.tsx
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    const { error } = await supabase
      .from('enquiries')
      .insert([formData])
    
    if (error) {
      setStatus('error')
      console.error('Error submitting form:', error)
    } else {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    }
  }

  return (
    <main className="bg-background-dark min-h-screen text-white py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-8xl text-primary text-center mb-12">ENQUIRE</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-mono">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 bg-black border border-primary text-white"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-mono">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 bg-black border border-primary text-white"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-mono">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2 bg-black border border-primary text-white"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-mono">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full px-4 py-2 bg-black border border-primary text-white"
            />
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-primary text-black px-6 py-3 font-mono hover:opacity-90 transition-opacity"
          >
            {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
          </button>
          
          {status === 'success' && (
            <p className="text-primary text-center">Thank you! We'll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center">Error sending message. Please try again.</p>
          )}
        </form>
      </div>
    </main>
  )
}
```

## 🎨 Design System Integration

**Remember:** All styling must come from:
- `tailwind.config.js` (converted from design_config.js)
- `globals.css` (converted from style.css)

**Never add inline styles or one-off CSS in components.**

## 📝 Migration Checklist

### Setup
- [ ] Create or clone Next.js project
- [ ] Install dependencies (Supabase, Tailwind plugins)
- [ ] Set up environment variables
- [ ] Configure tailwind.config.js from design_config.js
- [ ] Migrate style.css to globals.css
- [ ] Set up Google Fonts with next/font

### Supabase Setup
- [ ] Create Supabase project
- [ ] Create work_projects table
- [ ] Create enquiries table
- [ ] Set up RLS policies
- [ ] Create storage bucket for images
- [ ] Upload test images

### Component Migration
- [ ] Create shared layout
- [ ] Build Header component
- [ ] Build Navigation component
- [ ] Build Marquee component
- [ ] Convert homepage (index.html → app/page.tsx)
- [ ] Convert manifesto page
- [ ] Convert work grid page
- [ ] Convert impact page
- [ ] Convert enquire page with form
- [ ] Create dynamic work detail pages

### Assets & Data
- [ ] Move images to public/assets or Supabase Storage
- [ ] Populate work_projects table with data
- [ ] Update all image references to use Next.js Image
- [ ] Test image optimization

### Testing
- [ ] Test all pages in development (npm run dev)
- [ ] Test navigation between pages
- [ ] Test form submission
- [ ] Test work project pages
- [ ] Test on mobile viewport
- [ ] Test dark/light theme (if implemented)

## 🔧 Development Workflow

```bash
# Run development server
npm run dev

# Open in browser
# http://localhost:3000

# Build for production (when ready)
npm run build

# Test production build locally
npm run start
```

## 📊 Supabase Data Management

**Populate work projects:**

```javascript
// scripts/seed-projects.js
import { createClient } from '@supabase/supabase-js'

const projects = [
  { slug: 'astonmartin', title: 'Aston Martin', client: 'Aston Martin', published: true },
  { slug: 'underarmour', title: 'Under Armour', client: 'Under Armour', published: true },
  // ... add all 12 projects
]

const supabase = createClient(url, key)

for (const project of projects) {
  await supabase.from('work_projects').insert([project])
}
```

## 🚧 Current Development Tasks

### High Priority
- [ ] Complete Next.js setup
- [ ] Migrate all pages to components
- [ ] Set up Supabase database
- [ ] Implement enquiry form
- [ ] Add work project data

### Medium Priority
- [ ] Optimize mobile responsiveness
- [ ] Add loading states
- [ ] Implement error handling
- [ ] Add animations

### Future
- [ ] Shop functionality (if needed)
- [ ] Authentication (for member accounts)
- [ ] Admin panel for content management
- [ ] Analytics integration

---

## 🚀 Future: Production Deployment to human-creative.co.uk

**⚠️ The following is for FUTURE production deployment only ⚠️**

### Vercel Deployment (Recommended for Next.js)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect to GitHub and deploy automatically
```

### Environment Variables in Production

Add to Vercel/production:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Reference: Static HTML to Next.js Conversion

For detailed conversion examples, see the [Next.js Migration Guide](#nextjs-migration-guide) in HANDOFF.md.

---

# OLD STATIC DEPLOYMENT GUIDE (For Reference Only)

**The following sections are for the old static HTML site and are kept for reference.**

---

## Step 1: Fix Broken Image Paths (REQUIRED BEFORE PRODUCTION)

### Problem
The site currently has hardcoded local file paths that will NOT work on the live website:
```html
<img src="file:///C:/Users/Scott/.gemini/antigravity/brain/a00316bb-e9ec-4b6f-a5ca-7c2653bfc855/uploaded_media_1769787825261.png" alt="HUMAN." class="w-full h-auto">
```

### Solution
1. **Locate the actual image files** on your local system
2. **Copy images to the repository:**
   ```bash
   # Example structure
   cp /path/to/logo.png assets/logo.png
   cp /path/to/hand-scratch.png assets/hand-scratch.png
   cp /path/to/badge.png assets/badge.png
   ```

3. **Update HTML files** to use relative paths:

   **Find and replace in all HTML files:**
   
   OLD:
   ```html
   file:///C:/Users/Scott/.gemini/antigravity/brain/a00316bb-e9ec-4b6f-a5ca-7c2653bfc855/uploaded_media_1769787825261.png
   ```
   NEW:
   ```html
   assets/logo.png
   ```

4. **Files to update:**
   - index.html (line 32)
   - manifesto.html (lines 32, 75, 76)
   - work.html (line 32)
   - impact.html (lines 32, 70)
   - enquire.html (check for logo)
   - shop.html (check for logo)
   - All files in work/ directory (line 37)

## Step 2: Test Locally

```bash
# Navigate to project directory
cd /path/to/HMN-Front-end-2026

# Start a local server
python -m http.server 8000

# Open in browser
# Visit: http://localhost:8000
```

### What to Test:
- [ ] All images load correctly
- [ ] Navigation works on all pages
- [ ] Links go to correct pages
- [ ] Marquee animation works
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile device (resize browser or use device)

## Step 3: Optimize Images

```bash
# Install image optimization tool (if not installed)
npm install -g sharp-cli

# Optimize all PNG images
find assets -name "*.png" -exec sharp -i {} -o {}.optimized.png \;

# Or use online tools:
# - TinyPNG.com
# - Squoosh.app
```

**Image optimization checklist:**
- [ ] Compress all PNG files
- [ ] Ensure images are appropriate size (not oversized)
- [ ] Convert large images to WebP (with PNG fallback)

## Step 4: Add Essential SEO Elements

Add to each page's `<head>` section:

```html
<!-- Example for index.html -->
<meta name="description" content="Human Creative - A curated crew agency providing exceptional filmmaking talent while prioritizing freelancer welfare and sustainable working conditions.">
<meta name="keywords" content="filmmaking, crew agency, shooting editors, freelance filmmakers, production crew">
<meta property="og:title" content="Human Creative | Crew Agency">
<meta property="og:description" content="Exceptional filmmaking talent with a focus on welfare and sustainability">
<meta property="og:url" content="https://human-creative.co.uk">
<meta property="og:image" content="https://human-creative.co.uk/assets/og-image.png">
<link rel="canonical" href="https://human-creative.co.uk/">
```

Repeat for each page with appropriate content.

## Step 5: Create Necessary Files

### Create robots.txt
```bash
cat > robots.txt << 'EOF'
User-agent: *
Allow: /
Sitemap: https://human-creative.co.uk/sitemap.xml
EOF
```

### Create sitemap.xml
```bash
cat > sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://human-creative.co.uk/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/manifesto.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/work.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/impact.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/enquire.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://human-creative.co.uk/shop.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
EOF
```

### Add favicon
Place a `favicon.ico` file in the root directory, then add to all HTML `<head>` sections:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

## Step 6: Backup Current Site

**BEFORE making ANY changes to the live site:**

```bash
# If you have SSH access:
ssh user@human-creative.co.uk
cd /path/to/web/root
tar -czf ~/backup-human-creative-$(date +%Y%m%d-%H%M).tar.gz .
exit

# Download the backup to your local machine
scp user@human-creative.co.uk:~/backup-human-creative-*.tar.gz ./backups/
```

**Or use your hosting control panel:**
- Log into cPanel/Plesk/etc
- Use File Manager to create a zip of the entire public_html folder
- Download the backup

## Step 7: Deploy to Staging (Recommended)

If possible, deploy to a staging environment first:
- `staging.human-creative.co.uk`
- `beta.human-creative.co.uk`
- Or a subdirectory like `human-creative.co.uk/new/`

**Test thoroughly in staging before going to production.**

## Step 8: Deploy to Production

### Option A: FTP/SFTP Upload
```bash
# Using command line SFTP
sftp user@human-creative.co.uk

# Upload all files
put -r * /path/to/public_html/

# Or use FileZilla, Cyberduck, etc.
```

### Option B: cPanel File Manager
1. Log into cPanel
2. Open File Manager
3. Navigate to public_html
4. Upload files (use zip for faster upload, then extract)

### Option C: Git Deployment (if supported)
```bash
# On server
cd /path/to/public_html
git clone https://github.com/SnotBoogie1987/HMN-Front-end-2026.git .
git checkout main
```

## Step 9: Post-Deployment Testing

**Immediately after deployment, test:**

- [ ] Visit https://human-creative.co.uk
- [ ] Check SSL certificate is working (should see 🔒)
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Test on mobile device
- [ ] Check email links work (mailto:studio@human-creative.co.uk)
- [ ] Verify www redirect (www.human-creative.co.uk → human-creative.co.uk)
- [ ] Test in different browsers
- [ ] Check Google PageSpeed Insights score
- [ ] Submit sitemap to Google Search Console

## Step 10: Post-Launch Tasks

1. **Monitor for 24-48 hours**
   - Check server error logs
   - Monitor website uptime
   - Watch for user reports

2. **SEO Setup**
   ```bash
   # Submit to Google Search Console
   # 1. Go to search.google.com/search-console
   # 2. Add property for human-creative.co.uk
   # 3. Verify ownership
   # 4. Submit sitemap
   ```

3. **Analytics** (optional)
   - Add Google Analytics
   - Set up conversion tracking
   - Monitor traffic sources

4. **Performance Monitoring**
   - Set up uptime monitoring (UptimeRobot, Pingdom)
   - Monitor page load times
   - Check Core Web Vitals

## Common Issues & Solutions

### Issue: Images not loading
**Solution:** Check file paths are relative, not absolute or local

### Issue: SSL not working
**Solution:** Contact hosting provider to install/renew SSL certificate

### Issue: www not redirecting
**Solution:** Add .htaccess rule:
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.human-creative\.co\.uk [NC]
RewriteRule ^(.*)$ https://human-creative.co.uk/$1 [L,R=301]
```

### Issue: Mobile navigation broken
**Solution:** The current design uses fixed widths. Consider implementing responsive design.

### Issue: Slow page load
**Solution:** 
- Optimize images (compress, use WebP)
- Enable gzip compression on server
- Use browser caching
- Consider CDN for static assets

## Rollback Procedure

If something goes wrong:

```bash
# SSH into server
ssh user@human-creative.co.uk

# Stop web server (if needed)
# sudo systemctl stop apache2  # or nginx

# Remove new files
cd /path/to/public_html
rm -rf *

# Restore from backup
tar -xzf ~/backup-human-creative-YYYYMMDD-HHMM.tar.gz

# Restart web server
# sudo systemctl start apache2  # or nginx
```

## Getting Help

- **Repository:** https://github.com/SnotBoogie1987/HMN-Front-end-2026
- **Full Documentation:** See HANDOFF.md
- **Hosting Support:** Contact your hosting provider
- **Emergency Rollback:** Use backup created in Step 6

## Final Checklist Before Going Live

- [ ] All images paths fixed and tested
- [ ] Images optimized for web
- [ ] Tested on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Tested on mobile devices (iOS, Android)
- [ ] All navigation links work
- [ ] Email addresses verified (studio@human-creative.co.uk)
- [ ] SEO meta tags added
- [ ] robots.txt created
- [ ] sitemap.xml created
- [ ] favicon added
- [ ] Current site backed up
- [ ] Tested in staging environment (if available)
- [ ] SSL certificate is active
- [ ] Analytics code added (if using)
- [ ] Rollback plan understood and tested

---

**Good luck with your deployment! 🚀**

For detailed information, see the full [HANDOFF.md](HANDOFF.md) documentation.
