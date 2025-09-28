import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, Handshake, BarChart } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: '1. Initial Consultation',
    description: 'We start with a free, no-obligation consultation to understand your business, challenges, and financial goals. This helps us tailor our services to your exact needs.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: '2. Custom Onboarding',
    description: 'Once you decide to partner with us, we handle the entire onboarding process. We securely gather necessary documents and integrate with your existing systems with minimal disruption.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: '3. Ongoing Collaboration',
    description: 'You get a dedicated team for your day-to-day accounting. We provide regular reports, proactive insights, and are always available to answer your questions.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: '4. Strategic Growth',
    description: 'Beyond bookkeeping, we act as your strategic financial partners. We help you interpret financial data to make informed decisions that drive sustainable growth.',
  },
];

const HowItWorksSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className={cn(
          "text-center mb-12 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Our process is designed for simplicity and efficiency, ensuring a seamless experience from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left side: Step selectors */}
          <div className="relative md:py-8">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8 md:space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center cursor-pointer"
                  onClick={() => setActiveStepIndex(index)}
                >
                  {/* Dot on the timeline */}
                  <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-border z-10 hidden md:block",
                    "transition-all duration-300",
                    activeStepIndex === index ? "bg-primary scale-125" : "bg-neutral-1200"
                  )} />
                  
                  {/* Step Button/Title */}
                  <div className={cn(
                    "text-center md:text-left md:w-4/5 transition-all duration-300",
                    index % 2 === 0 ? "md:text-right md:mr-12" : "md:text-left md:ml-12"
                  )}>
                    <h3 className={cn(
                      "text-xl font-semibold",
                      activeStepIndex === index ? "text-primary" : "text-foreground"
                    )}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Step content */}
          <div className="mt-8 md:mt-0">
            <Card className={cn(
              "bg-background/50 border-white/10 backdrop-blur-xl transition-all duration-500 ease-out",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {steps[activeStepIndex].icon}
                  <CardTitle className="text-2xl">{steps[activeStepIndex].title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  {steps[activeStepIndex].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;