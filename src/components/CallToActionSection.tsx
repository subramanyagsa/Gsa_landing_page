import React from 'react';
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-background">
      <div className="container relative px-4 md:px-6 max-w-3xl mx-auto text-center space-y-6">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-primary/10 rounded-full blur-[120px] z-0" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Schedule a free, no-obligation consultation to see how we can build a financial system that works for you, not against you.
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-primary/50">
              Schedule Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;