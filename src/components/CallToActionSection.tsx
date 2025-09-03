import React from 'react';
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-blue-700 dark:bg-blue-900 text-white text-center">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          With us handling your finances, you can finally focus 100% on growing your business.
        </h2>
        <p className="text-lg md:text-xl text-blue-100">
          Ready to transform your financial management and unlock your business's full potential?
        </p>
        <Button className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          Schedule Your Free Consultation Today
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;