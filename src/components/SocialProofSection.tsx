import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const SocialProofSection = () => {
  const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={cn(
        "w-full py-12 bg-background transition-opacity duration-1000 ease-in",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-8">
          TRUSTED BY GROWING BUSINESSES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, index) => (
            <span
              key={index}
              className={cn(
                "text-2xl font-medium text-muted-foreground/50 transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;