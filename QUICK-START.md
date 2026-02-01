# Quick Reference - Next.js + Supabase Integration

## 🎯 Project Goal

Convert these static HTML pages to a Next.js application with Supabase backend for human-creative.co.uk.

## 📋 Quick Setup

```bash
# 1. Create Next.js project
npx create-next-app@latest human-creative --typescript --tailwind --app

# 2. Install dependencies
cd human-creative
npm install @supabase/supabase-js
npm install @tailwindcss/forms @tailwindcss/typography

# 3. Clone this repo for reference
cd ..
git clone https://github.com/SnotBoogie1987/HMN-Front-end-2026.git reference-design
```

## 🎨 Design System Migration

### 1. TailwindCSS Config

Copy content from `design_config.js` to `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: "#D2F865",
        "background-light": "#F5F5F5",
        "background-dark": "#000000",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
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
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
export default config
```

### 2. Global Styles

Migrate `style.css` to `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-stroke-lime {
    -webkit-text-stroke: 1px #D2F865;
    color: transparent;
  }
}

@layer components {
  .nav-link-style {
    font-family: 'azeret-mono-v2', 'Azeret Mono', monospace;
    font-size: 17.1224px;
    line-height: 20.5469px;
    font-weight: 400;
  }
}
```

### 3. Fonts Setup

```typescript
// app/layout.tsx
import { Anton, Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

## 🗄️ Supabase Setup

### Environment Variables

Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Client Setup

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Database Schema

```sql
-- Work Projects
CREATE TABLE work_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enquiries
CREATE TABLE enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE work_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public read" ON work_projects FOR SELECT USING (published = true);
CREATE POLICY "Anyone can submit" ON enquiries FOR INSERT WITH CHECK (true);
```

## 📁 Project Structure

```
human-creative/
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Homepage (from index.html)
│   ├── manifesto/page.tsx      # Manifesto page
│   ├── work/
│   │   ├── page.tsx            # Work grid
│   │   └── [slug]/page.tsx     # Dynamic work pages
│   ├── impact/page.tsx         # Impact page
│   ├── enquire/page.tsx        # Enquire form
│   └── shop/page.tsx           # Shop
├── components/
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── Marquee.tsx
│   └── work/
│       ├── WorkGrid.tsx
│       └── WorkCard.tsx
├── lib/
│   ├── supabase.ts
│   └── types.ts
└── public/
    └── assets/
```

## 🔄 Page Conversion Map

| Static HTML | Next.js Route | Component |
|------------|---------------|-----------|
| `index.html` | `/` | `app/page.tsx` |
| `manifesto.html` | `/manifesto` | `app/manifesto/page.tsx` |
| `work.html` | `/work` | `app/work/page.tsx` |
| `work/astonmartin.html` | `/work/astonmartin` | `app/work/[slug]/page.tsx` |
| `impact.html` | `/impact` | `app/impact/page.tsx` |
| `enquire.html` | `/enquire` | `app/enquire/page.tsx` |
| `shop.html` | `/shop` | `app/shop/page.tsx` |

## 📝 Component Templates

### Navigation

```tsx
// components/Navigation.tsx
import Link from 'next/link'

const links = [
  { href: '/manifesto', label: 'MANIFESTO' },
  { href: '/work', label: 'WORK' },
  { href: '/enquire', label: 'ENQUIRE' },
  { href: '/impact', label: 'IMPACT' },
  { href: '/shop', label: 'SHOP' },
]

export default function Navigation() {
  return (
    <nav className="bg-black text-white h-[130px] flex items-center">
      {/* Copy navigation structure from HTML files */}
      {links.map(link => (
        <Link key={link.href} href={link.href} className="text-primary nav-link-style">
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
```

### Work Grid with Supabase

```tsx
// app/work/page.tsx
import { supabase } from '@/lib/supabase'

export default async function WorkPage() {
  const { data: projects } = await supabase
    .from('work_projects')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  return (
    <main className="bg-background-dark min-h-screen">
      <h1 className="font-display text-8xl text-primary text-center">WORK</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[7px]">
        {projects?.map(project => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
```

### Form with Supabase

```tsx
// app/enquire/page.tsx
'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function EnquirePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await supabase.from('enquiries').insert([formData])
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* Form fields */}
    </form>
  )
}
```

## ✅ Migration Checklist

### Setup Phase
- [ ] Create Next.js project
- [ ] Install dependencies
- [ ] Configure tailwind.config.ts
- [ ] Set up fonts in layout.tsx
- [ ] Migrate globals.css
- [ ] Create Supabase project
- [ ] Set up database schema
- [ ] Configure environment variables

### Component Phase
- [ ] Create layout components (Header, Nav, Footer)
- [ ] Convert homepage
- [ ] Convert manifesto page
- [ ] Convert work grid page
- [ ] Convert impact page
- [ ] Convert enquire page with form
- [ ] Implement dynamic work detail pages

### Data Phase
- [ ] Seed work_projects table
- [ ] Upload images to Supabase Storage
- [ ] Test data fetching
- [ ] Test form submissions

### Optimization Phase
- [ ] Replace img with Next.js Image
- [ ] Add loading states
- [ ] Add error handling
- [ ] Test mobile responsiveness
- [ ] Optimize performance

## 🚀 Development Commands

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type check
npm run type-check
```

## 🔗 Documentation Links

- **Full Guide**: [HANDOFF.md](HANDOFF.md)
- **Deployment**: [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **TailwindCSS Docs**: https://tailwindcss.com/docs

## 📊 Projects to Migrate

Current portfolio (12 projects):
1. Aston Martin (`astonmartin`)
2. Under Armour (`underarmour`)
3. BBC Stories (`bbcstories`)
4. Jaguar TCS (`jaguartcs`)
5. Alain FC (`alainfc`)
6. Tough Mudder (`toughmudder`)
7. Nike Wellfest (`nikewellfest`)
8. Azimuth (`azimuth`)
9. Lauryn Hill (`laurynhill`)
10. Budget Car Rental (`budgetcarrental`)
11. MyProtein (`myprotein`)
12. Vivobarefoot (`vivobarefoot`)

## 🎯 Key Principles

1. **Design System** - All styles from tailwind.config.ts and globals.css
2. **No Inline Styles** - Use Tailwind utilities or component classes
3. **Image Optimization** - Use Next.js Image component
4. **Data from Supabase** - Work projects, enquiries from database
5. **Type Safety** - Use TypeScript for components
6. **Server Components** - Use by default, 'use client' only when needed

## 📞 Support

For questions, see the detailed documentation in [HANDOFF.md](HANDOFF.md) and [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md).
