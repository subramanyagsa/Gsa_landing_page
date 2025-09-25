"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceVisualProps {
  serviceType: string;
  className?: string;
}

const ServiceVisual: React.FC<ServiceVisualProps> = ({ serviceType, className }) => {
  const baseClasses = "absolute inset-0 flex items-center justify-center p-4";

  const renderVisual = () => {
    switch (serviceType) {
      case "Accounting":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-30 animate-pulse-slow rounded-lg" />
            {/* Abstract ledger/data blocks */}
            <div className="relative w-3/4 h-3/4 flex flex-col justify-center items-center space-y-1">
              <div className="w-full h-1/5 bg-white/5 border border-white/10 rounded-sm animate-fade-in-up" style={{ animationDelay: '0s' }}></div>
              <div className="w-full h-1/5 bg-white/10 border border-white/15 rounded-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-full h-1/5 bg-white/15 border border-white/20 rounded-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-full h-1/5 bg-white/20 border border-white/25 rounded-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/3 h-1/3 bg-primary/30 rounded-full blur-md animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        );
      case "Management Reports":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-30 animate-pulse-slow rounded-lg" />
            {/* Abstract insight hub / data constellation */}
            <div className="relative w-3/4 h-3/4">
              <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-500/30 rounded-full blur-sm animate-ping-slow" style={{ animationDelay: '0s' }}></div>
              <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-500/30 rounded-md blur-sm animate-ping-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary/40 rounded-full blur-md animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-indigo-500/30 rounded-full blur-sm animate-ping-slow" style={{ animationDelay: '1.5s' }}></div>
              {/* Connecting lines (abstract) */}
              <div className="absolute top-[35%] left-[35%] w-1/4 h-px bg-white/20 rotate-45 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-[60%] left-[40%] w-1/3 h-px bg-white/20 -rotate-30 animate-fade-in-up" style={{ animationDelay: '0.7s' }}></div>
            </div>
          </div>
        );
      case "Tax Filings":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-tl from-green-500/10 to-transparent opacity-30 animate-pulse-slow rounded-lg" />
            {/* Abstract security seal / compliance network */}
            <div className="relative w-3/4 h-3/4 border-2 border-green-500/50 rounded-lg flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-green-500/5 opacity-0 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="relative w-2/3 h-2/3 flex flex-col items-center justify-center">
                <div className="w-full h-1/4 bg-green-500/30 rounded-full animate-fade-in-up" style={{ animationDelay: '0s' }}></div>
                <div className="w-full h-1/4 bg-green-500/20 rounded-full mt-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-full h-1/4 bg-green-500/10 rounded-full mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-1/2 h-1/2" viewBox="0 0 100 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round">
                  <path d="M20 50 L45 75 L80 25" className="animate-draw-path" style={{ strokeDasharray: '1000', strokeDashoffset: '1000', animationDelay: '0.8s' }} />
                </svg>
              </div>
            </div>
          </div>
        );
      case "Virtual CFO Services":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-30 animate-pulse-slow rounded-lg" />
            {/* Dynamic strategic trajectory / guiding beacon */}
            <div className="relative w-3/4 h-3/4">
              <div className="absolute w-3 h-3 bg-primary rounded-full blur-sm animate-fade-in-up" style={{ top: '70%', left: '10%', animationDelay: '0s' }}></div>
              <div className="absolute w-3 h-3 bg-primary rounded-full blur-sm animate-fade-in-up" style={{ top: '50%', left: '30%', animationDelay: '0.2s' }}></div>
              <div className="absolute w-3 h-3 bg-primary rounded-full blur-sm animate-fade-in-up" style={{ top: '30%', left: '50%', animationDelay: '0.4s' }}></div>
              <div className="absolute w-3 h-3 bg-primary rounded-full blur-sm animate-fade-in-up" style={{ top: '10%', left: '70%', animationDelay: '0.6s' }}></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary/80 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        );
      default:
        return <div className="text-muted-foreground">No visual available</div>;
    }
  };

  return (
    <div className={cn(baseClasses, className)}>
      {renderVisual()}
    </div>
  );
};

export default ServiceVisual;