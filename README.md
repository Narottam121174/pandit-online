# Pandit Online

A modern, professional website dedicated to Hindu rituals, pujas, and spiritual practices. Built with Next.js 14 for performance and SEO optimization.

## Features

✨ **Modern Design** - Professional and minimal aesthetic with golden accents  
📱 **Mobile Responsive** - Perfect viewing on all devices  
🌍 **Multi-Language** - English and Hindi support  
📖 **Rich Content** - Comprehensive guides and tutorials  
🔍 **SEO Optimized** - Built for search engines  
⚡ **Fast Performance** - Static site generation  
🎨 **Beautiful UI** - Smooth animations and transitions  

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the repository
cd pandit-online

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Available Scripts

```bash
# Development
npm run dev       # Start dev server on port 3000

# Production
npm run build     # Build for production
npm start         # Start production server

# Static Export (for GitHub Pages)
npm run export    # Build and export static site

# Linting
npm run lint      # Run ESLint
```

## Project Structure

```
pandit-online/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── en/                # English routes
│       ├── pujas/         # Puja pages
│       ├── rituals/       # Ritual pages
│       ├── blog/          # Blog posts
│       ├── about/         # About page
│       └── contact/       # Contact page
├── components/            # Reusable React components
├── styles/                # Global styles
├── public/                # Static files
├── data/                  # Content data
└── lib/                   # Utility functions
```

## Pages Overview

### Homepage (`/`)
- Hero section with welcome message
- Featured categories (Pujas, Rituals, Blog)
- Features overview
- Call-to-action

### Pujas (`/en/pujas`)
- List of all major pujas
- Individual puja detail pages with:
  - Significance and meaning
  - Required items (Samagri)
  - Step-by-step procedures
  - Sacred mantras
  - Related information

### Rituals (`/en/rituals`)
- Daily rituals
- Meditation & yoga
- Life-cycle ceremonies
- Seasonal festivals

### Blog (`/en/blog`)
- Articles on Hindu spirituality
- Festival guides
- Mantra insights

### About (`/en/about`)
- Mission and values
- Team information
- What we offer

### Contact (`/en/contact`)
- Contact form
- Email information
- Quick facts

## Design System

### Colors
- **Primary**: #d4af37 (Gold) - Divine prosperity
- **Secondary**: #1a3a52 (Navy) - Trust and stability
- **Accent**: #c41e3a (Red) - Sacred power
- **Text**: #1f2937 (Dark Gray)

### Typography
- **Headings**: Lora (serif) - Traditional elegance
- **Body**: Poppins (sans-serif) - Modern readability

## Customization

### Add New Pages

1. Create a new directory in `app/en/`
2. Add `page.tsx` with your content
3. Add `page.module.css` for styles
4. Update header navigation

### Add Blog Posts

1. Add post data to `data/blog-posts.json`
2. Create a `[slug]` directory in `app/en/blog/`
3. Fetch and render posts dynamically

### Change Colors

Edit CSS variables in `styles/globals.css`:

```css
:root {
  --primary: #d4af37;
  --secondary: #1a3a52;
  /* ... */
}
```

## Content Management

### Adding Puja Content

Edit or create files in `app/en/pujas/[slug]/page.tsx`:

```tsx
// Template includes sections for:
// - Significance
// - When to perform
// - Required items
// - Step-by-step procedure
// - Mantras
// - Tips
```

### Multi-Language Support

To add Hindi translations:

1. Create `app/hi/` directory structure mirroring `app/en/`
2. Add Hindi content to each page
3. Update header language switcher
4. Consider using i18next library for dynamic translations

## SEO Optimization

Each page includes:
- Meta descriptions
- Open Graph tags
- Structured data support
- Mobile viewport tags
- Canonical URLs

To enhance SEO:
1. Add meta tags in page layouts
2. Create `robots.txt` in `public/`
3. Generate `sitemap.xml`
4. Optimize images

## Deployment

### GitHub Pages

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as deployment source
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run export
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out
      - uses: actions/deploy-pages@v2
```

### Alternative Hosting

- **Vercel**: Deploy directly from GitHub (recommended for Next.js)
- **Netlify**: Connect repository and configure build settings
- **Self-hosted**: Build locally and upload files to server

## Contributing

To contribute content or improvements:

1. Create a new branch
2. Add or edit content
3. Test locally (`npm run dev`)
4. Submit a pull request

## Future Enhancements

- [ ] Full Hindi language support
- [ ] Search functionality
- [ ] Comment system
- [ ] User accounts
- [ ] Dark mode
- [ ] Advanced filtering
- [ ] Multimedia (videos, audio)
- [ ] Community contributions

## Support

For questions or issues:
- Email: info@panditonline.org
- Create an issue on GitHub

## License

© 2024 Pandit Online. All rights reserved.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Version**: 1.0.0  
**Last Updated**: January 2024
