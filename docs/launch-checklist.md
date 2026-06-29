# Launch Checklist

Production domain: https://romanops.dev

## Build Verification

- `pnpm lint`
- `pnpm type-check`
- `pnpm test`
- `pnpm build`

## Lighthouse Verification

Checked against `pnpm preview` at `http://127.0.0.1:4173/` on June 29, 2026.

| Profile | Performance | Accessibility | SEO |
| ------- | ----------- | ------------- | --- |
| Desktop | 100         | 100           | 100 |
| Mobile  | 99          | 100           | 100 |

## Launch Files

- `public/robots.txt` allows indexing and points to `https://romanops.dev/sitemap.xml`.
- `public/sitemap.xml` declares `https://romanops.dev/` as the canonical URL.
- `public/_headers` sets security headers, CSP, and long-lived cache headers for built assets.
- `public/_redirects` keeps SPA navigation working and exposes `/404`.
- `public/404.html` provides a static Cloudflare Pages fallback page.
- `public/favicon.svg` and `public/og-image.svg` provide browser and social preview assets.

## Accessibility And Motion

- Navigation, section links, social links, certification links, project links, and contact links are native keyboard-focusable controls.
- Global `:focus-visible` styles make keyboard focus visible.
- Smooth scrolling and reveal animation behavior respect `prefers-reduced-motion`.
