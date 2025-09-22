import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const CallToActionSection = () => {
  const ctaRef = useRef<HTMLElement>(null);
  const ctaVisible = useIntersectionObserver(ctaRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ctaRef} className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
      <div className={cn(
        "container px-4 md:px-6 transition-all duration-1000 ease-out",
        ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Relax, We’ve Got Your Numbers Covered
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
          Let us handle the complexities of your finances so you can focus on what you do best—growing your business.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Get Started Today</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;