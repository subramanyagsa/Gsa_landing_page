import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

const PainPointsSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pain-points" ref={sectionRef} className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center space-y-12">
        <div className={cn(
          "space-y-4 transition-opacity duration-1000 ease-out",
          sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl">
            We Handle the Financial Heavy Lifting
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Running your business shouldn’t mean losing sleep over taxes, compliance, and endless financial tasks.
          </p>
        </div>
        <div className={cn(
          "grid gap-8 md:grid-cols-3 transition-opacity duration-1000 ease-out delay-300",
          sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="flex flex-col items-center space-y-4 p-6 bg-background rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-primary"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
            <h3 className="text-xl font-bold">Tax Compliance</h3>
            <p className="text-muted-foreground">
              Navigating complex tax codes and deadlines can be a nightmare. We ensure you're always compliant and optimized.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 bg-background rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-primary"
            >
              <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <h3 className="text-xl font-bold">Bookkeeping Burden</h3>
            <p className="text-muted-foreground">
              Manual data entry and reconciliation steal valuable time. Let us streamline your financial records.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 bg-background rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-primary"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <path d="M15 12H5" />
              <path d="M18 5h-3" />
              <path d="M18 19h-3" />
            </svg>
            <h3 className="text-xl font-bold">Lack of Clarity</h3>
            <p className="text-muted-foreground">
              Without clear financial insights, making informed business decisions is a guessing game. We provide the data you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;