| No. | Item Name | SEO Category | Explanation | Status |
|-----|----------------------|--------------|----------------------------------------|------------|
| 1 | Sitemap URL Status Integrity | Technical | Verify every URL in `https://mosesnyanzi.co.za/sitemap.xml` returns 200 (currently 6/10 do; 4 return 404). | Unchecked |
| 2 | Broken Internal Links From Insights Hub | Technical | Check that `/insights` does not link to dead slugs (e.g., `10-ai-agent-implementation-mistakes-checklist`, `wrong-question-ai-leader`). | Unchecked |
| 3 | Canonical Host Redirect Consolidation | Technical | Enforce one canonical host by 301 redirecting `https://www.mosesnyanzi.co.za/*` to `https://mosesnyanzi.co.za/*` (currently both return 200). | Unchecked |
| 4 | HTTP Status Accuracy Per URL Intent | Technical | Ensure live content routes return 200 and removed content routes are either 301 to replacements or 410/404 with cleanup from sitemap/internal links. | Unchecked |
| 5 | Route-Specific Server HTML Metadata | Technical | Confirm each route ships unique `<title>`, `<meta description>`, and canonical in initial HTML (not only after JS hydration). | Unchecked |
| 6 | Canonical URL Parity on Deep Pages | Technical | Validate `/insights` and `/insights/*` canonicals self-reference their own URL, not homepage canonical defaults. | Unchecked |
| 7 | Robots + Meta Robots Consistency | Technical | Review robots directives so indexable pages are `index,follow` and non-content routes stay `noindex` without accidental conflicts. | Unchecked |
| 8 | Sitemap Freshness and Content Sync | Technical | Regenerate sitemap when slugs change so removed or unpublished URLs are excluded and `lastmod` reflects real content edits. | Unchecked |
| 9 | Core Web Vitals (Mobile-First) | Technical | Measure LCP (<2.5s), INP (<200ms), CLS (<0.1) on homepage, `/insights`, and top article templates. | Not black to evaluate. |
| 10 | Static Asset Cache Policy for Hashed Files | Technical | Confirm hashed JS/CSS assets use long-lived immutable caching rather than `max-age=0` to reduce repeat-load cost. | Unchecked |
| 11 | H1 Presence and Keyword Alignment | On-Page | Validate one descriptive H1 per indexable page aligned to primary intent (service, location, or article query). | Unchecked |
| 12 | Title Tag Intent Mapping by Template | On-Page | Audit title patterns for homepage, insights hub, and articles to avoid cannibalization and sharpen search intent coverage. | Unchecked |
| 13 | Meta Description CTR Differentiation | On-Page | Ensure every page has a unique value-driven meta description with clear benefit and search-intent match. | Unchecked |
| 14 | Structured Data Coverage and Validation | Technical | Validate JSON-LD types (Person, ProfessionalService, FAQ, Article, Breadcrumb) in Rich Results and Schema validators. | Unchecked |
| 15 | Image SEO for Insight Cards | On-Page | Check article card/hero images for descriptive filenames, accurate alt text, modern formats, and dimension hints. | Unchecked |
| 16 | Topical Cluster Depth for Core Services | Content | Expand supporting content around actuarial consulting, reinsurance, M&A due diligence, and capital strategy to build authority. | Unchecked |
| 17 | E-E-A-T Trust Surface Completeness | Content | Review visible expertise/trust assets (author bio depth, credentials, contact transparency, policy pages, editorial dates). | Unchecked |
| 18 | Index Coverage vs Submitted Sitemap | Technical | Compare Search Console indexed URLs against sitemap URLs to identify excluded, crawled-not-indexed, and duplicate states. | Not black to evaluate. |
| 19 | Referring Domain Authority and Relevance | Off-Page | Audit backlink profile quality from actuarial, insurance, finance, and business publications; disavow toxic patterns if needed. | Not black to evaluate. |
| 20 | Local SEO Entity Consistency (Johannesburg/ZA) | Off-Page | Verify Google Business Profile, NAP consistency, and local citations align with site entity data and service geography. | Not black to evaluate. |
