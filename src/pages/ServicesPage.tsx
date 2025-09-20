"use client";

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, BarChart2, ReceiptText, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import AnimatedGradientText from '@/components/AnimatedGradientText';

const services = [
  {
    icon: <BookText className="h-8 w-8 text-primary" />,
    title: "Accounting",
    description: "Stay on top of your finances with accurate bookkeeping and timely reconciliations. We handle the numbers so you can focus on growing your business.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Management Reports",
    description: "Get clear, actionable insights with custom management reports. Our detailed analysis turns raw data into strategic decisions.",
  },
  {
    icon: <ReceiptText className="h-8 w-8 text-primary" />,
    title: "Tax Filings",
    description: "Ensure compliance and maximize savings. From planning to filing, we streamline your tax process and help you avoid surprises.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Virtual CFO Services",
    description: "Gain the expertise of a seasoned CFO without the overhead. We provide financial strategy, cash-flow planning, and performance monitoring to guide your business forward.",
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
          "container px-4 md:px-6 max-w-6xl mx-auto py-16 md:py-24 relative rounded-xl",
          "animate-glow-purple"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "flex flex-col overflow-hidden border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 ease-out hover:border-primary hover:scale-105 w-full",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                "animate-glow-purple" // Added the animation here
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">{service.icon}</div>
                <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
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