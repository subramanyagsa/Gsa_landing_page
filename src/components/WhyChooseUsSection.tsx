"use client";

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Lightbulb, ShieldCheck, TrendingUp, Users, DollarSign, Clock, Rocket, Workflow, PiggyBank, Compass } from 'lucide-react'; // Added new icons
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const whyChooseUsItems = [
  {
    icon: <Rocket className="h-10 w-10 text-primary" />, // Changed icon
    title: "Freedom to Focus on Growth",
    description: "Leave your finances to us and focus on clients, strategy, and growth.",
  },
  {
    icon: <Workflow className="h-10 w-10 text-primary" />, // Changed icon
    title: "Proven Processes",
    description: "Our systems keep your books accurate and organized without any effort from you.",
  },
  {
    icon: <PiggyBank className="h-10 w-10 text-primary" />, // Changed icon
    title: "Lower Costs Without Sacrificing Quality",
    description: "We help you reduce overhead while maintaining top-tier support.",
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />, // Changed icon
    title: "Smarter Decisions, Less Risk",
    description: "Leverage our expert guidance to make confident choices that drive profit.",
  },
  // Keeping the original items here in case they are needed later, but only the first 4 will be displayed.
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Expert Insights",
    description: "Leverage our deep industry knowledge for strategic financial guidance.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Unwavering Accuracy",
    description: "Benefit from meticulous attention to detail in every financial task.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Growth-Oriented",
    description: "Receive actionable advice focused on scaling your business efficiently.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Client-Centric Approach",
    description: "Experience personalized service tailored to your unique business needs.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Cost-Effective Solutions",
    description: "Optimize your financial operations without compromising on quality.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Timely Delivery",
    description: "Count on us for prompt and efficient completion of all services.",
  },
];

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-black text-foreground relative overflow-hidden">
      {/* Background gradient circles for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            This is what our clients experience when partnering with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {whyChooseUsItems.slice(0, 4).map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "relative group p-1 rounded-2xl overflow-hidden transition-all duration-500 ease-out",
                "bg-gradient-to-br from-white/5 to-transparent border border-white/10", // Outer glassmorphism border
                "hover:border-primary hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]", // Blue glow on hover
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Inner card content with its own background and border */}
              <div className={cn(
                "relative z-10 h-full w-full p-6 rounded-xl bg-black/70 backdrop-blur-xl border border-white/5 flex flex-col justify-center min-h-[160px]", // Reduced min-h and padding here
                "transition-all duration-300 group-hover:bg-black/80 group-hover:border-primary/20"
              )}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="bg-white/10 p-4 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;