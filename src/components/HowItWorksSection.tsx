"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { FileText, Calendar, BarChart2, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: '1. Initial Consultation',
    description: 'We start with a free, no-obligation consultation to understand your business, challenges, and financial goals. This helps us tailor our services to your exact needs.',
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: '2. Customized Plan',
    description: 'Based on our discussion, we create a customized accounting and tax plan. You’ll receive a clear proposal outlining the scope of work, deliverables, and transparent pricing.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: '3. Seamless Onboarding',
    description: 'Our team guides you through a smooth onboarding process. We’ll securely gather necessary documents and integrate with your existing systems with minimal disruption.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: '4. Ongoing Support & Growth',
    description: 'We provide continuous support, regular financial reports, and strategic advice. We’re your partners in growth, helping you navigate financial decisions with confidence.',
  },
];

const HowItWorksSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Our streamlined process ensures a smooth and efficient experience from start to finish.
          </p>
        </motion.div>

        <div className="relative md:grid md:grid-cols-2 md:gap-x-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-border hidden md:block" />

          {/* Steps */}
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <React.Fragment key={index}>
                {/* Timeline Item Container */}
                <motion.div
                  className={cn(
                    "relative col-span-1 mb-8 md:mb-0",
                    isEven ? "md:pr-6" : "md:pl-6 md:mt-16"
                  )}
                  initial="hidden"
                  animate={controls}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveStepIndex(index)}
                >
                  {/* Dot on the timeline */}
                  <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-border z-10 hidden md:block",
                    "transition-all duration-300",
                    activeStepIndex === index ? "bg-primary scale-125" : "bg-neutral-1200"
                  )} />
                  <Card className={cn(
                    "w-full transition-all duration-300 border-2",
                    activeStepIndex === index ? "border-primary shadow-2xl shadow-primary/20" : "border-transparent"
                  )}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        {step.icon}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;