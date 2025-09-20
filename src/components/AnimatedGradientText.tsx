"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ children, className }) => {
  return (
    <span // Changed from h1 to span
      className={cn(
        "inline-block text-transparent bg-clip-text",
        "bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300", // Updated gradient colors
        "animate-gradient-shift",
        className
      )}
      style={{
        backgroundSize: '200% auto', // Ensures the gradient is wider than the text for animation
      }}
    >
      {children}
    </span>
  );
};

export default AnimatedGradientText;