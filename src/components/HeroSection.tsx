import React from 'react';
import { Button } from "@/components/ui/button";
import { MoveRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <img 
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop" 
        alt="Accountant working on finances" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="container px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white">
            We Take Care of Your Finances So You Can Take Care of <span className="text-primary">Growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end accounting, tax, and payroll solutions that free your time, cut costs, and maximize profits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold">
              Get a Free Consultation
              <MoveRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;