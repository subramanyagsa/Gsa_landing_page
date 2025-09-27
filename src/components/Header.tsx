"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "py-2 bg-black/80 backdrop-blur-lg" : "py-4 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          GSA
        </a>

        {/* Desktop Navigation - Pill-shaped container */}
        <nav
          className={cn(
            "hidden md:flex items-center gap-2 p-1 rounded-full border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg transition-all duration-300",
            isScrolled ? "scale-90" : "scale-100"
          )}
        >
          <a href="#services" className="nav-link">Services</a>
          <a href="https://gsa-cpasavingtool.netlify.app/" target="_blank" rel="noopener noreferrer" className="nav-link">CPA Tool</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* CTA Button */}
        <Button
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
          size="lg"
        >
          Get Started
        </Button>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 text-white border-gray-800">
              <nav className="flex flex-col gap-6 text-lg mt-8">
                <a href="#services" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Services</a>
                <a href="https://gsa-cpasavingtool.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>CPA Tool</a>
                <a href="#about" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About Us</a>
                <a href="#testimonials" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
                <a href="#faq" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>FAQ</a>
                <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;