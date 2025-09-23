import React from 'react';
import HeroSection from '@/components/HeroSection';
// import FeaturesSection from '@/components/FeaturesSection'; // Removed import
import HowWeHelpSection from '@/components/HowWeHelpSection'; // Changed from ServicesSection
import TestimonialsSection from '@/components/TestimonialsSection';
// import CallToActionSection from '@/components/CallToActionSection'; // Removed import

const IndexPage = () => {
  return (
    <main>
      <HeroSection />
      {/* <FeaturesSection /> */} {/* Removed usage */}
      <HowWeHelpSection /> {/* Changed from ServicesSection */}
      <TestimonialsSection />
      {/* <CallToActionSection /> */} {/* Removed usage */}
    </main>
  );
};

export default IndexPage;