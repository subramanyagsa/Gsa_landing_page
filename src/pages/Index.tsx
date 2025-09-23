import React from 'react';
import HeroSection from '@/components/HeroSection';
// import FeaturesSection from '@/components/FeaturesSection'; // Removed import
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
// import CallToActionSection from '@/components/CallToActionSection'; // Removed import

const IndexPage = () => {
  return (
    <main>
      <HeroSection />
      {/* <FeaturesSection /> */} {/* Removed usage */}
      <ServicesSection />
      <TestimonialsSection />
      {/* <CallToActionSection /> */} {/* Removed usage */}
    </main>
  );
};

export default IndexPage;