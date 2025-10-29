import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'CPA Tool', path: 'https://cpatool.globalscale.accountants/', external: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Desktop Logo */}
        <Link to="/" onClick={() => handleNavClick("/")} className="md:flex-1">
          <img
            src="/logo2.png"
            alt="Global Scale Accountants Logo"
            className={cn(
              "h-12 md:h-14 transition-all duration-300",
              isScrolled ? "h-10 md:h-12" : ""
            )}
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:justify-center md:flex-1 space-x-6">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center justify-end md:flex-1 space-x-4">
          <Button asChild>
            <a href="https://cal.com/subrahmanyagsa/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              Get a Consultation
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border"
          >
            <div className="container mx-auto px-4 md:px-6 py-4">
              {/* Mobile Logo */}
              <div className="flex justify-between items-center mb-6">
                <Link to="/" onClick={() => handleNavClick("/")}>
                  <img
                    src="/logo2.png"
                    alt="Global Scale Accountants Logo"
                    className="h-12"
                  />
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={cn(
                        "text-lg font-medium",
                        location.pathname === item.path ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <Button asChild size="lg" className="w-full mt-4">
                  <a href="https://cal.com/subrahmanyagsa/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    Get a Consultation
                  </a>
                </Button>
                <div className="flex justify-center mt-4">
                  <ModeToggle />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;