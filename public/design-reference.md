# Home Sweet Home - Design Reference Guide

## 🎨 FONTS

| What | File | Lines | Notes |
|------|------|-------|-------|
| Font import (Google Fonts) | `src/index.css` | 5 | Imports Playfair Display + Lato |
| Font family config | `tailwind.config.ts` | 17-19 | `font-sans` = Lato, `font-serif` = Playfair Display |
| Headings use serif | `src/index.css` | 93-95 | All h1-h6 get font-serif |
| Body uses sans | `src/index.css` | 89-91 | Body gets font-sans |

## 🎨 COLORS

| What | File | Lines | Notes |
|------|------|-------|-------|
| Light mode colors | `src/index.css` | 10-51 | All CSS variables (HSL): --primary, --background, --accent, etc. |
| Dark mode colors | `src/index.css` | 53-81 | Dark theme overrides |
| Tailwind color mapping | `tailwind.config.ts` | 20-61 | Maps CSS vars to Tailwind classes (bg-primary, text-accent, etc.) |
| Custom brand colors | `tailwind.config.ts` | 55-60 | warm-cream, soft-blue, light-blue, gold, soft-pink, sage |

## 🏗️ GLOBAL STYLES & LAYOUT

| What | File | Lines | Notes |
|------|------|-------|-------|
| Global base styles | `src/index.css` | 84-96 | Border, body, heading defaults |
| Legacy App styles | `src/App.css` | 1-42 | Old Vite boilerplate - SAFE TO DELETE |
| Container config | `tailwind.config.ts` | 8-13 | Centered, 2rem padding, max 1400px |
| Border radius | `tailwind.config.ts` | 62-66 | --radius: 0.75rem from index.css line 42 |

## 🧩 COMPONENTS

| What | File | Notes |
|------|------|-------|
| Header/Nav | `src/components/Header.tsx` | Logo, nav links, social icons |
| Hero | `src/components/HeroSection.tsx` | Main banner |
| Products | `src/components/ProductsSection.tsx` | Product grid |
| Categories | `src/components/CategoriesSection.tsx` | Category cards |
| About | `src/components/AboutSection.tsx` | About section |
| Testimonials | `src/components/TestimonialsSection.tsx` | Reviews |
| Gallery | `src/components/GallerySection.tsx` | Photo gallery |
| Contact | `src/components/ContactSection.tsx` | Contact form/info |
| Footer | `src/components/Footer.tsx` | Footer with links & social |
| Page layout | `src/pages/Index.tsx` | Assembles all sections |

## ⚙️ CONFIG FILES

| What | File | Notes |
|------|------|-------|
| Tailwind config | `tailwind.config.ts` | Theme, colors, animations, fonts |
| PostCSS | `postcss.config.js` | Tailwind + Autoprefixer plugins |
| Vite config | `vite.config.ts` | Build tool settings |
| Shadcn config | `components.json` | UI component generation settings |
| TypeScript | `tsconfig.app.json` | TS compiler options |

## 🎬 ANIMATIONS

| What | File | Lines | Notes |
|------|------|-------|-------|
| Keyframes | `tailwind.config.ts` | 67-87 | fade-in, slide-in-left, slide-in-right, accordion |
| Animation classes | `tailwind.config.ts` | 89-95 | Duration & easing for each animation |

## ✏️ QUICK EDIT TIPS

- **Change colors** → edit HSL values in `src/index.css` lines 10-51
- **Change fonts** → edit line 5 in `src/index.css` + lines 17-19 in `tailwind.config.ts`
- **Change layout width** → `tailwind.config.ts` line 12
- **Change border radius** → `src/index.css` line 42
