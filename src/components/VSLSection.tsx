"use client";

import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const VSLSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section id="vsl" ref={sectionRef} className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <div className={cn(
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Watch Our Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover how we help businesses like yours achieve financial freedom and accelerated growth.
          </p>
        </div>
        <div className={cn(
          "relative w-full max-w-3xl mx-auto transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          {/* Wistia Embed Code */}
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <script src="https://fast.wistia.com/player.js" async></script>
            <script src="https://fast.wistia.com/embed/yslkn30any.js" async type="module"></script>
            <style>
              {`
                wistia-player[media-id='yslkn30any']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/yslkn30any/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top:56.25%; 
                }
              `}
            </style>
            <wistia-player media-id="yslkn30any" aspect="1.7777777777777777" className="absolute top-0 left-0 w-full h-full"></wistia-player>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;