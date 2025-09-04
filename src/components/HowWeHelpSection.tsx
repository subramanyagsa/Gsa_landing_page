import React from 'react';
import { TrendingUp, ShieldCheck, Users, CheckCircle } from 'lucide-react';

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

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          The Future of Your Finances is Clear
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          With us handling your finances, you can finally focus 100% on growing your business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="relative text-center p-8 bg-secondary/50 rounded-lg border border-white/10 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
              <div className="flex justify-center mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;