import React from 'react';
import { Phone, FileText, BarChart2 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "1. Discovery Call",
      description: "Schedule a free consultation to discuss your business needs, goals, and current financial challenges."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "2. Custom Strategy",
      description: "We design a tailored accounting, tax, and payroll plan that fits your unique business structure."
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: "3. Focus on Growth",
      description: "With your finances managed by experts, you get real-time insights and can focus on scaling your business."
    }
  ];

  return (
    <section id="process" className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Your Path to Financial Clarity in 3 Steps
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-border hidden md:block"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:pr-8 md:text-right flex md:justify-end">
                  <div className="max-w-sm">
                    <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-16 w-16 bg-background rounded-full border-2 border-primary flex items-center justify-center z-10">
                  {step.icon}
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;