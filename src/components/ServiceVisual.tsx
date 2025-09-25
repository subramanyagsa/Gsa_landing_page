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
          <div className="relative w-full h-full flex items-end justify-around p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-30 animate-pulse-slow rounded-lg" />
            <div className="w-1/5 h-1/3 bg-primary rounded-t-sm animate-fade-in-up" style={{ animationDelay: '0s' }}></div>
            <div className="w-1/5 h-2/3 bg-primary/80 rounded-t-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1/5 h-1/2 bg-primary/60 rounded-t-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1/5 h-3/4 bg-primary/90 rounded-t-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}></div>
          </div>
        );
      case "Management Reports":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-30 animate-pulse-slow rounded-lg" />
            <div className="absolute w-2/3 h-1/2 bg-white/5 border border-white/10 rounded-md -translate-x-4 -translate-y-4 rotate-[-5deg] shadow-lg"></div>
            <div className="absolute w-2/3 h-1/2 bg-white/10 border border-white/15 rounded-md translate-x-4 translate-y-4 rotate-[5deg] shadow-lg"></div>
            <div className="relative w-2/3 h-1/2 bg-white/15 border border-white/20 rounded-md shadow-xl flex items-center justify-center text-xs text-muted-foreground">
              Data Insights
            </div>
          </div>
        );
      case "Tax Filings":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-tl from-green-500/10 to-transparent opacity-30 animate-pulse-slow rounded-lg" />
            <div className="relative w-2/3 h-2/3 bg-white/10 border border-white/20 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
              <div className="w-1/2 h-2 bg-green-500 rounded-full mb-2 animate-progress-bar" style={{ animationDelay: '0.5s' }}></div>
              <div className="text-sm text-muted-foreground">Processing...</div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping-slow"></div>
            </div>
          </div>
        );
      case "Virtual CFO Services":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-30 animate-pulse-slow rounded-lg" />
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M10 90 Q 50 10 90 90"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-path"
                style={{ strokeDasharray: '1000', strokeDashoffset: '1000' }}
              />
              <circle cx="90" cy="90" r="3" fill="hsl(var(--primary))" className="opacity-0 animate-fade-in-up" style={{ animationDelay: '1.8s' }} />
            </svg>
            <div className="absolute bottom-1/4 right-1/4 text-xs text-muted-foreground rotate-[-15deg]">Growth</div>
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