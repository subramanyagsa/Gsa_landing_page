"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import ConsultationDialog from './ConsultationDialog';

const CtaBelowPainPoints = () => {
  return (
    <section className="w-full py-8 md:py-12 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl tracking-tight text-white">
          You can’t grow stuck in numbers.
          <br />
          <span className="text-primary text-2xl md:text-3xl font-bold">We’ll handle them.</span>
        </h2>
        <div className="mt-10">
          <ConsultationDialog>
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full text-lg px-8 py-6 transition-transform duration-300 hover:scale-105"
            >
              Book a Call
            </Button>
          </ConsultationDialog>
        </div>
      </div>
    </section>
  );
};

export default CtaBelowPainPoints;