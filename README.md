# Moses Nyanzi | Personal Website

Production marketing site for Moses Nyanzi (independent actuarial consultant), built as a Vite + React single-page app with route-level code splitting, custom scroll effects, and SEO metadata automation.

## Live Site

- `https://mosesnyanzi.co.za`

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- Motion (`motion/react`) for animations
- Lenis for smooth scrolling
- React Helmet for route-level SEO tags
- Vercel Analytics + optional Google Analytics (consent-gated)

## Key Features

- Homepage with animated visual sections (`Hero`, `Value Proposition`, `About`, `Expertise`, `Proof`, `Engagement`)
- Insights listing and individual insight article pages
- Route-level lazy loading for improved initial bundle throughput
- Consent-aware analytics (`CookieConsent` + `GoogleAnalytics`)
- SEO support:
  - Canonical tags and social metadata per route
  - JSON-LD in `index.html` and article-level schema in `InsightArticle`
  - Sitemap generation via build script

## Scripts

```bash
npm run dev              # Local dev server
npm run lint             # ESLint
npm run verify:content   # Validates insight summary/detail sync
npm run sitemap          # Regenerates public/sitemap.xml
npm run build            # verify:content + sitemap + vite build
npm run preview          # Preview production build
```

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  assets/
    hero-profile.webp
    insights/
  components/
    Navigation.tsx
    HeroSection.tsx
    MarqueeTicker.tsx
    ValuePropositionSection.tsx
    AboutSection.tsx
    ExpertiseSection.tsx
    ProofSection.tsx
    EngagementSection.tsx
    BackToTop.tsx
    BottomNavigation.tsx
    CookieConsent.tsx
    ContactForm.tsx
    GoogleAnalytics.tsx
    SmoothScrollProvider.tsx
    insights/
      ArticleCard.tsx
      CategoryFilter.tsx
      SortSelect.tsx
  pages/
    Index.tsx
    Insights.tsx
    InsightArticle.tsx
    NotFound.tsx
  data/
    articles.ts
    insights.tsx
  utils/
    useThrottledScroll.ts
    useScrollColorShift.ts
    useAdvancedScroll.ts
    useFocusTrap.ts
    cookieConsent.ts
    email.ts
scripts/
  verify-article-data-sync.mjs
  generate-sitemap.mjs
public/
  robots.txt
  sitemap.xml
  social-share.svg
```

## Notes

- `node_modules` is intentionally excluded from all cleanup/refactor operations.
- Build refreshes `public/sitemap.xml` with current article URLs and date.

## Contact

- Email: `moses.k.nyanzi@gmail.com`
- LinkedIn: `https://linkedin.com/in/moses-nyanzi`
