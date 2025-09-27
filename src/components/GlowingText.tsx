import React from 'react';
import { cn } from '@/lib/utils';

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-xl font-semibold tracking-wider leading-relaxed",
        "text-transparent bg-clip-text",
        "bg-[linear-gradient(90deg,#666_15%,#3B82F5_25%,#666_45%)]",
        "bg-[200%_auto]",
        "animate-gradient-shift",
        "max-w-3xl mx-auto",
        className
      )}
    >
      {children}
    </p>
  );
};

export default GlowingText;