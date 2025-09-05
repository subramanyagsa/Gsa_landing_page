"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Removed isScrolled state and useEffect for scroll handling as per new requirements.

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Steps", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsSheetOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If not on the home page, navigate to home and then scroll
        navigate(`/${href}`);
      }
    } else if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const isLinkActive = (href: string) => {
    if (href.startsWith("/")) {
      return location.pathname === href;
    } else if (href.startsWith("#")) {
      return location.pathname === "/" && location.hash === href;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full py-4 bg-transparent">
      <div className="container flex h-16 items-center justify-center">
        {/* Desktop Navigation - Pill-shaped container */}
        <nav className="hidden md:flex items-center gap-2 p-1 rounded-full border border-white/20 bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-xl shadow-lg">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Button
                key={link.name}
                asChild
                variant="ghost"
                className={cn(
                  "text-sm font-medium transition-all duration-300 rounded-full px-6 py-2 h-auto",
                  isLinkActive(link.href)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                <Link to={link.href}>{link.name}</Link>
              </Button>
            ) : (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 rounded-full px-6 py-2 h-auto",
                  isLinkActive(link.href)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.name}
              </Button>
            )
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border border-white/20 bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-xl shadow-lg">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px] bg-background p-6"
            >
              <div className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) =>
                  link.href.startsWith("/") ? (
                    <Button
                      key={link.name}
                      asChild
                      variant="ghost"
                      className={cn(
                        "text-lg font-medium transition-colors text-left p-0 h-auto justify-start",
                        isLinkActive(link.href)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Link to={link.href}>{link.name}</Link>
                    </Button>
                  ) : (
                    <Button
                      key={link.name}
                      variant="ghost"
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "text-lg font-medium transition-colors text-left p-0 h-auto justify-start",
                        isLinkActive(link.href)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Button>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;