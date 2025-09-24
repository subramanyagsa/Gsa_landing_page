"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap } from 'lucide-react';

const Card = ({ title, explanation, icon: Icon }) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className="relative w-full max-w-sm">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 h-full w-full rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #1f2937, #111827)",
        }}
      />
      {/* Inner card content with its own background and border */}
      <div className={cn(
        "relative z-10 w-full p-6 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 hover:border-primary", // Inner card styles
      )}>
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-center text-xl font-bold text-white">{title}</h3>
          <p className="mt-4 text-center text-sm font-normal text-neutral-300">
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Tailored Strategies",
      explanation: "We provide tailored financial strategies that align with your unique business goals, ensuring sustainable growth.",
      icon: TrendingUp,
    },
    {
      title: "Expert Team",
      explanation: "Our team of certified professionals brings years of industry experience to the table, offering you reliable and expert advice.",
      icon: Users,
    },
    {
      title: "Tech-Driven",
      explanation: "Leverage our cutting-edge technology for real-time financial insights, helping you make informed decisions faster.",
      icon: Zap,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-400">Why Choose Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Unlock Your Business's Potential</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're not just accountants; we're your strategic partners in growth. Here's how we make a difference.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;