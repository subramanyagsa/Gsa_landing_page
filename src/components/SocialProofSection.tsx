import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const logos = [
  {
    name: 'Exelon',
    logo: (
      <svg role="img" viewBox="0 0 150 40" className="h-8 w-auto fill-current">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontSize="32" fontWeight="bold">EXELON</text>
      </svg>
    ),
  },
  {
    name: 'Datta Prasad Builders',
    logo: (
      <svg role="img" viewBox="0 0 280 60" className="h-8 w-auto fill-current">
        <text x="50%" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="24" fontWeight="bold" letterSpacing="1">DATTA PRASAD</text>
        <text x="50%" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="20" letterSpacing="2">BUILDERS</text>
      </svg>
    ),
  },
  {
    name: 'The ENT Care Centre',
    logo: (
      <svg role="img" viewBox="0 0 300 40" className="h-8 w-auto fill-current">
        <text x="0" y="30" fontFamily="sans-serif" fontSize="24" fontWeight="bold">THE ENT CARE CENTRE</text>
      </svg>
    ),
  },
  {
    name: 'Karavali Interiors',
    logo: (
      <svg role="img" viewBox="0 0 250 60" className="h-8 w-auto fill-current">
        <path d="M5,30 C5,15 15,15 20,20 L50,20 C55,15 65,15 65,30 L65,50 L5,50 L5,30 Z" />
        <path d="M15,20 L35,5 L55,20" />
        <rect x="31" y="25" width="8" height="8" />
        <text x="80" y="30" fontFamily="sans-serif" fontSize="24" fontWeight="bold" letterSpacing="1">KARAVALI</text>
        <text x="80" y="55" fontFamily="sans-serif" fontSize="20" letterSpacing="2">INTERIORS</text>
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