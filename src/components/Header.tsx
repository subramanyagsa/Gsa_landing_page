"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ConsultationDialog from "./ConsultationDialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" }, // Added Services link
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
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
        // Navigate to home page and then scroll
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
      // For anchor links, check if on homepage and hash matches
      return location.pathname === "/" && location.hash === href;
    }
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 header-torchlight-glow",
        isScrolled
          ? "h-16 bg-background/90 backdrop-blur-lg border-b border-border/40"
          : "h-20 bg-background/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container flex h-full items-center justify-between px-4 md:px-6">
        {/* Logo on the left for desktop */}
        <div className="hidden md:flex items-center flex-1">
          <Link to="/" onClick={() => handleNavClick("/")}>
            <img
              src="/logo1.png"
              alt="Global Scale Accountants Logo"
              className={cn(
                "h-10 transition-all duration-300 filter invert brightness-200", // Added filter classes to make it white
                isScrolled ? "h-8" : "h-10" // Shrink on scroll
              )}
            />
          </Link>
        </div>

        {/* Desktop Navigation - Pill-shaped container */}
        <nav
          className={cn(
            "hidden md:flex items-center gap-2 p-1 rounded-full border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg transition-all duration-300",
            isScrolled ? "scale-90" : "scale-100"
          )}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                "text-white hover:bg-primary/20 hover:shadow-md",
                isLinkActive(link.href) ? "bg-primary text-white shadow-md" : "text-muted-foreground"
              )}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right side (ThemeToggle and Consultation Button) */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          <ThemeToggle />
          <ConsultationDialog>
            <Button className={cn(
              "relative overflow-hidden rounded-full p-[1px] shadow-lg transition-all duration-300 hover:shadow-primary/50",
              isScrolled ? "scale-90" : "scale-100"
            )}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground backdrop-blur-3xl">
                Get a Consultation
              </span>
            </Button>
          </ConsultationDialog>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4 ml-auto">
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
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px] bg-background p-6"
            >
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "text-lg font-medium transition-colors text-left",
                        isLinkActive(link.href)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {link.name}
                    </button>
                  )
                )}
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
      </div>
    </header>
  );
};

export default Header;