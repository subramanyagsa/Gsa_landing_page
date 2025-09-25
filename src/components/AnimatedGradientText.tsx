"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "inline-block text-transparent bg-clip-text",
        "bg-gradient-to-r from-blue-100 via-white to-blue-100", // More subtle gradient colors
        "animate-gradient-shift",
        className
      )}
      style={{
        backgroundSize: '200% auto', // Ensures the gradient is wider than the text for animation
      }}
    >
      {children}
    </h1>
  );
};

export default AnimatedGradientText;