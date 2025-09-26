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
    name: 'Datta Builders',
    logo: (
      <svg role="img" viewBox="0 0 200 60" className="h-8 w-auto fill-current">
        <text x="50%" y="28" textAnchor="middle" fontFamily="sans-serif" fontSize="32" fontWeight="bold">DATTA</text>
        <text x="50%" y="55" textAnchor="middle" fontFamily="sans-serif" fontSize="24" fontWeight="bold">BUILDERS</text>
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
    name: 'Rapple Media',
    logo: (
      <svg role="img" viewBox="0 0 200 60" className="h-8 w-auto fill-current">
        <text x="50%" y="28" textAnchor="middle" fontFamily="sans-serif" fontSize="40" fontWeight="bold" fontStyle="italic">RM</text>
        <text x="50%" y="55" textAnchor="middle" fontFamily="sans-serif" fontSize="18" letterSpacing="2">RAPPLE MEDIA</text>
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
        "relative w-full py-4 bg-background",
        isVisible ? "opacity-100 transition-opacity duration-700" : "opacity-0"
      )}
    >
      <div className="container mx-auto text-center relative z-10">
        <p className="text-lg font-medium text-gray-300 tracking-wide uppercase mb-6">
          Trusted By
        </p>
        <div className="relative w-full overflow-hidden">
          {/* Gradient fade on the left and right for a seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-marquee whitespace-nowrap">
            {/* Render the logos twice to create the infinite loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="mx-12 flex-shrink-0 text-white transition-all duration-300 ease-in-out drop-shadow-[0_0_4px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                title={logo.name}
              >
                {logo.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;