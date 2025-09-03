import React from 'react';
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <ProblemSolutionSection />
      <HowWeHelpSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;