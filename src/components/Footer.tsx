import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-border/40 bg-background">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Global Scale Accountants. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <a
          href="https://www.dyad.sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Made with Dyad
        </a>
      </div>
    </footer>
  );
};

export default Footer;