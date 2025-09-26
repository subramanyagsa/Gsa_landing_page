import React from 'react';
import { Bot, Twitter, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { name: 'GitHub', href: '#', icon: <Github className="h-5 w-5" /> },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 mr-2 text-primary" />
              <span className="text-2xl font-bold text-foreground">AI-Powered Solutions</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Leveraging cutting-edge AI to build intelligent, scalable, and efficient applications for the modern web.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} AI-Powered Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;