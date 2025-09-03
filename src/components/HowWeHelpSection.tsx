import React from 'react';
import { Code, PenTool, Megaphone, Bot } from 'lucide-react';

const HowWeHelpSection = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary mb-4" />,
      title: "Web Development",
      description: "Building fast, responsive, and scalable websites and applications tailored to your needs."
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary mb-4" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide an exceptional user experience."
    },
    {
      icon: <Megaphone className="h-10 w-10 text-primary mb-4" />,
      title: "Digital Marketing",
      description: "Driving growth and engagement through targeted SEO, content, and social media strategies."
    },
    {
      icon: <Bot className="h-10 w-10 text-primary mb-4" />,
      title: "AI Integration",
      description: "Leveraging artificial intelligence to automate processes, gain insights, and innovate."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg border border-border/50 transform hover:-translate-y-2 transition-transform duration-300">
              {service.icon}
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;