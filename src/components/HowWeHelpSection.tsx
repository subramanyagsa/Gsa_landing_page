import React from 'react';
import { TrendingUp, ShieldCheck, Users, CheckCircle } from 'lucide-react';

const HowWeHelpSection = () => {
  const solutions = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary mb-4" />,
      title: "Real-Time Financial Clarity",
      description: "A clear, real-time view of your cash flow, profits, and expenses, so you're always in control."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary mb-4" />,
      title: "Zero Tax Surprises",
      description: "Every filing is done on time and every deduction is captured, thanks to our proactive tax planning."
    },
    {
      icon: <Users className="h-10 w-10 text-primary mb-4" />,
      title: "A Dedicated Finance Team",
      description: "You get a dedicated Chartered Accountant and account manager, becoming your complete outsourced finance team."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary mb-4" />,
      title: "Audit-Ready Confidence",
      description: "Gain peace of mind with audit-ready records that give investors, banks, and stakeholders confidence."
    }
  ];

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          Imagine a Future With Total Financial Control
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          With us handling your finances, you can finally focus 100% on growing your business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg border border-border/50 transform hover:-translate-y-2 transition-transform duration-300">
              {solution.icon}
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