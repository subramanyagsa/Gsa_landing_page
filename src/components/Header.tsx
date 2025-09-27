import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlowingText } from './GlowingText';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/" onClick={() => handleNavClick("/")} className="flex items-center">
            <GlowingText text="Global Scale Accountants" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" /> }
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;