"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const steps = [
  {
    title: "Initial Consultation",
    description: "We start by understanding your business, financial goals, and current challenges to tailor our services."
  },
  {
    title: "Strategy & Planning",
    description: "Based on our consultation, we develop a comprehensive accounting strategy designed for your specific needs."
  },
  {
    title: "Implementation & Execution",
    description: "Our team seamlessly integrates our solutions, handling your bookkeeping, payroll, and financial reporting."
  },
  {
    title: "Ongoing Support & Review",
    description: "We provide continuous support, regular financial reviews, and proactive advice to ensure sustained growth."
  }
];

const HowItWorksSection = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-step-index') || '0');
            setActiveStepIndex(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-40% 0px -40% 0px' } // Trigger when element is roughly in the middle of the viewport
    );

    stepRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our streamlined process ensures efficiency and clarity every step of the way.
            </p>
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-border hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                ref={(el) => (stepRefs.current[index] = el)}
                data-step-index={index}
                className="relative flex items-center justify-center md:justify-between"
              >
                {/* Dot on the timeline */}
                <div className={cn(
                  "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-border z-10",
                  "transition-all duration-300",
                  activeStepIndex === index ? "bg-primary scale-125" : "bg-muted-foreground"
                )}></div>

                {/* Step Content Card */}
                {index % 2 === 0 ? ( // Even index: Left side
                  <>
                    <Card className={cn(
                      "w-full md:w-[calc(50%-16px)] p-6 shadow-lg transition-all duration-300", // Adjusted width
                      activeStepIndex === index ? "border-primary scale-[1.02]" : "border-transparent",
                      "md:mr-4" // Reduced margin to the right of the card
                    )}>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl font-bold flex items-center gap-2">
                          <span className="text-primary text-3xl font-extrabold">{index + 1}.</span>
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-muted-foreground">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                    <div className="hidden md:block w-[calc(50%-16px)]"></div> {/* Placeholder for right side, adjusted width */}
                  </>
                ) : ( // Odd index: Right side
                  <>
                    <div className="hidden md:block w-[calc(50%-16px)]"></div> {/* Placeholder for left side, adjusted width */}
                    <Card className={cn(
                      "w-full md:w-[calc(50%-16px)] p-6 shadow-lg transition-all duration-300", // Adjusted width
                      activeStepIndex === index ? "border-primary scale-[1.02]" : "border-transparent",
                      "md:ml-4" // Reduced margin to the left of the card
                    )}>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl font-bold flex items-center gap-2">
                          <span className="text-primary text-3xl font-extrabold">{index + 1}.</span>
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-muted-foreground">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;