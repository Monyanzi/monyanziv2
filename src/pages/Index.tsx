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
  "@id": `${SITE_URL}/#moses-nyanzi`,
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Actuarial Consultant & Capital Strategist",
  description:
    "Independent actuarial consultant in Johannesburg, South Africa. Actuary & INSEAD MBA specializing in capital strategy, M&A due diligence, and reinsurance optimization.",
  sameAs: ["https://www.linkedin.com/in/moses-nyanzi/"],
  knowsAbout: [
    "Actuarial Consulting",
    "Capital Strategy",
    "M&A Due Diligence",
    "Reinsurance Optimization",
    "Portfolio Risk Management",
    "Solvency Assessment and Management (SAM)",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Executive MBA",
      educationalLevel: "Master's Degree",
      recognizedBy: { "@type": "Organization", name: "INSEAD" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Associate, Actuarial Society of South Africa (ASSA)",
    },
  ],
  worksFor: { "@type": "Organization", name: "Independent Consultant" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Moses Nyanzi Consulting",
  description:
    "Independent actuarial consulting and capital strategy advisory for insurance, reinsurance, and financial services in South Africa.",
  url: HOME_URL,
  email: "moses.k.nyanzi@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  areaServed: [
    { "@type": "Country", name: "South Africa" },
    { "@type": "AdministrativeArea", name: "Worldwide" },
  ],
  serviceType: [
    "Actuarial Consulting",
    "Capital Strategy Advisory",
    "M&A Due Diligence",
    "Reinsurance Consulting",
    "Portfolio Optimization",
  ],
  priceRange: "$$$$",
  founder: { "@id": `${SITE_URL}/#moses-nyanzi` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is capital strategy consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capital strategy consulting helps organizations optimize their capital structure, improve solvency positions, and make data-driven decisions about capital allocation, reinsurance, and risk management.",
      },
    },
    {
      "@type": "Question",
      name: "What does an independent actuarial consultant do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An independent actuarial consultant provides objective analysis on insurance pricing, reserving, capital requirements, and risk management without the conflicts of interest that may exist in larger consulting firms.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Moses Nyanzi work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Moses works primarily with insurance and reinsurance companies, private equity firms, banks and lenders, asset managers, and family offices on capital strategy, M&A due diligence, and risk analytics.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-ZA",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: HOME_URL },
  ],
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
        <link rel="alternate" hrefLang="en-za" href={HOME_URL} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={HOME_URL} />
        <meta property="og:locale" content="en_ZA" />
        <meta property="og:title" content="Actuarial Consultant South Africa | Moses Nyanzi" />
        <meta property="og:description" content="Independent actuarial consultant in Johannesburg. Actuary & INSEAD MBA. Solving complex capital, pricing, and M&A problems for insurers and investors." />
        <meta property="og:image" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Moses Nyanzi site overview" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={HOME_URL} />
        <meta name="twitter:title" content="Actuarial Consultant South Africa | Moses Nyanzi" />
        <meta name="twitter:description" content="Independent actuarial consultant in Johannesburg. Actuary & INSEAD MBA. Solving complex capital, pricing, and M&A problems for insurers and investors." />
        <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />
        <meta name="twitter:image:alt" content="Moses Nyanzi site overview" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <MarqueeTicker />
        <ValuePropositionSection />
        <AboutSection />
        <ExpertiseSection />
        <ProofSection />
        <EngagementSection />
        <BackToTop />
      </main>
    </>
  );
};

export default Index;
