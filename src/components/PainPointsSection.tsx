"use client";

import React, { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain, Lightbulb, Scale, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const PainPointsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  const painPoints = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Overwhelmed by Complexity",
      description: "Navigating intricate financial regulations and systems can be daunting. We simplify it.",
    },
    {
      icon: <Scale className="h-6 w-6 text-primary" />,
      title: "Lack of Strategic Insight",
      description: "Without clear financial data, making informed strategic decisions is nearly impossible.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Inefficient Processes",
      description: "Manual tasks and outdated systems slow you down and increase the risk of errors.",
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
            Are These Your Current Pain Points?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We understand the challenges businesses face. Our solutions are designed to address them directly.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className={cn(
                "relative group rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-105",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Animated glowing stroke */}
              <div className="absolute inset-[-4px] rounded-2xl bg-conic-gradient-bluish-purple animate-border-spin opacity-100 blur-md transition-opacity duration-300 group-hover:opacity-100 z-[-1]"></div>

              <Card className="relative z-10 h-full bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">{point.icon}</div>
                  <CardTitle className="text-xl font-semibold">{point.title}</CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6 text-muted-foreground text-left">
                  {point.description}
                </CardDescription>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;