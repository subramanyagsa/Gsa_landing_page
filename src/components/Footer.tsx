import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-100 dark:bg-gray-950 text-gray-600 dark:text-gray-400 text-center">
      <div className="container px-4 md:px-6 mx-auto">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Global Scale Accountants. All rights reserved.</p>
        <a
          href="https://www.dyad.sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          Made with Dyad
        </a>
      </div>
    </footer>
  );
};

export default Footer;