"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BarChart, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BarChart className="h-6 w-6 text-[#FC46FF]" />
          <span className="font-bold text-lg text-white">
            Global Scale
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Button key={link.name} asChild variant="link" className="text-sm font-medium text-gray-300 hover:text-white transition-colors p-0 h-auto">
              <Link to={link.href}>{link.name}</Link>
            </Button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-[#261428] border-l border-white/10 p-6">
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  <Button key={link.name} asChild variant="link" className="text-lg font-medium text-white hover:text-[#FC46FF] transition-colors p-0 h-auto justify-start" onClick={() => setIsSheetOpen(false)}>
                    <Link to={link.href}>{link.name}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;