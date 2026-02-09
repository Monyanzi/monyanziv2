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

const SITE_URL = "https://mosesnyanzi.co.za";
const OG_IMAGE_URL = `${SITE_URL}/social-share.svg`;

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Actuarial Consultant South Africa | Moses Nyanzi</title>
        <meta
          name="description"
          content="Independent actuarial consultant in Johannesburg, South Africa. Actuary & INSEAD MBA. Capital strategy, M&A due diligence, reinsurance optimization. 9+ years | $100M+ portfolios."
        />
        <meta name="keywords" content="actuarial consultant south africa, capital strategy consultant, independent actuarial advisor johannesburg, M&A due diligence, reinsurance consulting, portfolio optimization, Moses Nyanzi, ASSA actuary, INSEAD MBA, fractional actuary" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content="Actuarial Consultant South Africa | Moses Nyanzi" />
        <meta property="og:description" content="Independent actuarial consultant in Johannesburg. Actuary & INSEAD MBA. Solving complex capital, pricing, and M&A problems for insurers and investors." />
        <meta property="og:image" content={OG_IMAGE_URL} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_URL}/`} />
        <meta name="twitter:title" content="Actuarial Consultant South Africa | Moses Nyanzi" />
        <meta name="twitter:description" content="Independent actuarial consultant in Johannesburg. Actuary & INSEAD MBA. Solving complex capital, pricing, and M&A problems for insurers and investors." />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
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
