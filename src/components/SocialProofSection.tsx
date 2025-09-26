import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const logos = [
  {
    name: 'Apex Innovations',
    logo: (
      <svg viewBox="0 0 140 40" className="h-8 w-auto fill-current">
        <path
          d="M20 40L0 0h10l15 30L40 0h10L30 40H20zM65 40V0h10v40H65zM90 40l-15-20v20H65V0h10l15 20V0h10v40H90zM125 40a20 20 0 110-40 20 20 0 010 40zm-10-20a10 10 0 1020 0 10 10 0 00-20 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Quantum Dynamics',
    logo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto fill-current">
        <path
          d="M20 40a20 20 0 110-40 20 20 0 010 40zm-10-20a10 10 0 1020 0 10 10 0 00-20 0zM45 40V0h10v40H45zM70 40V0h30v10H80v5h15v10H80v5h20v10H70zM115 40V0h10l15 30L155 0h10v40h-10V10l-15 30h-10L115 10v30h-10z"
        />
      </svg>
    ),
  },
  {
    name: 'Stellar Solutions',
    logo: (
      <svg viewBox="0 0 150 40" className="h-8 w-auto fill-current">
        <path
          d="M10 40V0h30v10H20v5h15v10H20v5h20v10H10zM60 40L40 0h10l15 30L80 0h10L70 40H60zM95 40V0h10v40H95zM130 40a20 20 0 110-40 20 20 0 010 40zm-10-20a10 10 0 1020 0 10 10 0 00-20 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Momentum Labs',
    logo: (
      <svg viewBox="0 0 170 40" className="h-8 w-auto fill-current">
        <path
          d="M10 40V0h10l15 30L50 0h10v40h-10V10L35 40h-10L10 10v30H0V0h10zM75 40V0h10v40H75zM100 40V0h30v10h-20v30h-10zM145 40a20 20 0 110-40 20 20 0 010 40zm-10-20a10 10 0 1020 0 10 10 0 00-20 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Catalyst Co',
    logo: (
      <svg viewBox="0 0 140 40" className="h-8 w-auto fill-current">
        <path
          d="M20 40a20 20 0 110-40 20 20 0 010 40zm-10-20a10 10 0 1020 0 10 10 0 00-20 0zM55 40V0h10v40H55zM80 40V0h30v10H90v30H80zM125 40a20 20 0 110-40 20 20 0 010 40zm-10-20a10 10 0 1020 0 10 10 0 00-20 0z"
        />
      </svg>
    ),
  },
];

const SocialProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative w-full py-12 bg-background overflow-hidden",
        "before:absolute before:inset-0 before:bg-radial-gradient-subtle before:opacity-30 before:pointer-events-none", // Subtle radial gradient
        isVisible ? "opacity-100" : "opacity-0" // Section fade-in
      )}
    >
      <div className="container mx-auto text-center relative z-10">
        <p className="text-lg font-medium text-white tracking-wide uppercase mb-10 transition-opacity duration-700 ease-out">
          Trusted by leading brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={cn(
                "text-white/40 transition-all duration-300 ease-out",
                "hover:text-white hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]", // White glow on hover
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4" // Individual logo fade-in
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              title={logo.name}
            >
              {logo.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;