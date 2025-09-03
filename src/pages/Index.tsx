import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;