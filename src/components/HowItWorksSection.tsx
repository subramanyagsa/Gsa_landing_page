import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const steps = [
  {
    title: 'Initial Consultation',
    description: 'We start with a free, no-obligation consultation to understand your business, challenges, and financial goals. This helps us tailor our services to your specific needs.',
    image: '/consultation.png',
  },
  {
    title: 'Customized Plan',
    description: 'Based on our consultation, we develop a customized accounting and bookkeeping plan. We outline the services you need, the timeline, and transparent pricing.',
    image: '/customized-plan.png',
  },
  {
    title: 'Seamless Onboarding',
    description: 'We handle the entire setup process, from integrating with your existing software to organizing your financial data. Our goal is to make the transition as smooth as possible.',
    image: '/onboarding.png',
  },
  {
    title: 'Ongoing Support & Reporting',
    description: 'Receive regular, easy-to-understand financial reports. We provide ongoing support and strategic advice to help you make informed business decisions and drive growth.',
    image: '/reporting.png',
  },
];

const HowItWorksSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 5000); // Change step every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const activeStep = steps[activeStepIndex];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className={cn(
          "text-center mb-12 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Our streamlined process ensures a smooth and efficient experience from start to finish.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left side: Step descriptions */}
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="flex flex-col space-y-4">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStepIndex(index)}
                  className="w-full text-left"
                >
                  <Card className={cn(
                    "w-full p-6 shadow-lg shadow-[0_0_25px_rgba(173,216,230,0.3)] transition-all duration-300", // Added bluish glow
                    activeStepIndex === index ? "border-primary scale-[1.02]" : "border-transparent",
                  )}>
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl font-semibold">Step {index + 1}: {step.title}</CardTitle>
                    </CardHeader>
                    <AnimatePresence>
                      {activeStepIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent className="p-0 text-muted-foreground">
                            {step.description}
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </button>
              ))}
            </div>
          </div>

          {/* Right side: Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 flex items-center justify-center">
            <div className="relative w-full max-w-md h-80">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep.image}
                  src={activeStep.image}
                  alt={activeStep.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-contain rounded-lg"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg">Get Your Free Consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;