import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

const painPoints = [
  "Struggling with complex compliance and endless paperwork?",
  "Worried about missing deadlines and facing penalties?",
  "Finding it hard to get clear, actionable financial advice?",
  "Tired of juggling multiple service providers for finance and legal?",
];

const solutions = [
  "Streamlined compliance and automated reminders.",
  "Proactive support to ensure you're always ahead of deadlines.",
  "Clear, data-driven insights to guide your business decisions.",
  "A single, trusted partner for all your financial and legal needs.",
];

const PainPointsSection = () => {
  return (
    <section id="pain-points" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        {/* Heading */}
        <div
          className={cn(
            "relative z-10 flex flex-col items-center justify-center space-y-4 text-center mb-12",
            "p-4"
          )}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Feeling Overwhelmed by Financial Complexity?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              You're not alone. Many businesses face the same challenges. We're here to help you navigate them.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pains Column */}
          <div className="relative p-6 rounded-2xl border border-destructive/20 bg-destructive/5 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-destructive mb-4">Common Frustrations</h3>
            <ul className="space-y-3">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-destructive mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                  </span>
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="relative p-6 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-primary mb-4">Our Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <span className="text-foreground/80">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;