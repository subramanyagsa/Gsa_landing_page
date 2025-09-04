import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SocialProofSection from '@/components/SocialProofSection';
import PainPointsSection from '@/components/PainPointsSection';
import HowWeHelpSection from '@/components/HowWeHelpSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove #
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <PainPointsSection />
        <HowWeHelpSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;