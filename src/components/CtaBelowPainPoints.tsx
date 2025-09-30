"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const CtaBelowPainPoints = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-primary/10 to-secondary/20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
        </div>
        <h2 className="text-xl md:text-2xl tracking-tight text-foreground mb-4">
          You don't have to deal with these!
          <br />
          <span className="text-primary text-xl md:text-2xl font-bold italic block mt-2">
            Let us handle your accounting, tax, and payroll with precision and care.
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Get expert support that saves you time, reduces stress, and ensures compliance—starting today.
        </p>
        <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all duration-300">
          Start Your Free Consultation
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default CtaBelowPainPoints;