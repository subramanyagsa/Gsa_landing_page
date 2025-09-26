"use client";

import { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Check } from 'lucide-react';

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
    "You’re spending hours on tax filings, payroll, and spreadsheets",
    "Distraction from Growth"
  ];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-background"
    >
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        {/* Heading */}
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-left text-white">
            You are probably stuck with these
          </h2>
        </div>

        {/* Pain Points */}
        <div
          className={cn(
            "transition-all duration-700 ease-out delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <ul className="space-y-5 text-center">
            {painPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-center text-lg leading-relaxed"
              >
                <Check className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-green-500" />
                <span className="text-white">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
