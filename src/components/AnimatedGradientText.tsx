"use client";

import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={cn(
        "inline-block text-transparent bg-clip-text",
        "bg-gradient-to-r from-gray-300 via-white to-gray-300",
        "animate-gradient bg-300% ",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default AnimatedGradientText;