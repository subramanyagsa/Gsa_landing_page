"use client";

import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Bookkeeping", href: "/services#bookkeeping" },
        { name: "Tax Preparation", href: "/services#tax" },
        { name: "Payroll Management", href: "/services#payroll" },
        { name: "Financial Consulting", href: "/services#consulting" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-border/20 bg-background/50 backdrop-blur-sm">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 md:py-16">
          
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4">
            <a href="/" className="flex items-center justify-center gap-2">
              <img 
                src="/logo1.png" 
                alt="Global Scale Accountants Logo" 
                className="h-8 w-auto dark:filter dark:invert dark:brightness-200" 
              />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Global Scale Accountants is your trusted partner in financial success. 
              We provide expert bookkeeping, tax, and payroll services to help your business thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#bookkeeping"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  to="/services#tax"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Tax Preparation
                </Link>
              </li>
              <li>
                <Link
                  to="/services#payroll"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Payroll Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services#consulting"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Financial Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@globalscaleaccountants.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Global Scale Accountants. All rights reserved.</p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;