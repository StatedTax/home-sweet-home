# Home Sweet Home

A marketing website for **Home Sweet Home**, a family-run home textiles store in Kavadarci, North Macedonia. The site presents the store's product categories, catalog highlights, and contact details for both walk-in and social-media customers.

Live content is in Macedonian; this README is in English for the tech docs. The original scaffold README (from [Lovable](https://lovable.dev)) has been kept as [`LOVABLE_README.md`](./LOVABLE_README.md).

## About the business

Home Sweet Home has operated for 5+ years at ул. Илинденска бр.4е, Кавадарци, selling:

- Bedding (single, double, and children's/baby sets — постелнини)
- Pajamas for men, women, and kids (пижами)
- Towels (крпи и пешкири)
- Baby products (бебешки производи)
- Travel suitcases (куфери)

Customers can reach the store by phone, email, WhatsApp, or through its Facebook, Instagram, and TikTok pages, all linked from the site header/footer.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [shadcn-ui](https://ui.shadcn.com/) components on top of [Radix UI](https://www.radix-ui.com/) primitives
- [Tailwind CSS](https://tailwindcss.com/) (custom theme: Playfair Display for headings, Lato for body text; brand colors defined as CSS variables in `src/index.css`)
- [React Router](https://reactrouter.com/), [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/), [TanStack Query](https://tanstack.com/query)

## Project structure

```
src/
  components/          Page sections: Header, HeroSection, CategoriesSection,
                        ProductsSection, AboutSection, TestimonialsSection,
                        GallerySection, ContactSection, Footer
  components/ui/        shadcn-ui primitives (button, dialog, input, etc.)
  pages/                 Route-level pages (Index, NotFound)
  assets/                 Product photos and site imagery
  hooks/, lib/            Shared hooks and utilities
public/
  design-reference.md    Quick lookup for where fonts/colors/components live
```

See [`public/design-reference.md`](./public/design-reference.md) for a fast pointer to where fonts, colors, and layout settings are configured if you need to restyle the site.

## Getting started

Requires Node.js (install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if needed).

```sh
npm install
npm run dev       # start the dev server with hot reload
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Deployment

This project can still be opened and published through [Lovable](https://lovable.dev) (see `LOVABLE_README.md` for that workflow), or built with `npm run build` and deployed as a static site to any host.
