"use client";

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookText, 
  BarChart2, 
  ReceiptText, 
  Briefcase, 
  Users, 
  BookOpenCheck, 
  Wallet, 
  ShieldCheck, 
  ClipboardCheck, 
  Settings 
} from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import AnimatedGradientText from '@/components/AnimatedGradientText';

const services = [
  {
    icon: <BookText className="h-8 w-8 text-primary" />,
    title: "Accounting",
    description: "We’ll take care of your books and reconciliations so you always know your numbers. You stay focused on growing the business, we’ll handle the finances behind it.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Management Reports",
    description: "Want to see how your business is really performing? Our custom reports turn your data into simple, clear insights you can actually use to make better decisions.",
  },
  {
    icon: <ReceiptText className="h-8 w-8 text-primary" />,
    title: "Tax Filings",
    description: "We make taxes simple. From planning to filing, we handle everything on time so you stay compliant and save money without the year-end rush.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Virtual CFO Services",
    description: "Get the financial expertise of a full-time CFO without hiring one. We help you plan cash flow, review performance, and make confident business decisions.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Outsourced Finance Team Support",
    description: "Need extra hands for your finance team? We’ve got you covered. You can white-label our services and let our team handle your accounting, payroll, or reporting all under your brand.",
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
    title: "Bookkeeping",
    description: "We’ll keep your books clean and updated every month. No more chasing invoices or guessing your numbers you’ll always know exactly where your business stands.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "Payroll Management",
    description: "Tired of payroll headaches? We’ll make sure every employee gets paid on time, with all taxes and deductions handled the right way every single month.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Compliance & ROC Filings",
    description: "Forget the stress of annual filings and legal paperwork. We’ll handle all your company compliances so you never miss a deadline or worry about penalties.",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "Audit Support",
    description: "When audit season comes around, you’ll be ready. We’ll organize your records, prepare reports, and work with your auditors to make the process simple and smooth.",
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Accounting Software Setup",
    description: "Ready to switch to Zoho Books, QuickBooks, or Tally? We’ll set everything up for you from data migration to team training — so your accounting moves online without a hitch.",
  },
];

const ServicesPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <main className="w-full py-16 md:py-24 bg-background text-black dark:text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-20 text-center bg-secondary/20">
        <div className="container px-4 md:px-6">
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-transparent">
            Our Core Services
          </AnimatedGradientText>
          <p className="text-lg text-black/70 dark:text-muted-foreground max-w-3xl mx-auto mt-4">
            Expertly crafted to strengthen and scale your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={sectionRef}
        className={cn(
          "container px-4 md:px-6 max-w-6xl mx-auto py-12 md:py-16 relative rounded-xl"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                // Light theme → solid black card with white text
                "flex flex-col overflow-hidden border border-black/20 bg-black text-white",
                // Dark theme → keep your glassy dark look
                "dark:border-white/10 dark:bg-black/30 dark:backdrop-blur-xl",
                "transition-all duration-500 ease-out hover:border-primary hover:scale-105 hover:-translate-y-2 w-full",
                "shadow-lg shadow-[rgba(180,190,255,0.2)]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">{service.icon}</div>
                <CardTitle className="text-2xl font-semibold text-white dark:text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white/70 dark:text-muted-foreground text-base">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;