import React from 'react';
import { Button } from "@/components/ui/button";
import ConsultationDialog from './ConsultationDialog';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="w-full h-full flex items-center justify-center py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card (Large) */}
          <div className="flex flex-col justify-center p-8 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
              Financial Clarity for a New Era.
            </h1>
            <p className="text-lg text-gray-300 max-w-md mt-4">
              End-to-end accounting, tax, and payroll solutions designed for the future of business.
            </p>
            <div className="mt-8">
              <ConsultationDialog>
                <Button size="lg" className="group bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </ConsultationDialog>
            </div>
          </div>

          {/* Right Cards (Stacked) */}
          <div className="flex flex-col gap-8">
            <div className="p-8 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg flex-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Star className="h-6 w-6 text-[#FC46FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">99% Client Satisfaction</h3>
                  <p className="text-gray-400">Trusted by startups and enterprises.</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg flex-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-[#FC46FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Audit-Ready Confidence</h3>
                  <p className="text-gray-400">Gain peace of mind with pristine records.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;