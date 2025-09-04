"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BarChart, Menu } from 'lucide-react';
import ConsultationDialog from './ConsultationDialog';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsSheetOpen(false); // Close the sheet after navigating
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      setIsSheetOpen(false);
    } else if (location.pathname !== '/') {
      window.location.href = `/${href}`;
    } else {
      scrollToSection(href.substring(1));
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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Button asChild variant="link" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground p-0 h-auto">
                <Link to={link.href}>{link.name}</Link>
              </Button>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </button>
            )
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <ConsultationDialog>
            <Button className="relative overflow-hidden rounded-full p-[1px] shadow-lg transition-all duration-300 hover:shadow-primary/50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground backdrop-blur-3xl">
                Consultation
              </span>
            </Button>
          </ConsultationDialog>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background p-6">
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                   link.href.startsWith('/') ? (
                    <Button asChild variant="link" className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left p-0 h-auto justify-start">
                      <Link to={link.href}>{link.name}</Link>
                    </Button>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  )
                ))}
                <ConsultationDialog>
                  <Button className="relative overflow-hidden rounded-full p-[1px] shadow-lg transition-all duration-300 hover:shadow-primary/50 w-full mt-4">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-2 text-base font-medium text-foreground backdrop-blur-3xl">
                      Get a Consultation
                    </span>
                  </Button>
                </ConsultationDialog>
                <div className="mt-4">
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Consultation Button */}
        <div className="hidden md:block">
          <ConsultationDialog>
            <Button className="relative overflow-hidden rounded-full p-[1px] shadow-lg transition-all duration-300 hover:shadow-primary/50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground backdrop-blur-3xl">
                Get a Consultation
              </span>
            </Button>
          </ConsultationDialog>
        </div>
      </div>
    </header>
  );
};

export default Header;