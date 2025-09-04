"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, Tech Innovators",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Sarah",
    quote: "Global Scale Accountants transformed our financial operations. Their real-time insights and proactive tax planning saved us countless hours and significantly boosted our profitability. Highly recommend!",
  },
  {
    name: "Mark Johnson",
    title: "Founder, Creative Solutions",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Mark",
    quote: "We finally have a clear picture of our cash flow. The dedicated team feels like an extension of our own, providing peace of mind and allowing us to focus on what we do best.",
  },
  {
    name: "Emily White",
    title: "Owner, Local Eatery",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Emily",
    quote: "Tax season used to be a nightmare. With Global Scale Accountants, it's seamless. They caught deductions we missed and made the entire process stress-free. Truly invaluable partnership.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          Hear directly from businesses that have achieved financial clarity and growth with our support.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl">
              <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-0 left-0 w-32 h-32 bg-green-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: `${index * 0.7}s` }} />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: `${index * 0.7 + 2.5}s` }} />
              </div>
              <CardContent className="relative z-10 flex flex-col items-center p-6 text-center">
                <Avatar className="h-16 w-16 mb-4 border-2 border-primary">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <p className="text-lg italic text-foreground mb-4">"{testimonial.quote}"</p>
                <CardTitle className="text-xl font-semibold">{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;