"use client";

import React, { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer end-to-end accounting, tax, and payroll solutions tailored for growing businesses. This includes bookkeeping, financial reporting, tax preparation and planning, and payroll management."
  },
  {
    question: "How can you help my business grow?",
    answer: "By taking care of your financial operations, we free up your time to focus on core business activities. Our real-time financial insights help you make informed decisions, optimize cash flow, and identify opportunities for growth and cost savings."
  },
  {
    question: "What makes your service different?",
    answer: "We provide a dedicated team, including a Chartered Accountant and account manager, who act as an extension of your business. Our proactive approach ensures compliance, minimizes tax liabilities, and provides clear financial visibility, all while leveraging modern technology."
  },
  {
    question: "Is my data secure with you?",
    answer: "Absolutely. We use industry-leading security protocols and encrypted systems to ensure your financial data is protected and confidential at all times. We are committed to maintaining the highest standards of data privacy."
  },
  {
    question: "How do I get started?",
    answer: "You can start by scheduling a free consultation through our website. We'll discuss your specific needs, assess your current financial situation, and propose a customized plan that aligns with your business goals."
  },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="faq" ref={sectionRef} className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <div className={cn(
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
         <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-left">
  Questions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Find answers to common questions about our services and how we can help your business.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AccordionItem value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-lg hover:no-underline text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;