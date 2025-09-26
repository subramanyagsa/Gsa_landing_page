import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { name: 'GitHub', href: '#', icon: <Github className="h-5 w-5" /> },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-center">Connect With Us</h3>
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
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <Link to="/" className="hover:underline text-foreground font-medium">
              GSA
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;