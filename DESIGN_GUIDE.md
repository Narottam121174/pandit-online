# Pandit Online - Design Preview & Visual Guide

## Homepage Layout

```
┌─────────────────────────────────────────────────────────┐
│                      HEADER                              │
│  🕉️ Pandit Online    [Pujas] [Rituals] [Blog] [Contact]  EN │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    HERO SECTION                          │
│                                                          │
│           Welcome to Pandit Online                       │
│   Your comprehensive guide to Hindu rituals,             │
│        pujas, and spiritual wisdom                       │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              EXPLORE PUJAS & RITUALS SECTION             │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ 🐘 Ganesh    │  │ ⚔️  Durga    │  │ 💰 Lakshmi   │   │
│  │ Puja         │  │ Puja         │  │ Puja         │   │
│  │ Learn about  │  │ Celebrate    │  │ Invoke       │   │
│  │ remover of   │  │ victory over │  │ prosperity   │   │
│  │ obstacles    │  │ evil         │  │ & abundance  │   │
│  │ Learn more→  │  │ Learn more→  │  │ Learn more→  │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ ☀️  Chhath   │  │ 🔔 Daily     │  │ 📿 Mantras   │   │
│  │ Puja         │  │ Rituals      │  │ & Chants     │   │
│  │ Sacred solar │  │ Essential    │  │ Explore      │   │
│  │ festival     │  │ practices    │  │ sacred words │   │
│  │ Learn more→  │  │ Learn more→  │  │ Learn more→  │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            WHY CHOOSE PANDIT ONLINE SECTION              │
│         (Light Gray Background)                         │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │ Comprehensive       │  │ Step-by-Step        │      │
│  │ Knowledge           │  │ Instructions        │      │
│  │ Detailed guides     │  │ Easy-to-follow      │      │
│  │ covering all        │  │ procedures for      │      │
│  │ aspects             │  │ performing rituals  │      │
│  └─────────────────────┘  └─────────────────────┘      │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │ Multi-Language      │  │ Expert Information  │      │
│  │ Support             │  │ Curated content     │      │
│  │ Access in English   │  │ from authentic      │      │
│  │ and Hindi           │  │ Hindu traditions    │      │
│  └─────────────────────┘  └─────────────────────┘      │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         START YOUR SPIRITUAL JOURNEY (CTA)              │
│    (Navy Blue Background with White Text)               │
│                                                          │
│       Dive deep into the world of Hindu spirituality    │
│                  [EXPLORE NOW →]                        │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                      FOOTER                              │
│                                                          │
│  About           Quick Links      Contact               │
│  Pandit Online   - Pujas          Email: info@...       │
│  Your guide...   - Rituals        Follow us on:         │
│                  - Blog           f t i                 │
│                  - About                                 │
│                                                          │
│  © 2024 Pandit Online. All rights reserved.             │
└─────────────────────────────────────────────────────────┘
```

## Color Palette

