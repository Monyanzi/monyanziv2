import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProofSection from "@/components/ProofSection";
import EngagementSection from "@/components/EngagementSection";
import BackToTop from "@/components/BackToTop";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from "@/config/site";

const HOME_URL = `${SITE_URL}/`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Actuarial Consultant",
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-ZA",
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Actuarial Consultant South Africa | Moses Nyanzi</title>
        <meta
          name="description"
          content="Independent actuarial consultant in Johannesburg, South Africa. Actuary and INSEAD MBA. Capital strategy, M&A due diligence, reinsurance optimisation. 9+ years, $100M+ portfolios."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={SITE_NAME} />
        <meta name="keywords" content="actuarial consultant south africa, capital strategy consultant, independent actuarial advisor johannesburg, M&A due diligence, reinsurance consulting, portfolio optimisation, Moses Nyanzi, ASSA actuary, INSEAD MBA, fractional actuary" />
        <link rel="canonical" href={HOME_URL} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={HOME_URL} />
        <meta property="og:locale" content="en_ZA" />
        <meta property="og:title" content="Actuarial Consultant South Africa | Moses Nyanzi" />
        <meta property="og:description" content="Independent actuarial consultant in Johannesburg. Actuary & INSEAD MBA. Solving complex capital, pricing, and M&A problems for insurers and investors." />
        <meta property="og:image" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:alt" content="Moses Nyanzi site overview" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={HOME_URL} />
        <meta name="twitter:title" content="Actuarial Consultant South Africa | Moses Nyanzi" />
        <meta name="twitter:description" content="Independent actuarial consultant in Johannesburg. Actuary & INSEAD MBA. Solving complex capital, pricing, and M&A problems for insurers and investors." />
        <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />
        <meta name="twitter:image:alt" content="Moses Nyanzi site overview" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <MarqueeTicker />
        <ValuePropositionSection />
        <AboutSection />
        <ExpertiseSection />
        <ProofSection />
        <EngagementSection />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
