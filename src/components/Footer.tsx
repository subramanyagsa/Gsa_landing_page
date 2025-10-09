import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-border/40 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="border-t border-white mb-8"></div>
        <div className="flex flex-col items-center text-center gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center justify-center gap-2">
              <img src="/logo2.png" alt="Global Scale Accountants Logo" className="h-8 w-auto dark:filter dark:invert dark:brightness-200" />
            </a>
          </div>

          {/* New Text */}
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground">
              We’re here to make finance simple for you. No complexity, no confusion, just clear guidance, reliable support, and a team that actually cares about your business growth. If you have questions, email us at <a href="mailto:info@globalscaleaccountants.com" className="text-primary hover:underline">info@globalscaleaccountants.com</a>. we’re happy to help!
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.instagram.com/scalewithgsa/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/GlobalScaleAcct" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <X className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/subrahmanya-kamath-92b7a6188/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col items-center justify-center text-center gap-2">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Global Scale Accountants. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ by <a href="https://rapplemedia.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">Rapple Media</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;