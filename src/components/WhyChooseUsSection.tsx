"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: "Expert Financial Guidance",
    description: "Navigate complex financial landscapes with our seasoned experts.",
  },
  {
    title: "Tailored Business Solutions",
    description: "Custom strategies that align with your unique business goals.",
  },
  {
    title: "Proactive Growth Strategies",
    description: "We identify opportunities to scale your business effectively.",
  },
  {
    title: "Transparent Reporting",
    description: "Clear, concise financial reporting you can actually understand.",
  },
  {
    title: "Dedicated Support",
    description: "Your financial success is our top priority. We're here for you.",
  },
  {
    title: "Technology-Driven",
    description: "Leveraging the latest tech for efficiency and accuracy.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-white">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-400">
            We're not just accountants; we're your financial partners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Background glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Inner card content with its own background and border */}
              <div className={cn(
                "relative z-10 h-full w-full p-8 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 hover:border-primary flex flex-col justify-center min-h-[280px]", // Inner card styles
              )}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4 border border-primary/30">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;