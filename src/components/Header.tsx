import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-lg">
              Global Scale Accountants
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
             <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex flex-col gap-6 p-6">
                        <a href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-lg">Global Scale Accountants</span>
                        </a>
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground/80 hover:text-foreground"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                         <Button>Get a Free Consultation</Button>
                    </div>
                </SheetContent>
            </Sheet>
          </div>
          <a href="#contact" className="hidden md:flex items-center">
            <Button>Get a Free Consultation</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;