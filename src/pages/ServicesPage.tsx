"use client";

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, BarChart2, ReceiptText, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import AnimatedGradientText from '@/components/AnimatedGradientText';
import ServiceVisual from '@/components/ServiceVisual'; // Import the new component

const services = [
  {
    icon: <BookText className="h-8 w-8 text-primary" />,
    title: "Accounting",
    description: "Stay on top of your finances with accurate bookkeeping and timely reconciliations. We handle the numbers so you can focus on growing your business.",
    visualType: "Accounting",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Management Reports",
    description: "Get clear, actionable insights with custom management reports. Our detailed analysis turns raw data into strategic decisions.",
    visualType: "Management Reports",
  },
  {
    icon: <ReceiptText className="h-8 w-8 text-primary" />,
    title: "Tax Filings",
    description: "Ensure compliance and maximize savings. From planning to filing, we streamline your tax process and help you avoid surprises.",
    visualType: "Tax Filings",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Virtual CFO Services",
    description: "Gain the expertise of a seasoned CFO without the overhead. We provide financial strategy, cash-flow planning, and performance monitoring to guide your business forward.",
    visualType: "Virtual CFO Services",
  },
];

const ServicesPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <main className="w-full py-16 md:py-24 bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-secondary/20">
        <div className="container px-4 md:px-6">
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold tracking-tighter">
            Our Core Services
          </AnimatedGradientText>
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
      </section>
    </main>
  );
};

export default ServicesPage;