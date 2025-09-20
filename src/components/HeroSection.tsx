"use client";

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // Corrected import
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import AnimatedGradientText from '@/components/AnimatedGradientText';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex items-center justify-center text-center bg-background overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 space-y-6 px-4 md:px-6">
        <h1 className={cn(
          "text-4xl md:text-6xl font-bold tracking-tighter leading-tight transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          We Take Care of Your Finances. <br />So you can <AnimatedGradientText>Take care of Growth .</AnimatedGradientText>
        </h1>
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"
        )}>
          Unlock your business's full potential with expert financial management, tailored strategies, and real-time insights.
        </p>
        <div className={cn(
          "flex justify-center gap-4 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"
        )}>
          <Button asChild size="lg" className="px-8 py-3 text-lg">
            <Link to="/contact">Get Started</Link> {/* Changed href to to */}
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg">
            <Link to="/services">Learn More</Link> {/* Changed href to to */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;