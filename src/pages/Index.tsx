import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TechnicalExpertiseSection from "@/components/TechnicalExpertiseSection";
import ProofSection from "@/components/ProofSection";
import EngagementSection from "@/components/EngagementSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Actuarial Consultant South Africa | Moses Nyanzi</title>
        <meta
          name="description"
          content="Independent actuarial consultant in Johannesburg, South Africa. ASSA-qualified actuary & INSEAD MBA. Capital strategy, M&A due diligence, reinsurance optimization. 9+ years | $100M+ portfolios."
        />
        <meta name="keywords" content="actuarial consultant south africa, capital strategy consultant, independent actuarial advisor johannesburg, M&A due diligence, reinsurance consulting, portfolio optimization, Moses Nyanzi, ASSA actuary, INSEAD MBA, fractional actuary" />
        <link rel="canonical" href="https://mosesnyanzi.co.za/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mosesnyanzi.com/" />
        <meta property="og:title" content="Actuarial Consultant South Africa | Moses Nyanzi" />
        <meta property="og:description" content="Independent actuarial consultant in Johannesburg. ASSA-qualified & INSEAD MBA. Solving complex capital, pricing, and M&A problems for insurers and investors." />
        <meta property="og:image" content="https://mosesnyanzi.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mosesnyanzi.com/" />
        <meta property="twitter:title" content="Actuarial Consultant South Africa | Moses Nyanzi" />
        <meta property="twitter:description" content="Independent actuarial consultant in Johannesburg. ASSA-qualified & INSEAD MBA. Solving complex capital, pricing, and M&A problems for insurers and investors." />
        <meta property="twitter:image" content="https://mosesnyanzi.com/og-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <MarqueeTicker />
        <ValuePropositionSection />
        <AboutSection />
        <ExpertiseSection />
        <TechnicalExpertiseSection />
        <ProofSection />
        <EngagementSection />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
