"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GlowingText from "./GlowingText";
import GridPattern from "./GridPattern";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background text-foreground pt-20 md:pt-24">
      <GridPattern />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight transition-all duration-1000 ease-out",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Your Financial Future, Simplified.
          </h1>
          <GlowingText className={cn(
            "transition-all duration-1000 ease-out delay-200",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            End-to-end accounting, tax, and payroll solutions that free your time, cut costs, and maximize profits.
          </GlowingText>
          <div className={cn(
            "flex justify-center gap-4 transition-all duration-1000 ease-out delay-400",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button asChild className="relative overflow-hidden rounded-full p-[1px] shadow-lg transition-all duration-300 hover:shadow-primary/50">
              <a href="https://cal.com/subrahmanyagsa/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-3 text-base font-medium text-foreground backdrop-blur-3xl">
                  Get a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;