"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import ConsultationDialog from './ConsultationDialog';
import { cn } from '@/lib/utils';

const pricingTiers = [
  {
    name: "Starter",
    price: "$499",
    frequency: "/month",
    description: "For new businesses and startups getting off the ground.",
    features: [
      "Monthly Bookkeeping",
      "Quarterly Financial Reports",
      "Basic Tax Filing",
      "Email Support",
    ],
    isFeatured: false,
  },
  {
    name: "Growth",
    price: "$999",
    frequency: "/month",
    description: "For growing businesses that need more hands-on support.",
    features: [
      "Weekly Bookkeeping",
      "Monthly Financial Strategy Calls",
      "Proactive Tax Planning",
      "Payroll for up to 10 employees",
      "Dedicated Account Manager",
    ],
    isFeatured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "",
    description: "For established businesses with complex financial needs.",
    features: [
      "Everything in Growth",
      "CFO Advisory Services",
      "Investor Reporting",
      "Custom Integrations",
      "Priority Support",
    ],
    isFeatured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          Transparent Pricing for Every Stage
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          Choose a plan that scales with your business. No hidden fees, no surprises.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={cn(
              "flex flex-col h-full border border-white/10 bg-black/30 backdrop-blur-xl",
              tier.isFeatured && "border-primary ring-2 ring-primary shadow-lg"
            )}>
              <CardHeader className="text-left">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow text-left space-y-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.frequency && <span className="text-muted-foreground ml-1">{tier.frequency}</span>}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <ConsultationDialog>
                  <Button size="lg" className="w-full" variant={tier.isFeatured ? "default" : "outline"}>
                    Get Started
                  </Button>
                </ConsultationDialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;