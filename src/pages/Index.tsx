import React from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import PainPointsSection from "@/components/PainPointsSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <PainPointsSection />
        <HowWeHelpSection />
        <HowItWorksSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;