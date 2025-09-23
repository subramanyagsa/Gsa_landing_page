"use client";

import React, { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, ShieldCheck, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import TeamSection from '@/components/TeamSection'; // Import the new TeamSection

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  const values = [
    {
      icon: DollarSign,
      title: "Financial Clarity",
      description: "We demystify complex financial data, providing clear, actionable insights."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your goals are our priority. We tailor our services to your unique needs."
    },
    {
      icon: ShieldCheck,
      title: "Unwavering Integrity",
      description: "Trust is paramount. We uphold the highest ethical standards in all we do."
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Leveraging technology and expertise to offer modern accounting solutions."
    }
  ];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <section ref={sectionRef} className="container px-4 md:px-6 text-center mb-16">
        <div className={cn(
          "transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            About Global Scale Accountants
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            We are more than just accountants; we are your financial partners, dedicated to simplifying your finances so you can focus on growth.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Our Core Values</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

export default About;