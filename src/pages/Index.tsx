
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExtensionAccessSection from "@/components/ExtensionAccessSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ExtensionAccessSection />
      <PricingSection />
    </div>
  );
};

export default Index;
