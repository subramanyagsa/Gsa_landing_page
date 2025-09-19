"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Briefcase, FileText, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const painPoints = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Expensive & Time-Consuming Hiring",
    description: "Hiring qualified accountants is expensive and time-consuming.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Confusing Statutory Compliance",
    description: "Statutory compliance is confusing — and one mistake can cost you thousands in penalties.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Incomplete Financial Coverage",
    description: "Employing a full-time accountant strains your payroll but still doesn’t cover all your financial needs.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Distraction from Growth",
    description: "Instead of focusing on growth and clients, you’re stuck juggling tax filings, payroll, and endless spreadsheets.",
  },
];

const PainPointsSection = () => {
  const { ref: sectionRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="why-us" ref={sectionRef} className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className={cn(
          "text-center space-y-4 mb-12 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Stop Drowning in Financial Complexity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Running a business is hard enough. Add accounting, compliance, and financial strategy into the mix, and it quickly becomes overwhelming.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? `opacity-100 translate-y-0 delay-${index * 150}` : "opacity-0 translate-y-8"
              )}
            >
              <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">{point.icon}</div>
                  <CardTitle className="text-xl font-semibold">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;