import React from 'react';
import { Button } from "@/components/ui/button";
import GridPattern from './GridPattern'; // Import the new GridPattern component

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <GridPattern /> {/* Use the imported GridPattern component */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-primary/20 rounded-full blur-[150px] animate-pulse z-0" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
            We Take Care of Your Finances. <br />So you can <span className="text-primary">Take care of Growth .</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end accounting, tax, and payroll solutions that free your time, cut costs, and maximize profits.
          </p>
          <div className="flex items-center justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-primary/50">
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;