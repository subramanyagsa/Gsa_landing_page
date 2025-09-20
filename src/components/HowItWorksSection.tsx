"use client";

import React, { useRef } from 'react';
import { Lightbulb, Handshake, BarChart2 } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Understand Your Needs",
      description: "We start by understanding your business, challenges, and financial goals through a detailed consultation.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Tailored Solution & Onboarding",
      description: "We craft a customized financial strategy and seamlessly onboard your existing systems and data.",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: "Execute & Optimize",
      description: "Our dedicated team manages your finances, providing real-time insights and continuously optimizing for growth.",
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className={cn(
          "text-center space-y-4 mb-12 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Our Simple 3-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We make financial management effortless, so you can focus on what truly matters: your business.
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          {/* Vertical connecting lines */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/50 rounded-full z-0"></div> {/* Changed to bg-primary/50 */}

          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "relative z-10 flex flex-col md:flex-row items-center w-full max-w-2xl my-8 transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                index % 2 === 0 ? "md:pr-16" : "md:pl-16"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={cn(
                "flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary text-primary font-bold text-xl",
                index % 2 === 0 ? "md:order-1 md:ml-auto" : "md:order-1 md:mr-auto"
              )}>
                {step.icon}
              </div>
              <div className={cn(
                "text-center md:text-left mt-4 md:mt-0",
                index % 2 === 0 ? "md:order-0 md:mr-8" : "md:order-0 md:ml-8"
              )}>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;