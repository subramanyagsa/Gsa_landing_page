"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      variant="default"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 rounded-full h-12 w-12 shadow-lg transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <ArrowUp className="h-6 w-6" />
      <span className="sr-only">Go to top</span>
    </Button>
  );
};

export default BackToTopButton;