import React from 'react';
import { HelpCircle, FileWarning, Clock } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      title: "Uncertain Cash Flow",
      description: "You’re never quite sure where your cash flow stands, making critical business decisions feel like a guess."
    },
    {
      icon: <FileWarning className="h-8 w-8 text-primary" />,
      title: "Stressful Tax Time",
      description: "Tax season feels like a gamble. Will it be a refund, a surprise bill, or did you miss key savings?"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Wasted Hours",
      description: "You’re losing valuable hours every week chasing receipts, reconciling books, and worrying over compliance."
    }
  ];

  return (
    <section id="why-us" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Running Your Business Feels Harder Than It Should
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Deep down, you know managing finances isn't the best use of your time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {painPoints.map((point, index) => (
            <div key={index} className="flex flex-col space-y-4 p-6 border border-border rounded-lg hover:bg-accent transition-colors">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;