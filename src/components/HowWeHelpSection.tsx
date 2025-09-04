import React, { useRef } from 'react';
import { TrendingUp, ShieldCheck, Users, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const HowWeHelpSection = () => {
  const solutions = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Real-Time Financial Clarity",
      description: "A clear, real-time view of your cash flow, profits, and expenses, so you're always in control."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Zero Tax Surprises",
      description: "Proactive tax planning means every filing is on time and every deduction is captured."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "A Dedicated Finance Team",
      description: "Your own dedicated Chartered Accountant and account manager, like an in-house team."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Audit-Ready Confidence",
      description: "Gain peace of mind with audit-ready records that give investors and banks confidence."
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section id="services" ref={sectionRef} className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
        <div className={cn(
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            The Future of Your Finances is Clear
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            With us handling your finances, you can finally focus 100% on growing your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={cn(
                "relative text-center p-8 rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 ease-out hover:scale-105 hover:border-primary",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
               <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-pink-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: `${index * 0.5}s` }} />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: `${index * 0.5 + 2}s` }} />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex justify-center mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;