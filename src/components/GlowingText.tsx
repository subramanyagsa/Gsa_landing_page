"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={cn(
        "inline-block text-transparent bg-clip-text",
        "bg-gradient-to-r from-gray-300 via-white to-gray-300",
        "animate-gradient-shift bg-[200%_auto] transition-all duration-500",
        className
      )}
      style={{ backgroundSize: '200% auto' }}
    >
      {children}
    </p>
  );
};

export default GlowingText;