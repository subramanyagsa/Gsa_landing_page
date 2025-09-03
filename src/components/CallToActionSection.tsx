import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-800 text-white text-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business Finances?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
          Stop stressing over numbers and start focusing on what you do best. Let Global Scale Accountants handle the complexities.
        </p>
        <Button className="bg-white text-blue-800 hover:bg-blue-100 px-10 py-7 text-xl font-semibold rounded-lg shadow-lg transition-all duration-300">
          Book Your Free Consultation Today
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;