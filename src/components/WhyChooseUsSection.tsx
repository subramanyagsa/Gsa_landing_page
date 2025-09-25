"use client";

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb, ShieldCheck, TrendingUp, Users } from 'lucide-react'; // Importing new icons
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import AnimatedGradientText from '@/components/AnimatedGradientText';

const whyChooseUsPoints = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Precision & Accuracy",
    description: "Flawless financial records ensure compliance and clarity.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Strategic Insights",
    description: "Data-driven advice to fuel your business growth.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Unwavering Compliance",
    description: "Stay ahead of regulations with expert guidance.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Scalable Solutions",
    description: "Services that grow with your business, effortlessly.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Dedicated Partnership",
    description: "Your financial success is our top priority.",
  },
];

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={sectionRef}
      className={cn(
        "w-full py-16 md:py-24 bg-background text-foreground relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-30 before:animate-pulse-slow before:rounded-xl"
      )}
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold tracking-tighter">
            Why Choose Us?
          </AnimatedGradientText>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Experience the difference of expert financial partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"> {/* Changed to lg:grid-cols-5 */}
          {whyChooseUsPoints.map((point, index) => (
            <Card
              key={point.title}
              className={cn(
                "relative flex flex-col overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 ease-out hover:border-primary hover:scale-105 hover:-translate-y-2 w-full",
                "shadow-lg shadow-[0_0_40px_rgba(59,130,246,0.3)]", // Custom outer glow (blue)
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                index === 3 && "lg:col-start-2" // This will make the 4th card start in the 2nd column on large screens
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Inner animated radial gradient glow */}
              <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: `${index * 0.7}s` }} />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: `${index * 0.7 + 2.5}s` }} />
              </div>

              <CardHeader className="relative z-10 flex flex-row items-center gap-4 p-6 pb-0">
                <div className="bg-primary/10 p-3 rounded-full">{point.icon}</div>
                <CardTitle className="text-2xl font-semibold">{point.title}</CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 flex-grow p-6 pt-4">
                <p className="text-muted-foreground text-base">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;