import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: 'Initial Consultation',
    description: 'We start with a free, no-obligation consultation to understand your business, challenges, and financial goals.',
  },
  {
    title: 'Customized Plan',
    description: 'Based on our discussion, we create a tailored service package that fits your specific needs and budget.',
  },
  {
    title: 'Seamless Onboarding',
    description: 'We handle the entire setup process, ensuring a smooth transition with minimal disruption to your operations.',
  },
  {
    title: 'Ongoing Support',
    description: 'Receive continuous support, real-time financial insights, and proactive advice to help you scale.',
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className={cn(
          "text-center mb-12 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Our process is designed to be simple, transparent, and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:space-x-4 transition-all duration-500 ease-out",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 sm:mb-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={cn(
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
          style={{ transitionDelay: '300ms' }}>
            <Card className="bg-background/50 p-8 text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Simplify Your Finances?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can help your business thrive. Schedule your free consultation today.
                </p>
                <Button size="lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;