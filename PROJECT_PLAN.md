# Pandit Online - Project Plan

## Project Overview
Pandit Online is a modern, multi-language wiki-style website dedicated to Hindu rituals, pujas, and spiritual practices. Built with Next.js 14, it features a professional design, SEO optimization, and mobile-responsive layout.

## Technology Stack
- **Framework**: Next.js 14 (React)
- **Styling**: CSS Modules + CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **Hosting**: Static export

## Project Structure

```
pandit-online/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles import
│   ├── page.tsx           # Homepage
│   ├── page.module.css    # Homepage styles
│   ├── en/                # English routes
│   │   ├── pujas/         # Puja pages
│   │   ├── rituals/       # Ritual pages
│   │   ├── blog/          # Blog posts
│   │   ├── about/         # About page
│   │   └── contact/       # Contact page
│   └── hi/                # Hindi routes (future)
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   └── CategoryCard.tsx
├── styles/                # Global styles
│   └── globals.css
├── lib/                   # Utility functions
│   ├── api.ts            # API calls
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── images/
├── data/                 # Content data
│   ├── pujas.json
│   ├── rituals.json
│   └── blog-posts.json
├── next.config.js        # Next.js config
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies

```

## Feature Roadmap

### Phase 1: Core Setup (Current)
- ✅ Project initialization with Next.js
- ✅ Basic layout (Header, Footer, Hero)
- ✅ Homepage with categories
- ✅ Responsive design
- ⏳ Static content pages

### Phase 2: Content & Pages
- Create Puja detail pages (Ganesh, Durga, Lakshmi, Chhath)
- Create Ritual guides
- Set up Blog section
- Add About page
- Create Contact form

### Phase 3: Multi-Language Support
- Implement i18n for Hindi content
- Create Hindi routes
- Translate core content

### Phase 4: SEO & Optimization
- Add meta tags
- Create sitemap
- Optimize images
- Add structured data (Schema.org)

### Phase 5: Deployment
- Configure GitHub Pages
- Set up GitHub Actions for auto-deploy
- Custom domain setup

## Design System

### Color Palette
- **Primary**: Gold (#d4af37) - Prosperity & divinity
- **Secondary**: Navy (#1a3a52) - Trust & stability
- **Accent**: Red (#c41e3a) - Sacred & powerful
- **Text**: Dark Gray (#1f2937)
- **Background**: White/Light Gray

### Typography
- **Headings**: Lora (serif) - Traditional, elegant
- **Body**: Poppins (sans-serif) - Modern, readable

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project
cd pandit-online

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export for GitHub Pages
npm run export
```

Visit `http://localhost:3000` to see the site.

## Content Structure

### Pujas (Worship Rituals)
- Ganesh Puja
- Durga Puja
- Lakshmi Puja
- Chhath Puja
- Saraswati Puja
- Hanuman Puja
- etc.

### Rituals & Practices
- Daily rituals
- Seasonal festivals
- Life-cycle ceremonies
- Meditation practices
- Mantras & chants

### Blog
- Articles about Hindu philosophy
- Ritual guides
- Festival information
- Spiritual insights

## Deployment to GitHub Pages

1. Push code to GitHub
2. Configure GitHub Pages in repository settings
3. Set deployment source to GitHub Actions
4. Actions will auto-deploy on push to main

## Multi-Language (i18n) Strategy

- URL structure: `/en/path`, `/hi/path`
- Separate content files for each language
- Language switcher in header
- Fallback to English if Hindi not available

## SEO Considerations

- Meta tags for each page
- Open Graph tags for social sharing
- Canonical URLs
- Sitemap.xml
- Robots.txt
- Structured data (Schema.org)
- Mobile optimization
- Core Web Vitals optimization

## Next Steps

1. Review and approve homepage design
2. Extract content from scraped website
3. Create individual puja pages
4. Set up blog structure
5. Implement multi-language support
6. Deploy to GitHub Pages

## Notes

- All links are placeholder and need to be updated with actual content
- Contact form needs backend integration (Formspree, EmailJS, etc.)
- Images need to be sourced/created
- Content requires proofreading and localization
