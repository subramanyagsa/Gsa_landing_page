import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-transparent border-t border-white/10">
      <div className="container px-4 md:px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Global Scale. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;