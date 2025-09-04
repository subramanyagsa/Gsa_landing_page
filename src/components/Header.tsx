"use client";

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import ConsultationDialog from './ConsultationDialog';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsSheetOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/${href}`);
      }
    } else {
      navigate(href);
    }
  };

  const isLinkActive = (href: string) => {
    if (href.startsWith('/')) {
      return location.pathname === href;
    } else if (href.startsWith('#')) {
      return location.pathname === '/' && location.hash === href;
    }
    return false;
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled 
        ? "border-border/40 bg-background/95 backdrop-blur-lg" 
        : "border-transparent bg-background/80 backdrop-blur-sm"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo1.png" alt="Global Scale Accountants Logo" className="h-8 w-auto" />
          <span className="font-bold text-lg">
            Global Scale Accountants
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Button 
                key={link.name} 
                asChild 
                variant="link" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground p-0 h-auto",
                  isLinkActive(link.href) ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Link to={link.href}>{link.name}</Link>
              </Button>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  isLinkActive(link.href) ? "text-primary" : "text-muted-foreground"
                )}
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
                    <Button 
                      key={link.name} 
                      asChild 
                      variant="link" 
                      className={cn(
                        "text-lg font-medium transition-colors text-left p-0 h-auto justify-start",
                        isLinkActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                      )}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Link to={link.href}>{link.name}</Link>
                    </Button>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "text-lg font-medium transition-colors text-left",
                        isLinkActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                      )}
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