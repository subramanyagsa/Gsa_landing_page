import React, { useRef } from 'react';
import { HelpCircle, FileWarning, Clock } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      title: "Uncertain Cash Flow",
      description: "Making critical business decisions feels like a guess when you're unsure where your cash flow stands."
    },
    {
      icon: <FileWarning className="h-8 w-8 text-primary" />,
      title: "Stressful Tax Time",
      description: "Tax season feels like a gamble. Will it be a refund, a surprise bill, or did you miss key savings?"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Wasted Hours",
      description: "Losing valuable hours every week chasing receipts, reconciling books, and worrying over compliance."
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section id="why-us" ref={sectionRef} className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className={cn(
          "text-center space-y-4 mb-12 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Stop Guessing With Your Finances
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Running your business feels harder than it should. Your focus is split, and your time is wasted on tasks that don't drive growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className={cn(
                "relative p-8 rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 ease-out hover:scale-105 hover:border-primary",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
              <div className="relative z-10 flex flex-col space-y-4">
                <div className="p-3 bg-primary/10 rounded-full w-fit">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;