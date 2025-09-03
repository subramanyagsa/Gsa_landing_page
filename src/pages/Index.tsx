import React from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PainPointsSection />
        <HowWeHelpSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;