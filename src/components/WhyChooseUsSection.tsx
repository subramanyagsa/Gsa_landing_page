"use client";

import React, { useRef } from 'react';
import { CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Freedom to Focus on Growth",
      description: "Your team can concentrate on strategy and client relationships while we handle the numbers.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Proven Processes",
      description: "Our proven processes boost productivity and keep your finances running smoothly.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Lower Costs Without Sacrificing Quality",
      description: "We help you cut overhead while maintaining exceptional financial service.",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
        <div className={cn(
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Why Clients Around the World Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We empower businesses to thrive by taking the complexity out of financial management.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "relative overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-105",
                "shadow-lg",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* The glowing border element */}
              <div
                className="absolute inset-[-2px] rounded-2xl blur-md bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 animate-border-gradient-move"
                style={{ backgroundSize: '400% 400%' }}
              />
              {/* The actual card content, now with its own background and padding */}
              <div className="relative z-10 text-center p-8 rounded-2xl bg-black/30 backdrop-blur-xl h-full flex flex-col items-center justify-center">
                <div className="flex justify-center mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;