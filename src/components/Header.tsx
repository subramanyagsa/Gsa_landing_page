"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { BarChart } from 'lucide-react';
import ConsultationDialog from './ConsultationDialog';

const Header = () => {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <BarChart className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">
            Global Scale Accountants
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href.substring(1))} // Remove '#' from href to get the ID
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <ConsultationDialog>
          <Button className="relative overflow-hidden rounded-full p-[1px] shadow-lg transition-all duration-300 hover:shadow-primary/50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground backdrop-blur-3xl">
              Get a Consultation
            </span>
          </Button>
        </ConsultationDialog>
      </div>
    </header>
  );
};

export default Header;