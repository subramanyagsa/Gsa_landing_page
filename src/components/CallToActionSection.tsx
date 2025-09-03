import React from 'react';
import { Button } from "@/components/ui/button";
import { MoveRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Ready to Reclaim Your Time and Grow Your Business?
        </h2>
        <p className="text-lg text-muted-foreground">
          Let's talk. Schedule a free, no-obligation consultation to see how we can build a financial system that works for you.
        </p>
        <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold">
          Schedule Your Free Consultation
          <MoveRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;