import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Ready to Transform Your Finances?
        </h2>
        {/* Removed the paragraph here */}
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;