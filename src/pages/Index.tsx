import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import SocialProofSection from '@/components/SocialProofSection';
import PainPointsSection from '@/components/PainPointsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CallToActionSection from '@/components/CallToActionSection';
import VSLSection from '@/components/VSLSection'; // Import the new VSLSection

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
    <main>
      <HeroSection />
      <SocialProofSection />
      <PainPointsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection />
      <VSLSection /> {/* Render the VSLSection here */}
    </main>
  );
};

export default Index;