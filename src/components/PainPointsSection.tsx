import React from 'react';
import { HelpCircle, FileWarning, Clock } from 'lucide-react';

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

  return (
    <section id="why-us" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Stop Guessing With Your Finances
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Running your business feels harder than it should. Your focus is split, and your time is wasted on tasks that don't drive growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {painPoints.map((point, index) => (
            <div key={index} className="relative p-8 rounded-lg bg-secondary/50 overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
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