### Primary Colors
- **Gold (#d4af37)**: Primary buttons, accents, divinity
  - Usage: Call-to-action buttons, highlights, links
  - Hover: #b8941c (darker gold)

- **Navy (#1a3a52)**: Main content, headers, text
  - Usage: Headings, text body, backgrounds
  - Lighter: #2d5a7b (hover states)

- **Red (#c41e3a)**: Accent elements, importance
  - Usage: Special highlights, badges

### Supporting Colors
- **White (#ffffff)**: Clean backgrounds, cards
- **Light Gray (#f9fafb)**: Section backgrounds
- **Dark Gray (#1f2937)**: Primary text
- **Light Gray Text (#6b7280)**: Secondary text
- **Border (#e5e7eb)**: Subtle divisions

## Typography

### Font Families
- **Lora** (serif): Headings - Traditional, elegant
  ```
  h1: 3rem (48px) - Homepage title
  h2: 2.25rem (36px) - Section titles
  h3: 1.875rem (30px) - Card titles
  h4: 1.5rem (24px) - Subsection titles
  ```

- **Poppins** (sans-serif): Body text - Modern, readable
  ```
  Body: 1rem (16px)
  Small: 0.875rem (14px)
  ```

## Component Styling

### Cards (CategoryCard)
```
┌─────────────────────────┐
│  [Gold Gradient Box]    │  ← Icon container
│  Puja Title             │  ← h3 heading
│  Description of puja    │  ← Paragraph text
│  3 articles             │  ← Count badge
│  Learn more →           │  ← Link (hover animates)
└─────────────────────────┘
- Hover: Lifts up 4px, enhanced shadow
- Border: Left side 1px border when hovered
```

### Feature Cards
```
┌─────────────────────────┐
│ ■ Title (Gold accent)   │  ← Left border gold
│ Description text here   │
└─────────────────────────┘
- Background: Light gray
- Shadow: Subtle
- Hover: Slightly darker, moves right 4px
```

### Buttons

**Primary Button (Gold)**
```
[  EXPLORE NOW  ]
- Background: #d4af37 (gold)
- Text: Navy (#1a3a52)
- Padding: 0.75rem 1.5rem
- Hover: Darker gold, lifts up 2px, larger shadow
```

**Secondary Button (Navy)**
```
[  SEND MESSAGE  ]
- Background: #1a3a52 (navy)
- Text: White
- Padding: 0.75rem 1.5rem
- Hover: Lighter navy, lifts up 2px
```

**Outline Button**
```
[  LEARN MORE  ]
- Border: 2px gold
- Text: Gold
- Background: Transparent
- Hover: Gold background, navy text
```

### Navigation Links
```
┌───────────────────────────────┐
│ Pujas | Rituals | Blog | ...  │
└───────────────────────────────┘
- Underline appears on hover (animated from left)
- Color: White (in dark header)
- Transitions: 0.3s ease
```

## Responsive Breakpoints

### Desktop (1024px+)
- Full 2-3 column grids
- Sidebar visible on article pages
- Header navigation fully expanded

### Tablet (768px - 1023px)
- 2 column grids for cards
- Reduced padding and gaps
- Responsive navigation menu

### Mobile (< 768px)
- 1 column grids
- Menu hamburger icon
- Reduced font sizes (h1: 2rem)
- Full-width layouts
- Sticky header with compact logo

## Component Examples

### Article Page Layout

```
┌──────────────────────────────────────┐
│            HERO SECTION              │
│        Ganesh Puja Title             │
└──────────────────────────────────────┘

┌────────────────────────┐ ┌──────────┐
│                        │ │ Sidebar  │
│   MAIN CONTENT         │ │ Card 1   │
│   ==================   │ │ ======   │
│                        │ │          │
│   About Ganesh Puja    │ ├──────────┤
│   Long-form content    │ │ Sidebar  │
│   with sections        │ │ Card 2   │
│                        │ │ ======   │
│   - Significance       │ │          │
│   - When to perform    │ │ Related  │
│   - Items required     │ │ Topics   │
│   - Procedure          │ │ Links    │
│   - Mantras            │ │          │
│   - Tips               │ └──────────┘
│                        │
│                        │ (Sticky on scroll)
└────────────────────────┘

```

### Contact Form

```
GET IN TOUCH          SEND US A MESSAGE
─────────────         ─────────────────

Email link            ┌─────────────────┐
Response time         │ Name            │
Follow us info        │ [___________]   │
                      ├─────────────────┤
                      │ Email           │
                      │ [___________]   │
                      ├─────────────────┤
                      │ Subject         │
                      │ [___________]   │
                      ├─────────────────┤
                      │ Message         │
                      │ [_____________] │
                      │ [_____________] │
                      ├─────────────────┤
                      │ [SEND MESSAGE]  │
                      └─────────────────┘
```

## Animation & Interactions

### Hover Effects
- **Cards**: Lift up 4px, shadow expands
- **Buttons**: Color shift, lift up 2px
- **Links**: Color change, underline animation
- **Navigation**: Smooth color transitions

### Transitions
- Duration: 0.3s ease (most elements)
- Subtle and professional
- No jarring movements

### Visual Feedback
- Form inputs: Blue outline on focus
- Success messages: Green background with checkmark
- Hover states: Color change + subtle movement

## Spacing System

### Padding
- Extra Large: 4rem (64px) - Section padding
- Large: 2rem (32px) - Card padding, section gaps
- Medium: 1.5rem (24px) - Form spacing
- Standard: 1rem (16px) - Element padding
- Small: 0.75rem (12px) - Tight spacing
- Tiny: 0.5rem (8px) - Minimal spacing

### Gaps (Grid/Flex)
- 3rem (48px) - Between major sections
- 2rem (32px) - Between cards/columns
- 1.5rem (24px) - Between form fields
- 1rem (16px) - Between list items

### Max Width
- Container: 1280px
- Article content: 800px
- Form: 600px

## Shadow System

### Subtle (--shadow-sm)
```
0 1px 2px 0 rgba(0, 0, 0, 0.05)
```
Use: Card borders, subtle elevation

### Medium (--shadow-md)
```
0 4px 6px -1px rgba(0, 0, 0, 0.1)
```
Use: Card hover, form containers

### Large (--shadow-lg)
```
0 10px 15px -3px rgba(0, 0, 0, 0.1)
```
Use: Button hover, strong elevation

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels on icons
- ✅ Keyboard navigation support
- ✅ High contrast text
- ✅ Focus states visible
- ✅ Readable font sizes
- ✅ Mobile-friendly touch targets

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design supports all screen sizes
- CSS Grid and Flexbox supported

## Performance

- Static site generation ready
- Optimized for GitHub Pages
- No heavy animations
- Lazy image loading support
- Fast load times
- SEO friendly

---

This design system ensures consistency across all pages while maintaining a professional, modern aesthetic that respects Hindu traditions and spirituality.
