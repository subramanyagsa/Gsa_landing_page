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
        "text-lg md:text-xl text-transparent bg-clip-text",
        "bg-gradient-to-r from-muted-foreground via-primary to-muted-foreground",
        "animate-gradient-pan bg-[200%_auto]",
        "max-w-3xl mx-auto",
        className
      )}
    >
      {children}
    </p>
  );
};

export default GlowingText;