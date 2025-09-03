import React from 'react';
import { Target, Zap, BarChart } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            We're Not Just Another Agency
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our mission is to blend creativity with technology to deliver unparalleled results. We focus on what matters: your success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-4 p-6 border border-border rounded-lg hover:bg-accent transition-colors">
            <div className="p-4 bg-primary/10 rounded-full">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Strategy-Driven</h3>
            <p className="text-muted-foreground">
              Every project begins with a deep dive into your goals to ensure our solutions are perfectly aligned with your vision.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 border border-border rounded-lg hover:bg-accent transition-colors">
            <div className="p-4 bg-primary/10 rounded-full">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Creative Excellence</h3>
            <p className="text-muted-foreground">
              We push creative boundaries to craft unique and memorable digital experiences that captivate your audience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 border border-border rounded-lg hover:bg-accent transition-colors">
            <div className="p-4 bg-primary/10 rounded-full">
              <BarChart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Data-Informed</h3>
            <p className="text-muted-foreground">
              Our decisions are backed by data, ensuring we optimize for performance and deliver measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;