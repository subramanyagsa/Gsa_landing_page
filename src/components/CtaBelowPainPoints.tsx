"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaBelowPainPoints = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80"
    >
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-xl md:text-2xl tracking-tight text-foreground mb-4">
            You don't have to deal with these!
            <br />
            <span className="text-primary text-xl md:text-2xl font-bold italic block mt-2">
              Let us handle your accounting, tax, and payroll so you can focus on growing your business.
            </span>
          </h2>
        </div>

        <div
          className={cn(
            "transition-all duration-700 ease-out delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-background text-primary hover:bg-background/90 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 bg-transparent text-foreground hover:bg-foreground/10 transition-all duration-300"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBelowPainPoints;