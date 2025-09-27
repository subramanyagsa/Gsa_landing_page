import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide a comprehensive suite of services including accounting, bookkeeping, tax preparation and planning, payroll processing, and financial consulting to help your business thrive."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We work with a diverse range of small to medium-sized businesses across various industries, including startups, retail, tech, and professional services. Our solutions are tailored to meet the unique needs of each client."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is customized based on the specific services you require and the complexity of your business needs. We offer a free initial consultation to understand your requirements and provide a transparent, no-obligation quote."
  },
  {
    question: "How do you ensure the security of my financial data?",
    answer: "We take data security very seriously. We use industry-standard encryption, secure cloud storage, and strict access controls to protect your sensitive financial information at all times."
  },
  {
    question: "What makes you different from other accounting firms?",
    answer: "Our key differentiator is our proactive, technology-driven approach. We don't just record history; we partner with you to provide real-time insights and strategic advice that helps you make informed decisions and achieve your financial goals."
  }
];


const FAQSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">
            Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We got answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} className="border-0" key={index}>
                <AccordionTrigger className="text-left text-lg py-3 hover:no-underline text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;