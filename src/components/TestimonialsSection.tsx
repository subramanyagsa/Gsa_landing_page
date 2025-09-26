import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    quote: "Shruti and Subramanya together make a brilliant team. They’re approachable, never make you feel dumb for asking questions, and actually simplify compliance instead of complicating it. I can focus on clients without worrying about the back-end mess.",
    name: "Arjun Verma",
    title: "Tech Startup Founder",
  },
  {
    quote: "Working with them has been a game-changer for our business. Their expertise and dedication are unmatched.",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
  },
  {
    quote: "The team is incredibly responsive and knowledgeable. They've helped us navigate complex financial landscapes with ease.",
    name: "John Smith",
    title: "Founder, Tech Solutions",
  },
  {
    quote: "Their proactive approach to accounting has saved us time and money. Highly recommended!",
    name: "Emily White",
    title: "CFO, Growth Co.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from businesses who trust us with their financial success.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg" />
                      <CardContent className="relative z-10 flex flex-col items-center p-6 text-center">
                        <blockquote className="text-lg font-medium text-foreground">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="mt-4 text-sm font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;