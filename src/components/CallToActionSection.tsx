import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
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
          Let us handle the numbers
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
          Focus on what you do best—growing your business. We'll take care of the rest.
        </p>
        <Button size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;