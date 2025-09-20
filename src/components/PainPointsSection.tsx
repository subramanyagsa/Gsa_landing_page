"use client";

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Shield, TrendingDown, Users } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const PainPointsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  const painPoints = [
    {
      icon: <TrendingDown className="h-8 w-8 text-destructive" />,
      title: "Unpredictable Costs",
      description: "Hidden fees and fluctuating expenses make budgeting a nightmare.",
    },
    {
      icon: <Users className="h-8 w-8 text-destructive" />,
      title: "Staffing Challenges",
      description: "Struggling to find and retain skilled financial professionals.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-destructive" />,
      title: "Lack of Expertise",
      description: "Internal teams lack specialized knowledge for complex financial tasks.",
    },
    {
      icon: <Shield className="h-8 w-8 text-destructive" />,
      title: "Compliance Risks",
      description: "Staying up-to-date with ever-changing regulations is a constant battle.",
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
            Common Pain Points We Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We address the core challenges businesses face in financial management, providing clear solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className={cn(
                "relative rounded-lg overflow-hidden transition-all duration-500 ease-out", // Added relative, rounded-lg, overflow-hidden
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Soft fading glow effect */}
              <div className="absolute inset-[-8px] rounded-lg bg-conic-gradient-purple-blue animate-pulse-glow opacity-75 blur-lg z-[-1]"></div>

              <Card className="relative z-10 h-full bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">{point.icon}</div>
                  <CardTitle className="text-xl font-semibold">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;