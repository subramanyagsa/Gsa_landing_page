"use client";

import React, { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const VSLVideoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  // Wistia embed scripts need to be loaded dynamically or placed directly in the HTML head.
  // For a React component, we can ensure they are present when the component mounts.
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/embed/yslkn30any.js";
    script2.async = true;
    script2.type = "module";
    document.head.appendChild(script2);

    // Add the style for the thumbnail placeholder
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='yslkn30any']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/yslkn30any/swatch');
        display: block;
        filter: blur(5px);
        padding-top: 56.25%; /* 16:9 aspect ratio */
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Clean up scripts and style when component unmounts
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
        <div className={cn(
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Watch Our Explainer Video
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover how we simplify your finances and empower your business growth.
          </p>
          <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-white/10">
            {/* Wistia Player Embed */}
            <wistia-player media-id="yslkn30any" aspect="1.7777777777777777"></wistia-player>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLVideoSection;