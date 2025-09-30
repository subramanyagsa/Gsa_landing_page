"use client";

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const painPoints = [
  "Struggling with disorganized financial records?",
  "Worried about tax compliance and deadlines?",
  "Spending too much time on bookkeeping instead of your business?",
  "Unsure if your financial data is accurate and up-to-date?",
  "Lacking clear financial insights to make informed decisions?",
];

const solutions = [
  "Streamlined Bookkeeping & Accounting",
  "Strategic Tax Planning & Compliance",
  "Efficient Payroll Management",
  "Actionable Financial Reporting",
  "Dedicated Expert Support",
];

const PainPointsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="w-full pt-12 md:pt-16 pb-5 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className={cn(
          "text-center mb-10 md:mb-12 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Stop Drowning in Paperwork. Start Scaling Your Business.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            If you're facing these common challenges, we have the solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Pain Points Card */}
          <Card className={cn(
            "bg-gradient-to-br from-red-500/10 to-orange-500/10 border-destructive/30 transition-all duration-500 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-destructive">Are You Facing...</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-destructive/80 font-bold mr-3 text-xl">×</span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solutions Card */}
          <Card className={cn(
            "bg-gradient-to-br from-green-500/10 to-teal-500/10 border-primary/30 transition-all duration-500 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}
          style={{ transitionDelay: '150ms' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">We Provide...</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;