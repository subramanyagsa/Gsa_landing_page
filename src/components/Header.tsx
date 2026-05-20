"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, LogIn } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useAuth } from "./AuthProvider";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { session } = useAuth();
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
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "CPA Tool", href: "https://gsa-cpa-savings-tool.netlify.app/", external: true },
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
    }
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "h-16 bg-background/90 backdrop-blur-lg border-b border-border/40"
          : "h-20 bg-background/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container flex h-full items-center justify-between px-4 md:px-6">
        <Link to="/" onClick={() => handleNavClick("/")} className="md:flex-1">
          <img
            src="/logo2.png"
            alt="Global Scale Accountants Logo"
            className={cn(
              "h-8 transition-all duration-300 dark:filter dark:invert dark:brightness-200",
              isScrolled ? "md:h-8" : "md:h-10"
            )}
          />
        </Link>

        <nav
          className={cn(
            "hidden md:flex items-center gap-2 p-1 rounded-full border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg transition-all duration-300",
            isScrolled ? "scale-90" : "scale-100"
          )}
        >
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap text-white hover:bg-primary/20"
              >
                {link.name}
              </a>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  "text-white hover:bg-primary/20",
                  isLinkActive(link.href)
                    ? "bg-primary text-white shadow-md"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </button>
            )
          )}
          
          {/* Admin link */}
          <Link
            to={session ? "/admin/blog" : "/login"}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-2",
              "text-white hover:bg-primary/20",
              location.pathname.startsWith("/admin") || location.pathname === "/login"
                ? "bg-primary text-white"
                : "text-muted-foreground"
            )}
          >
            {session ? <LayoutDashboard className="h-4 w-4" /> : <LogIn className="h-4 w-4" />}
            {session ? "Admin" : "Login"}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          <ThemeToggle />
          <Button asChild className={cn(
            "relative overflow-hidden rounded-full p-[1px] shadow-lg transition-all duration-300 hover:shadow-primary/50",
            isScrolled ? "scale-90" : "scale-100"
          )}>
            <a href="https://cal.com/subrahmanyagsa/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground backdrop-blur-3xl">
                Get a Consultation
              </span>
            </a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background p-6">
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  link.external ? (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-foreground">
                      {link.name}
                    </a>
                  ) : (
                    <button key={link.name} onClick={() => handleNavClick(link.href)} className={cn("text-lg font-medium text-left", isLinkActive(link.href) ? "text-primary" : "text-foreground")}>
                      {link.name}
                    </button>
                  )
                ))}
                <button
                  onClick={() => handleNavClick(session ? "/admin/blog" : "/login")}
                  className={cn(
                    "text-lg font-medium text-left flex items-center gap-2",
                    location.pathname.startsWith("/admin") ? "text-primary" : "text-foreground"
                  )}
                >
                  {session ? "Dashboard" : "Admin Login"}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;