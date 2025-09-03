import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Take Care of Your Finances So You Can Take Care of Growth.
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            End-to-end accounting, tax, and payroll solutions that free your time, cut costs, and maximize profits.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Your Free Consultation
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          {/* VSL Placeholder */}
          <div className="w-full max-w-md aspect-video bg-gray-800 rounded-lg shadow-xl flex items-center justify-center text-gray-300 text-xl font-medium">
            <img src="/placeholder.svg" alt="Video Sales Letter Placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="150" fill="url(#paint0_radial)" />
          <circle cx="1300" cy="600" r="200" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(150)">
              <stop stopColor="#fff" stopOpacity="0.6" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1300 600) rotate(90) scale(200)">
              <stop stopColor="#fff" stopOpacity="0.6" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;