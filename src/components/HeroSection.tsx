import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import GridPattern from './GridPattern';
import ConsultationDialog from './ConsultationDialog';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Wistia embed scripts need to be loaded dynamically or placed directly in the HTML head.
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
    <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center text-center overflow-hidden">
      <GridPattern />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-primary/20 rounded-full blur-[150px] animate-pulse z-0" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8"> {/* Increased space-y for better separation */}
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight transition-all duration-1000 ease-out", // Larger font for headline
            "bg-dotted-pattern [background-size:1rem_1rem] p-8 rounded-lg border border-primary/10", // Added dotted background
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            We Take Care of Your Finances. <br />So you can <span className="text-primary">Take care of Growth .</span>
          </h1>
          <p className={cn(
            "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ease-out",
            isMounted ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
          )}>
            End-to-end accounting, tax, and payroll solutions that free your time, cut costs, and maximize profits.
          </p>

          {/* VSL Video Embed */}
          <div className={cn(
            "relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-white/10 transition-all duration-1000 ease-out", // Removed mt-8 mb-8, relying on space-y
            isMounted ? "opacity-100 translate-y-0 delay-250" : "opacity-0 translate-y-4"
          )}>
            <wistia-player media-id="yslkn30any" aspect="1.7777777777777777"></wistia-player>
          </div>

          <div className={cn(
            "flex items-center justify-center transition-all duration-1000 ease-out",
            isMounted ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
          )}>
            <ConsultationDialog>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-primary/50 hover:scale-105">
                Get a Free Consultation
              </Button>
            </ConsultationDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;