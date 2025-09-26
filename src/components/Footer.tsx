"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-border/40 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center mb-8">
          <div className="flex-grow border-t border-border/40"></div>
          <span className="flex-shrink mx-4 text-muted-foreground text-sm font-medium">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </span>
          <div className="flex-grow border-t border-border/40"></div>
        </div>
        <div className="flex flex-col items-center text-center gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center gap-2">
            <img
              src="/logo1.png"
              alt="Global Scale Accountants Logo"
              className="h-12 filter invert brightness-200"
            />
            <p className="max-w-md text-muted-foreground">
              Your trusted partner for scalable accounting solutions, empowering
              your business to thrive globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full max-w-md flex flex-col items-center gap-4">
            <h3 className="text-lg font-semibold">
              Subscribe to our Newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Get the latest insights on accounting and finance.
            </p>
            <form className="flex w-full space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Global Scale Accountants. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;