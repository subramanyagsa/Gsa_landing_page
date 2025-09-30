"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Accounting", href: "/services#accounting" },
        { name: "Tax Preparation", href: "/services#tax" },
        { name: "Payroll", href: "/services#payroll" },
        { name: "Consulting", href: "/services#consulting" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center justify-center gap-2">
              <img 
                src="/logo1.png" 
                alt="Global Scale Accountants Logo" 
                className="h-8 w-auto dark:filter dark:invert dark:brightness-200" 
              />
            </a>
            <p className="text-muted-foreground text-sm mt-4 text-center md:text-left">
              Global Scale Accountants is your trusted partner in financial management, offering comprehensive accounting, tax, and payroll solutions tailored to your business needs.
            </p>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Global Scale Accountants. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/company/global-scale-accountants" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/globalscaleacc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://facebook.com/globalscaleaccountants" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;