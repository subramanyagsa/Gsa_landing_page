"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const SocialProofSection = () => {
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

  const companies = [
    { name: 'Company A', logo: '/logos/company-a.svg' },
    { name: 'Company B', logo: '/logos/company-b.svg' },
    { name: 'Company C', logo: '/logos/company-c.svg' },
    { name: 'Company D', logo: '/logos/company-d.svg' },
    { name: 'Company E', logo: '/logos/company-e.svg' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-secondary/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, #ffffff 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <p className={cn(
          "text-2xl font-medium tracking-wide uppercase mb-10 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="text-foreground">Trusted By</span>
        </p>

        <div className={cn(
          "grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center justify-center p-4 md:p-6 bg-background/50 rounded-lg backdrop-blur-sm border border-border/20 hover:scale-105 transition-transform duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 md:h-10 w-auto max-h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className={cn(
            "text-center p-6 bg-primary/10 rounded-xl backdrop-blur-sm border border-primary/20 transition-all duration-500 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-foreground text-sm font-medium uppercase tracking-wide">Happy Clients</div>
          </div>

          <div className={cn(
            "text-center p-6 bg-secondary/20 rounded-xl backdrop-blur-sm border border-border/20 transition-all duration-500 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-foreground text-sm font-medium uppercase tracking-wide">Years Experience</div>
          </div>

          <div className={cn(
            "text-center p-6 bg-accent/10 rounded-xl backdrop-blur-sm border border-accent/20 transition-all duration-500 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-foreground text-sm font-medium uppercase tracking-wide">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;