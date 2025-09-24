"use client";

import { useState, useRef, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from "@/lib/utils";

const PainPointsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const painPoints = [
    "Expensive & Time-Consuming Hiring",
    "Confusing Statutory Compliance",
    "Incomplete Financial Coverage",
    "You’re stuck juggling tax filings, payroll, and endless spreadsheets.",
    "Distraction from Growth",
  ];

  return (
    <section id="why-us" ref={sectionRef} className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className={cn(
          "text-center space-y-4 mb-12 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Tired of the Development Rat Race?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stop wasting time and money on development headaches. We provide the expertise you need to succeed, without the overhead.
          </p>
        </div>
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-out delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="bg-card p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-xl font-semibold mb-4">Your Common Pain Points</h3>
            <ul className="space-y-3">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">Our Solutions</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Expert Talent on Demand:</span> Access a pool of vetted, world-class developers, designers, and project managers.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Cost-Effective:</span> Get the benefits of a full-time team at a fraction of the cost. No recruitment fees, no overhead.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Accelerated Delivery:</span> Our streamlined processes and expert teams ensure your project is delivered on time.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Full-Cycle Management:</span> From idea to launch and beyond, we handle every aspect of your project.</span>
              </li>
               <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Scalable & Flexible:</span> Easily scale your team up or down based on your project needs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;