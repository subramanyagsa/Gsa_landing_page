import React from 'react';
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