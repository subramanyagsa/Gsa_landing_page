import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-border/40 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="border-t border-white mb-8"></div>
        <div className="flex flex-col items-center text-center gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center justify-center gap-2">
              <img src="/GSA-LOGO(BLACK).jpg" alt="Global Scale Accountants Logo" className="h-8 w-auto filter invert brightness-200" />
            </a>
          </div>

          {/* New Text */}
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground">
              We’re here to make finance simple for you. No jargon, no confusion — just clear guidance, reliable support, and a team that actually cares about your business growth. If you have questions, email us at <a href="mailto:info@globalscaleaccountants.com" className="text-primary hover:underline">info@globalscaleaccountants.com</a>. we’re happy to help!
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Global Scale Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;