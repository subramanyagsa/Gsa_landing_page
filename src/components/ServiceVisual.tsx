"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceVisualProps {
  serviceType: string;
}

const ServiceVisual: React.FC<ServiceVisualProps> = ({ serviceType }) => {
  // This is a placeholder visual. We can make it more dynamic or complex later.
  return (
    <div className={cn(
      "flex items-center justify-center h-full w-full text-muted-foreground text-sm italic",
      "bg-gradient-to-br from-transparent to-primary/5 rounded-lg p-4"
    )}>
      {/* Placeholder for a more elaborate visual representation of the service */}
      <span className="text-lg font-semibold text-primary/80">{serviceType} Visual</span>
    </div>
  );
};

export default ServiceVisual;