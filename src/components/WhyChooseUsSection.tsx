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
                "relative group rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-105", // Outer container for scale and group
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Animated glowing stroke */}
              <div className="absolute inset-[-2px] rounded-2xl bg-conic-gradient-purple-blue animate-border-spin opacity-75 transition-opacity duration-300 group-hover:opacity-100 z-[-1]"></div>

              {/* Inner card content with its own background and border */}
              <div className={cn(
                "relative z-10 h-full w-full p-8 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 hover:border-primary", // Inner card styles, changed bg-black/70 to bg-black/90
              )}>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex justify-center mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;