import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Shruti and Subramanya together make a brilliant team. They’re approachable, never make you feel dumb for asking questions, and actually simplify compliance instead of complicating it. I can focus on clients without worrying about the back-end mess.",
    name: "Arjun Verma",
    title: "Tech Startup Founder",
  },
  {
    quote: "Running my business from Dubai, compliance used to be a nightmare. With Shruti & GSA, it’s the first time I feel things are actually under control. I send them a message and it just gets done.",
    name: "Omar Hassan",
    title: "Retail Business Owner, UAE",
  },
  {
    quote: "The GSA team honestly feels like part of my company. They handle all the boring finance stuff so I can just focus on growing. I don’t even think about compliance anymore — they’ve got it.",
    name: "Madhavi Shenoy",
    title: "COO, Exelon Circuits Private Limited",
  },
  {
    quote: "The team is proactive. They flag things before they become problems that peace of mind is priceless.",
    name: "Laura Jensen",
    title: "Founder, NorthPeak Agency",
  },
  {
    quote: "Shruti & her team make accounting feel simple. I finally know where my business stands without getting lost in numbers.",
    name: "David Carter",
    title: "Founder, BrightTech SaaS",
  },
  {
    quote: "I’ve worked with other firms before, but GSA feels different — more like a partner than a service provider.",
    name: "Brian Thompson",
    title: "Founder, NextGen Retail",
  },
  {
    quote: "Working with Global Scale Accountants felt more like a partnership than a service. Their proactive financial advice and tax compliance support have saved us time and money.",
    name: "Naveen Prabhu",
    title: "Proprietor, Prabhu Enterprises",
  },
  {
    quote: "Their proactive approach to accounting has saved us time and money. Highly recommended!",
    name: "Emily White",
    title: "CFO, Growth Co.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from businesses who trust us with their financial success.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-white/10 bg-black/30 backdrop-blur-xl flex flex-col p-4 transition-all duration-300 hover:border-primary hover:scale-105 hover:-translate-y-1">
              <CardContent className="p-0 flex-grow">
                <blockquote className="text-foreground/80 italic text-sm">
                  {testimonial.quote}
                </blockquote>
              </CardContent>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;