"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const CtaBelowPainPoints = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl tracking-tight text-white">
          Numbers aren’t the reason you started your business.
          <br />
          <span className="text-primary text-xl md:text-2xl font-bold italic block mt-2">
            "We’ll handle them, so you can get back to doing what you love"
          </span>
        </h2>
        <div className="mt-10">
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-lg px-8 py-6 transition-transform duration-300 hover:scale-105"
          >
            <a href="https://cal.com/subrahmanyagsa/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBelowPainPoints;