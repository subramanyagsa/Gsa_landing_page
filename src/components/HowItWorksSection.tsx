"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import ConsultationDialog from "./ConsultationDialog";

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      title: "Book a Free Consultation",
      description:
        "Schedule a no-obligation call to discuss your business needs. We'll identify your pain points and outline a customized plan.",
    },
    {
      title: "Receive a Custom Proposal",
      description:
        "We'll send you a detailed proposal with transparent pricing and a clear scope of work. No hidden fees, no surprises.",
    },
    {
      title: "Onboard & Relax",
      description:
        "Our team handles the entire onboarding process. You can relax knowing your finances are in expert hands.",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting started is simple. In just three steps, you can offload
              your financial worries and focus on what you do best.
            </p>
          </div>
        </div>
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Dashed line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
            <svg width="100%" height="2">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                "relative z-10 transition-all duration-700 ease-out",
                isVisible
                  ? `opacity-100 translate-y-0 delay-${index * 200}`
                  : "opacity-0 translate-y-10"
              )}
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border-border/60">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {step.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ConsultationDialog>
            <Button size="lg" className="group">
              Get Your Free Proposal
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </ConsultationDialog>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;