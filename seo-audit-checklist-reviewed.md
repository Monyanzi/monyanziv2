| No. | Item Name | SEO Category | Explanation | Status |
|-----|----------------------|--------------|----------------------------------------|------------|
| 1 | Sitemap URL Status Integrity | Technical | Verify every URL in `https://mosesnyanzi.co.za/sitemap.xml` returns 200; currently 4 listed URLs return 404. | Checked |
| 2 | Broken Internal Links From Insights Hub | Technical | Confirm `/insights` does not link to dead article slugs that produce `NOT_FOUND` responses. | Checked |
| 3 | Canonical Host Redirect Consolidation | Technical | Ensure `https://www.mosesnyanzi.co.za/*` 301-redirects to `https://mosesnyanzi.co.za/*`; both hosts currently resolve 200. | Checked |
| 4 | HTTP Status Accuracy Per URL Intent | Technical | Validate live pages return 200 and removed pages are cleaned from sitemap/internal links or permanently redirected. | Checked |
| 5 | Route-Specific Server HTML Metadata | Technical | Check that each route serves unique server HTML title/description/canonical without relying on JS hydration only. | Checked |
| 6 | Canonical URL Parity on Deep Pages | Technical | Validate `/insights` and `/insights/*` canonicals are self-referential and not homepage canonical defaults. | Checked |
| 7 | Robots.txt + Sitemap Discoverability | Technical | Verify `robots.txt` is accessible, allows crawling where intended, and references sitemap URL. | Checked |
| 8 | Sitemap Freshness and Content Sync | Technical | Ensure sitemap is updated immediately when article slugs are added/removed to prevent stale index signals. | Checked |
| 9 | Core Web Vitals (Mobile-First) | Technical | Measure LCP, INP, and CLS on homepage, hub, and article templates with field/lab data. | Not black to evaluate. |
| 10 | Static Asset Cache Policy for Hashed Files | Technical | Confirm hashed JS/CSS use long-lived immutable caching rather than revalidation-heavy `max-age=0`. | Checked |
| 11 | H1 Keyword Alignment on Core Pages | On-Page | Validate H1s clearly include primary target intent (service + location where relevant). | Checked |
| 12 | Title Tag Intent Mapping by Template | On-Page | Check unique title strategy across homepage, insights hub, and each article to avoid cannibalization. | Checked |
| 13 | Meta Description Uniqueness by URL | On-Page | Verify each indexable URL exposes a unique value-oriented description in crawlable HTML. | Checked |
| 14 | Structured Data Presence and Quality | Technical | Review JSON-LD coverage (Person/Service/Article/FAQ/Breadcrumb) and validate syntax and eligibility. | Checked |
| 15 | Image SEO for Insight Cards | On-Page | Check descriptive alt text, optimized formats, and clean filenames for card/hero images. | Checked |
| 16 | Topical Cluster Depth for Money Keywords | Content | Evaluate content depth around actuarial consulting, capital strategy, reinsurance, and M&A intent terms. | Checked |
| 17 | E-E-A-T Trust Surface Completeness | Content | Confirm credentials, author transparency, contact clarity, and trust pages are visible and crawlable. | Checked |
| 18 | Index Coverage vs Submitted Sitemap | Technical | Compare Search Console indexed/excluded URLs against sitemap submissions for indexation gaps. | Not black to evaluate. |
| 19 | Referring Domain Relevance and Authority | Off-Page | Audit backlink quality from relevant actuarial, finance, and insurance domains. | Not black to evaluate. |
| 20 | Local SEO Entity Consistency (Johannesburg/ZA) | Off-Page | Verify Google Business Profile and citation consistency with site entity/location signals. | Not black to evaluate. |
