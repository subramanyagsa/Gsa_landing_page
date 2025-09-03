import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            We Take Care of Your Finances So You Can Take Care of Growth.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
            End-to-end accounting, tax, and payroll solutions that free your time, cut costs, and maximize profits.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300">
              Book a Free Consultation
            </Button>
          </div>
        </div>
        <div className="relative w-full aspect-video bg-gray-900 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
          {/* VSL Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl font-medium">
            <PlayCircle className="w-16 h-16 text-gray-500" />
            <span className="ml-4">Your Video Sales Letter Here</span>
          </div>
          {/* In a real application, you would embed your video player here, e.g., an iframe or a custom video component */}
          {/* <iframe
            src="YOUR_VSL_EMBED_URL"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title="Video Sales Letter"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;