import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container px-4 md:px-6 text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Global Scale Accountants. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;