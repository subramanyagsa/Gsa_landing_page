"use client";

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import ConsultationDialog from './ConsultationDialog';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const CallToActionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  return (
    <section id="contact" ref={sectionRef} className="w-full py-20 md:py-32 bg-background">
      <div className="container relative px-4 md:px-6 max-w-3xl mx-auto text-center space-y-6">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-primary/10 rounded-full blur-[120px] z-0" />
        <div className={cn(
          "relative z-10 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Relax, We’ve Got Your  Finances Covered
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Schedule a free, no-obligation consultation to see how we can build a financial system that works for you, not against you.
          </p>
          <div className="mt-8">
            <ConsultationDialog>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-primary/50 hover:scale-105">
                Schedule Your Free Consultation
              </Button>
            </ConsultationDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;