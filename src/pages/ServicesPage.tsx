"use client";

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, BarChart2, ReceiptText, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import AnimatedGradientText from '@/components/AnimatedGradientText';
import ServiceVisual from '@/components/ServiceVisual';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <ClipboardList className="h-8 w-8 text-primary" />,
    title: "Accounting",
    description: "Stay on top of your finances with precise bookkeeping & reconciliations.",
    visualType: "Accounting",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Management Reports",
    description: "Turn raw numbers into insights that guide smart business decisions.",
    visualType: "Management Reports",
  },
  {
    icon: <ReceiptText className="h-8 w-8 text-primary" />,
    title: "Tax Filings",
    description: "Simplify compliance & maximize savings with stress-free tax filing.",
    visualType: "Tax Filings",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Virtual CFO Services",
    description: "Gain strategic financial leadership without the full-time overhead.",
    visualType: "Virtual CFO Services",
  },
];

const ServicesPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <main className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center bg-black overflow-hidden">
        {/* Glowing horizontal light string at the top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 blur-md opacity-70"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold tracking-tighter drop-shadow-[0_0_10px_rgba(52,211,153,0.7)]">
            Our Core Services
          </AnimatedGradientText>
          {/* Subtle glow beneath the heading */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-green-500/30 to-transparent blur-xl opacity-50 animate-pulse-slow"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Expertly crafted to strengthen and scale your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={sectionRef}
        className={cn(
          "container px-4 md:px-6 max-w-6xl mx-auto py-16 md:py-24 relative rounded-xl"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "relative flex flex-col overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 ease-out hover:border-primary hover:scale-105 hover:-translate-y-2 w-full",
                "shadow-lg shadow-[0_0_40px_rgba(59,130,246,0.3)]", // Custom outer glow (blue)
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Inner animated radial gradient glow */}
              <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: `${index * 0.7}s` }} />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: `${index * 0.7 + 2.5}s` }} />
              </div>

              <CardHeader className="relative z-10 flex flex-row items-center gap-4 p-6 pb-0">
                <div className="bg-primary/10 p-3 rounded-full">{service.icon}</div>
                <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
              </CardHeader>

              {/* Dynamic Visual Element Container */}
              <div className="relative z-10 h-48 w-full flex items-center justify-center overflow-hidden">
                <ServiceVisual serviceType={service.visualType} />
              </div>

              <CardContent className="relative z-10 flex-grow p-6 pt-0">
                <p className="text-muted-foreground text-base">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button below cards */}
        <div className="mt-16 text-center">
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-lg px-8 py-6 transition-transform duration-300 hover:scale-105 shadow-lg shadow-primary/50"
          >
            <a href="https://cal.com/subrahmanyagsa/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;